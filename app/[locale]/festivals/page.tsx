import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { Countdown } from "@/components/pages/Countdown";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { getDestinations, getJourneys } from "@/lib/content";
import { festivals } from "@/lib/data/festivals";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FestivalsPage" });
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: pageAlternates(locale, "/festivals") };
}

export default async function FestivalsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as "en" | "fr";
  const [t, format, destinations, journeys] = await Promise.all([
    getTranslations("FestivalsPage"),
    getFormatter(),
    getDestinations(),
    getJourneys(),
  ]);
  const featured = festivals.find((f) => f.featured) ?? festivals[0];
  const rest = festivals.filter((f) => f.slug !== featured.slug);
  const dest = (slug: string) => destinations.find((d) => d.slug === slug);
  const journey = (slug?: string) => journeys.find((j) => j.slug === slug);
  const dateRange = (f: (typeof festivals)[number]) =>
    f.nextStart && f.nextEnd
      ? format.dateTimeRange(new Date(f.nextStart), new Date(f.nextEnd), { day: "numeric", month: "long", year: "numeric" })
      : null;

  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

        {/* Featured with countdown */}
        <section className="container-wide pt-12 md:pt-20">
          <Reveal>
            <MediaSlot
              label={`${featured.image.file} · 16:10`}
              file={featured.image.file}
              alt={featured.name[lang]}
              sizes="100vw"
              tone={featured.tone}
              className="grid min-h-[min(70vh,600px)] content-end rounded-[2px] text-white"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <div className="relative grid max-w-[640px] gap-3.5 p-5 md:p-10 lg:p-14">
                <span className="eyebrow !text-white !opacity-80">{featured.when[lang]}</span>
                <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-[0.95] tracking-[-0.02em]">{featured.name[lang]}</h2>
                <p className="t-body !text-white/85">{featured.pitch[lang]}</p>
              </div>
            </MediaSlot>
          </Reveal>
          <Reveal className="mt-8 grid gap-8 md:grid-cols-2 md:gap-14">
            <div className="grid content-start gap-4">
              <span className="eyebrow">{t("countdownTo", { name: featured.name[lang] })}</span>
              {featured.nextStart ? <Countdown to={featured.nextStart} labels={{ days: t("days"), hours: t("hours"), minutes: t("minutes"), seconds: t("seconds") }} /> : null}
              <p className="text-[13px] text-charcoal">
                {dateRange(featured)} · {featured.datesConfirmed ? t("datesConfirmed") : t("datesTbc")}
              </p>
            </div>
            <div className="grid content-start gap-4">
              <p className="t-body">{featured.body[lang]}</p>
              <dl className="grid gap-2 text-[14px]">
                <div className="flex gap-3"><dt className="eyebrow w-24 pt-1">{t("where")}</dt><dd>
                  <Link href={{ pathname: "/destinations/[slug]", params: { slug: featured.destinationSlug } }} className="font-medium text-ink hover:text-accent">{dest(featured.destinationSlug)?.name[lang]}</Link>
                </dd></div>
                {journey(featured.journeySlug) ? (
                  <div className="flex gap-3"><dt className="eyebrow w-24 pt-1">{t("journey")}</dt><dd>
                    <Link href={{ pathname: "/journeys/[slug]", params: { slug: featured.journeySlug! } }} className="font-medium text-ink hover:text-accent">{journey(featured.journeySlug)?.title[lang]}</Link>
                  </dd></div>
                ) : null}
              </dl>
            </div>
          </Reveal>
        </section>

        {/* Calendar */}
        <section className="container-wide py-16 md:py-28">
          <Reveal className="mb-8 grid gap-2.5">
            <span className="eyebrow">{t("allEyebrow")}</span>
            <h2 className="t-h2">{t("allTitle")}</h2>
          </Reveal>
          <div className="grid border-t border-line">
            {rest.map((f, i) => (
              <Reveal key={f.slug} delay={i * 0.04} className="grid gap-5 border-b border-line py-8 md:grid-cols-[260px_1fr] md:gap-10">
                <MediaSlot label={`${f.image.file} · 16:10`} file={f.image.file} alt={f.name[lang]} sizes="260px" tone={f.tone} className="aspect-[16/10] rounded-[2px]" />
                <div className="grid content-start gap-3">
                  <span className="eyebrow">{f.when[lang]}</span>
                  <h3 className="text-[26px] font-medium leading-[1.1] tracking-[-0.01em] text-ink">{f.name[lang]}</h3>
                  <p className="t-body">{f.body[lang]}</p>
                  <p className="text-[13px] text-charcoal">
                    {dateRange(f) ?? t("noDate")}{f.nextStart ? ` · ${f.datesConfirmed ? t("datesConfirmed") : t("datesTbc")}` : ""}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href={{ pathname: "/destinations/[slug]", params: { slug: f.destinationSlug } }} className="btn btn-inline h-9">{dest(f.destinationSlug)?.name[lang]}</Link>
                    {journey(f.journeySlug) ? (
                      <Link href={{ pathname: "/journeys/[slug]", params: { slug: f.journeySlug! } }} className="btn btn-inline h-9">{journey(f.journeySlug)?.title[lang]}</Link>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
