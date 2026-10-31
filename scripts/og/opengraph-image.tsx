// Design for the default share image, one per locale. Not a route: `scripts/og/build.tsx`
// renders it to public/og/{locale}.png before `next dev` and `next build`. Serving static
// PNGs keeps next/og (resvg and yoga WebAssembly, ~0.6 MiB gzipped) out of the
// Cloudflare Worker, which has to stay under 3 MiB on the Free plan.
import { ImageResponse } from "next/og";

export const alt = "Escale Voyages · Bénin";
export const size = { width: 1200, height: 630 };

/** Default share image: the hero photograph under the giant destination word. */
export function renderOgImage({ photo, eyebrow, tagline }: { photo: Buffer; eyebrow: string; tagline: string }) {
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by next/og (Satori), not a browser */}
        <img src={src} alt="" width={1200} height={660} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position: "absolute", left: 64, top: 56, display: "flex", alignItems: "baseline", gap: 10, fontSize: 30 }}>
          <span>Escale</span>
          <span style={{ fontStyle: "italic" }}>Voyages</span>
          <span style={{ fontSize: 14, letterSpacing: 3, marginLeft: 10, opacity: 0.8 }}>BENIN</span>
        </div>
        <div style={{ position: "absolute", left: 64, bottom: 56, display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 16, letterSpacing: 4, opacity: 0.8 }}>{eyebrow.toUpperCase()}</span>
          <span style={{ fontSize: 200, lineHeight: 0.9, letterSpacing: -4, fontWeight: 300 }}>BÉNIN</span>
          <span style={{ fontSize: 34, fontStyle: "italic", opacity: 0.95 }}>{tagline}</span>
        </div>
      </div>
    ),
    size,
  );
}
