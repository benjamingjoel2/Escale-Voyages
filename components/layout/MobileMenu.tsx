"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

const links = [
  { key: "journeys", href: "/journeys" },
  { key: "destinations", href: "/destinations" },
  { key: "return", href: "/return" },
  { key: "festivals", href: "/festivals" },
  { key: "practical", href: "/practical" },
  { key: "stories", href: "/stories" },
  { key: "about", href: "/about" },
] as const;

export function MobileMenu({ overlay }: { overlay: boolean }) {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(true)}
        className={`btn h-9 px-3.5 ${overlay ? "" : "bg-ink text-paper hover:text-white"}`}
      >
        {t("menu")}
      </button>

      <div
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label={t("menu")}
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-paper text-ink"
      >
        <div className="container-wide flex w-full items-center justify-between py-4">
          <span className="font-display text-2xl">
            Escale <span className="italic">Voyages</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="btn h-9 px-3.5 bg-ink/10 text-ink hover:text-white"
          >
            {t("close")}
          </button>
        </div>
        <ul className="container-wide mt-6 flex w-full flex-col gap-1">
          {links.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-4xl leading-none"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-wide mt-auto grid w-full gap-2 pb-[calc(24px+env(safe-area-inset-bottom,0px))]">
          <LocaleSwitcher className="w-max text-ink" />
          <Link
            href="/dates-prices"
            onClick={() => setOpen(false)}
            className="btn btn-lg"
          >
            {t("datesPrices")}
          </Link>
          <Link
            href="/enquire"
            onClick={() => setOpen(false)}
            className="btn btn-lg btn-solid"
          >
            {t("enquire")}
          </Link>
        </div>
      </div>
    </div>
  );
}
