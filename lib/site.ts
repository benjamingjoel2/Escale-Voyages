/**
 * Site-wide constants.
 */
export const site = {
  name: "Escale Voyages",
  shortName: "Escale",
  /** Brand subdomain of the owner's tourground.com, in the format {brand}.tourground.com. */
  domain: "escalevoyages.tourground.com",
  /** Canonical origin. NEXT_PUBLIC_SITE_URL is set on Vercel; the fallback keeps local builds correct. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://escalevoyages.tourground.com").replace(/\/$/, ""),
  /** One inbox for now, in the owner's format: {brand}@tourground.com. Split into guest/trade/press later if wanted. */
  email: {
    guest: "escalevoyages@tourground.com",
    trade: "escalevoyages@tourground.com",
    press: "escalevoyages@tourground.com",
  },
  /** Business address (Areolis business centre, Cotonou). No phone number is published. */
  address: {
    name: "Areolis Business Center",
    street: "Rue 611B",
    locality: "Cotonou",
    country: "Benin",
    countryCode: "BJ",
  },
  /** Cotonou, for the header weather readout. */
  weatherCoords: { latitude: 6.3654, longitude: 2.4183 },
  timeZone: "Africa/Porto-Novo",
} as const;

/** One-line postal address for display. */
export const addressLine = `${site.address.name}, ${site.address.street}, ${site.address.locality}`;
