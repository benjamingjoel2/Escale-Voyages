"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const STEPS = ["1", "2", "3", "4", "5", "6"] as const;

/**
 * "How it works" as a slide-out panel, as on the reference site. The steps
 * stay in the DOM (hidden) so they are indexed and the panel is instant.
 */
export function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const [open, setOpen] = useState(false);
  const id = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="container-wide border-y border-line">
      <div className="flex flex-wrap items-center justify-between gap-4 py-6">
        <h2 className="text-[22px] font-medium text-ink">{t("title")}</h2>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(true)}
          className="btn btn-inline"
        >
          {t("open")} <span aria-hidden="true">→</span>
        </button>
      </div>

      <div
        hidden={!open}
        className="fixed inset-0 z-40 bg-black/60"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label={t("title")}
        hidden={!open}
        className="fixed inset-y-0 right-0 z-50 w-full max-w-[520px] overflow-y-auto bg-paper px-6 pb-10 pt-5 text-charcoal shadow-[-16px_0_48px_rgba(31,42,68,0.18)] md:px-10"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[22px] font-medium text-ink">{t("title")}</h3>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="btn btn-inline h-9"
          >
            {t("close")}
          </button>
        </div>
        <ol className="mt-8 grid gap-7">
          {STEPS.map((n) => (
            <li key={n} className="grid gap-1.5 border-t border-line pt-5">
              <h4 className="text-sm font-semibold text-ink">
                {n}. {t(`steps.${n}.title`)}
              </h4>
              <p className="text-[13.5px] leading-[1.55]">{t(`steps.${n}.body`)}</p>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}
