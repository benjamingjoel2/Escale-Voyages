/**
 * Seeds the Sanity dataset with the placeholder content from lib/data and
 * uploads the development photos from public/media as their images.
 *
 *   SANITY_API_WRITE_TOKEN=... npm run seed
 *
 * Safe to re-run: documents are keyed by slug and created-or-replaced.
 */
import { createClient } from "@sanity/client";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { journeys } from "../lib/data/journeys";
import { destinations } from "../lib/data/destinations";
import { stays } from "../lib/data/stays";
import { site } from "../lib/site";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN first.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2026-10-01", useCdn: false });
const mediaDir = path.join(process.cwd(), "public", "media");
const assetCache = new Map<string, string>();

async function uploadImage(file: string, alt: { en: string; fr: string }) {
  const full = path.join(mediaDir, file);
  if (!existsSync(full)) return undefined;
  let assetId = assetCache.get(file);
  if (!assetId) {
    const asset = await client.assets.upload("image", createReadStream(full), { filename: file });
    assetId = asset._id;
    assetCache.set(file, assetId);
    console.log("uploaded", file);
  }
  return { _type: "imageWithAlt", asset: { _type: "reference", _ref: assetId }, alt };
}

const key = () => Math.random().toString(36).slice(2, 10);

async function main() {
  // Destinations first so journeys can reference them.
  for (const [i, d] of destinations.entries()) {
    const image = await uploadImage(d.image.file, d.name);
    await client.createOrReplace({
      _id: `destination-${d.slug}`,
      _type: "destination",
      name: d.name,
      slug: { _type: "slug", current: d.slug },
      pitch: d.pitch,
      region: d.region,
      location: { _type: "geopoint", lat: d.lat, lng: d.lng },
      coords: d.coords,
      tone: d.tone,
      order: (i + 1) * 10,
      ...(image ? { image } : {}),
    });
    console.log("destination", d.slug);
  }

  for (const [i, s] of stays.entries()) {
    const images = [];
    for (const im of s.images) {
      const alt = typeof im.alt === "object" ? im.alt : s.name;
      const up = await uploadImage(im.file, alt);
      if (up) images.push({ ...up, _key: key() });
    }
    await client.createOrReplace({
      _id: `stay-${s.slug}`,
      _type: "stay",
      name: s.name,
      slug: { _type: "slug", current: s.slug },
      place: s.place,
      pitch: s.pitch,
      body: s.body,
      tone: s.tone,
      order: (i + 1) * 10,
      images,
    });
    console.log("stay", s.slug);
  }

  for (const [i, j] of journeys.entries()) {
    const image = await uploadImage(j.image.file, j.title);
    await client.createOrReplace({
      _id: `journey-${j.slug}`,
      _type: "journey",
      title: j.title,
      slug: { _type: "slug", current: j.slug },
      pitch: j.pitch,
      summary: j.summary,
      type: j.type,
      season: j.season,
      months: j.months,
      days: j.days,
      groupMax: j.groupMax,
      highlights: j.highlights,
      stops: j.stops.map((s) => ({ _type: "reference", _key: key(), _ref: `destination-${s}` })),
      stays: j.stays.map((s) => ({ _type: "reference", _key: key(), _ref: `stay-${s}` })),
      itinerary: j.itinerary.map((d) => ({ _type: "day", _key: key(), ...d })),
      included: j.included,
      excluded: j.excluded,
      faq: j.faq.map((f) => ({ _type: "qa", _key: key(), ...f })),
      priceXof: j.priceXof,
      departures: j.departures.map((d) => ({ _type: "departure", _key: key(), ...d })),
      coords: j.coords,
      tone: j.tone,
      order: (i + 1) * 10,
      ...(image ? { image } : {}),
    });
    console.log("journey", j.slug);
  }

  await client.createIfNotExists({
    _id: "siteSettings",
    _type: "siteSettings",
    whatsappNumber: site.whatsappNumber,
    phone: site.phone,
    guestEmail: site.email.guest,
    tradeEmail: site.email.trade,
    pressEmail: site.email.press,
    social: { ...site.social },
  });
  console.log("site settings");
  console.log("Done. Open /studio to review.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
