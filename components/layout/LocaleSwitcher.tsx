"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/** Toggles between the two live locales, keeping the current route. */
export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const next = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

  return (
    <Link
      // @ts-expect-error -- next-intl validates params against the pathname; for the current route they always match.
      href={{ pathname, params }}
      locale={next}
      hrefLang={next}
      className={`text-[12px] font-semibold uppercase tracking-[0.12em] opacity-80 transition-opacity hover:opacity-100 ${className}`}
    >
      {t("switchTo")}
    </Link>
  );
}
