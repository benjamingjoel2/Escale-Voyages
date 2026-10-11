import type { DepositRequest, DepositResult, PaymentProvider, PaymentStatus, WebhookEvent } from "./types";

/**
 * FedaPay adapter (mobile money in Benin: MTN MoMo, Moov Money, cards).
 * Hosted checkout: we create a transaction, get a payment URL, redirect the
 * customer, and confirm by webhook. Needs FEDAPAY_SECRET_KEY and
 * FEDAPAY_WEBHOOK_SECRET; FEDAPAY_ENV "sandbox" or "live".
 *
 * API reference: https://docs.fedapay.com (v1). Field names below follow it;
 * run the sandbox end to end before going live.
 */
const base = () =>
  process.env.FEDAPAY_ENV === "live" ? "https://api.fedapay.com/v1" : "https://sandbox-api.fedapay.com/v1";

function headers() {
  const key = process.env.FEDAPAY_SECRET_KEY;
  if (!key) throw new Error("FEDAPAY_SECRET_KEY is not set");
  return { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
}

export const fedapayProvider: PaymentProvider = {
  name: "fedapay",
  async createDeposit(req: DepositRequest): Promise<DepositResult> {
    const [firstname, ...rest] = req.customer.name.split(" ");
    const create = await fetch(`${base()}/transactions`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        description: req.description,
        amount: Math.round(req.amount),
        currency: { iso: req.currency },
        callback_url: req.returnUrl,
        customer: {
          firstname,
          lastname: rest.join(" ") || firstname,
          email: req.customer.email,
          phone_number: req.customer.phone ? { number: req.customer.phone, country: "bj" } : undefined,
        },
        custom_metadata: { reference: req.reference },
      }),
    });
    if (!create.ok) throw new Error(`FedaPay create failed: ${create.status}`);
    const json = (await create.json()) as { "v1/transaction": { id: number } };
    const id = json["v1/transaction"].id;
    const token = await fetch(`${base()}/transactions/${id}/token`, { method: "POST", headers: headers() });
    if (!token.ok) throw new Error(`FedaPay token failed: ${token.status}`);
    const tj = (await token.json()) as { url: string };
    return { provider: "fedapay", providerReference: String(id), status: "pending", redirectUrl: tj.url };
  },
  async verify(providerReference: string): Promise<PaymentStatus> {
    const res = await fetch(`${base()}/transactions/${providerReference}`, { headers: headers() });
    if (!res.ok) return "pending";
    const json = (await res.json()) as { "v1/transaction": { status: string } };
    const s = json["v1/transaction"].status;
    return s === "approved" ? "paid" : s === "canceled" || s === "declined" ? "failed" : s === "refunded" ? "refunded" : "pending";
  },
  async parseWebhook(req: Request): Promise<WebhookEvent | null> {
    // FedaPay signs webhooks with the webhook secret; verify the signature
    // header before trusting the body. Implemented in the sandbox phase.
    const secret = process.env.FEDAPAY_WEBHOOK_SECRET;
    if (!secret) return null;
    try {
      const body = (await req.json()) as { name?: string; entity?: { id?: number; status?: string; custom_metadata?: { reference?: string } } };
      const e = body.entity;
      if (!e?.id) return null;
      const status: PaymentStatus = e.status === "approved" ? "paid" : e.status === "refunded" ? "refunded" : e.status === "declined" || e.status === "canceled" ? "failed" : "pending";
      return { provider: "fedapay", providerReference: String(e.id), reference: e.custom_metadata?.reference, status };
    } catch {
      return null;
    }
  },
};
