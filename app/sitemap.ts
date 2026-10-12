import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getDestinations, getJourneys } from "@/lib/content";
import { stories } from "@/lib/data/stories";
import { site } from "@/lib/site";

type Href = Parameters<typeof getPathname>[0]["href"];

/** One sitemap entry per locale for a route, each carrying hreflang alternates. */
function entries(href: Href, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap {
  const url = (l: Locale) => `${site.url}${getPathname({ locale: l, href })}`;
  const languages = Object.fromEntries(routing.locales.map((l) => [l, url(l)]));
  return routing.locales.map((l) => ({
    url: url(l),
    priority,
    changeFrequency,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [journeys, destinations] = await Promise.all([getJourneys(), getDestinations()]);
  return [
    ...entries("/", 1, "weekly"),
    ...entries("/journeys", 0.9, "weekly"),
    ...entries("/dates-prices", 0.8, "weekly"),
    ...entries("/destinations", 0.8, "monthly"),
    ...entries("/return", 0.9, "monthly"),
    ...entries("/festivals", 0.7, "monthly"),
    ...entries("/practical", 0.6, "monthly"),
    ...entries("/stories", 0.6, "weekly"),
    ...entries("/about", 0.5, "monthly"),
    ...entries("/enquire", 0.6, "yearly"),
    ...journeys.flatMap((j) => entries({ pathname: "/journeys/[slug]", params: { slug: j.slug } }, 0.9, "monthly")),
    ...destinations.flatMap((d) => entries({ pathname: "/destinations/[slug]", params: { slug: d.slug } }, 0.7, "monthly")),
    ...stories.flatMap((s) => entries({ pathname: "/stories/[slug]", params: { slug: s.slug } }, 0.5, "yearly")),
  ];
}
