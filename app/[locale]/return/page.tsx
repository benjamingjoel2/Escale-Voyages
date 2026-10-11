import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/pages/PageHero";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { getJourneys } from "@/lib/content";
import { returnPage } from "@/lib/data/returnPage";
import { whatsappUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ReturnPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ReturnRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as "en" | "fr";
  const [t, journeys] = await Promise.all([getTranslations("ReturnPage"), getJourneys()]);
  const journey = journeys.find((j) => j.slug === "return");
  const others = journeys.filter((j) => j.type === "heritage" || j.slug === "the-twelve-kings").filter((j) => j.slug !== "return").slice(0, 2);

  return (
    <>
      <Nav variant="overlay" />
      <main id="content" className="flex-1">
        <PageHero
          eyebrow={returnPage.eyebrow[lang]}
          title={returnPage.title[lang]}
          intro={returnPage.intro[lang]}
          file="return-door.jpg"
          alt="The Door of No Return on the beach at Ouidah"
          label={t("mediaSlot")}
          tone="indigo"
        />

        <section className="container-wide py-12 md:py-20">
          <Reveal className="mb-10 grid gap-2.5">
            <span className="eyebrow">{t("howEyebrow")}</span>
            <h2 className="t-h2">{t("howTitle")}</h2>
          </Reveal>
          <div className="grid gap-px border-t border-line md:grid-cols-2">
            {returnPage.pillars.map((p, i) => (
              <Reveal key={p.title.en} delay={i * 0.05} className="grid content-start gap-3 border-b border-line py-7 md:pr-10">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[22px] font-medium leading-[1.15] text-ink">{p.title[lang]}</h3>
                <p className="t-body">{p.body[lang]}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {journey ? (
          <section className="container-wide py-6 md:py-10">
            <Reveal className="mb-8 grid gap-2.5">
              <span className="eyebrow">{t("journeyEyebrow")}</span>
              <h2 className="t-h2">{t("journeyTitle")}</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <JourneyCard journey={journey} />
              {others.map((j) => <JourneyCard key={j.slug} journey={j} />)}
            </div>
          </section>
        ) : null}

        <section className="container-wide py-12 md:py-20">
          <Reveal className="mb-8 grid gap-2.5">
            <span className="eyebrow">{t("faqEyebrow")}</span>
            <h2 className="t-h2">{t("faqTitle")}</h2>
          </Reveal>
          <div className="grid max-w-[860px] border-t border-line">
            {returnPage.faq.map((f) => (
              <details key={f.q.en} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[16px] font-medium text-ink marker:content-none">
                  {f.q[lang]}
                  <span aria-hidden="true" className="text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="t-body pb-6">{f.a[lang]}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="container-wide py-10 md:py-16">
          <Reveal className="grid max-w-[760px] gap-4">
            <h2 className="t-h2">{t("cta")}</h2>
            <p className="t-body">{t("ctaBody")}</p>
            <div className="mt-2 flex flex-wrap gap-2.5">
              <Link href={{ pathname: "/enquire", query: { journey: "return" } }} className="btn btn-lg btn-solid !w-auto px-7">{t("cta")}</Link>
              <a href={whatsappUrl("Hello Escale Voyages, I'm interested in the Return journey.")} target="_blank" rel="noopener noreferrer" className="btn btn-lg !w-auto px-7">WhatsApp</a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
