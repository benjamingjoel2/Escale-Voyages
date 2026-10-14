import { defineRouting } from "next-intl/routing";

/**
 * French and English are both first-class. Portuguese ("pt") is planned for the
 * Brazilian diaspora: add it to `locales`, create `messages/pt.json` and add the
 * pathnames below, nothing else needs to change.
 */
export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
  // hreflang links are emitted per page in generateMetadata (lib/seo.ts); the
  // header variant would point x-default at the unprefixed, redirecting path.
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/journeys": { en: "/journeys", fr: "/voyages" },
    "/journeys/[slug]": { en: "/journeys/[slug]", fr: "/voyages/[slug]" },
    "/destinations": { en: "/destinations", fr: "/destinations" },
    "/destinations/[slug]": {
      en: "/destinations/[slug]",
      fr: "/destinations/[slug]",
    },
    "/return": { en: "/return", fr: "/retour" },
    "/festivals": { en: "/festivals", fr: "/festivals" },
    "/practical": { en: "/practical", fr: "/infos-pratiques" },
    "/stories": { en: "/stories", fr: "/recits" },
    "/stories/[slug]": { en: "/stories/[slug]", fr: "/recits/[slug]" },
    "/about": { en: "/about", fr: "/a-propos" },
    "/enquire": { en: "/enquire", fr: "/demande" },
    "/dates-prices": { en: "/dates-prices", fr: "/dates-et-prix" },
    "/book": { en: "/book", fr: "/reserver" },
    "/book/[slug]": { en: "/book/[slug]", fr: "/reserver/[slug]" },
    "/book/confirmation": { en: "/book/confirmation", fr: "/reserver/confirmation" },
    "/legal/[page]": { en: "/legal/[page]", fr: "/legal/[page]" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
