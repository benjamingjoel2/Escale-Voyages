import type { Metadata } from "next";
import { absoluteUrl, breadcrumbLd, ogImageFor, pageAlternates } from "@/lib/seo";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/pages/PageHero";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { JourneyMap } from "@/components/journeys/JourneyMap";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getDestinations, getJourneys } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const destinations = await getDestinations();
  return routing.locales.flatMap((locale) => destinations.map((d) => ({ locale, slug: d.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const d = (await getDestinations()).find((x) => x.slug === slug);
  if (!d) return {};
  const lang = locale as "en" | "fr";
  return {
    title: d.name[lang],
    description: d.pitch[lang],
    alternates: pageAlternates(locale, { pathname: "/destinations/[slug]", params: { slug } }),
    openGraph: { title: d.name[lang], description: d.pitch[lang], images: ogImageFor(d.image.file, d.name[lang]) },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const lang = locale as "en" | "fr";
  const [t, td, destinations, journeys] = await Promise.all([
    getTranslations("DestinationsPage"),
    getTranslations("Destinations"),
    getDestinations(),
    getJourneys(),
  ]);
  const d = destinations.find((x) => x.slug === slug);
  if (!d) notFound();

  const visiting = journeys.filter((j) => j.stops.includes(d.slug));
  const nearby = destinations.filter((x) => x.region === d.region && x.slug !== d.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name[lang],
    description: d.pitch[lang],
    geo: { "@type": "GeoCoordinates", latitude: d.lat, longitude: d.lng },
    containedInPlace: { "@type": "Country", name: "Benin" },
    touristType: visiting.map((j) => j.title[lang]),
    url: `${site.url}/${locale}/destinations/${d.slug}`,
  };

  return (
    <>
      <Nav variant="overlay" />
      <main id="content" className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbLd([
                { name: site.name, url: absoluteUrl(lang, "/") },
                { name: t("metaTitle"), url: absoluteUrl(lang, "/destinations") },
                { name: d.name[lang], url: absoluteUrl(lang, { pathname: "/destinations/[slug]", params: { slug: d.slug } }) },
              ]),
            ),
          }}
        />
        <PageHero
          eyebrow={td(`regions.${d.region}`)}
          title={d.name[lang]}
          intro={d.pitch[lang]}
          file={d.image.file}
          src={d.image.src}
          alt={d.name[lang]}
          label={`${d.slug}-hero.jpg · 16:9 · 2800×1575`}
          tone={d.tone}
        >
          <span className="coords !text-white/70">[ {d.coords} ]</span>
        </PageHero>

        <div className="container-wide grid gap-12 pt-6 lg:grid-cols-12 lg:gap-16">
          <div className="grid content-start gap-14 lg:col-span-8">
            <Reveal className="grid gap-6">
              <p className="t-body !max-w-[64ch] text-[17px] leading-[1.6]">{t("placeholderBody")}</p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-3">
                <div><dt className="eyebrow">{t("region")}</dt><dd className="mt-1 text-lg font-medium text-ink">{td(`regions.${d.region}`)}</dd></div>
                <div><dt className="eyebrow">{t("coordinates")}</dt><dd className="mt-1 text-lg font-medium tabular-nums text-ink">{d.coords}</dd></div>
                <div><dt className="eyebrow">{t("bestTime")}</dt><dd className="mt-1 text-lg font-medium text-ink">{t("bestTimeValue")}</dd></div>
              </dl>
            </Reveal>

            {visiting.length ? (
              <Reveal className="grid gap-6">
                <h2 className="t-h2 text-[28px] md:text-[34px]">{t("journeysHere")}</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {visiting.map((j) => <JourneyCard key={j.slug} journey={j} />)}
                </div>
              </Reveal>
            ) : null}

            <Reveal className="grid gap-6">
              <JourneyMap stops={[d.slug]} destinations={destinations} />
            </Reveal>
          </div>

          <aside className="grid content-start gap-4 lg:col-span-4">
            <div className="rounded-[2px] border border-line p-6">
              <span className="eyebrow">{t("nearby", { region: td(`regions.${d.region}`) })}</span>
              <ul className="mt-3 grid gap-3">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link href={{ pathname: "/destinations/[slug]", params: { slug: n.slug } }} className="group grid grid-cols-[56px_1fr] items-center gap-3">
                      <MediaSlot label={n.image.file} file={n.image.file} src={n.image.src} alt="" sizes="56px" tone={n.tone} className="aspect-square rounded-[2px]" />
                      <span className="text-[15px] font-medium text-ink group-hover:text-accent">{n.name[lang]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={{ pathname: "/enquire", query: { destination: d.slug } }} className="btn btn-lg btn-solid mt-6">
                {t("planCta")}
              </Link>
            </div>
          </aside>
        </div>
        <div className="h-16 md:h-28" />
      </main>
      <Footer />
    </>
  );
}
