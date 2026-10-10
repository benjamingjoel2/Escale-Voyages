import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HeroMedia } from "./HeroMedia";
import { mediaSrc } from "@/lib/media";

/**
 * Full-bleed hero. Statement and "Watch film" sit at the top-left of the
 * lower band; the giant condensed title and CTAs are bottom-left.
 */
export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      aria-label="Hero"
      className="relative isolate grid min-h-svh grid-rows-[auto_1fr_auto] overflow-hidden text-white"
    >
      <HeroMedia slotLabel={t("mediaSlot")} posterSrc={mediaSrc("hero-poster.jpg")} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[45%] bg-gradient-to-b from-transparent to-black/60" />

      <div />

      <div className="container-wide flex w-full flex-col items-start gap-6 self-end pb-6 pt-28 md:flex-row md:items-end md:justify-between md:pt-32">
        <p className="t-italic max-w-[22ch] text-[26px] leading-[1.15] text-white md:text-[32px] lg:text-[40px]">
          {t("statement")}
        </p>
        <a
          href="#film"
          className="relative inline-flex h-[52px] min-w-[230px] items-center justify-between gap-5 overflow-hidden rounded-r-[2px] border border-l-0 border-white/25 pl-[54px] pr-5 text-[13px] font-medium text-white"
        >
          <span className="absolute left-0 top-0 h-full w-[38px] rounded-l-[2px] bg-gradient-to-br from-[#9A4B2E] to-[#2C3A4C]" aria-hidden="true" />
          <span>{t("watchFilm")}</span>
          <span aria-hidden="true">▶</span>
        </a>
      </div>

      <div className="container-wide grid w-full justify-items-start gap-4 pb-8 pt-6 md:pb-10">
        <span className="eyebrow !text-white !opacity-80">{t("eyebrow")}</span>
        <h1 className="font-condensed whitespace-nowrap text-[clamp(72px,18vw,240px)] font-light uppercase leading-[0.9] tracking-[0.005em]">
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
