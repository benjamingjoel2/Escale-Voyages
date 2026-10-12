import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { getDestinations, getJourneys } from "@/lib/content";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Enquire" });
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: pageAlternates(locale, "/enquire") };
}

async function Form({ searchParams, lang }: { searchParams: Props["searchParams"]; lang: "en" | "fr" }) {
  const [sp, journeys, destinations] = await Promise.all([searchParams, getJourneys(), getDestinations()]);
  const journey = typeof sp.journey === "string" ? sp.journey : "";
  const destSlug = typeof sp.destination === "string" ? sp.destination : "";
  const dest = destinations.find((d) => d.slug === destSlug);
  const defaultMessage = dest
    ? lang === "fr" ? `Je souhaite un voyage qui passe par ${dest.name.fr}.` : `I'd like a journey that includes ${dest.name.en}.`
    : "";
  return (
    <EnquiryForm
      journeys={journeys.map((j) => ({ slug: j.slug, title: j.title[lang] }))}
      defaultJourney={journeys.some((j) => j.slug === journey) ? journey : ""}
      defaultMessage={defaultMessage}
    />
  );
}

export default async function EnquirePage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Enquire");

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
        <section className="container-wide py-12 md:py-20">
          <Suspense fallback={<div className="h-[520px] max-w-[720px] animate-pulse rounded-[2px] bg-grey" />}>
            <Form searchParams={searchParams} lang={locale as "en" | "fr"} />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
