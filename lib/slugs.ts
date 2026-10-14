import { journeys } from "./data/journeys";
import { destinations } from "./data/destinations";
import { stories } from "./data/stories";
import { legalPages } from "./data/legal";

/**
 * Known slugs for the dynamic routes, used by proxy.ts to answer unknown
 * addresses with a real 404 on the first request. Under Cache Components an
 * unknown slug would otherwise stream the fallback shell with status 200 and
 * only the second request would see the 404 (a soft 404 for search engines).
 * The lists come from the placeholder data; when Sanity is configured the
 * check is skipped so content added in the Studio is never blocked.
 */
export const knownSlugs = {
  journey: new Set(journeys.map((j) => j.slug)),
  destination: new Set(destinations.map((d) => d.slug)),
  story: new Set(stories.map((s) => s.slug)),
  legal: new Set(legalPages.map((p) => p.slug as string)),
};
