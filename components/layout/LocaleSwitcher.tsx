"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const NAMES = { en: "English", fr: "Français", de: "Deutsch", es: "Español" } as const;

/** EN · FR · DE · ES. Each code links to the current route in that language. */
export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div role="group" aria-label={t("language")} className={`items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] ${className}`}>
      {routing.locales.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-1.5">
          {i > 0 ? <span aria-hidden="true" className="opacity-40">·</span> : null}
          {l === locale ? (
            <span aria-current="true" title={NAMES[l]} className="opacity-100">
              {l}
            </span>
          ) : (
            <Link
              // @ts-expect-error -- next-intl validates params against the pathname; for the current route they always match.
              href={{ pathname, params }}
              locale={l}
              hrefLang={l}
              lang={l}
              title={NAMES[l]}
              aria-label={NAMES[l]}
              className="rounded-[2px] opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100"
            >
              {l}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
