import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityEnabled } from "@/sanity/env";

/**
 * Read client for the site. Uses the CDN for published content; a read
 * token is only needed for private datasets.
 */
export const client = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
      perspective: "published",
    })
  : null;
