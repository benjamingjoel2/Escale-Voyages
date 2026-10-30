import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/pages/PageHero";
import { PlanningCta } from "@/components/home/PlanningCta";
import { Reveal } from "@/components/ui/Reveal";
import { getSiteSettings } from "@/lib/content";
import type { Lang } from "@/lib/data/journeys";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: pageAlternates(locale, "/about") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as Lang;
  const [t, tf, settings] = await Promise.all([getTranslations("AboutPage"), getTranslations("Founder"), getSiteSettings()]);
  const founderQuote = settings.founderQuote?.[lang] ?? tf("quote");
  const founderName = settings.founderName ?? tf("name");
  const founderRole = settings.founderRole?.[lang] ?? tf("role");

  return (
    <>
      <Nav variant="overlay" />
      <main id="content" className="flex-1">
        <PageHero
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          file="about-hero.jpg"
          alt={t("heroAlt")}
          label={t("mediaSlot")}
          tone="night"
        />

        <section className="container-wide py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
            <Reveal className="grid content-start gap-3">
              <span className="eyebrow">{t("whyEyebrow")}</span>
              <h2 className="t-h2">{t("whyTitle")}</h2>
            </Reveal>
            <Reveal delay={0.1} className="grid content-start gap-4">
              <p className="t-body">{t("why1")}</p>
              <p className="t-body">{t("why2")}</p>
              <span className="eyebrow mt-4">{t("how")}</span>
              <ul className="grid gap-2">
                {t("howItems").split(" · ").map((x) => (
                  <li key={x} className="grid grid-cols-[14px_1fr] gap-3 text-[15px] text-ink">
                    <span className="mt-[8px] h-[5px] w-[14px] rounded-[1px] bg-accent" aria-hidden="true" />{x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="container-wide py-6 md:py-10">
          <Reveal className="grid max-w-[760px] gap-5">
            <span className="font-display text-7xl leading-[0.6] text-accent" aria-hidden="true">“</span>
            <blockquote className="t-italic m-0 text-[24px] leading-[1.2] md:text-[32px] lg:text-[40px]">{founderQuote}</blockquote>
            <div className="grid gap-0.5">
              <b className="text-[13px] font-semibold text-ink">{founderName}</b>
              <span className="eyebrow">{founderRole}</span>
            </div>
          </Reveal>
        </section>

        <section className="container-wide py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
            <Reveal className="grid content-start gap-3">
              <span className="eyebrow">{t("responsibleEyebrow")}</span>
              <h2 className="t-h2">{t("responsibleTitle")}</h2>
            </Reveal>
            <Reveal delay={0.1} className="grid content-start gap-4">
              <p className="t-body">{t("responsible1")}</p>
              <p className="t-body">{t("responsible2")}</p>
            </Reveal>
          </div>
        </section>

        <PlanningCta />
      </main>
      <Footer />
    </>
  );
}
