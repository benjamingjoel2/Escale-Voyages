/**
 * Prices are stored in FCFA (XOF) and displayed with an approximate conversion.
 * XOF is pegged to the euro at 655.957. The other rates are indicative and will
 * be replaced by a daily fetch (Phase 6). Always show converted figures as "≈".
 */
export type DisplayCurrency = "XOF" | "EUR" | "USD" | "NGN";

export const XOF_PER_EUR = 655.957;

/** Indicative units of each currency per 1 XOF. */
const RATES: Record<DisplayCurrency, number> = {
  XOF: 1,
  EUR: 1 / XOF_PER_EUR,
  USD: 1 / 600,
  NGN: 2.5,
};

export function convertFromXof(amountXof: number, to: DisplayCurrency) {
  return amountXof * RATES[to];
}

/** "1 450 000 F" with a non-breaking thin space as the thousands separator. */
export function formatXof(amount: number) {
  const grouped = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${grouped} F`;
}

export function formatConverted(
  amountXof: number,
  to: Exclude<DisplayCurrency, "XOF">,
  locale: string,
) {
  const value = convertFromXof(amountXof, to);
  const rounded = to === "NGN" ? Math.round(value / 1000) * 1000 : Math.round(value / 5) * 5;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: to,
    maximumFractionDigits: 0,
  }).format(rounded);
}
