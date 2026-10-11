import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { routing } from "@/i18n/routing";
import { legalPages } from "@/lib/data/legal";

type Props = { params: Promise<{ locale: string; page: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => legalPages.map((p) => ({ locale, page: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params;
  const p = legalPages.find((x) => x.slug === page);
  if (!p) return {};
  return { title: p.title[locale as "en" | "fr"], robots: { index: false } };
}

export default async function LegalPage({ params }: Props) {
  const { locale, page } = await params;
  setRequestLocale(locale);
  const lang = locale as "en" | "fr";
  const p = legalPages.find((x) => x.slug === page);
  if (!p) notFound();
  const [t, format] = await Promise.all([getTranslations("LegalPage"), getFormatter()]);

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("updated", { date: format.dateTime(new Date(p.updated), { day: "numeric", month: "long", year: "numeric" }) })} title={p.title[lang]} />
        <div className="container-wide max-w-[860px] !mx-0 grid gap-10 py-12 md:py-20">
          <p className="rounded-[2px] border border-dashed border-line px-4 py-3 text-[13px] text-charcoal">{t("draft")}</p>
          {p.sections.map((s) => (
            <section key={s.heading.en} className="grid gap-3 border-t border-line pt-6">
              <h2 className="text-[22px] font-medium leading-[1.15] text-ink">{s.heading[lang]}</h2>
              {s.paragraphs[lang].map((para) => (
                <p key={para.slice(0, 40)} className="t-body !max-w-[70ch]">{para}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
