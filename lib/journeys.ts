import type { Journey, JourneyType } from "./data/journeys";

export const JOURNEY_TYPES: JourneyType[] = [
  "grand",
  "heritage",
  "kingdoms",
  "wildlife",
  "coast",
  "festival",
];

export type DurationBand = "short" | "medium" | "long";
export type BudgetBand = "low" | "mid" | "high";

export const DURATION_BANDS: DurationBand[] = ["short", "medium", "long"];
export const BUDGET_BANDS: BudgetBand[] = ["low", "mid", "high"];

export function durationBand(days: number): DurationBand {
  if (days <= 4) return "short";
  if (days <= 7) return "medium";
  return "long";
}

export function budgetBand(priceXof: number): BudgetBand {
  if (priceXof < 1_000_000) return "low";
  if (priceXof < 2_000_000) return "mid";
  return "high";
}

export type JourneyFilters = {
  type?: JourneyType;
  duration?: DurationBand;
  budget?: BudgetBand;
  /** 1–12 */
  month?: number;
};

function first(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

/** Parses URL search params into validated filters; unknown values are ignored. */
export function parseFilters(
  params: Record<string, string | string[] | undefined>,
): JourneyFilters {
  const type = first(params.type);
  const duration = first(params.duration);
  const budget = first(params.budget);
  const month = Number(first(params.month));
  return {
    type: JOURNEY_TYPES.includes(type as JourneyType) ? (type as JourneyType) : undefined,
    duration: DURATION_BANDS.includes(duration as DurationBand)
      ? (duration as DurationBand)
      : undefined,
    budget: BUDGET_BANDS.includes(budget as BudgetBand) ? (budget as BudgetBand) : undefined,
    month: Number.isInteger(month) && month >= 1 && month <= 12 ? month : undefined,
  };
}

export function filterJourneys(journeys: Journey[], filters: JourneyFilters): Journey[] {
  return journeys.filter((j) => {
    if (filters.type && j.type !== filters.type) return false;
    if (filters.duration && durationBand(j.days) !== filters.duration) return false;
    if (filters.budget && budgetBand(j.priceXof) !== filters.budget) return false;
    if (filters.month && !j.months.includes(filters.month)) return false;
    return true;
  });
}

/** Departures across all journeys, soonest first. */
export function allDepartures(journeys: Journey[]) {
  return journeys
    .flatMap((j) => j.departures.map((d) => ({ journey: j, ...d })))
    .sort((a, b) => a.start.localeCompare(b.start));
}

export function lowestPrice(j: Journey) {
  return Math.min(j.priceXof, ...j.departures.map((d) => d.priceXof));
}
