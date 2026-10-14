import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { knownSlugs } from "./lib/slugs";

const intl = createMiddleware(routing);

/** Localized first segments of each dynamic route, mapped to the slug list that validates them. */
const dynamicSegments: Record<string, keyof typeof knownSlugs> = {
  journeys: "journey",
  voyages: "journey",
  destinations: "destination",
  stories: "story",
  recits: "story",
  legal: "legal",
};

const cmsConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const copy = {
  en: { title: "This page is not on the map.", body: "The address may have changed or never existed. Start again from the front door.", back: "Back to Escale Voyages" },
  fr: { title: "Cette page n'est pas sur la carte.", body: "L'adresse a peut-être changé ou n'a jamais existé. Repartez de l'entrée.", back: "Retour à Escale Voyages" },
};

/**
 * A real 404 for an unknown slug. Under Cache Components the route would
 * otherwise stream its fallback shell with status 200 on the first request,
 * which search engines record as a soft 404. The page is deliberately
 * self-contained so its status never depends on rendering.
 */
function notFoundResponse(locale: "en" | "fr") {
  const c = copy[locale];
  const html = `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 · Escale Voyages</title><style>body{margin:0;background:#000;color:#a9a9ad;font:15px/1.6 system-ui,sans-serif}main{max-width:1920px;padding:128px clamp(16px,2.5vw,48px)}span{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#f2f2f2;opacity:.6}h1{margin:12px 0 0;font-size:clamp(28px,3.4vw,46px);font-weight:500;line-height:1.05;letter-spacing:-.02em;color:#f2f2f2}p{max-width:60ch;margin:16px 0 0}a{display:inline-block;margin-top:32px;padding:11px 18px;border-radius:2px;background:rgba(242,242,242,.06);color:#f2f2f2;text-decoration:none;font-size:13px;font-weight:500}a:hover{background:#c94714;color:#fff;border-radius:5px}</style></head><body><main><span>404</span><h1>${c.title}</h1><p>${c.body}</p><a href="/${locale}">${c.back}</a></main></body></html>`;
  return new NextResponse(html, { status: 404, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=0, s-maxage=3600" } });
}

export default function proxy(request: NextRequest) {
  if (!cmsConfigured) {
    const [, locale, segment, slug, extra] = request.nextUrl.pathname.split("/");
    const list = segment ? dynamicSegments[segment] : undefined;
    if ((locale === "en" || locale === "fr") && list && slug && extra === undefined && !knownSlugs[list].has(slug)) {
      return notFoundResponse(locale);
    }
  }
  return intl(request);
}

export const config = {
  // Skip API routes, Next internals, Vercel internals and any path with a file extension.
  matcher: "/((?!api|_next|_vercel|studio|.*\\..*).*)",
};
