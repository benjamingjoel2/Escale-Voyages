import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { routing } from "@/i18n/routing";

export const alt = "Escale Voyages · Bénin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/** Default share image: the hero photograph under the giant destination word. */
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tagline = locale === "fr" ? "Tout le Bénin, à votre rythme" : "The whole of Benin, at your pace";
  const photo = await readFile(path.join(process.cwd(), "public", "media", "hero-poster.jpg"));
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
          <span style={{ fontSize: 16, letterSpacing: 4, opacity: 0.8 }}>{locale === "fr" ? "LE SECRET LE MIEUX GARDÉ D'AFRIQUE DE L'OUEST" : "WEST AFRICA'S BEST-KEPT SECRET"}</span>
          <span style={{ fontSize: 200, lineHeight: 0.9, letterSpacing: -4, fontWeight: 300 }}>BÉNIN</span>
          <span style={{ fontSize: 34, fontStyle: "italic", opacity: 0.95 }}>{tagline}</span>
        </div>
      </div>
    ),
    size,
  );
}
