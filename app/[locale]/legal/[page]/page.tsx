import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { legalPages } from "@/lib/data/legal";
import { pageAlternates } from "@/lib/seo";
import { credits } from "@/lib/data/credits";
import type { Lang } from "@/lib/data/journeys";

/** Renders [label](legal:slug) links inside a legal paragraph as localized links. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(legal:[a-z-]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(legal:([a-z-]+)\)$/);
        return m ? (
          <Link key={i} href={{ pathname: "/legal/[page]", params: { page: m[2] } }} className="text-ink underline underline-offset-4">
            {m[1]}
          </Link>
        ) : (
          part
        );
      })}
    </>
  );
}

type Props = { params: Promise<{ locale: string; page: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => legalPages.map((p) => ({ locale, page: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params;
  const p = legalPages.find((x) => x.slug === page);
  if (!p) return {};
  return {
    title: p.title[locale as Lang],
    robots: { index: false },
    alternates: pageAlternates(locale, { pathname: "/legal/[page]", params: { page } }),
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale, page } = await params;
  setRequestLocale(locale);
  const lang = locale as Lang;
  const p = legalPages.find((x) => x.slug === page);
  if (!p) notFound();
  const [t, format] = await Promise.all([getTranslations("LegalPage"), getFormatter()]);

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("updated", { date: format.dateTime(new Date(p.updated), { day: "numeric", month: "long", year: "numeric" }) })} title={p.title[lang]} />
        <div className="container-wide max-w-[860px] !mx-0 grid gap-10 py-12 md:py-20">
          {p.sections.map((s) => (
            <section key={s.heading.en} className="grid gap-3 border-t border-line pt-6">
              <h2 className="text-[22px] font-medium leading-[1.15] text-ink">{s.heading[lang]}</h2>
              {s.paragraphs[lang].map((para) => (
                <p key={para.slice(0, 40)} className="t-body !max-w-[70ch]"><RichText text={para} /></p>
              ))}
              {s.table ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[15px] leading-[1.45] text-charcoal">
                    <thead>
                      <tr>
                        {s.table[lang].head.map((c) => (
                          <th key={c} scope="col" className="border-b border-line py-2 pr-4 align-bottom font-medium text-ink">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table[lang].rows.map((r) => (
                        <tr key={r.join("|")}>
                          {r.map((c, i) => (
                            <td key={i} className="border-b border-line py-2 pr-4 align-top">{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {s.after?.[lang].map((para) => (
                <p key={para.slice(0, 40)} className="t-body !max-w-[70ch]"><RichText text={para} /></p>
              ))}
            </section>
          ))}
          {p.slug === "credits" ? (
            <ul className="grid gap-3 border-t border-line pt-6">
              {credits.map((c) => (
                <li key={c.source} className="text-[14px] leading-[1.5] text-charcoal">
                  <a href={c.source} className="text-ink underline-offset-4 hover:underline" rel="noopener noreferrer">{c.title}</a>
                  {" · "}{c.author}{" · "}
                  <a href={c.licenceUrl} className="underline-offset-4 hover:underline" rel="license noopener noreferrer">{c.licence}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
