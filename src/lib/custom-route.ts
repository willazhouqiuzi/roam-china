// Build a virtual `Route` object from an arbitrary set of cities so the
// existing route-detail UI (RouteMap, RouteCityList, transport pills, etc.)
// can render a user-generated itinerary without needing it to live in the
// hand-curated routes catalogue.

import type { City } from "@/data/cities";
import type { Route } from "@/data/routes";

const DAYS_HINT_FALLBACK: Record<string, number> = {
  "2–3 days": 2,
  "2 days": 2,
  "1–2 days": 2,
  "1 day": 1,
  "+1–2 days": 1,
  "+2 days": 2,
  "+4–5 days": 4,
  "3 days": 3,
  "3–4 days": 3,
};

function parseDaysFromHint(hint: string): number {
  if (DAYS_HINT_FALLBACK[hint] !== undefined) return DAYS_HINT_FALLBACK[hint];
  const m = hint.match(/(\d+)/);
  return m ? Number(m[1]) : 2;
}

// Polyline through every city pin centre. We deliberately use straight
// segments rather than smooth bezier — the curated routes have hand-tuned
// curves; custom routes are obviously auto-generated, so a clean polyline
// reads as "computed from your selections" without trying to fake artistry.
function buildBezierPath(cities: City[]): string {
  if (!cities.length) return "";
  const head = cities[0];
  if (cities.length === 1) return `M ${head.mapX} ${head.mapY}`;
  const parts = [`M ${head.mapX} ${head.mapY}`];
  for (let i = 1; i < cities.length; i++) {
    parts.push(`L ${cities[i].mapX} ${cities[i].mapY}`);
  }
  return parts.join(" ");
}

function buildDayRanges(cities: City[]): {
  ranges: string[];
  totalDays: number;
} {
  let cursor = 1;
  const ranges: string[] = [];
  for (const c of cities) {
    const days = parseDaysFromHint(c.daysHint);
    const start = cursor;
    const end = cursor + days - 1;
    ranges.push(start === end ? `Day ${start}` : `Day ${start}–${end}`);
    cursor = end + 1;
  }
  return { ranges, totalDays: cursor - 1 };
}

// Order cities into a sensible visit sequence using a nearest-neighbor
// traversal, optionally pinning a chosen city to the end of the trip
// (typically the airport hub the traveler will fly home from).
//
// Algorithm:
//   1. If `endAtId` is set, pull that city out of the candidate set so it
//      can be appended last.
//   2. Start from the northernmost remaining city (smallest mapY).
//   3. Greedy nearest-neighbor: at each step, visit the closest unvisited
//      city by straight-line distance on the map projection.
//   4. Append the end-anchor city if any.
//
// Trade-off: nearest-neighbor isn't optimal TSP — for ≤ 8 cities a brute
// force would be exact and fast — but it's predictable, fast for any N,
// and the path is good enough that users rarely care about the difference.
export function orderCustomRouteCities(
  cities: City[],
  endAtId?: string,
): City[] {
  if (cities.length === 0) return [];
  if (cities.length === 1) return [...cities];

  const endCity = endAtId ? cities.find((c) => c.id === endAtId) : undefined;
  const remaining = endCity
    ? cities.filter((c) => c.id !== endCity.id)
    : [...cities];

  if (remaining.length === 0) return endCity ? [endCity] : [];

  // Seed with the northernmost city so trips read top-to-bottom on the map.
  remaining.sort((a, b) => a.mapY - b.mapY);
  const ordered: City[] = [remaining.shift()!];

  while (remaining.length > 0) {
    const last = ordered[ordered.length - 1];
    let nearestIdx = 0;
    let nearestDistSq = Infinity;
    for (let i = 0; i < remaining.length; i++) {
      const dx = remaining[i].mapX - last.mapX;
      const dy = remaining[i].mapY - last.mapY;
      const distSq = dx * dx + dy * dy;
      if (distSq < nearestDistSq) {
        nearestDistSq = distSq;
        nearestIdx = i;
      }
    }
    ordered.push(remaining.splice(nearestIdx, 1)[0]);
  }

  if (endCity) ordered.push(endCity);
  return ordered;
}

export function buildCustomRoute(orderedCities: City[]): Route {
  const { ranges, totalDays } = buildDayRanges(orderedCities);
  const names = orderedCities.map((c) => c.name);
  const name =
    names.length === 0
      ? "Custom itinerary"
      : names.length === 1
        ? `${names[0]} only`
        : `${names[0]} → ${names[names.length - 1]}`;
  const tagline =
    names.length === 0
      ? "Pick at least one city to begin."
      : names.length === 1
        ? `A short ${totalDays}-day stop in ${names[0]}.`
        : `A custom ${totalDays}-day journey through ${names.length} cities you picked.`;
  return {
    id: "custom",
    name,
    days: totalDays,
    cityIds: orderedCities.map((c) => c.id),
    transport: "Mixed — see segments below",
    tagline,
    dayRanges: ranges,
    bezierPath: buildBezierPath(orderedCities),
  };
}
