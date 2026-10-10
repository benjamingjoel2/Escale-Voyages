# Danxomè

Premium tour agency website for Benin Republic. Next.js App Router, TypeScript, Tailwind v4, next-intl (FR/EN), Framer Motion, Lenis, Sanity (Phase 5), Vercel.

## Brand

- **Name**: Danxomè (wordmark, with the accent). `danxome` without the accent for domain, URLs, emails, handles. Make sure "Danxome" searches resolve to us (metadata mentions both spellings).
- **Meaning**: the Fon name of the Kingdom of Dahomey. Pronounced "dan-ho-meh". Pronunciation note lives in the footer and on About.
- **Positioning**: the premium, modern way to experience Benin: kingdoms, Vodun heritage, lagoons, wildlife, coast. Luxury in standard, warm in tone, never stiff.
- **Tagline**: "Enter the kingdom" / "Entrez dans le royaume". Return section uses "Return to the source" / "Retour à la source".
- **Voice**: confident, story-led, respectful of history and of Vodun as a living religion. Never exoticise it, never treat it as spectacle. We visit as guests.
- **Signature market**: diaspora heritage ("Return"). It sits high on the homepage, straight after the journey cards.

## Design direction (approved)

The site follows the **White Desert page grammar** (white-desert.com) with Danxomè content. Mirror their structure, layout, section order, motion and visual grammar. **Never** copy their assets, copy text or code.

Homepage section order: video hero → intro statement → season banner → journey cards (price, season, duration, one-line pitch, coordinates) → founder quote → horizontal-scroll destination cards with bracketed GPS coordinates → proverb → route code (COO – NAE) → journey map with three stats → Return feature → planning CTA → How it works (6 steps, slide-out panel) → trust row → footer with contact groups, link columns, three large buttons, closing quote, pronunciation, legal.

**Owner preference: content is left-aligned. No centred blocks.** Hero title sits bottom-left. Section headings, quotes and CTAs start at the left edge of the container.

### Tokens (app/globals.css)

- Ink `#1F2A44` (dark blue, all headings), charcoal `#4A5061` (body), paper `#FFFFFF`, grey `#F2F2F2` (footer, large buttons), laterite `#C2492C` (hover accent only), lagoon `#1D5B66`, sand `#F2E9DA` (haze).
- Buttons: 40px, 2px radius, translucent ink glass; on hover turn laterite and 5px radius. Large footer buttons are 56px grey.
- Type: Oswald 300 uppercase for the giant hero word and route code (`font-condensed`), Instrument Serif italic for statements and quotes (`font-display`), Figtree for everything else (`font-sans`). Eyebrows are 11px uppercase, 0.12em tracking, 60% ink.
- Harmattan haze (`.haze` utility) replaces White Desert's mist between the hero and the intro. Pure CSS.
- Media placeholders: `MediaSlot` component renders a toned gradient with the filename and aspect ratio to commission. Replace with `next/image` when real assets arrive.

### Motion

Slow and few. Hero parallax, staggered reveals on scroll (`Reveal`), 3% image scale on card hover, haze transitions. Lenis smooth scroll runs only on fine-pointer devices with motion allowed; touch devices get native scroll. Everything respects `prefers-reduced-motion`.

## Conventions

- Routes live under `app/[locale]/`. Locale segment is the root param; `generateStaticParams` returns both locales. Use `Link`, `usePathname`, `redirect` from `@/i18n/navigation`, never from `next/link` or `next/navigation`, so localized pathnames (`/journeys` ↔ `/voyages`) work. Add new routes to `i18n/routing.ts` pathnames in both languages.
- All copy goes through `messages/en.json` and `messages/fr.json`. Both languages are first-class: add keys to both files in the same change. Portuguese is wired to be added later (see `i18n/routing.ts`).
- Server Components by default. `"use client"` only for motion, Lenis, menus, panels.
- `cacheComponents` is on. Anything reading request data goes inside `<Suspense>`; cacheable fetches use `"use cache"` + `cacheLife` (see `lib/weather.ts`).
- Prices are stored in FCFA (XOF). Display with `formatXof` and an approximate conversion via `formatConverted` (`lib/currency.ts`). Converted figures always show "≈".
- Placeholder data in `lib/data/` until Sanity (Phase 5). Keep the shapes CMS-ready.
- Coordinates: decimal degrees in data, display string to the nearest minute. Verify against OpenStreetMap before launch.
- WhatsApp: floating button sitewide with a prefilled message per page (`whatsappUrl` in `lib/site.ts`). Number is a placeholder until supplied.
- Accessibility: WCAG AA contrast, visible focus rings (laterite), keyboard-reachable menus and panels, alt text required on every image field.
- Performance targets: Lighthouse 90+ on mobile over 4G. `next/image` everywhere, video poster only on mobile and when `saveData` is on, lazy-load below-the-fold media, keep client bundles small.
- Facts to verify before launch: Cotonou→Natitingou road distance and time (sources range 550–645 km, 6–10 h), Vodun Days 2027 dates (2026 ran 8–10 Jan), yellow-fever entry rule (ministry circular of April 2026 says no longer checked at entry).

## Phases

1. Plan, brand, design system ✅
2. Layout shell, nav, footer, i18n ✅
3. Homepage ✅ (placeholder media)
4. Journeys index + detail
5. Sanity schemas + studio
6. Booking + payments (mock adapters: FedaPay/KkiaPay for mobile money, Stripe or a pan-African processor for cards; Stripe needs a non-Benin entity)
7. Remaining pages (destinations, return, festivals, practical, stories, about, legal)
8. Performance, SEO (JSON-LD, OG, sitemap, hreflang), accessibility pass

After each phase: summarise what was built, what is left, what is needed from the owner.

## Commands

```
npm run dev      # local dev
npm run build    # production build (also runs typegen for route types)
npm run lint     # eslint
```
