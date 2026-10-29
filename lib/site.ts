/**
 * Site-wide constants. Values marked PLACEHOLDER are replaced before launch.
 */
export const site = {
  name: "Escale Voyages",
  shortName: "Escale",
  /** Brand subdomain of the owner's tourground.com, in the format {brand}.tourground.com. */
  domain: "escalevoyages.tourground.com",
  /** Canonical origin. NEXT_PUBLIC_SITE_URL is set on Vercel; the fallback keeps local builds correct. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://escalevoyages.tourground.com").replace(/\/$/, ""),
  /** PLACEHOLDER: Benin numbers are 10 digits since 2024 and start with 01. */
  whatsappNumber: "2290100000000",
  /** One inbox for now, in the owner's format: {brand}@tourground.com. Split into guest/trade/press later if wanted. */
  email: {
    guest: "escalevoyages@tourground.com",
    trade: "escalevoyages@tourground.com",
    press: "escalevoyages@tourground.com",
  },
  phone: "+229 01 00 00 00 00",
  social: {
    instagram: "https://instagram.com/escalevoyages",
    tiktok: "https://tiktok.com/@escalevoyages",
    youtube: "https://youtube.com/@escalevoyages",
    linkedin: "https://linkedin.com/company/escale-voyages",
  },
  /** Cotonou, for the header weather readout. */
  weatherCoords: { latitude: 6.3654, longitude: 2.4183 },
  timeZone: "Africa/Porto-Novo",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
