import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getDestinations } from "@/lib/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

/** Horizontal scroll of every destination, coast to north, with coordinates. */
export async function DestinationsScroll() {
  const [t, rawLocale, destinations] = await Promise.all([
    getTranslations("Destinations"),
    getLocale(),
    getDestinations(),
  ]);
  const locale = rawLocale as "en" | "fr";

  return (
    <section id="destinations" className="container-wide py-16 md:py-28">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="grid gap-2.5">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="t-h2">{t("title")}</h2>
        </div>
        <Link href="/destinations" className="btn btn-inline">
          {t("learnMore")}
        </Link>
      </Reveal>

      <div className="hscroll -mx-4 grid snap-x snap-mandatory auto-cols-[minmax(250px,300px)] grid-flow-col gap-3 overflow-x-auto px-4 pb-3 md:mx-0 md:px-0">
        {destinations.map((d) => (
          <Link
            key={d.slug}
            href={{ pathname: "/destinations/[slug]", params: { slug: d.slug } }}
            className="group grid min-w-0 snap-start content-start gap-3"
          >
            <MediaSlot
              label={`${d.image.file} · ${d.image.width}×${d.image.height}`}
              file={d.image.file}
              src={d.image.src}
              alt={d.name[locale]}
              sizes="300px"
              tone={d.tone}
              className="aspect-[4/5] rounded-[2px] transition-transform duration-500 ease-[var(--ease-out-soft)] motion-safe:group-hover:scale-[1.02]"
            />
            <span className="eyebrow">{t(`regions.${d.region}`)}</span>
            <h3 className="-mt-1 text-xl font-medium tracking-[-0.01em] text-ink">
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
