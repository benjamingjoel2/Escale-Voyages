import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { journeys } from "@/lib/data/journeys";
import { formatConverted, formatXof } from "@/lib/currency";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

export function JourneyCards() {
  const t = useTranslations("Journeys");
  const locale = useLocale() as "en" | "fr";

  return (
    <section id="journeys" className="container-wide py-16 md:py-28">
      <Reveal className="mb-8 grid gap-2.5">
        <span className="eyebrow">{t("eyebrow")}</span>
        <h2 className="t-h2">{t("title")}</h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {journeys.map((j, i) => (
          <Reveal key={j.slug} delay={Math.min(i * 0.06, 0.3)}>
            <Link
              href={{ pathname: "/journeys/[slug]", params: { slug: j.slug } }}
              className="group block"
            >
              <MediaSlot
                label={`${j.image.file} · ${j.image.width}×${j.image.height}`}
                tone={j.tone}
                labelPosition="top-right"
                className="grid aspect-[3/4] content-between rounded-[2px] p-4 text-white transition-transform duration-500 ease-[var(--ease-out-soft)] motion-safe:group-hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
                <div className="relative flex items-start justify-between gap-2.5">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] opacity-90">
                    {j.season[locale]}
                  </span>
                </div>
                <div className="relative">
                  <span className="coords !text-white/70">[ {j.coords} ]</span>
                  <h3 className="mt-2 text-[22px] font-medium leading-[1.1] tracking-[-0.01em]">
                    {j.title[locale]}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold tabular-nums">
                    {formatXof(j.priceXof)}
                    <span className="ml-1.5 font-normal opacity-80">
                      {t("approx", { amount: formatConverted(j.priceXof, "EUR", locale) })} ·{" "}
                      {t("days", { count: j.days })}
                    </span>
                  </p>
                  <p className="mt-2 max-w-[30ch] text-[13px] leading-[1.45] opacity-90">
                    {j.pitch[locale]}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12.5px] font-semibold">
                    {t("learnMore")} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </MediaSlot>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
