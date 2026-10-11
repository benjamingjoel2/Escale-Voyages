import type { DepositRequest, DepositResult, PaymentProvider, PaymentStatus, WebhookEvent } from "./types";

/**
 * Mock adapter: approves every deposit instantly and records nothing.
 * Used whenever no real provider is configured, including in production
 * until keys exist, so the flow is visibly in test mode.
 */
export const mockProvider: PaymentProvider = {
  name: "mock",
  async createDeposit(req: DepositRequest): Promise<DepositResult> {
    return {
      provider: "mock",
      providerReference: `MOCK-${req.reference}-${Date.now().toString(36).toUpperCase()}`,
      status: "paid",
    };
  },
  async verify(): Promise<PaymentStatus> {
    return "paid";
  },
  async parseWebhook(req: Request): Promise<WebhookEvent | null> {
    try {
      const body = (await req.json()) as Partial<WebhookEvent>;
      if (!body.providerReference || !body.status) return null;
      return { provider: "mock", providerReference: body.providerReference, reference: body.reference, status: body.status };
    } catch {
      return null;
    }
  },
};
