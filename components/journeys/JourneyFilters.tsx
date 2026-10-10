"use client";

import { useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  BUDGET_BANDS,
  DURATION_BANDS,
  JOURNEY_TYPES,
  type JourneyFilters as Filters,
} from "@/lib/journeys";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type Props = { active: Filters; resultCount: number };

/**
 * Filter bar for the journeys index. State lives in the URL so results are
 * shareable and rendered on the server.
 */
export function JourneyFilters({ active, resultCount }: Props) {
  const t = useTranslations("JourneysPage");
  const tf = useTranslations("Filters");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  function set(key: keyof Filters, value: string) {
    const next = new URLSearchParams(searchParams.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    startTransition(() => {
      router.replace(`${pathname}${qs ? `?${qs}` : ""}` as never, { scroll: false });
    });
  }

  function clear() {
    startTransition(() => router.replace(pathname as never, { scroll: false }));
  }

  const hasAny = Boolean(active.type || active.duration || active.budget || active.month);
  const selectClass =
    "h-10 rounded-[2px] border border-line bg-paper px-3 text-[13px] font-medium text-ink focus:border-ink";

  return (
    <form
      className="grid gap-3 border-y border-line py-5 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] md:items-end"
      onSubmit={(e) => e.preventDefault()}
      aria-busy={pending}
    >
      <label className="grid gap-1.5">
        <span className="eyebrow">{tf("type")}</span>
        <select
          id="filter-type"
          className={selectClass}
          value={active.type ?? ""}
          onChange={(e) => set("type", e.target.value)}
        >
          <option value="">{tf("any")}</option>
          {JOURNEY_TYPES.map((v) => (
            <option key={v} value={v}>
              {tf(`types.${v}`)}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="eyebrow">{tf("duration")}</span>
        <select
          id="filter-duration"
          className={selectClass}
          value={active.duration ?? ""}
          onChange={(e) => set("duration", e.target.value)}
        >
          <option value="">{tf("any")}</option>
          {DURATION_BANDS.map((v) => (
            <option key={v} value={v}>
              {tf(`durations.${v}`)}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="eyebrow">{tf("budget")}</span>
        <select
          id="filter-budget"
          className={selectClass}
          value={active.budget ?? ""}
          onChange={(e) => set("budget", e.target.value)}
        >
          <option value="">{tf("any")}</option>
          {BUDGET_BANDS.map((v) => (
            <option key={v} value={v}>
              {tf(`budgets.${v}`)}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="eyebrow">{tf("month")}</span>
        <select
          id="filter-month"
          className={selectClass}
          value={active.month ?? ""}
          onChange={(e) => set("month", e.target.value)}
        >
          <option value="">{tf("any")}</option>
          {MONTHS.map((m) => (
            <option key={m} value={m}>
              {tf(`months.${m}`)}
            </option>
          ))}
        </select>
      </label>
      <div className="flex items-center justify-between gap-3 md:justify-end">
        <span className="text-[13px] text-charcoal" aria-live="polite">
          {t("results", { count: resultCount })}
        </span>
        {hasAny ? (
          <button type="button" onClick={clear} className="btn btn-inline h-10">
            {tf("clear")}
          </button>
        ) : null}
      </div>
    </form>
  );
}
