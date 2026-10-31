// OpenNext adapter config for Cloudflare Workers (see wrangler.jsonc).
// Not used by "next build" or Vercel.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import doShardedTagCache from "@opennextjs/cloudflare/overrides/tag-cache/do-sharded-tag-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

export default defineCloudflareConfig({
  // Incremental (ISR / "use cache") cache in Workers KV (binding NEXT_INC_CACHE_KV).
  // KV is available on every plan; no R2 needed.
  incrementalCache: kvIncrementalCache,
  // Tag cache in a Durable Object defined by this worker, so the Sanity revalidate
  // webhook (revalidateTag) works on Workers. Needs no separate Cloudflare resource.
  tagCache: doShardedTagCache({ baseShardSize: 4 }),
  // ISR: stale pages (30 min revalidate) are regenerated in the background by
  // calling the Worker itself through WORKER_SELF_REFERENCE. The default "dummy"
  // queue throws, so pages would never refresh.
  queue: memoryQueue,
});
