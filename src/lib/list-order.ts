// Sort orders for the public list pages (/cities and /routes).
//
// Kept in one file so the homepage trip-planner suggestions and the list-
// page chip filters stay consistent with how cities/routes are presented
// elsewhere.

import type { City } from "@/data/cities";
import type { Route } from "@/data/routes";

// ─── Cities ────────────────────────────────────────────────────────────
//
// Three-tier order:
//   1. Classic 5 (cities with routeOrder set) — Beijing, Xi'an, Chengdu,
//      Guilin, Shanghai. Ordered by routeOrder so the canonical itinerary
//      reads top-left to bottom-right.
//   2. Other cities that appear in at least one curated route. Ordered
//      geographically: north to south by mapY, then west to east by mapX.
//   3. Discovery cities — new entries not yet on any route. Same geographic
//      sort, so the panel of "explore further" places lays out coherently.

export function sortCitiesForList(
  cities: City[],
  routes: Route[],
): City[] {
  const inRoutes = new Set(routes.flatMap((r) => r.cityIds));

  function tier(c: City): 1 | 2 | 3 {
    if (c.routeOrder !== undefined) return 1;
    if (inRoutes.has(c.id)) return 2;
    return 3;
  }

  return [...cities].sort((a, b) => {
    const ta = tier(a);
    const tb = tier(b);
    if (ta !== tb) return ta - tb;

    if (ta === 1) {
      return (a.routeOrder ?? 99) - (b.routeOrder ?? 99);
    }
    // Tier 2 or 3 — geographic sort: north-to-south, then west-to-east.
    if (a.mapY !== b.mapY) return a.mapY - b.mapY;
    return a.mapX - b.mapX;
  });
}

// ─── Routes ────────────────────────────────────────────────────────────
//
// Featured-first ordering:
//   1. Three hand-picked headline routes that we also surface on the
//      homepage's "Where to begin" section.
//   2. Everything else, ordered by length (days ascending) so a traveler
//      with a fixed-length trip can scroll to the right zone.

const FEATURED_ROUTE_IDS = [
  "classic-first-time",
  "epic-yunnan-tibet",
  "must-see-tibet",
];

export function sortRoutesForList(routes: Route[]): Route[] {
  const featuredIndex = new Map(
    FEATURED_ROUTE_IDS.map((id, i) => [id, i] as const),
  );

  return [...routes].sort((a, b) => {
    const fa = featuredIndex.get(a.id);
    const fb = featuredIndex.get(b.id);

    // Both featured — keep the FEATURED_ROUTE_IDS order.
    if (fa !== undefined && fb !== undefined) return fa - fb;
    // Only a is featured.
    if (fa !== undefined) return -1;
    // Only b is featured.
    if (fb !== undefined) return 1;
    // Neither featured — by length ascending; tiebreak by name.
    if (a.days !== b.days) return a.days - b.days;
    return a.name.localeCompare(b.name);
  });
}
