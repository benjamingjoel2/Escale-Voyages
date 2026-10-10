import { cacheLife } from "next/cache";

/** Current year for the copyright line, cached so the footer can be prerendered. */
export async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
