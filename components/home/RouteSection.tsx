import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

const stats = ["distance", "time", "temp"] as const;

export function RouteSection() {
  const t = useTranslations("Route");

  return (
    <section id="journey-map" className="container-wide py-10 md:py-16">
      <Reveal>
        <p className="font-condensed text-[clamp(56px,12vw,160px)] font-light uppercase leading-[0.95] tracking-[0.01em] text-ink/90">
          {t("code")}
        </p>
      </Reveal>

      <div className="mt-10 grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
        <Reveal>
          <div
            className="relative aspect-square max-w-full overflow-hidden rounded-[2px] bg-grey"
            role="img"
            aria-label={t("mapSlot")}
          >
            <svg viewBox="0 0 400 400" className="block h-full w-full">
              <path
                d="M250 372 C 200 330, 210 280, 190 230 C 170 180, 150 130, 140 60"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
              />
              <g fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="10.5" letterSpacing=".06em">
                <circle cx="250" cy="372" r="4" />
                <text x="262" y="376">COTONOU · 6°22′N 2°25′E</text>
                <circle cx="222" cy="318" r="2.5" opacity=".6" />
                <text x="234" y="322" opacity=".6">OUIDAH · GANVIÉ</text>
                <circle cx="196" cy="246" r="2.5" opacity=".6" />
                <text x="208" y="250" opacity=".6">ABOMEY</text>
                <circle cx="160" cy="140" r="2.5" opacity=".6" />
                <text x="172" y="144" opacity=".6">NATITINGOU</text>
                <circle cx="140" cy="60" r="4" fill="var(--accent)" />
                <text x="152" y="64">PENDJARI · BATIA</text>
              </g>
              <text x="16" y="388" fontFamily="var(--font-sans)" fontSize="10" fill="var(--ink)" opacity=".6">
                {t("mapSlot")}
              </text>
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-5">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="t-h2">{t("title")}</h2>
          <p className="t-body">{t("body")}</p>
          <dl className="mt-2 grid border-t border-line">
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
