import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/pages/PageHero";
import { Link } from "@/i18n/navigation";
import { whatsappUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Booking" });
  return { title: t("confirmTitle"), robots: { index: false } };
}

async function Body({ searchParams }: { searchParams: Props["searchParams"] }) {
  const [sp, t] = await Promise.all([searchParams, getTranslations("Booking")]);
  const ref = typeof sp.ref === "string" ? sp.ref : "";
  const status = typeof sp.status === "string" ? sp.status : "call";
  return (
    <div className="grid max-w-[720px] gap-6">
      <p className="t-body text-[17px]">{status === "paid" ? t("confirmPaid") : t("confirmCall")}</p>
      {ref ? (
        <p className="text-[14px]"><span className="eyebrow">{t("reference")}</span><br /><b className="text-[22px] font-medium tabular-nums text-ink">{ref}</b></p>
      ) : null}
      <div>
        <span className="eyebrow">{t("confirmNext")}</span>
        <ol className="mt-3 grid gap-2">
          {t("confirmSteps").split(" · ").map((s, i) => (
            <li key={s} className="grid grid-cols-[28px_1fr] gap-2 text-[15px] text-ink"><span className="tabular-nums text-ink/50">{String(i + 1).padStart(2, "0")}</span>{s}</li>
          ))}
        </ol>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <Link href="/journeys" className="btn btn-lg !w-auto px-6">Journeys</Link>
        <a href={whatsappUrl(`Hello Escale Voyages, about my booking ${ref}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-solid !w-auto px-6">WhatsApp</a>
      </div>
    </div>
  );
}

export default async function ConfirmationPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Booking");
  return (
    <>
      <Nav variant="solid" />
      <main id="content" className="flex-1">
        <PageHeader eyebrow={t("chooseEyebrow")} title={t("confirmTitle")} />
        <section className="container-wide py-12 md:py-20">
          <Suspense fallback={<div className="h-40 max-w-[720px] animate-pulse rounded-[2px] bg-grey" />}>
            <Body searchParams={searchParams} />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
