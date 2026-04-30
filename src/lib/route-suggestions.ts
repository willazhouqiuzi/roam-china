import type { City } from "@/data/cities";
import type { Route } from "@/data/routes";
import { routes } from "@/data/routes";
import { orderCustomRouteCities } from "@/lib/custom-route";

export type Suggestion =
  | {
      kind: "curated";
      route: Route;
      orderedCities: City[];
      selectedHits: number;
    }
  | {
      kind: "custom";
      name: string;
      orderedCities: City[];
      tagline: string;
    };

const ROUTE_ORDER_HINT_DAYS: Record<string, number> = {
  "2–3 days": 2.5,
  "2 days": 2,
  "1–2 days": 1.5,
  "+1–2 days": 1.5,
  "+2 days": 2,
  "+4–5 days": 4.5,
};

function hintMidpoint(daysHint: string): number {
  return ROUTE_ORDER_HINT_DAYS[daysHint] ?? 2;
}

// Reuse the nearest-neighbor ordering from custom-route — same algorithm
// the route-detail page applies, so the chip order in TripPlanner matches
// the eventual itinerary order users see after they click Generate.
const orderCitiesForCustomRoute = (cities: City[]) => orderCustomRouteCities(cities);

function findCuratedMatches(selected: City[]): Suggestion[] {
  if (!selected.length) return [];
  const selectedIds = new Set(selected.map((c) => c.id));

  const matches: Suggestion[] = [];
  for (const route of routes) {
    const hits = route.cityIds.filter((id) => selectedIds.has(id)).length;
    if (hits === 0) continue;
    if (hits < Math.min(2, selected.length)) continue;
    const ordered = route.cityIds
      .map((id) => selected.find((c) => c.id === id))
      .filter((c): c is City => Boolean(c));
    matches.push({ kind: "curated", route, orderedCities: ordered, selectedHits: hits });
  }
  matches.sort((a, b) => {
    if (a.kind !== "curated" || b.kind !== "curated") return 0;
    return b.selectedHits - a.selectedHits;
  });
  return matches.slice(0, 2);
}

function buildCustomSuggestion(selected: City[]): Suggestion | null {
  if (!selected.length) return null;
  const ordered = orderCitiesForCustomRoute(selected);

  const summedHint = ordered.reduce((sum, c) => sum + hintMidpoint(c.daysHint), 0);
  const days = Math.round(summedHint);
  const tagline =
    ordered.length === 1
      ? `Plan on about ${days} day${days === 1 ? "" : "s"} in ${ordered[0].name}.`
      : `Roughly ${days} days on the ground across ${ordered.length} cities, before travel time.`;

  const name =
    ordered.length === 1
      ? `${ordered[0].name} only`
      : `${ordered[0].name} → ${ordered[ordered.length - 1].name}`;

  return { kind: "custom", name, orderedCities: ordered, tagline };
}

export function suggestRoutes(selected: City[]): Suggestion[] {
  if (!selected.length) return [];
  const curated = findCuratedMatches(selected);
  const custom = buildCustomSuggestion(selected);
  const out: Suggestion[] = [];
  if (custom) out.push(custom);
  out.push(...curated);
  return out;
}
