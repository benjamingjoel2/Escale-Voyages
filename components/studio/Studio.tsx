"use client";

import dynamic from "next/dynamic";

/**
 * The Studio is a browser-only app. Loading it with `ssr: false` keeps the
 * Sanity bundle (several MB) out of the server build, which keeps the
 * Cloudflare Worker under its size limit. Vercel behaves the same.
 */
const StudioApp = dynamic(() => import("./StudioApp"), { ssr: false });

export function Studio() {
  return <StudioApp />;
}
