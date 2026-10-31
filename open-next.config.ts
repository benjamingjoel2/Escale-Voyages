// OpenNext adapter config for Cloudflare Workers (see wrangler.jsonc).
// Not used by "next build" or Vercel.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
  // ISR: stale pages (30 min revalidate) are regenerated in the background by
  // calling the Worker itself through WORKER_SELF_REFERENCE. The default "dummy"
  // queue throws, so pages would never refresh. Needs no extra Cloudflare resource.
  queue: memoryQueue,
});
