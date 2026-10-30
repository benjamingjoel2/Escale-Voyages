import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import { ogLocale, organizationLd } from "@/lib/seo";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CurrencyProvider } from "@/components/ui/Currency";
import "../globals.css";

// Latin covers French accents; latin-ext would double the font payload for glyphs the site never uses.
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "300",
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

export const viewport: Viewport = { themeColor: "#000000" };

/**
 * Message namespaces that Client Components read. Everything else stays on the
 * server, which keeps the hydration payload small. Add a namespace here when a
 * "use client" component starts using it.
 */
const CLIENT_NAMESPACES = [
  "Nav",
  "Footer",
  "Currency",
  "Media",
  "Filters",
  "JourneysPage",
  "Booking",
  "Enquire",
  "HowItWorks",
] as const;

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
      "Escale Voyages",
      "Benin",
      "Benin tour operator",
      "Benin travel agency",
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
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale(locale),
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
    twitter: { card: "summary_large_image" },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const clientMessages = Object.fromEntries(
    CLIENT_NAMESPACES.filter((k) => k in messages).map((k) => [k, messages[k]]),
  );

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd()) }}
        />
        <NextIntlClientProvider messages={clientMessages}>
          <CurrencyProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
