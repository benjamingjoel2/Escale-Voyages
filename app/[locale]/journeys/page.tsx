import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { JourneyFilters } from "@/components/journeys/JourneyFilters";
import { PlanningCta } from "@/components/home/PlanningCta";
import { filterJourneys, parseFilters } from "@/lib/journeys";
import { getJourneys } from "@/lib/content";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "JourneysPage" });
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: pageAlternates(locale, "/journeys") };
}

/** Reads the URL filters at request time; streams in after the static shell. */
async function Results({ searchParams }: { searchParams: Props["searchParams"] }) {
  const [sp, t, journeys] = await Promise.all([
    searchParams,
    getTranslations("JourneysPage"),
    getJourneys(),
  ]);
  const filters = parseFilters(sp);
  const results = filterJourneys(journeys, filters);

  return (
    <>
      <JourneyFilters active={filters} resultCount={results.length} />
      {results.length ? (
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((j) => (
            <JourneyCard key={j.slug} journey={j} headingLevel={2} />
          ))}
        </div>
      ) : (
        <div className="mt-10 grid max-w-[60ch] gap-3">
          <p className="t-italic text-2xl">{t("emptyTitle")}</p>
          <p className="t-body">{t("emptyBody")}</p>
        </div>
      )}
    </>
  );
}

async function ResultsFallback() {
  const journeys = await getJourneys();
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {journeys.map((j) => (
        <JourneyCard key={j.slug} journey={j} headingLevel={2} />
      ))}
    </div>
  );
}

export default async function JourneysPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("JourneysPage");

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <section className="container-wide pt-12 md:pt-20">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h1 className="t-h2 mt-3 text-[clamp(36px,5vw,64px)]">{t("title")}</h1>
          <p className="t-body mt-5">{t("intro")}</p>
        </section>
        <section className="container-wide pb-16 pt-10 md:pb-28">
          <Suspense fallback={<ResultsFallback />}>
            <Results searchParams={searchParams} />
          </Suspense>
        </section>
        <PlanningCta />
      </main>
      <Footer />
    </>
  );
}
