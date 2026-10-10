import { cacheLife } from "next/cache";
import { site } from "./site";

export type Weather = {
  temperatureC: number;
  humidity: number;
  code: number;
};

/**
 * Current conditions in Cotonou from Open-Meteo (no API key).
 * Cached for 30 minutes; a failed fetch returns null and the header
 * simply shows the city name.
 */
export async function getCotonouWeather(): Promise<Weather | null> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 1800, expire: 7200 });

  const { latitude, longitude } = site.weatherCoords;
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(latitude));
  url.searchParams.set("longitude", String(longitude));
  url.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,weather_code",
  );
  url.searchParams.set("timezone", site.timeZone);

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      current?: {
        temperature_2m?: number;
        relative_humidity_2m?: number;
        weather_code?: number;
      };
    };
    const c = json.current;
    if (!c || typeof c.temperature_2m !== "number") return null;
    return {
      temperatureC: Math.round(c.temperature_2m),
      humidity: Math.round(c.relative_humidity_2m ?? 0),
      code: c.weather_code ?? 0,
    };
  } catch {
    return null;
  }
}
