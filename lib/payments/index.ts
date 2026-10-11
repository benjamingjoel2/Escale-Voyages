import { fedapayProvider } from "./fedapay";
import { kkiapayProvider } from "./kkiapay";
import { mockProvider } from "./mock";
import { stripeProvider } from "./stripe";
import type { PaymentMethod, PaymentProvider, ProviderName } from "./types";

export * from "./types";

/**
 * Picks the provider for a payment method from the environment:
 *   momo → FedaPay if FEDAPAY_SECRET_KEY, else KkiaPay if KKIAPAY_PRIVATE_KEY, else mock
 *   card → Stripe if STRIPE_SECRET_KEY, else mock
 */
export function getProvider(method: PaymentMethod): PaymentProvider {
  if (method === "momo") {
    if (process.env.FEDAPAY_SECRET_KEY) return fedapayProvider;
    if (process.env.KKIAPAY_PRIVATE_KEY) return kkiapayProvider;
    return mockProvider;
  }
  if (process.env.STRIPE_SECRET_KEY) return stripeProvider;
  return mockProvider;
}

export function providerByName(name: ProviderName): PaymentProvider {
  return { mock: mockProvider, fedapay: fedapayProvider, kkiapay: kkiapayProvider, stripe: stripeProvider }[name];
}

/** True when at least one real provider is configured. */
export const paymentsLive = Boolean(
  process.env.FEDAPAY_SECRET_KEY || process.env.KKIAPAY_PRIVATE_KEY || process.env.STRIPE_SECRET_KEY,
);
