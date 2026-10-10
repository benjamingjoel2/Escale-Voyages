"use client";

import { useSyncExternalStore } from "react";

/**
 * Subscribes to a CSS media query without setting state in an effect.
 * Returns `false` on the server and during hydration, so markup matches.
 */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True when the browser asks for reduced data use (Save-Data). */
export function useSaveData() {
  return useSyncExternalStore(
    () => () => {},
    () => {
      const nav = navigator as Navigator & {
        connection?: { saveData?: boolean };
      };
      return nav.connection?.saveData === true;
    },
    () => false,
  );
}
