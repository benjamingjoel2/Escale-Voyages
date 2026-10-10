import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { destinations } from "@/lib/data/destinations";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

export function DestinationsScroll() {
  const t = useTranslations("Destinations");
  const locale = useLocale() as "en" | "fr";

  return (
    <section id="destinations" className="container-wide py-16 md:py-28">
      <Reveal className="mb-8 grid gap-2.5">
        <span className="eyebrow">{t("eyebrow")}</span>
        <h2 className="t-h2">{t("title")}</h2>
      </Reveal>

      <div className="hscroll -mx-4 grid snap-x snap-mandatory auto-cols-[minmax(260px,320px)] grid-flow-col gap-3 overflow-x-auto px-4 pb-3 md:mx-0 md:px-0">
        {destinations.map((d) => (
          <Link
            key={d.slug}
            href={{ pathname: "/destinations/[slug]", params: { slug: d.slug } }}
            className="group grid min-w-0 snap-start content-start gap-3"
          >
            <MediaSlot
              label={`${d.image.file} · ${d.image.width}×${d.image.height}`}
              tone={d.tone}
              className="aspect-[4/5] rounded-[2px] transition-transform duration-500 ease-[var(--ease-out-soft)] motion-safe:group-hover:scale-[1.02]"
            />
            <h3 className="text-xl font-medium tracking-[-0.01em] text-ink">
              {d.name[locale]}
            </h3>
            <p className="text-[13.5px] leading-[1.5]">{d.pitch[locale]}</p>
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <span className="text-[12.5px] font-semibold text-ink">
                {t("learnMore")}
              </span>
              <span className="coords">[ {d.coords} ]</span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-3.5 text-[12.5px] text-charcoal">{t("note")}</p>
    </section>
  );
}
