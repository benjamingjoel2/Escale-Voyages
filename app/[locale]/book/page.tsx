import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Link } from "@/i18n/navigation";
import { getJourneys } from "@/lib/content";
import { formatXof } from "@/lib/currency";
import type { Lang } from "@/lib/data/journeys";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Booking" });
  return { title: t("metaTitle"), robots: { index: false } };
}

export default async function BookIndex({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as Lang;
  const [t, tj, journeys] = await Promise.all([getTranslations("Booking"), getTranslations("Journeys"), getJourneys()]);

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("chooseEyebrow")} title={t("chooseTitle")} intro={t("chooseIntro")} />
        <section className="container-wide grid gap-2 py-12 md:py-20">
          {journeys.map((j) => (
            <Link key={j.slug} href={{ pathname: "/book/[slug]", params: { slug: j.slug } }} className="group grid grid-cols-[72px_1fr_auto] items-center gap-4 border-b border-line py-4 md:grid-cols-[96px_1fr_auto_auto]">
              <MediaSlot label={j.image.file} file={j.image.file} src={j.image.src} alt="" sizes="96px" tone={j.tone} className="aspect-[3/4] rounded-[2px]" />
              <div className="min-w-0"><b className="block text-[18px] font-medium text-ink group-hover:text-accent">{j.title[lang]}</b><span className="text-[13px] text-charcoal">{tj("days", { count: j.days })} · {j.season[lang]}</span></div>
              <span className="hidden tabular-nums text-ink md:block">{tj("fromPrice", { amount: formatXof(j.priceXof) })}</span>
              <span className="btn btn-inline h-9">{t("next")}</span>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
