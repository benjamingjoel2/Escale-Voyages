# Escale Voyages

Website for Escale Voyages, a premium tour agency in Cotonou covering the whole of Benin Republic. French and English, mobile-first, built to be fast on West African networks.

Stack: Next.js (App Router, Cache Components), TypeScript, Tailwind CSS v4, next-intl, Framer Motion, Lenis. Sanity CMS and payments arrive in later phases. Deploys on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en or /fr
npm run build      # production build
npm run lint
```

## Where things live

| Path | What |
| --- | --- |
| `app/[locale]/` | Routes. The locale segment is the root param. |
| `components/layout/` | Nav, footer, mobile menu, locale switcher, WhatsApp button, smooth scroll, weather. |
| `components/home/` | Homepage sections in page order. |
| `components/journeys/` | Journey card, filters, booking panel, route map, departures table. |
| `components/ui/` | `MediaSlot` (photo or placeholder), `Reveal` (scroll reveal). |
| `i18n/` | Routing (localised pathnames), navigation helpers, request config. |
| `messages/` | `en.json`, `fr.json`. Every string lives here. |
| `lib/` | Site constants, currency, weather, journey filters, placeholder data (`lib/data/`), media manifest. |
| `public/media/` | Development photography with `CREDITS.md`. |

See `CLAUDE.md` for the brand, design system and conventions.

## Media

Photographs in `public/media` are freely licensed stand-ins from Wikimedia Commons, credited in `public/media/CREDITS.md`, until commissioned photography replaces them. Any slot without a file renders a labelled placeholder showing the filename and dimensions to shoot. The hero expects `hero-loop.mp4` (16:9, under 8 s and 2 MB) with `hero-poster.jpg` at 2400×1350.
