import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityEnabled } from "@/sanity/env";

/**
 * Write client for forms and webhooks. Needs an editor token. Server only.
 * Returns null when Sanity or the token is not configured; callers then
 * log the record and carry on, so the forms work in every environment.
 */
const token = process.env.SANITY_API_WRITE_TOKEN;

export const writeClient =
  sanityEnabled && token
    ? createClient({ projectId, dataset, apiVersion, token, useCdn: false })
    : null;
