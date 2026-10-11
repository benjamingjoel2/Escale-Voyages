import { defineQuery } from "next-sanity";

/**
 * GROQ projections shaped to the TypeScript types in lib/data so components
 * need no changes when content moves from placeholder data to the CMS.
 */
const image = (field: string) => `
  "${field}": select(
    defined(${field}.asset) => {
      "file": coalesce(${field}.asset->originalFilename, slug.current + ".jpg"),
      "width": coalesce(${field}.asset->metadata.dimensions.width, 1600),
      "height": coalesce(${field}.asset->metadata.dimensions.height, 2000),
      "src": ${field}.asset->url,
      "alt": ${field}.alt
    },
    { "file": slug.current + ".jpg", "width": 1600, "height": 2000 }
  )`;

export const journeyFields = `
  "slug": slug.current,
  title, pitch, summary, season, months, days, priceXof, groupMax, type, coords,
  "tone": coalesce(tone, "accent"),
  ${image("image")},
  ${image("heroImage")},
  highlights,
  "itinerary": coalesce(itinerary[]{ day, title, body, stay }, []),
  "stops": coalesce(stops[]->slug.current, []),
  included, excluded,
  "departures": coalesce(departures[]{ start, end, priceXof, spotsLeft } | order(start asc), []),
  "faq": coalesce(faq[]{ q, a }, []),
  "gallery": coalesce(gallery[]{
    "file": coalesce(asset->originalFilename, "gallery.jpg"),
    "width": coalesce(asset->metadata.dimensions.width, 1600),
    "height": coalesce(asset->metadata.dimensions.height, 1067),
    "src": asset->url,
    alt
  }, [])
`;

export const journeysQuery = defineQuery(`
  *[_type == "journey" && defined(slug.current)] | order(order asc, title.en asc) { ${journeyFields} }
`);

export const journeyBySlugQuery = defineQuery(`
  *[_type == "journey" && slug.current == $slug][0] { ${journeyFields} }
`);

export const destinationsQuery = defineQuery(`
  *[_type == "destination" && defined(slug.current)] | order(order asc, name.en asc) {
    "slug": slug.current,
    name, pitch, region,
    "lat": location.lat, "lng": location.lng,
    "coords": coords,
    "tone": coalesce(tone, "accent"),
    ${image("image")}
  }
`);

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    whatsappNumber, phone, guestEmail, tradeEmail, pressEmail,
    founderName, founderRole, founderQuote, closingQuote, closingQuoteSource, social
  }
`);
