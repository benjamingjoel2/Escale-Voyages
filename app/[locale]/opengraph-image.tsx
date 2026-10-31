import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const alt = "Escale Voyages · Bénin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Reads the hero poster from `public/`. On Vercel and in `next build` the file
 * is on disk; on Cloudflare Workers there is no filesystem, so it falls back to
 * the static assets binding (see wrangler.jsonc).
 */
async function readHeroPoster(): Promise<Buffer> {
  try {
    return await readFile(path.join(process.cwd(), "public", "media", "hero-poster.jpg"));
  } catch (error) {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    const assets = (env as { ASSETS?: { fetch: (input: string) => Promise<Response> } }).ASSETS;
    if (!assets) throw error;
    const res = await assets.fetch("https://assets.local/media/hero-poster.jpg");
    if (!res.ok) throw error;
    return Buffer.from(await res.arrayBuffer());
  }
}

/** Default share image: the hero photograph under the giant destination word. */
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });
  const tagline = t("tagline");
  const photo = await readHeroPoster();
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
        <img src={src} alt="" width={1200} height={660} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position: "absolute", left: 64, top: 56, display: "flex", alignItems: "baseline", gap: 10, fontSize: 30 }}>
          <span>Escale</span>
          <span style={{ fontStyle: "italic" }}>Voyages</span>
          <span style={{ fontSize: 14, letterSpacing: 3, marginLeft: 10, opacity: 0.8 }}>BENIN</span>
        </div>
        <div style={{ position: "absolute", left: 64, bottom: 56, display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 16, letterSpacing: 4, opacity: 0.8 }}>{t("eyebrow").toUpperCase()}</span>
          <span style={{ fontSize: 200, lineHeight: 0.9, letterSpacing: -4, fontWeight: 300 }}>BÉNIN</span>
          <span style={{ fontSize: 34, fontStyle: "italic", opacity: 0.95 }}>{tagline}</span>
        </div>
      </div>
    ),
    size,
  );
}
