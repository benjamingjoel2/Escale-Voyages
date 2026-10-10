/**
 * Sanity connection settings. The site runs without them (placeholder data
 * in lib/data), and switches to the CMS as soon as a project ID is set.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-10-01";
export const studioBasePath = "/studio";

export const sanityEnabled = projectId.length > 0;
