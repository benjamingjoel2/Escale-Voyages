import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Cloudflare Workers caps zlib's maxOutputLength at 128 MiB and Next.js
    // decompresses the PPR resume data with a limit of 5x this value (default
    // 100mb -> 500 MiB, which throws on Workers). Real states here are ~60 KB.
    maxPostponedStateSize: "25mb",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // The default share image used to be the /{locale}/opengraph-image route; it is
    // now a static file rendered at build time (scripts/og/build.tsx).
    return [{ source: "/:locale(en|fr|de|es)/opengraph-image", destination: "/og/:locale.png", permanent: true }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default withNextIntl(nextConfig);
