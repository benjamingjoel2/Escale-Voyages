import { defineRouting } from "next-intl/routing";

/**
 * English (default), French, German and Spanish are all first-class. Portuguese
 * ("pt") is planned for the Brazilian diaspora: add it to `locales`, create
 * `messages/pt.json`, add the pathnames below and the `pt` field to the data.
 */
export const routing = defineRouting({
  locales: ["en", "fr", "de", "es"],
  defaultLocale: "en",
  localePrefix: "always",
  // Owner rule: never redirect by browser language; "/" always opens English.
  localeDetection: false,
  // No language cookie: the URL carries the locale, so the site sets no cookies.
  localeCookie: false,
  // hreflang links are emitted per page in generateMetadata (lib/seo.ts); the
  // header variant would point x-default at the unprefixed, redirecting path.
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/journeys": { en: "/journeys", fr: "/voyages", de: "/reisen", es: "/viajes" },
    "/journeys/[slug]": { en: "/journeys/[slug]", fr: "/voyages/[slug]", de: "/reisen/[slug]", es: "/viajes/[slug]" },
    "/destinations": { en: "/destinations", fr: "/destinations", de: "/reiseziele", es: "/destinos" },
    "/destinations/[slug]": {
      en: "/destinations/[slug]",
      fr: "/destinations/[slug]",
      de: "/reiseziele/[slug]",
      es: "/destinos/[slug]",
    },
    "/return": { en: "/return", fr: "/retour", de: "/rueckkehr", es: "/retorno" },
    "/festivals": { en: "/festivals", fr: "/festivals", de: "/feste", es: "/festivales" },
    "/practical": { en: "/practical", fr: "/infos-pratiques", de: "/praktische-infos", es: "/informacion-practica" },
    "/stories": { en: "/stories", fr: "/recits", de: "/geschichten", es: "/relatos" },
    "/stories/[slug]": { en: "/stories/[slug]", fr: "/recits/[slug]", de: "/geschichten/[slug]", es: "/relatos/[slug]" },
    "/about": { en: "/about", fr: "/a-propos", de: "/ueber-uns", es: "/sobre-nosotros" },
    "/enquire": { en: "/enquire", fr: "/demande", de: "/anfrage", es: "/consulta" },
    "/dates-prices": { en: "/dates-prices", fr: "/dates-et-prix", de: "/termine-und-preise", es: "/fechas-y-precios" },
    "/book": { en: "/book", fr: "/reserver", de: "/buchen", es: "/reservar" },
    "/book/[slug]": { en: "/book/[slug]", fr: "/reserver/[slug]", de: "/buchen/[slug]", es: "/reservar/[slug]" },
    "/book/confirmation": { en: "/book/confirmation", fr: "/reserver/confirmation", de: "/buchen/bestaetigung", es: "/reservar/confirmacion" },
    "/legal/[page]": { en: "/legal/[page]", fr: "/legal/[page]", de: "/rechtliches/[page]", es: "/legal/[page]" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
