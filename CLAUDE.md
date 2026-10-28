# Escale Voyages

Premium tour agency website for Benin Republic, based in Cotonou. Next.js App Router, TypeScript, Tailwind v4, next-intl (FR/EN), Lenis (desktop only, loaded on demand), Sanity (Phase 5), Vercel (live at https://escale-voyages.vercel.app). No animation library: motion is CSS plus a few lines of requestAnimationFrame.

## Brand

- **Name**: Escale Voyages. Wordmark: "Escale" roman, "Voyages" italic, in the display serif. Handles and domain use `escalevoyages` / `escale-voyages` (domain to confirm with the owner). Email addresses follow the owner's format `{brand}@tourground.com`: `escalevoyages@tourground.com` for guest, trade and press until they are split.
- **Positioning**: the premium, modern way to experience **the whole of Benin**, from the Atlantic coast to the Niger river: the coast and lagoons, the Kingdoms of Dahomey, the Collines, the Bariba north, the Atakora and Tata Somba country, Pendjari and W wildlife, living Vodun, Return heritage journeys. Never frame the site around one place or one kingdom.
- **Tagline**: "The whole of Benin, at your pace" / "Tout le Bénin, à votre rythme". Hero eyebrow: "West Africa's best-kept secret". The giant hero word is the destination, **Bénin**, as White Desert's is "Antarctica"; the brand sits in the nav.
- **Voice**: confident, story-led, respectful of history and of Vodun as a living religion. Never exoticise it, never treat it as spectacle. We visit as guests.
- **Signature market**: diaspora heritage ("Return"). It sits high on the homepage, straight after the destinations.
- **No guides.** Escale Voyages has no guides of its own and the copy must never claim them. The agency plans and runs the journey, a driver travels with the group, the Cotonou team is on WhatsApp, and each place is explained by the people who live there (temple elders, families, park rangers, hosts).

## Design direction (approved)

The site duplicates the **White Desert page grammar** (white-desert.com) with Escale Voyages content: structure, layout, section order, motion, palette and visual grammar. **Never** copy their assets, copy text or code.

Homepage section order: video hero → intro statement → season banner → journey cards (price, season, duration, one-line pitch, coordinates) → founder quote → horizontal-scroll destination cards with region eyebrow and bracketed GPS coordinates → proverb → route code (COO – NAE) → journey map with three stats → Return feature → planning CTA → How it works (6 steps, slide-out panel) → trust row → footer with contact groups, link columns, three large buttons, closing quote, legal.

**Owner preference: content is left-aligned. No centred blocks. The page is wide: `container-wide` is fluid up to 1920px with a 2.5vw gutter, so wide monitors are filled edge to edge like the reference site.** Hero title sits bottom-left. Section headings, quotes and CTAs start at the left edge of the container.

### Tokens (app/globals.css)

- **Black site** (owner decision, October 2026). `ink` is always the foreground and `paper` always the ground, so write components with the tokens, never literal colours: ink `#F2F2F2` (off-white, all headings), charcoal `#A9A9AD` (body), paper `#000000` (true black), grey `#111111` (footer, large buttons), accent `#C94714` (orange for button fills and hovers; 4.8:1 with white text), accent-bright `#FF8A5B` (orange text on black, e.g. notices and errors), lagoon `#3A97A6`, sand `#0C0C0C` (haze). Text on translucent and orange buttons is `--on-glass` / `--on-accent` (white). `text-white` is only for copy laid over photographs.
- Buttons: 40px, 2px radius, translucent ink glass; on hover turn accent and 5px radius. Large footer buttons are 56px grey. There is no "Watch film" button (removed on request).
- Type: Oswald 300 uppercase for the giant hero word and route code (`font-condensed`), Instrument Serif italic for statements and quotes (`font-display`), Figtree for everything else (`font-sans`). Eyebrows are 11px uppercase, 0.12em tracking, 60% ink.
- Haze (`.haze` utility) is the mist transition between the hero and the intro, fading into the black ground. Pure CSS.

### Media

- `MediaSlot` renders the real photo through `next/image` when the file exists in `public/media` (listed in `lib/media.ts`, generated), otherwise a toned gradient with the filename and aspect ratio to commission.
- Development photography comes from Wikimedia Commons under CC licences; every file is credited in `public/media/CREDITS.md`. Keep that file accurate when files are swapped. These are stand-ins until the owner's photographer delivers; W National Park has no usable image yet.
- To add or replace media: drop the JPEG in `public/media`, run `npm run media` (regenerates `lib/media.ts`) and update `CREDITS.md`. Owner-supplied frames (October 2026) now fill the hero, season banner, founder, Return, about and most coast/south slots; see the first table in `CREDITS.md`.

### Motion

Slow and few. Hero parallax (rAF in `HeroMedia`), staggered reveals on scroll (`Reveal`, CSS-driven, visible without JS and under reduced motion), 3% image scale on card hover, haze transitions. Lenis smooth scroll runs only on fine-pointer devices with motion allowed; touch devices get native scroll.

## Conventions

- Routes live under `app/[locale]/`. Locale segment is the root param; `generateStaticParams` returns both locales. Use `Link`, `usePathname`, `redirect` from `@/i18n/navigation`, never from `next/link` or `next/navigation`, so localized pathnames (`/journeys` ↔ `/voyages`) work. Add new routes to `i18n/routing.ts` pathnames in both languages.
- All copy goes through `messages/en.json` and `messages/fr.json`. Both languages are first-class: add keys to both files in the same change. Only the namespaces listed in `CLIENT_NAMESPACES` (`app/[locale]/layout.tsx`) reach the browser; add a namespace there when a `"use client"` component starts using it. Portuguese is wired to be added later (see `i18n/routing.ts`).
- Server Components by default. `"use client"` only for motion, Lenis, menus, panels, filters.
- `cacheComponents` is on. Anything reading request data (`searchParams`, headers) goes inside `<Suspense>`; cacheable fetches use `"use cache"` + `cacheLife` (see `lib/weather.ts`, `lib/time.ts`). Never call `new Date()` in a prerendered component.
- Prices are stored in FCFA (XOF). Display with `formatXof` and an approximate conversion via `formatConverted` (`lib/currency.ts`). Converted figures always show "≈".
- Placeholder data in `lib/data/` until Sanity (Phase 5). Keep the shapes CMS-ready. Journeys carry full detail (itinerary, stops, inclusions, departures, FAQ, gallery). Destinations carry a `region` (coast, south, centre, north) and cover the whole country.
- Stays (`lib/data/stays.ts`, Sanity `stay`): each journey lists `stays` slugs in order; `StaysSection` renders "Where you stay" on the journey page with the first image as the card and up to four more beneath. Copy never names a hotel; it describes the place.
- Journey filters (`lib/journeys.ts`) are URL search params: `type`, `duration`, `budget`, `month`. Parse with `parseFilters`; unknown values are ignored.
- Coordinates: decimal degrees in data, display string to the nearest minute. Verify against OpenStreetMap before launch.
- WhatsApp: floating button sitewide with a prefilled message per page (`whatsappUrl` in `lib/site.ts`). Number is a placeholder until supplied.
- Accessibility: WCAG AA contrast, visible focus rings (accent), keyboard-reachable menus and panels, alt text required on every image. Re-run `node scratch/axe.mjs`-style checks with `@axe-core/playwright` (installed as a dev dependency) after UI changes; the audit must stay at zero violations.
- Soft 404s: `proxy.ts` checks journey, destination, story and legal slugs against `lib/slugs.ts` and answers unknown ones with a self-contained 404 page straight from the proxy (Cache Components would otherwise stream the route shell with status 200 on the first request). The check is skipped once `NEXT_PUBLIC_SANITY_PROJECT_ID` is set; revisit it then (fetch the slug list from Sanity in the proxy, or accept first-hit soft 404s).
- SEO: every indexable page passes its route to `pageAlternates` in `generateMetadata` so canonical and hreflang stay correct; new routes also go into `app/sitemap.ts`. Share images: pass the page's photo through `ogImageFor`; the default is the generated image in `app/[locale]/opengraph-image.tsx`. The canonical origin is `NEXT_PUBLIC_SITE_URL`.
- Performance targets: Lighthouse 90+ on mobile over 4G. `next/image` everywhere, video poster only on mobile and when `saveData` is on, lazy-load below-the-fold media, keep client bundles small.
- Facts to verify before launch: Cotonou→Natitingou road distance and time (sources range 550–645 km, 6–10 h), Vodun Days 2027 dates (2026 ran 8–10 Jan), yellow-fever entry rule (ministry circular of April 2026 says no longer checked at entry).

## Content (Sanity)

- Schemas live in `sanity/schemaTypes/`: `journey`, `destination`, `story`, `festival`, `stay`, `siteSettings` (singleton), `enquiry` and `bookingRequest` (written by the Phase 6 forms). Bilingual fields use the `localeString`, `localeText`, `localeStringList`, `localeBlock` objects; both languages are required. Every image is an `imageWithAlt` with required alt text.
- The embedded Studio is at `/studio` (`app/studio/[[...tool]]`), with its own root layout. Config in `sanity.config.ts`, sidebar in `sanity/structure.ts`.
- Pages read content through `lib/content.ts` only (`getJourneys`, `getJourney`, `getDestinations`, `getStays`, `getSiteSettings`). Each is `"use cache"` with tags (`journeys`, `journey:<slug>`, `destinations`, `stays`, `settings`, `content`). With no `NEXT_PUBLIC_SANITY_PROJECT_ID` the layer returns `lib/data` placeholders, so the site always builds.
- GROQ in `lib/sanity/queries.ts` projects documents into the same TypeScript shapes as `lib/data`, so components do not know where content came from. CMS images arrive as `image.src` (Sanity CDN); `MediaSlot` prefers `src` over the local `file`.
- `app/api/revalidate` is the Sanity publish webhook (secret in `SANITY_REVALIDATE_SECRET`); it revalidates by tag.
- `npm run seed` (with `SANITY_API_WRITE_TOKEN`) uploads `public/media` and creates the placeholder journeys, destinations and settings in the dataset. Re-runnable.
- Env vars are listed in `.env.example`.

## Forms, booking and payments

- Enquiry form (`components/forms/EnquiryForm.tsx`) posts to the `submitEnquiry` server action: zod validation, honeypot, writes an `enquiry` document when `SANITY_API_WRITE_TOKEN` is set (otherwise logs), emails owner and guest through `lib/email.ts` (Resend; logs without `RESEND_API_KEY`).
- Booking flow (`components/booking/BookingFlow.tsx`, routes `/book`, `/book/[slug]`, `/book/confirmation`): five steps, dates → travellers → extras → contact → review. Prices are recomputed server-side in `lib/bookings.ts` (30% deposit). The `submitBooking` action creates a `bookingRequest`, then either calls the payment provider or records a call request, and redirects to the confirmation page with the reference.
- Payments (`lib/payments/`): one `PaymentProvider` interface, adapters for mock, FedaPay, KkiaPay and Stripe. `getProvider(method)` picks by env keys and falls back to the mock, which approves instantly and shows a "test mode" notice. Webhooks land at `/api/webhooks/payments?provider=…` and update the booking's payment status in Sanity.
- Currency: `CurrencyProvider` keeps the visitor's display currency in localStorage; `<Approx xof={…} />` renders the converted figure, FCFA stays primary. Switcher lives in the footer.
- Festival countdown is a client component on a one-second `useSyncExternalStore` tick; Playwright screenshots of that page need `page.clock.install()`.

## Phases

1. Plan, brand, design system ✅
2. Layout shell, nav, footer, i18n ✅
3. Homepage ✅
4. Journeys index + detail, dates & prices ✅
5. Sanity schemas + studio ✅ (site runs on placeholder data until a project ID is set)
6. Booking + payments ✅ (mock adapter live; FedaPay, KkiaPay and Stripe adapters stubbed behind env keys; Stripe needs a non-Benin entity)
7. Remaining pages ✅ (destinations, return, festivals, practical, stories, about, enquire, legal)
8. Performance, SEO, accessibility ✅ (sitemap + robots, per-page canonical and hreflang via `lib/seo.ts`, Open Graph images, TravelAgency/WebSite/Breadcrumb JSON-LD; zero axe violations on 16 pages; fonts trimmed to four files, no animation library, Lenis lazy and desktop-only, client messages limited to `CLIENT_NAMESPACES`)

After each phase: summarise what was built, what is left, what is needed from the owner.

**Owner rule: merge without asking.** When a change is built, verified and pushed, mark the PR ready and merge it yourself; never ask the owner to merge or wait for them to. Then restart the working branch from `main`.

**Owner rule: after every build, give a preview.** The repo is connected to Vercel (project `escale-voyages`, team `benjamin-sevo`, production branch `main`): every push to a branch gets a preview deployment and every merge to `main` goes live at https://escale-voyages.vercel.app. After a build, put the live URL (or the branch's preview URL) in the reply. `scripts/preview-snapshot.mjs` remains as a fallback static preview if Vercel is ever unavailable.

## Commands

```
npm run dev      # local dev
npm run build    # production build (also runs typegen for route types)
npm run lint     # eslint
```
