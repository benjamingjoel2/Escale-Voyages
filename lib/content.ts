import { cacheLife, cacheTag } from "next/cache";
import { client } from "./sanity/client";
import {
  destinationsQuery,
  journeyBySlugQuery,
  journeysQuery,
  siteSettingsQuery,
} from "./sanity/queries";
import { journeys as placeholderJourneys, type Journey } from "./data/journeys";
import { destinations as placeholderDestinations, type Destination } from "./data/destinations";
import { site } from "./site";

/**
 * Content layer. Reads Sanity when a project is configured, otherwise the
 * placeholder data in lib/data. Everything is cached and tagged so the
 * Sanity webhook (app/api/revalidate) can refresh it on publish.
 */

/** Runs a Sanity query, falling back to placeholder data if the API fails. */
async function safeFetch<T>(run: () => Promise<T>, fallback: T, what: string): Promise<T> {
  try {
    return await run();
  } catch (err) {
    console.error(`[content] Sanity fetch failed for ${what}; using placeholder data.`, err);
    return fallback;
  }
}

function toCoords(lat: number, lng: number) {
  const f = (v: number, pos: string, neg: string) => {
    const a = Math.abs(v);
    const d = Math.floor(a);
    const m = Math.round((a - d) * 60);
    return `${d}°${String(m).padStart(2, "0")}′ ${v >= 0 ? pos : neg}`;
  };
  return `${f(lat, "N", "S")}, ${f(lng, "E", "W")}`;
}

export async function getJourneys(): Promise<Journey[]> {
  "use cache";
  cacheLife("days");
  cacheTag("journeys", "content");
  const sanity = client;
  if (!sanity) return placeholderJourneys;
  const rows = await safeFetch(() => sanity.fetch<Journey[]>(journeysQuery), [], "journeys");
  return rows.length ? rows : placeholderJourneys;
}

export async function getJourney(slug: string): Promise<Journey | undefined> {
  "use cache";
  cacheLife("days");
  cacheTag("journeys", `journey:${slug}`, "content");
  const sanity = client;
  if (!sanity) return placeholderJourneys.find((j) => j.slug === slug);
  const row = await safeFetch(
    () => sanity.fetch<Journey | null>(journeyBySlugQuery, { slug }),
    null,
    `journey ${slug}`,
  );
  return row ?? placeholderJourneys.find((j) => j.slug === slug);
}

type DestinationRow = Omit<Destination, "coords"> & { coords?: string | null };

export async function getDestinations(): Promise<Destination[]> {
  "use cache";
  cacheLife("days");
  cacheTag("destinations", "content");
  const sanity = client;
  if (!sanity) return placeholderDestinations;
  const rows = await safeFetch(() => sanity.fetch<DestinationRow[]>(destinationsQuery), [], "destinations");
  if (!rows.length) return placeholderDestinations;
  return rows.map((d) => ({ ...d, coords: d.coords ?? toCoords(d.lat, d.lng) }));
}

export type SiteSettings = {
  whatsappNumber: string;
  phone: string;
  guestEmail: string;
  tradeEmail: string;
  pressEmail: string;
  founderName?: string;
  founderRole?: Record<"en" | "fr", string>;
  founderQuote?: Record<"en" | "fr", string>;
  closingQuote?: Record<"en" | "fr", string>;
  closingQuoteSource?: Record<"en" | "fr", string>;
  social: { instagram?: string; tiktok?: string; youtube?: string; linkedin?: string };
};

const defaultSettings: SiteSettings = {
  whatsappNumber: site.whatsappNumber,
  phone: site.phone,
  guestEmail: site.email.guest,
  tradeEmail: site.email.trade,
  pressEmail: site.email.press,
  social: { ...site.social },
};

export async function getSiteSettings(): Promise<SiteSettings> {
  "use cache";
  cacheLife("days");
  cacheTag("settings", "content");
  const sanity = client;
  if (!sanity) return defaultSettings;
  const row = await safeFetch(
    () => sanity.fetch<Partial<SiteSettings> | null>(siteSettingsQuery),
    null,
    "site settings",
  );
  if (!row) return defaultSettings;
  return {
    ...defaultSettings,
    ...Object.fromEntries(Object.entries(row).filter(([, v]) => v != null && v !== "")),
    social: { ...defaultSettings.social, ...(row.social ?? {}) },
  };
}
