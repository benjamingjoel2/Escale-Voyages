import type { Metadata } from "next";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { stories } from "@/lib/data/stories";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StoriesPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function StoriesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as "en" | "fr";
  const [t, format] = await Promise.all([getTranslations("StoriesPage"), getFormatter()]);
  const sorted = [...stories].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
        <section className="container-wide grid grid-cols-1 gap-x-6 gap-y-12 py-12 sm:grid-cols-2 md:py-20 lg:grid-cols-3">
          {sorted.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link href={{ pathname: "/stories/[slug]", params: { slug: s.slug } }} className="group grid content-start gap-4">
                <MediaSlot label={`${s.cover.file} · 3:2`} file={s.cover.file} alt={s.title[lang]} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" tone={s.tone} className="aspect-[3/2] rounded-[2px] transition-transform duration-500 ease-[var(--ease-out-soft)] motion-safe:group-hover:scale-[1.02]" />
                <span className="eyebrow">{s.category[lang]} · {t("readTime", { count: s.readingMinutes })}</span>
                <h2 className="text-[24px] font-medium leading-[1.1] tracking-[-0.01em] text-ink">{s.title[lang]}</h2>
                <p className="t-body">{s.excerpt[lang]}</p>
                <span className="text-[12.5px] text-charcoal">{format.dateTime(new Date(s.publishedAt), { day: "numeric", month: "long", year: "numeric" })}</span>
              </Link>
            </Reveal>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
