/**
 * Renders every page of the production build to flat HTML with inlined CSS,
 * local media and fonts, for a static preview the owner can open without a
 * deployment. Usage: `npx next start -p 3100`, then
 * `node scripts/preview-snapshot.mjs <out-dir>` with public/media copied to
 * <out-dir>/media, .next/static/media/*.woff2 to <out-dir>/assets and
 * app/favicon.ico to <out-dir>. Menus, filters, forms, booking and the
 * countdown need the real server; everything else is as built.
 */
import fs from "node:fs";
import path from "node:path";
const base = process.env.PREVIEW_BASE ?? "http://localhost:3100";
const out = process.argv[2];
const slugs = ["the-twelve-kings","return","north-to-pendjari","lagoon-and-coast","vodun-days","grand-tour-of-benin","collines-and-centre"];
const dests = ["cotonou","ouidah","ganvie","porto-novo","grand-popo","possotome","abomey","ketou","dassa","parakou","natitingou","koutammakou","tanougou","pendjari","parc-w"];
const storySlugs = ["what-the-records-in-ouidah-can-tell-you","a-market-that-floats","why-the-lions-of-pendjari-matter","how-to-behave-at-a-vodun-ceremony"];
const legal = ["terms","booking-terms","privacy","cookies"];
const pages = [
  ["/en","en"],["/fr","fr"],
  ["/en/journeys","en-journeys"],["/fr/voyages","fr-journeys"],
  ["/en/dates-prices","en-dates"],["/fr/dates-et-prix","fr-dates"],
  ["/en/destinations","en-destinations"],["/fr/destinations","fr-destinations"],
  ["/en/return","en-return"],["/fr/retour","fr-return"],
  ["/en/festivals","en-festivals"],["/fr/festivals","fr-festivals"],
  ["/en/practical","en-practical"],["/fr/infos-pratiques","fr-practical"],
  ["/en/stories","en-stories"],["/fr/recits","fr-stories"],
  ["/en/about","en-about"],["/fr/a-propos","fr-about"],
  ["/en/enquire","en-enquire"],["/fr/demande","fr-enquire"],
  ["/en/book","en-book"],["/fr/reserver","fr-book"],
  ...slugs.flatMap(s => [[`/en/journeys/${s}`,`en-journey-${s}`],[`/fr/voyages/${s}`,`fr-journey-${s}`],[`/en/book/${s}`,`en-book-${s}`],[`/fr/reserver/${s}`,`fr-book-${s}`]]),
  ...dests.flatMap(s => [[`/en/destinations/${s}`,`en-dest-${s}`],[`/fr/destinations/${s}`,`fr-dest-${s}`]]),
  ...storySlugs.flatMap(s => [[`/en/stories/${s}`,`en-story-${s}`],[`/fr/recits/${s}`,`fr-story-${s}`]]),
  ...legal.flatMap(s => [[`/en/legal/${s}`,`en-legal-${s}`],[`/fr/legal/${s}`,`fr-legal-${s}`]]),
];
// route → file map for link rewriting
const routeToFile = new Map(pages.map(([r,f]) => [r, `${f}.html`]));

const cssCache = new Map(); const fontMap = new Map();
async function text(u) { const r = await fetch(base + u); if (!r.ok) throw new Error(u + " " + r.status); return r.text(); }
async function bin(u) { const r = await fetch(base + u); if (!r.ok) throw new Error(u + " " + r.status); return Buffer.from(await r.arrayBuffer()); }
async function inlineCss(href) {
  if (!cssCache.has(href)) {
    let css = await text(href);
    for (const m of css.matchAll(/url\((\/_next\/static\/media\/[^)]+)\)/g)) {
      const u = m[1]; const name = path.basename(u.split("?")[0]);
      if (!fontMap.has(u)) { fs.writeFileSync(path.join(out, "assets", name), await bin(u)); fontMap.set(u, `assets/${name}`); }
    }
    css = css.replace(/url\((\/_next\/static\/media\/[^)]+)\)/g, (_, u) => `url(${fontMap.get(u)})`);
    cssCache.set(href, css);
  }
  return cssCache.get(href);
}
const rewriteLinks = (html) => html
  .replace(/href="(\/(?:en|fr)(?:\/[^"#?]*)?)((?:[#?][^"]*)?)"/g, (m, route, rest) => {
    const r = route.replace(/\/$/, "") || route;
    const f = routeToFile.get(r);
    if (f) return `href="${f}${rest.startsWith("#") ? rest : ""}"`;
    return `href="#" data-unbuilt="${r}" title="Not built yet"`;
  })
  .replace(/\/_next\/image\?url=%2Fmedia%2F([^&"\s]+)&amp;w=\d+&amp;q=\d+/g, "media/$1")
  .replace(/\/_next\/image\?url=%2Fmedia%2F([^&"\s]+)&w=\d+&q=\d+/g, "media/$1");
for (const [route, file] of pages) {
  let html = await text(route);
  // inline stylesheets
  const links = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g)];
  let styles = "";
  for (const l of links) styles += await inlineCss(l[1]);
  html = html.replace(/<link[^>]+rel="stylesheet"[^>]*>/g, "");
  html = html.replace(/<link[^>]+rel="(?:preload|modulepreload)"[^>]*>/g, "");
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  html = html.replace("</head>", `<style>${styles}</style><base target="_self"></head>`);
  html = rewriteLinks(html).replace(/url\(\.\.\/media\//g, "url(assets/").replace(/href="\/favicon\.ico[^"]*"/g, "href=\"favicon.ico\"");
  // make srcset candidates valid after rewrite (same file repeated with different widths is fine)
  fs.writeFileSync(path.join(out, file + ".html"), html);
  console.log(route, "->", file + ".html", Math.round(html.length / 1024) + "KB");
}
const nav = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Escale Voyages preview</title>
<style>:root{--ink:#1F2A44;--accent:#E4561F}body{margin:0;font-family:system-ui,sans-serif;background:#fff;color:#4A5061;padding:48px 24px;max-width:760px;margin-inline:auto}h1{font-size:28px;color:var(--ink);margin:0 0 8px}p{line-height:1.5}a{color:var(--ink)}ul{padding-left:18px;line-height:1.9}.big{display:inline-block;margin:16px 12px 24px 0;padding:14px 22px;background:var(--accent);color:#fff;text-decoration:none;border-radius:3px;font-weight:600}.note{font-size:13px;color:#79818C;border-top:1px solid #eee;padding-top:16px;margin-top:24px}</style></head><body>
<h1>Escale Voyages · static preview</h1><p>Snapshot of the production build. Static pages: menus, filters, forms, the booking flow and the countdown need the real deployment.</p>
<a class="big" href="en.html">English site</a><a class="big" href="fr.html">Site en français</a>
<h3>All pages</h3><ul>${pages.map(([r,f]) => `<li><a href="${f}.html">${r}</a></li>`).join("")}</ul>
<p class="note">Forms, filters, the booking flow, menus and the countdown need the real server; everything else is as built.</p></body></html>`;
fs.writeFileSync(path.join(out, "index.html"), nav);
console.log("fonts:", fontMap.size, "pages:", pages.length);
