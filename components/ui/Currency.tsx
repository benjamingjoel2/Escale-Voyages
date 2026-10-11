"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import { convertFromXof, type DisplayCurrency } from "@/lib/currency";

const KEY = "escale.currency";
const OPTIONS: Exclude<DisplayCurrency, "XOF">[] = ["EUR", "USD", "NGN"];
const listeners = new Set<() => void>();

function read(): Exclude<DisplayCurrency, "XOF"> {
  try {
    const v = localStorage.getItem(KEY);
    return OPTIONS.includes(v as never) ? (v as Exclude<DisplayCurrency, "XOF">) : "EUR";
  } catch {
    return "EUR";
  }
}
function write(v: Exclude<DisplayCurrency, "XOF">) {
  try { localStorage.setItem(KEY, v); } catch { /* storage unavailable */ }
  listeners.forEach((l) => l());
}
function subscribe(l: () => void) {
  listeners.add(l);
  window.addEventListener("storage", l);
  return () => { listeners.delete(l); window.removeEventListener("storage", l); };
}

const Ctx = createContext<{ currency: Exclude<DisplayCurrency, "XOF">; set: (v: Exclude<DisplayCurrency, "XOF">) => void }>({ currency: "EUR", set: () => {} });

/** Remembers the visitor's display currency. FCFA is always the primary figure. */
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const currency = useSyncExternalStore(subscribe, read, () => "EUR" as const);
  const set = useCallback((v: Exclude<DisplayCurrency, "XOF">) => write(v), []);
  return <Ctx.Provider value={{ currency, set }}>{children}</Ctx.Provider>;
}

/** "≈ €2,210" in the chosen currency. */
export function Approx({ xof, className }: { xof: number; className?: string }) {
  const { currency } = useContext(Ctx);
  const locale = useLocale();
  const value = convertFromXof(xof, currency);
  const rounded = currency === "NGN" ? Math.round(value / 1000) * 1000 : Math.round(value / 5) * 5;
  const text = new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(rounded);
  return <span className={className}>≈ {text}</span>;
}

export function CurrencySwitcher({ className = "" }: { className?: string }) {
  const { currency, set } = useContext(Ctx);
  const t = useTranslations("Currency");
  return (
    <label className={`inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] ${className}`}>
      <span className="opacity-70">{t("label")}</span>
      <select
        id="currency-switcher"
        value={currency}
        onChange={(e) => set(e.target.value as Exclude<DisplayCurrency, "XOF">)}
        className="rounded-[2px] border border-line bg-transparent px-2 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-inherit"
      >
        {OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
