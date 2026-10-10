import { getTranslations } from "next-intl/server";
import { getCotonouWeather } from "@/lib/weather";

/** Live Cotonou readout for the header. Falls back to the city name. */
export async function Weather() {
  const [t, weather] = await Promise.all([
    getTranslations("Weather"),
    getCotonouWeather(),
  ]);

  if (!weather) {
    return <span className="text-xs tracking-[0.06em]">{t("unavailable")}</span>;
  }

  return (
    <span className="text-xs tracking-[0.06em] tabular-nums uppercase">
      {t("city")} {weather.temperatureC}°C
    </span>
  );
}

export function WeatherFallback() {
  return (
    <span className="text-xs tracking-[0.06em] uppercase opacity-70">
      Cotonou
    </span>
  );
}
