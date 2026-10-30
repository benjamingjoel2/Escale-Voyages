import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { getJourney, getJourneys } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { extras } from "@/lib/data/extras";
import { paymentsLive } from "@/lib/payments";
import type { Lang } from "@/lib/data/journeys";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateStaticParams() {
  const journeys = await getJourneys();
  return routing.locales.flatMap((locale) => journeys.map((j) => ({ locale, slug: j.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const [t, j] = await Promise.all([getTranslations({ locale, namespace: "Booking" }), getJourney(slug)]);
  return { title: j ? `${t("metaTitle")} · ${j.title[locale as Lang]}` : t("metaTitle"), robots: { index: false } };
}

async function Flow({ slug, searchParams }: { slug: string; searchParams: Props["searchParams"] }) {
  const [j, sp] = await Promise.all([getJourney(slug), searchParams]);
  if (!j) notFound();
  return <BookingFlow journey={j} extras={extras} defaultDeparture={typeof sp.date === "string" ? sp.date : undefined} paymentsLive={paymentsLive} />;
}

export default async function BookPage({ params, searchParams }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const lang = locale as Lang;
  const [t, j] = await Promise.all([getTranslations("Booking"), getJourney(slug)]);
  if (!j) notFound();

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("chooseEyebrow")} title={j.title[lang]} />
        <section className="container-wide py-12 md:py-20">
          <Suspense fallback={<div className="h-[520px] animate-pulse rounded-[2px] bg-grey" />}>
            <Flow slug={slug} searchParams={searchParams} />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
