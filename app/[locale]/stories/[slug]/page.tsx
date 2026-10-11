import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/pages/PageHero";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getDestinations, getJourneys } from "@/lib/content";
import { stories } from "@/lib/data/stories";
import { site } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => stories.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = stories.find((x) => x.slug === slug);
  if (!s) return {};
  const lang = locale as "en" | "fr";
  return { title: s.title[lang], description: s.excerpt[lang], openGraph: { type: "article", publishedTime: s.publishedAt } };
}

export default async function StoryPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const lang = locale as "en" | "fr";
  const s = stories.find((x) => x.slug === slug);
  if (!s) notFound();
  const [t, format, journeys, destinations] = await Promise.all([
    getTranslations("StoriesPage"),
    getFormatter(),
    getJourneys(),
    getDestinations(),
  ]);
  const related = journeys.filter((j) => s.journeySlugs.includes(j.slug));
  const places = destinations.filter((d) => s.destinationSlugs.includes(d.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.title[lang],
    description: s.excerpt[lang],
    datePublished: s.publishedAt,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <Nav variant="overlay" />
      <main id="content" className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PageHero
          eyebrow={`${s.category[lang]} · ${t("readTime", { count: s.readingMinutes })}`}
          title={s.title[lang]}
          file={s.cover.file}
          alt={s.title[lang]}
          label={`${s.cover.file} · 16:9`}
          tone={s.tone}
        >
          <span className="text-[13px] text-white/80">{format.dateTime(new Date(s.publishedAt), { day: "numeric", month: "long", year: "numeric" })}</span>
        </PageHero>

        <div className="container-wide grid gap-12 pt-6 lg:grid-cols-12 lg:gap-16">
          <article className="grid content-start gap-6 lg:col-span-7 lg:col-start-2">
            <p className="t-italic text-[22px] leading-[1.3] md:text-[26px]">{s.excerpt[lang]}</p>
            {s.body[lang].map((p) => (
              <p key={p.slice(0, 40)} className="t-body !max-w-[66ch] text-[17px] leading-[1.7]">{p}</p>
            ))}
            <Link href="/stories" className="btn btn-inline mt-4 w-max">{t("backToStories")}</Link>
          </article>
          <aside className="grid content-start gap-6 lg:col-span-3">
            {places.length ? (
              <div>
                <span className="eyebrow">{t("destinations")}</span>
                <ul className="mt-2 grid gap-1.5">
                  {places.map((d) => (
                    <li key={d.slug}><Link href={{ pathname: "/destinations/[slug]", params: { slug: d.slug } }} className="text-[15px] font-medium text-ink hover:text-accent">{d.name[lang]}</Link></li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>

        {related.length ? (
          <section className="container-wide py-16 md:py-28">
            <Reveal className="mb-8 grid gap-2.5">
              <span className="eyebrow">{t("related")}</span>
              <h2 className="t-h2">{t("journeys")}</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((j) => <JourneyCard key={j.slug} journey={j} />)}
            </div>
          </section>
        ) : <div className="h-16 md:h-28" />}
      </main>
      <Footer />
    </>
  );
}
