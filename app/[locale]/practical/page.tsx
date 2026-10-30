import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { PlanningCta } from "@/components/home/PlanningCta";
import { Reveal } from "@/components/ui/Reveal";
import { glance, practical } from "@/lib/data/practical";
import type { Lang } from "@/lib/data/journeys";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticalPage" });
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: pageAlternates(locale, "/practical") };
}

export default async function PracticalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as Lang;
  const [t, format] = await Promise.all([getTranslations("PracticalPage"), getFormatter()]);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: practical.map((s) => ({
      "@type": "Question",
      name: s.title[lang],
      acceptedAnswer: { "@type": "Answer", text: s.paragraphs[lang].join(" ") },
    })),
  };

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

        <section className="container-wide pt-10 md:pt-14">
          <span className="eyebrow">{t("glance")}</span>
          <dl className="mt-4 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
            {glance.map((g) => (
              <div key={g.label.en} className="bg-paper p-4">
                <dt className="eyebrow">{g.label[lang]}</dt>
                <dd className="mt-1.5 text-[15px] font-medium leading-snug text-ink">{g.value[lang]}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="container-wide grid gap-12 py-12 md:py-20 lg:grid-cols-12 lg:gap-16">
          <nav aria-label={t("contents")} className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="eyebrow">{t("contents")}</span>
              <ul className="mt-3 grid gap-2">
                {practical.map((s) => (
                  <li key={s.slug}><a href={`#${s.slug}`} className="text-[14px] text-ink hover:text-accent">{s.title[lang]}</a></li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="grid gap-12 lg:col-span-9">
            {practical.map((s) => (
              <Reveal key={s.slug}>
                <section id={s.slug} className="grid gap-4 border-t border-line pt-8 scroll-mt-24">
                  <h2 className="t-h2 text-[26px] md:text-[32px]">{s.title[lang]}</h2>
                  {s.paragraphs[lang].map((p) => (
                    <p key={p.slice(0, 40)} className="t-body !max-w-[68ch]">{p}</p>
                  ))}
                  <span className="eyebrow">{t("verified", { date: format.dateTime(new Date(s.verified), { day: "numeric", month: "long", year: "numeric" }) })}</span>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
        <PlanningCta />
      </main>
      <Footer />
    </>
  );
}
