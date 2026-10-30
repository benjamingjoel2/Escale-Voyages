import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Weather, WeatherFallback } from "./Weather";
import { MobileMenu } from "./MobileMenu";
import { LocaleSwitcher } from "./LocaleSwitcher";

type Props = {
  /** overlay: transparent over hero media. solid: ink text on paper. */
  variant?: "overlay" | "solid";
};

export const navLinks = [
  { key: "journeys", href: "/journeys" },
  { key: "destinations", href: "/destinations" },
  { key: "return", href: "/return" },
  { key: "stories", href: "/stories" },
  { key: "about", href: "/about" },
] as const;

export function Nav({ variant = "overlay" }: Props) {
  const t = useTranslations("Nav");
  const overlay = variant === "overlay";

  return (
    <header
      className={`z-30 w-full ${
        overlay
          ? "absolute inset-x-0 top-0 text-white"
          : "relative border-b border-line bg-paper text-ink"
      }`}
    >
      <nav
        aria-label={t("primary")}
        className="container-wide flex items-center justify-between gap-4 py-4 md:py-5"
      >
        <Link
          href="/"
          className="flex items-baseline gap-3 font-display text-2xl leading-none tracking-[0.01em]"
        >
          Escale <span className="italic">Voyages</span>
          <span className="hidden text-[10px] font-sans font-semibold uppercase tracking-[0.14em] opacity-70 sm:inline">
            {t("tagline")}
          </span>
        </Link>

        <div
          className={`hidden items-center gap-0.5 rounded-[4px] border p-[3px] backdrop-blur-xl lg:flex ${
            overlay
              ? "border-white/20 bg-white/10"
              : "border-line bg-ink/5"
          }`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`rounded-[2px] px-3.5 py-2 text-[13px] font-medium transition-colors ${
                overlay ? "hover:bg-white/15" : "hover:bg-ink/10"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Suspense fallback={<WeatherFallback />}>
            <Weather />
          </Suspense>
          <LocaleSwitcher className="hidden md:inline-flex" />
          <div
            className={`hidden items-center gap-0.5 rounded-[4px] border p-[3px] backdrop-blur-xl md:flex ${
              overlay ? "border-white/20 bg-white/10" : "border-line bg-ink/5"
            }`}
          >
            <Link
              href="/dates-prices"
              className={`rounded-[2px] px-3.5 py-2 text-[13px] font-medium transition-colors ${
                overlay ? "hover:bg-white/15" : "hover:bg-ink/10"
              }`}
            >
              {t("datesPrices")}
            </Link>
            <Link
              href="/enquire"
              className={`rounded-[2px] px-3.5 py-2 text-[13px] font-medium transition-colors ${
                overlay
                  ? "bg-ink-glass hover:bg-accent"
                  : "bg-ink text-paper hover:bg-accent hover:text-white"
              }`}
            >
              {t("enquire")}
            </Link>
          </div>
          <MobileMenu overlay={overlay} />
        </div>
      </nav>
    </header>
  );
}
