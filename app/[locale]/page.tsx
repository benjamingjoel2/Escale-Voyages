import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageAlternates } from "@/lib/seo";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { SeasonBanner } from "@/components/home/SeasonBanner";
import { JourneyCards } from "@/components/home/JourneyCards";
import { FounderQuote } from "@/components/home/FounderQuote";
import { DestinationsScroll } from "@/components/home/DestinationsScroll";
import { Proverb } from "@/components/home/Proverb";
import { RouteSection } from "@/components/home/RouteSection";
import { ReturnFeature } from "@/components/home/ReturnFeature";
import { PlanningCta } from "@/components/home/PlanningCta";
import { HowItWorks } from "@/components/home/HowItWorks";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: pageAlternates(locale, "/") };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav variant="overlay" />
      <main id="content" className="flex-1">
        <Hero />
        <div className="haze" aria-hidden="true" />
        <Intro />
        <SeasonBanner />
        <JourneyCards />
        <FounderQuote />
        <DestinationsScroll />
        <Proverb />
        <RouteSection />
        <ReturnFeature />
        <PlanningCta />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
