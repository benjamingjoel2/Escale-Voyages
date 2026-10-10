import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { DeparturesTable } from "@/components/journeys/DeparturesTable";
import { PlanningCta } from "@/components/home/PlanningCta";
import { allDepartures } from "@/lib/journeys";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DatesPrices" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function DatesPricesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("DatesPrices");

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
          <DeparturesTable rows={allDepartures()} showJourney />
          <p className="mt-5 text-[12.5px] text-charcoal">{t("note")}</p>
        </section>
        <PlanningCta />
      </main>
      <Footer />
    </>
  );
}
