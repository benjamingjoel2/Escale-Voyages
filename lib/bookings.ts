import type { Journey } from "./data/journeys";
import { extras as allExtras } from "./data/extras";

export const DEPOSIT_RATE = 0.3;
export const MAX_TRAVELLERS = 8;

export type Quote = {
  journeyXof: number;
  extrasXof: number;
  totalXof: number;
  depositXof: number;
  lines: { id: string; qty: number; xof: number }[];
};

/** Server-side price calculation; the client shows the same numbers but this is the source of truth. */
export function quote(journey: Journey, travellers: number, extraIds: string[], departureStart?: string): Quote {
  const dep = departureStart ? journey.departures.find((d) => d.start === departureStart) : undefined;
  const unit = dep?.priceXof ?? journey.priceXof;
  const n = Math.min(Math.max(1, travellers), MAX_TRAVELLERS);
  const journeyXof = unit * n;
  const lines = allExtras
    .filter((e) => extraIds.includes(e.id))
    .map((e) => ({ id: e.id, qty: e.perTraveller ? n : 1, xof: e.priceXof * (e.perTraveller ? n : 1) }));
  const extrasXof = lines.reduce((s, l) => s + l.xof, 0);
  const totalXof = journeyXof + extrasXof;
  return { journeyXof, extrasXof, totalXof, depositXof: Math.round(totalXof * DEPOSIT_RATE), lines };
}

/** Human-friendly booking reference, e.g. EV-M3K9Q2-7F. */
export function newReference() {
  const t = Date.now().toString(36).toUpperCase().slice(-6);
  const r = Math.random().toString(36).toUpperCase().slice(2, 4);
  return `EV-${t}-${r}`;
}
