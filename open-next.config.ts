// OpenNext adapter config for Cloudflare. Not used by "next build" or Vercel.
//
// Two targets:
// - Workers (wrangler.jsonc): KV incremental cache, Durable Object tag cache and the
//   memory queue, so ISR and the Sanity revalidate webhook work.
// - Cloudflare Pages (`npm run cf-pages`, CF_PAGES=1 in the Pages build): Pages cannot
//   host Durable Objects or a self-referencing service, so prerendered pages are served
//   read-only from the static assets. Fine while content comes from lib/data; revisit
//   when Sanity goes live (or move the site to Workers).
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";
import doShardedTagCache from "@opennextjs/cloudflare/overrides/tag-cache/do-sharded-tag-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

const pages = Boolean(process.env.CF_PAGES);

export default defineCloudflareConfig(
  pages
    ? { incrementalCache: staticAssetsIncrementalCache, enableCacheInterception: true }
    : {
        incrementalCache: kvIncrementalCache,
        tagCache: doShardedTagCache({ baseShardSize: 4 }),
        queue: memoryQueue,
      },
);
