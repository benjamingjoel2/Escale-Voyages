import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HeroMedia } from "./HeroMedia";
import { mediaSrc } from "@/lib/media";

/**
 * Full-bleed hero. Statement sits at the top-left of the
 * lower band; the giant condensed title and CTAs are bottom-left.
 */
export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      aria-label={t("label")}
      className="relative isolate grid min-h-svh grid-rows-[auto_1fr_auto] overflow-hidden text-white"
    >
      <HeroMedia slotLabel={t("mediaSlot")} posterSrc={mediaSrc("hero-poster.jpg")} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[45%] bg-gradient-to-b from-transparent to-black/60" />

      <div />

      <div className="container-wide flex w-full flex-col items-start gap-6 self-end pb-6 pt-28 md:flex-row md:items-end md:justify-between md:pt-32">
        <p className="t-italic max-w-[34ch] text-[26px] leading-[1.15] text-white md:text-[32px] lg:text-[40px]">
          {t("statement")}
        </p>
      </div>

      <div className="container-wide grid w-full justify-items-start gap-4 pb-32 pt-6 md:pb-36">
        <span className="eyebrow !text-white !opacity-80">{t("eyebrow")}</span>
        <h1 className="font-condensed mt-[0.14em] whitespace-nowrap text-[clamp(72px,18vw,240px)] font-light uppercase leading-[0.9] tracking-[0.005em]">
          Bénin
        </h1>
        <p className="t-italic text-xl text-white/90 md:text-2xl">{t("tagline")}</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/dates-prices" className="btn">
            {t("datesPrices")}
          </Link>
          <Link href="/enquire" className="btn btn-ghost">
            {t("enquire")}
          </Link>
        </div>
      </div>
    </section>
  );
}
