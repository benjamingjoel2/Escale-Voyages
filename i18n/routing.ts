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
    "/about": { en: "/about", fr: "/a-propos" },
    "/enquire": { en: "/enquire", fr: "/demande" },
    "/dates-prices": { en: "/dates-prices", fr: "/dates-et-prix" },
    "/legal/terms": { en: "/legal/terms", fr: "/legal/conditions" },
    "/legal/booking-terms": {
      en: "/legal/booking-terms",
      fr: "/legal/conditions-de-reservation",
    },
    "/legal/privacy": { en: "/legal/privacy", fr: "/legal/confidentialite" },
    "/legal/cookies": { en: "/legal/cookies", fr: "/legal/cookies" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
