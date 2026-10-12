import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

type Href = Parameters<typeof getPathname>[0]["href"];

/** Absolute URL for a localized route. */
export function absoluteUrl(locale: Locale, href: Href) {
  return `${site.url}${getPathname({ locale, href })}`;
}

/**
 * Canonical and hreflang links for one page. Every indexable page passes its
 * own route so that `/en/journeys` points at `/fr/voyages` and vice versa.
 */
export function pageAlternates(locale: string, href: Href): NonNullable<Metadata["alternates"]> {
  const path = (l: Locale) => getPathname({ locale: l, href });
  const languages = Object.fromEntries(routing.locales.map((l) => [l, path(l)]));
  return {
    canonical: path(locale as Locale),
    languages: { ...languages, "x-default": path(routing.defaultLocale) },
  };
}

/** Open Graph image entry for a local media file, falling back to the default OG image when the file is not on disk. */
export function ogImageFor(file: string | undefined, alt: string): NonNullable<Metadata["openGraph"]>["images"] {
  if (file && file in media) {
    return [{ url: `/media/${file}`, width: media[file].width, height: media[file].height, alt }];
  }
  return undefined;
}

export function ogLocale(locale: string) {
  return locale === "fr" ? "fr_BJ" : "en_GB";
}

/** BreadcrumbList JSON-LD for a detail page. */
export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Organization and WebSite graph, emitted once per page from the layout. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email.guest,
        telephone: site.phone,
        address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
        areaServed: { "@type": "Country", name: "Benin" },
        sameAs: Object.values(site.social),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: [...routing.locales],
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}
