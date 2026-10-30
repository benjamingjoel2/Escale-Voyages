import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { BookingPanel } from "@/components/journeys/BookingPanel";
import { JourneyMap } from "@/components/journeys/JourneyMap";
import { DeparturesTable } from "@/components/journeys/DeparturesTable";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { StaysSection } from "@/components/journeys/StaysSection";
import type { Lang } from "@/lib/data/journeys";
import { getDestinations, getJourney, getJourneys } from "@/lib/content";
import { lowestPrice } from "@/lib/journeys";
import { formatXof } from "@/lib/currency";
import { mediaSrc } from "@/lib/media";
import { absoluteUrl, breadcrumbLd, clip, ogImageFor, pageAlternates } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const journeys = await getJourneys();
  return routing.locales.flatMap((locale) =>
    journeys.map((j) => ({ locale, slug: j.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const j = await getJourney(slug);
  if (!j) return {};
  const lang = locale as Lang;
  const heroFile = mediaSrc(j.heroImage.file) ? j.heroImage.file : j.image.file;
  const tm = await getTranslations({ locale, namespace: "Meta" });
  const title = tm("journeyTitle", { title: j.title[lang], days: j.days });
  return {
    title,
    description: clip(j.summary[lang]),
    alternates: pageAlternates(locale, { pathname: "/journeys/[slug]", params: { slug } }),
    openGraph: { title, description: j.pitch[lang], images: ogImageFor(locale, heroFile, j.title[lang]) },
  };
}

const galleryTones = ["accent", "lagoon", "savannah", "coast", "night"] as const;

export default async function JourneyPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const [j, journeys, destinations, t, tj, tf] = await Promise.all([
    getJourney(slug),
    getJourneys(),
    getDestinations(),
    getTranslations("JourneyDetail"),
    getTranslations("Journeys"),
    getTranslations("Filters"),
  ]);
  if (!j) notFound();

  const lang = locale as Lang;
  const from = lowestPrice(j);
  // Only photographs we actually have; uncommissioned frames are left out rather than shown as blanks.
  const gallery = j.gallery.filter((g) => g.src || mediaSrc(g.file));
  const related = journeys.filter((x) => x.slug !== j.slug).slice(0, 3);
  const altOf = (alt: Partial<Record<Lang, string>> | string | undefined, fallback: string) =>
    typeof alt === "object" ? (alt[lang] ?? alt.en ?? fallback) : (alt ?? fallback);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: j.title[lang],
    description: j.summary[lang],
    touristType: tf(`types.${j.type}`),
    itinerary: {
      "@type": "ItemList",
      itemListElement: j.itinerary.map((d) => ({
        "@type": "ListItem",
        position: d.day,
        name: d.title[lang],
      })),
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "XOF",
      price: from,
      availability: "https://schema.org/InStock",
      url: `${site.url}/${locale}/journeys/${j.slug}`,
    },
    provider: { "@type": "TravelAgency", name: site.name, url: site.url },
  };

  return (
    <>
      <Nav variant="overlay" />
      <main id="content" className="flex-1 pb-24 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbLd([
                { name: site.name, url: absoluteUrl(lang, "/") },
                { name: tj("eyebrow"), url: absoluteUrl(lang, "/journeys") },
                { name: j.title[lang], url: absoluteUrl(lang, { pathname: "/journeys/[slug]", params: { slug: j.slug } }) },
              ]),
            ),
          }}
        />

        {/* Hero */}
        <section className="relative">
          <MediaSlot
            label={`${j.heroImage.file} · ${j.heroImage.width}×${j.heroImage.height}`}
            file={j.heroImage.src || mediaSrc(j.heroImage.file) ? j.heroImage.file : j.image.file}
            src={j.heroImage.src ?? j.image.src}
            alt={altOf(j.heroImage.alt ?? j.image.alt, j.title[lang])}
            priority
            tone={j.tone}
            labelPosition="top-right"
            className="grid min-h-[78svh] content-end text-white"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />
            <div className="container-wide relative grid gap-4 pb-10 pt-40 md:pb-14">
              <span className="eyebrow !text-white !opacity-80">
                {tj("days", { count: j.days })} · {j.season[lang]} · {t("from")}{" "}
                {formatXof(from)}
              </span>
              <h1 className="max-w-[14ch] text-[clamp(40px,7vw,96px)] font-medium leading-[0.95] tracking-[-0.02em]">
                {j.title[lang]}
              </h1>
              <p className="t-italic max-w-[36ch] text-[20px] text-white/90 md:text-[26px]">
                {j.pitch[lang]}
              </p>
              <span className="coords !text-white/70">[ {j.coords} ]</span>
            </div>
          </MediaSlot>
        </section>
        <div className="haze" aria-hidden="true" />

        <div id="dates" className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid content-start gap-16 lg:col-span-8 lg:gap-24">
            {/* At a glance */}
            <Reveal className="grid gap-6 pt-6">
              <p className="t-body !max-w-[64ch] text-[17px] leading-[1.6]">{j.summary[lang]}</p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-4">
                <div><dt className="eyebrow">{t("glanceDuration")}</dt><dd className="mt-1 text-lg font-medium text-ink">{tj("days", { count: j.days })}</dd></div>
                <div><dt className="eyebrow">{t("glanceGroup")}</dt><dd className="mt-1 text-lg font-medium text-ink">{t("groupMax", { count: j.groupMax })}</dd></div>
                <div><dt className="eyebrow">{t("glanceSeason")}</dt><dd className="mt-1 text-lg font-medium text-ink">{j.season[lang]}</dd></div>
                <div><dt className="eyebrow">{t("glanceType")}</dt><dd className="mt-1 text-lg font-medium text-ink">{tf(`types.${j.type}`)}</dd></div>
              </dl>
            </Reveal>

            {/* Highlights */}
            <Reveal className="grid gap-5">
              <span className="eyebrow">{t("highlights")}</span>
              <ul className="grid gap-3">
                {j.highlights[lang].map((h) => (
                  <li key={h} className="grid grid-cols-[14px_1fr] gap-4 text-[15.5px] leading-[1.5] text-ink">
                    <span className="mt-[9px] h-[5px] w-[14px] rounded-[1px] bg-accent" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Itinerary */}
            <Reveal className="grid gap-6">
              <div className="grid gap-2.5">
                <span className="eyebrow">{t("itineraryEyebrow")}</span>
                <h2 className="t-h2">{t("itineraryTitle")}</h2>
              </div>
              <ol className="grid border-t border-line">
                {j.itinerary.map((d) => (
                  <li key={d.day} className="grid gap-2 border-b border-line py-6 md:grid-cols-[120px_1fr] md:gap-8">
                    <div className="grid content-start gap-1">
                      <span className="eyebrow">{t("day", { n: d.day })}</span>
                      {d.stay ? <span className="text-[12.5px] text-charcoal">{t("stay", { place: d.stay[lang] })}</span> : null}
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-[20px] font-medium leading-[1.15] text-ink">{d.title[lang]}</h3>
                      <p className="t-body">{d.body[lang]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* Map */}
            <Reveal className="grid gap-6">
              <div className="grid gap-2.5">
                <span className="eyebrow">{t("mapEyebrow")}</span>
                <h2 className="t-h2">{t("mapTitle")}</h2>
              </div>
              <JourneyMap stops={j.stops} destinations={destinations} />
            </Reveal>

            {/* Where you stay */}
            <StaysSection slugs={j.stays} />

            {/* Included / excluded */}
            <Reveal className="grid gap-8 md:grid-cols-2">
              <div className="grid content-start gap-4">
                <span className="eyebrow">{t("included")}</span>
                <ul className="grid gap-2.5">
                  {j.included[lang].map((x) => (
                    <li key={x} className="grid grid-cols-[14px_1fr] gap-3 text-[14.5px] leading-[1.5] text-ink">
                      <span className="mt-[7px] h-[5px] w-[14px] rounded-[1px] bg-lagoon" aria-hidden="true" />{x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid content-start gap-4">
                <span className="eyebrow">{t("excluded")}</span>
                <ul className="grid gap-2.5">
                  {j.excluded[lang].map((x) => (
                    <li key={x} className="grid grid-cols-[14px_1fr] gap-3 text-[14.5px] leading-[1.5] text-charcoal">
                      <span className="mt-[7px] h-[5px] w-[14px] rounded-[1px] bg-line" aria-hidden="true" />{x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Dates & prices */}
            <Reveal className="grid gap-6">
              <div className="grid gap-2.5">
                <span className="eyebrow">{t("datesEyebrow")}</span>
                <h2 className="t-h2">{t("datesTitle")}</h2>
                <p className="t-body">{t("datesIntro")}</p>
              </div>
              <DeparturesTable rows={j.departures.map((d) => ({ ...d, journey: j }))} />
            </Reveal>

            {/* Gallery */}
            {gallery.length ? (
              <Reveal className="grid gap-6">
                <span className="eyebrow">{t("gallery")}</span>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {gallery.map((g, i) => (
                    <MediaSlot
                      key={`${g.file}-${i}`}
                      label={`${g.file} · ${g.width}×${g.height}`}
                      file={g.file}
                      src={g.src}
                      alt={altOf(g.alt, j.title[lang])}
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      tone={galleryTones[i % galleryTones.length]}
                      className={`rounded-[2px] ${g.height > g.width ? "row-span-2 aspect-[2/3]" : "aspect-[3/2]"}`}
                    />
                  ))}
                </div>
              </Reveal>
            ) : null}

            {/* FAQ */}
            {j.faq.length ? (
              <Reveal className="grid gap-6">
                <div className="grid gap-2.5">
                  <span className="eyebrow">{t("faqEyebrow")}</span>
                  <h2 className="t-h2">{t("faqTitle")}</h2>
                </div>
                <div className="grid border-t border-line">
                  {j.faq.map((f) => (
                    <details key={f.q[lang]} className="group border-b border-line">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[16px] font-medium text-ink marker:content-none">
                        {f.q[lang]}
                        <span aria-hidden="true" className="text-xl leading-none transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="t-body pb-6">{f.a[lang]}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>

          <div className="lg:col-span-4 lg:pt-6">
            <BookingPanel journey={j} />
          </div>
        </div>

        {/* Related */}
        <section className="container-wide py-16 md:py-28">
          <div className="mb-8 grid gap-2.5">
            <span className="eyebrow">{t("relatedEyebrow")}</span>
            <h2 className="t-h2">{t("relatedTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <JourneyCard key={r.slug} journey={r} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
