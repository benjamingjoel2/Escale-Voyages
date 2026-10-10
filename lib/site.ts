/**
 * Site-wide constants. Values marked PLACEHOLDER are replaced before launch.
 */
export const site = {
  name: "Danxomè",
  nameAscii: "Danxome",
  domain: "danxome.com",
  url: "https://danxome.com",
  /** PLACEHOLDER: Benin numbers are 10 digits since 2024 and start with 01. */
  whatsappNumber: "2290100000000",
  email: {
    guest: "hello@danxome.com",
    trade: "trade@danxome.com",
    press: "press@danxome.com",
  },
  phone: "+229 01 00 00 00 00",
  social: {
    instagram: "https://instagram.com/danxome",
    tiktok: "https://tiktok.com/@danxome",
    youtube: "https://youtube.com/@danxome",
    linkedin: "https://linkedin.com/company/danxome",
  },
  /** Cotonou, for the header weather readout. */
  weatherCoords: { latitude: 6.3654, longitude: 2.4183 },
  timeZone: "Africa/Porto-Novo",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
