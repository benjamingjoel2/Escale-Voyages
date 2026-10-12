# Escale Voyages

Website for Escale Voyages, a premium tour agency in Cotonou covering the whole of Benin Republic. French and English, mobile-first, built to be fast on West African networks.

Stack: Next.js (App Router, Cache Components), TypeScript, Tailwind CSS v4, next-intl, Framer Motion, Lenis, Sanity CMS, a payment abstraction (mock, FedaPay, KkiaPay, Stripe). Deploys on Vercel: `main` is live at https://escale-voyages.vercel.app and every pull request gets a preview deployment.

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
| `components/layout/` | Nav, footer, mobile menu, locale switcher, WhatsApp button, smooth scroll, weather. |
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
