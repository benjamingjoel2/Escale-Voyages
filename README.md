# Escale Voyages

Website for Escale Voyages, a premium tour agency in Cotonou covering the whole of Benin Republic. English, French, German and Spanish, mobile-first, built to be fast on West African networks.

Stack: Next.js (App Router, Cache Components), TypeScript, Tailwind CSS v4, next-intl, Lenis, Sanity CMS, a payment abstraction (mock, FedaPay, KkiaPay, Stripe). Deploys on Vercel: `main` is live at https://escalevoyages.tourground.com (https://escale-voyages.vercel.app redirects there) and every pull request gets a preview deployment.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en or /fr
npm run build      # production build
npm run lint
```

## Content

The site runs on placeholder content in `lib/data` until Sanity is configured. To switch on the CMS:

1. Create a project at sanity.io/manage and copy `.env.example` to `.env.local` with the project ID and dataset.
2. Add the site URL and `http://localhost:3000` under API → CORS origins in Sanity.
3. Run `SANITY_API_WRITE_TOKEN=<editor token> npm run seed` once to load today's journeys, destinations and photos.
4. Open `/studio` and sign in.
5. Add a webhook in Sanity pointing at `/api/revalidate` with the `SANITY_REVALIDATE_SECRET` so published changes appear within seconds.

## Where things live

| Path | What |
| --- | --- |
| `app/[locale]/` | Routes. The locale segment is the root param. |
| `components/layout/` | Nav, footer, mobile menu, locale switcher (EN · FR · DE · ES), smooth scroll, weather. |
| `components/home/` | Homepage sections in page order. |
| `components/journeys/` | Journey card, filters, booking panel, route map, departures table. |
| `components/booking/`, `components/forms/` | Booking flow and enquiry form (client), backed by server actions in `app/actions/`. |
| `lib/payments/` | Payment abstraction: mock (default), FedaPay, KkiaPay, Stripe adapters. |
| `components/ui/` | `MediaSlot` (photo or placeholder), `Reveal` (scroll reveal). |
| `i18n/` | Routing (localised pathnames), navigation helpers, request config. |
| `messages/` | `en.json`, `fr.json`. Every string lives here. |
| `lib/` | Site constants, currency, weather, journey filters, content layer (`lib/content.ts`), Sanity client and queries, placeholder data (`lib/data/`), media manifest. |
| `sanity/` | Schemas and Studio structure. `sanity.config.ts` at the root. |
| `app/studio/` | Embedded Sanity Studio. |
| `public/media/` | Development photography with `CREDITS.md`. |

See `CLAUDE.md` for the brand, design system and conventions.

## Media

Photographs in `public/media` are freely licensed stand-ins from Wikimedia Commons, credited in `public/media/CREDITS.md`, until commissioned photography replaces them. Any slot without a file renders a labelled placeholder showing the filename and dimensions to shoot. The hero expects `hero-loop.mp4` (16:9, under 8 s and 2 MB) with `hero-poster.jpg` at 2400×1350.

## Cloudflare Workers (OpenNext)

The site also builds for Cloudflare Workers with [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare). Vercel is unaffected: it ignores `wrangler.jsonc`, `open-next.config.ts`, `cloudflare/` and `public/_headers`. `npm run build` is `next build` plus the share-image `prebuild` step (below).

```
npm run cf-build   # next build + OpenNext bundle into .open-next/
npm run preview    # build, fill the local KV cache, serve on workerd (wrangler dev)
npm run deploy     # build + deploy the "escale-voyages" Worker (needs Cloudflare auth)
```

- The incremental cache is the Workers KV namespace `escale-voyages-opennext-cache` (id in `wrangler.jsonc`); `deploy` uploads the prerendered pages into it. The tag cache is a Durable Object in the same Worker (`DOShardedTagCache`), so the Sanity revalidate webhook works on Workers. No R2 or D1 needed.
- Runtime env vars (`RESEND_API_KEY`, `SANITY_*`, payment keys, `NEXT_PUBLIC_SITE_URL`) go in the Worker's settings or `wrangler secret put`; `NEXT_PUBLIC_*` must also be set at build time.
- `next/image` is optimised through the Workers `IMAGES` binding.
- `wrangler.jsonc` points `main` at `cloudflare/worker.mjs`, which loads `cloudflare/next-immediates.mjs` and then the generated `.open-next/worker.js`. **Why:** with Cache Components, Next renders a page at request time in sequential timer tasks and relies on Node's `process.nextTick` ordering to finish React's `setImmediate` work before the next task. workerd runs `nextTick` as a plain microtask, so the render was aborted half done and the request hung ("Worker's code had hung") on every cache miss, ISR regeneration and dynamic hole (`/enquire?journey=…`, journey filters). The shim gives Next a `setImmediate` that runs before pending timers, which is what Next's own patch does on Node.
- `npm run cf-build` loads `scripts/cf-keep-names.mjs` (a Node module hook, nothing in `node_modules` is edited) so OpenNext bundles the server with esbuild `keepNames`. Without it esbuild renames colliding functions (`io` → `io2`), React rejects the build-time postponed state ("Expected the resume to render <io>…") and every partially prerendered page falls back to client rendering.
- `open-next.config.ts` uses the memory queue, so stale pages (30 min) regenerate in the background through `WORKER_SELF_REFERENCE`. There is no tag cache yet, so the Sanity revalidate webhook does not refresh pages on Workers: add a D1 or Durable Object tag cache (needs a Cloudflare resource) before Sanity goes live there.
- The default share images are static files, `public/og/{locale}.png`, rendered by `scripts/og/build.tsx` before `dev` and `build` (git-ignored). `/{locale}/opengraph-image` redirects to them. A `next/og` route would put `@vercel/og` (about 0.6 MiB gzipped) in the Worker, which has to stay under 3 MiB gzipped on the Workers Free plan (it is about 2.3 MiB; `npx wrangler deploy --dry-run --outdir /tmp/cf` prints the size).
- Next logs "cannot guarantee that Cache Components will run as expected due to the current runtime's implementation of `setTimeout()`" once per isolate on Workers. That warning is expected: pages render the same as under `next start`.
