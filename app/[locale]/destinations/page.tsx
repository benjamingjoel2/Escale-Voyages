import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { PlanningCta } from "@/components/home/PlanningCta";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Link } from "@/i18n/navigation";
import { getDestinations } from "@/lib/content";
import { REGIONS } from "@/lib/data/destinations";
import type { Lang } from "@/lib/data/journeys";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DestinationsPage" });
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: pageAlternates(locale, "/destinations") };
}

export default async function DestinationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as Lang;
  const [t, td, destinations] = await Promise.all([
    getTranslations("DestinationsPage"),
    getTranslations("Destinations"),
    getDestinations(),
  ]);

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
        <div className="container-wide grid gap-16 pb-16 pt-12 md:pb-28">
          {REGIONS.map((region) => {
            const list = destinations.filter((d) => d.region === region);
            if (!list.length) return null;
            return (
              <section key={region} className="grid gap-6">
                <h2 className="t-h2 text-[28px] md:text-[34px]">{td(`regions.${region}`)}</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {list.map((d) => (
                    <Link
                      key={d.slug}
                      href={{ pathname: "/destinations/[slug]", params: { slug: d.slug } }}
                      className="group grid content-start gap-3"
                    >
                      <MediaSlot
                        label={`${d.image.file} · ${d.image.width}×${d.image.height}`}
                        file={d.image.file}
                        src={d.image.src}
                        alt={d.name[lang]}
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        tone={d.tone}
                        className="aspect-[4/5] rounded-[2px] transition-transform duration-500 ease-[var(--ease-out-soft)] motion-safe:group-hover:scale-[1.02]"
                      />
                      <h3 className="text-xl font-medium tracking-[-0.01em] text-ink">{d.name[lang]}</h3>
                      <p className="text-[13.5px] leading-[1.5]">{d.pitch[lang]}</p>
                      <span className="coords">[ {d.coords} ]</span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <PlanningCta />
      </main>
      <Footer />
    </>
  );
}
