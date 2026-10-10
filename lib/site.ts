/**
 * Site-wide constants. Values marked PLACEHOLDER are replaced before launch.
 */
export const site = {
  name: "Escale Voyages",
  shortName: "Escale",
  /** PLACEHOLDER: confirm the domain the owner registers. */
  domain: "escale-voyages.com",
  url: "https://escale-voyages.com",
  /** PLACEHOLDER: Benin numbers are 10 digits since 2024 and start with 01. */
  whatsappNumber: "2290100000000",
  email: {
    guest: "hello@escale-voyages.com",
    trade: "trade@escale-voyages.com",
    press: "press@escale-voyages.com",
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
