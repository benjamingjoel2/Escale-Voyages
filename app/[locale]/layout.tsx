import type { Metadata } from "next";
import { Figtree, Instrument_Serif, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "../globals.css";

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
  variable: "--font-oswald",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("homeTitle"),
      template: `%s · ${t("siteName")}`,
    },
    description: t("homeDescription"),
    applicationName: site.name,
    keywords: [
      "Danxomè",
      "Danxome",
      "Benin",
      "Bénin",
      "Dahomey",
      "Ouidah",
      "Abomey",
      "Ganvié",
      "Pendjari",
      "Vodun",
      "tour",
      "voyage",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "fr" ? "fr_BJ" : "en_GB",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${figtree.variable} ${instrument.variable} ${oswald.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Marks JS as running before first paint so scroll reveals can start hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <NextIntlClientProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
