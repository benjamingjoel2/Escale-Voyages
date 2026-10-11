import type { DepositRequest, DepositResult, PaymentProvider, PaymentStatus, WebhookEvent } from "./types";

/**
 * KkiaPay adapter (mobile money in Benin). KkiaPay is widget-first: the
 * customer pays in an embedded widget and we verify the transaction id
 * server-side. This adapter covers the server half (verify + webhook); the
 * widget mounts in the booking flow when NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY is
 * set. Needs KKIAPAY_PRIVATE_KEY and KKIAPAY_SECRET.
 */
export const kkiapayProvider: PaymentProvider = {
  name: "kkiapay",
  async createDeposit(req: DepositRequest): Promise<DepositResult> {
    // The widget creates the transaction client-side; we only hand back a
    // pending result keyed on our reference. Verification follows.
    return { provider: "kkiapay", providerReference: `KKIA-${req.reference}`, status: "pending" };
  },
  async verify(providerReference: string): Promise<PaymentStatus> {
    const key = process.env.KKIAPAY_PRIVATE_KEY;
    const secret = process.env.KKIAPAY_SECRET;
    if (!key || !secret) return "pending";
    const res = await fetch("https://api.kkiapay.me/api/v1/transactions/status", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": key, "x-secret-key": secret },
      body: JSON.stringify({ transactionId: providerReference }),
    });
    if (!res.ok) return "pending";
    const json = (await res.json()) as { status?: string };
    return json.status === "SUCCESS" ? "paid" : json.status === "FAILED" ? "failed" : "pending";
  },
  async parseWebhook(req: Request): Promise<WebhookEvent | null> {
    try {
      const body = (await req.json()) as { transactionId?: string; status?: string; event?: string; stateData?: { reference?: string } };
      if (!body.transactionId) return null;
      const status: PaymentStatus = body.status === "SUCCESS" ? "paid" : body.status === "FAILED" ? "failed" : "pending";
      return { provider: "kkiapay", providerReference: body.transactionId, reference: body.stateData?.reference, status };
    } catch {
      return null;
    }
  },
};
