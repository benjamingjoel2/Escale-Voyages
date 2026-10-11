/**
 * Payment abstraction. Local customers pay deposits in FCFA by mobile money
 * (FedaPay or KkiaPay); international customers pay in euros by card
 * (Stripe, or a pan-African processor if the company has no Stripe entity).
 * The booking flow only talks to this interface.
 */
export type PaymentMethod = "momo" | "card";
export type PaymentCurrency = "XOF" | "EUR";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";
export type ProviderName = "mock" | "fedapay" | "kkiapay" | "stripe";

export type DepositRequest = {
  /** Our booking reference, e.g. EV-ABC123. */
  reference: string;
  amount: number;
  currency: PaymentCurrency;
  method: PaymentMethod;
  customer: { name: string; email: string; phone?: string };
  description: string;
  /** Where the provider sends the customer after a hosted checkout. */
  returnUrl: string;
  locale: "en" | "fr";
};

export type DepositResult = {
  provider: ProviderName;
  /** The provider's own id for this payment. */
  providerReference: string;
  status: PaymentStatus;
  /** Set when the customer must be sent to a hosted page to pay. */
  redirectUrl?: string;
};

export type WebhookEvent = {
  provider: ProviderName;
  providerReference: string;
  /** Our booking reference, when the provider echoes it back. */
  reference?: string;
  status: PaymentStatus;
};

export interface PaymentProvider {
  readonly name: ProviderName;
  /** Starts a deposit payment. */
  createDeposit(req: DepositRequest): Promise<DepositResult>;
  /** Re-checks a payment's status with the provider. */
  verify(providerReference: string): Promise<PaymentStatus>;
  /** Parses and authenticates a webhook call; returns null if invalid. */
  parseWebhook(req: Request): Promise<WebhookEvent | null>;
}
