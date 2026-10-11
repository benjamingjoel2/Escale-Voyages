import type { DepositRequest, DepositResult, PaymentProvider, PaymentStatus, WebhookEvent } from "./types";

/**
 * Stripe adapter for international cards, charged in euros. Uses Stripe
 * Checkout (hosted page) via the REST API so no SDK is needed. Requires a
 * Stripe account in a supported country (not Benin) and STRIPE_SECRET_KEY
 * plus STRIPE_WEBHOOK_SECRET. If the company stays Benin-only, swap this
 * for Flutterwave or Paystack behind the same interface.
 */
function auth() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return { Authorization: `Bearer ${key}`, "Content-Type": "application/x-www-form-urlencoded" };
}

export const stripeProvider: PaymentProvider = {
  name: "stripe",
  async createDeposit(req: DepositRequest): Promise<DepositResult> {
    const params = new URLSearchParams({
      mode: "payment",
      "line_items[0][price_data][currency]": req.currency.toLowerCase(),
      "line_items[0][price_data][unit_amount]": String(Math.round(req.amount * 100)),
      "line_items[0][price_data][product_data][name]": req.description,
      "line_items[0][quantity]": "1",
      customer_email: req.customer.email,
      client_reference_id: req.reference,
      success_url: `${req.returnUrl}&status=paid`,
      cancel_url: `${req.returnUrl}&status=cancelled`,
      locale: req.locale,
    });
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", { method: "POST", headers: auth(), body: params });
    if (!res.ok) throw new Error(`Stripe checkout failed: ${res.status}`);
    const json = (await res.json()) as { id: string; url: string };
    return { provider: "stripe", providerReference: json.id, status: "pending", redirectUrl: json.url };
  },
  async verify(providerReference: string): Promise<PaymentStatus> {
    const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${providerReference}`, { headers: auth() });
    if (!res.ok) return "pending";
    const json = (await res.json()) as { payment_status?: string };
    return json.payment_status === "paid" ? "paid" : "pending";
  },
  async parseWebhook(req: Request): Promise<WebhookEvent | null> {
    // Verify the Stripe-Signature header with STRIPE_WEBHOOK_SECRET before
    // trusting the event (HMAC-SHA256 over `${t}.${payload}`).
    const secret = process.env.STRIPE_WEBHOOK_SECRET;
    const sig = req.headers.get("stripe-signature");
    if (!secret || !sig) return null;
    const payload = await req.text();
    const parts = Object.fromEntries(sig.split(",").map((p) => p.split("=") as [string, string]));
    const { createHmac, timingSafeEqual } = await import("node:crypto");
    const expected = createHmac("sha256", secret).update(`${parts.t}.${payload}`).digest("hex");
    const given = parts.v1 ?? "";
    if (given.length !== expected.length || !timingSafeEqual(Buffer.from(given), Buffer.from(expected))) return null;
    const event = JSON.parse(payload) as { type: string; data: { object: { id: string; client_reference_id?: string; payment_status?: string } } };
    const o = event.data.object;
    const status: PaymentStatus = event.type === "checkout.session.completed" && o.payment_status === "paid" ? "paid" : event.type === "checkout.session.expired" ? "failed" : "pending";
    return { provider: "stripe", providerReference: o.id, reference: o.client_reference_id, status };
  },
};
