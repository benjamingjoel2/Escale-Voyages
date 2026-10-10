import type { Metadata, Viewport } from "next";
import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";

export const metadata: Metadata = { ...studioMetadata, title: "Escale Voyages · Studio" };
export const viewport: Viewport = studioViewport;

/** Root layout for the embedded Studio, outside the localized site shell. */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
