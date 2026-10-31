import type { Metadata, Viewport } from "next";

// Same values as `metadata` / `viewport` from "next-sanity/studio", inlined so the
// layout does not pull the whole Studio bundle into the server build (keeps the
// Cloudflare Worker under its size limit).
export const metadata: Metadata = {
  referrer: "same-origin",
  robots: "noindex",
  title: "Escale Voyages · Studio",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

/** Root layout for the embedded Studio, outside the localized site shell. */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
