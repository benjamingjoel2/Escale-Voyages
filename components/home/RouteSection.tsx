import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

const stats = ["distance", "time", "temp"] as const;

/** Cotonou to Pendjari: the route code as a small eyebrow, the road in words and three stats. No map illustrations (owner decision, 6 Nov 2026). */
export function RouteSection() {
  const t = useTranslations("Route");

  return (
    <section id="route" className="container-wide py-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
        <Reveal className="grid content-start gap-5">
          <span className="eyebrow">
            {t("code")} · {t("eyebrow")}
          </span>
          <h2 className="t-h2">{t("title")}</h2>
          <p className="t-body">{t("body")}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid border-t border-line">
            {stats.map((s) => (
              <div
                key={s}
                className="grid grid-cols-[1fr_auto] items-baseline gap-3 border-b border-line py-4"
              >
                <dt className="text-xs uppercase tracking-[0.1em] text-ink/60">{t(`${s}Label`)}</dt>
                <dd className="m-0 text-[clamp(24px,3vw,36px)] font-medium leading-none tabular-nums text-ink">
                  {t(`${s}Value`)}
                  <small className="ml-2 text-xs font-normal opacity-60">{t(`${s}Note`)}</small>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
