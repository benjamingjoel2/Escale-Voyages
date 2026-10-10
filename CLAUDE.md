# Escale Voyages

Premium tour agency website for Benin Republic, based in Cotonou. Next.js App Router, TypeScript, Tailwind v4, next-intl (FR/EN), Framer Motion, Lenis, Sanity (Phase 5), Vercel.

## Brand

- **Name**: Escale Voyages. Wordmark: "Escale" roman, "Voyages" italic, in the display serif. Handles and domain use `escalevoyages` / `escale-voyages` (domain to confirm with the owner).
- **Positioning**: the premium, modern way to experience **the whole of Benin**, from the Atlantic coast to the Niger river: the coast and lagoons, the Kingdoms of Dahomey, the Collines, the Bariba north, the Atakora and Tata Somba country, Pendjari and W wildlife, living Vodun, Return heritage journeys. Never frame the site around one place or one kingdom.
- **Tagline**: "The whole of Benin, at your pace" / "Tout le Bénin, à votre rythme". Hero eyebrow: "West Africa's best-kept secret". The giant hero word is the destination, **Bénin**, as White Desert's is "Antarctica"; the brand sits in the nav.
- **Voice**: confident, story-led, respectful of history and of Vodun as a living religion. Never exoticise it, never treat it as spectacle. We visit as guests.
- **Signature market**: diaspora heritage ("Return"). It sits high on the homepage, straight after the destinations.

## Design direction (approved)

The site duplicates the **White Desert page grammar** (white-desert.com) with Escale Voyages content: structure, layout, section order, motion, palette and visual grammar. **Never** copy their assets, copy text or code.

Homepage section order: video hero → intro statement → season banner → journey cards (price, season, duration, one-line pitch, coordinates) → founder quote → horizontal-scroll destination cards with region eyebrow and bracketed GPS coordinates → proverb → route code (COO – NAE) → journey map with three stats → Return feature → planning CTA → How it works (6 steps, slide-out panel) → trust row → footer with contact groups, link columns, three large buttons, closing quote, legal.

**Owner preference: content is left-aligned. No centred blocks.** Hero title sits bottom-left. Section headings, quotes and CTAs start at the left edge of the container.

### Tokens (app/globals.css)

- Ink `#1F2A44` (dark blue, all headings), charcoal `#4A5061` (body), paper `#FFFFFF`, grey `#F2F2F2` (footer, large buttons), accent `#E4561F` (orange, hover only), lagoon `#1D5B66`, sand `#F4F1EC` (haze).
- Buttons: 40px, 2px radius, translucent ink glass; on hover turn accent and 5px radius. Large footer buttons are 56px grey.
- Type: Oswald 300 uppercase for the giant hero word and route code (`font-condensed`), Instrument Serif italic for statements and quotes (`font-display`), Figtree for everything else (`font-sans`). Eyebrows are 11px uppercase, 0.12em tracking, 60% ink.
- Haze (`.haze` utility) is the white mist transition between the hero and the intro. Pure CSS.

### Media

- `MediaSlot` renders the real photo through `next/image` when the file exists in `public/media` (listed in `lib/media.ts`, generated), otherwise a toned gradient with the filename and aspect ratio to commission.
- Development photography comes from Wikimedia Commons under CC licences; every file is credited in `public/media/CREDITS.md`. Keep that file accurate when files are swapped. These are stand-ins until the owner's photographer delivers; W National Park has no usable image yet.
- To add or replace media: drop the JPEG in `public/media`, regenerate `lib/media.ts` (width/height map) and update `CREDITS.md`.

### Motion

Slow and few. Hero parallax, staggered reveals on scroll (`Reveal`, CSS-driven, visible without JS and under reduced motion), 3% image scale on card hover, haze transitions. Lenis smooth scroll runs only on fine-pointer devices with motion allowed; touch devices get native scroll.

## Conventions

- Routes live under `app/[locale]/`. Locale segment is the root param; `generateStaticParams` returns both locales. Use `Link`, `usePathname`, `redirect` from `@/i18n/navigation`, never from `next/link` or `next/navigation`, so localized pathnames (`/journeys` ↔ `/voyages`) work. Add new routes to `i18n/routing.ts` pathnames in both languages.
- All copy goes through `messages/en.json` and `messages/fr.json`. Both languages are first-class: add keys to both files in the same change. Portuguese is wired to be added later (see `i18n/routing.ts`).
- Server Components by default. `"use client"` only for motion, Lenis, menus, panels, filters.
- `cacheComponents` is on. Anything reading request data (`searchParams`, headers) goes inside `<Suspense>`; cacheable fetches use `"use cache"` + `cacheLife` (see `lib/weather.ts`, `lib/time.ts`). Never call `new Date()` in a prerendered component.
- Prices are stored in FCFA (XOF). Display with `formatXof` and an approximate conversion via `formatConverted` (`lib/currency.ts`). Converted figures always show "≈".
- Placeholder data in `lib/data/` until Sanity (Phase 5). Keep the shapes CMS-ready. Journeys carry full detail (itinerary, stops, inclusions, departures, FAQ, gallery). Destinations carry a `region` (coast, south, centre, north) and cover the whole country.
- Journey filters (`lib/journeys.ts`) are URL search params: `type`, `duration`, `budget`, `month`. Parse with `parseFilters`; unknown values are ignored.
- Coordinates: decimal degrees in data, display string to the nearest minute. Verify against OpenStreetMap before launch.
- WhatsApp: floating button sitewide with a prefilled message per page (`whatsappUrl` in `lib/site.ts`). Number is a placeholder until supplied.
- Accessibility: WCAG AA contrast, visible focus rings (accent), keyboard-reachable menus and panels, alt text required on every image.
- Performance targets: Lighthouse 90+ on mobile over 4G. `next/image` everywhere, video poster only on mobile and when `saveData` is on, lazy-load below-the-fold media, keep client bundles small.
- Facts to verify before launch: Cotonou→Natitingou road distance and time (sources range 550–645 km, 6–10 h), Vodun Days 2027 dates (2026 ran 8–10 Jan), yellow-fever entry rule (ministry circular of April 2026 says no longer checked at entry).

## Content (Sanity)

- Schemas live in `sanity/schemaTypes/`: `journey`, `destination`, `story`, `festival`, `siteSettings` (singleton), `enquiry` and `bookingRequest` (written by the Phase 6 forms). Bilingual fields use the `localeString`, `localeText`, `localeStringList`, `localeBlock` objects; both languages are required. Every image is an `imageWithAlt` with required alt text.
- The embedded Studio is at `/studio` (`app/studio/[[...tool]]`), with its own root layout. Config in `sanity.config.ts`, sidebar in `sanity/structure.ts`.
- Pages read content through `lib/content.ts` only (`getJourneys`, `getJourney`, `getDestinations`, `getSiteSettings`). Each is `"use cache"` with tags (`journeys`, `journey:<slug>`, `destinations`, `settings`, `content`). With no `NEXT_PUBLIC_SANITY_PROJECT_ID` the layer returns `lib/data` placeholders, so the site always builds.
- GROQ in `lib/sanity/queries.ts` projects documents into the same TypeScript shapes as `lib/data`, so components do not know where content came from. CMS images arrive as `image.src` (Sanity CDN); `MediaSlot` prefers `src` over the local `file`.
- `app/api/revalidate` is the Sanity publish webhook (secret in `SANITY_REVALIDATE_SECRET`); it revalidates by tag.
- `npm run seed` (with `SANITY_API_WRITE_TOKEN`) uploads `public/media` and creates the placeholder journeys, destinations and settings in the dataset. Re-runnable.
- Env vars are listed in `.env.example`.

## Phases

1. Plan, brand, design system ✅
2. Layout shell, nav, footer, i18n ✅
3. Homepage ✅
4. Journeys index + detail, dates & prices ✅
5. Sanity schemas + studio ✅ (site runs on placeholder data until a project ID is set)
6. Booking + payments (mock adapters: FedaPay/KkiaPay for mobile money, Stripe or a pan-African processor for cards; Stripe needs a non-Benin entity)
7. Remaining pages (destinations, return, festivals, practical, stories, about, enquire, legal)
8. Performance, SEO (JSON-LD, OG, sitemap, hreflang), accessibility pass

After each phase: summarise what was built, what is left, what is needed from the owner.

## Commands

```
npm run dev      # local dev
npm run build    # production build (also runs typegen for route types)
npm run lint     # eslint
```
