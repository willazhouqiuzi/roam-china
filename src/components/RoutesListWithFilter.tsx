"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RouteMap from "@/components/RouteMap";
import type { Route } from "@/data/routes";
import type { City } from "@/data/cities";
import { sortRoutesForList, sortCitiesForList } from "@/lib/list-order";

type Props = {
  routes: Route[];
  cities: City[];
};

// Length buckets — covers the useful traveler distinctions
// (weekend vs. classic vs. grand tour).
type LengthBucket = {
  id: string;
  label: string;
  match: (days: number) => boolean;
};

const LENGTH_BUCKETS: LengthBucket[] = [
  { id: "short", label: "≤ 5 days", match: (d) => d <= 5 },
  { id: "medium", label: "6–10 days", match: (d) => d >= 6 && d <= 10 },
  { id: "long", label: "11–14 days", match: (d) => d >= 11 && d <= 14 },
  { id: "epic", label: "15+ days", match: (d) => d >= 15 },
];

export default function RoutesListWithFilter({ routes, cities }: Props) {
  // Multi-select city filter — AND logic: a route shows only if it
  // includes ALL selected cities. Selecting more cities narrows results.
  const [selectedCityIds, setSelectedCityIds] = useState<Set<string>>(new Set());
  const [filterLengthId, setFilterLengthId] = useState<string | null>(null);

  // Pre-sort everything for stable rendering.
  const sortedRoutes = useMemo(() => sortRoutesForList(routes), [routes]);
  const sortedCities = useMemo(
    () => sortCitiesForList(cities, routes),
    [cities, routes],
  );

  // Only show city chips for cities that appear in at least one route —
  // otherwise the chip can never narrow the result usefully.
  const filterableCities = useMemo(() => {
    const inRoutes = new Set(routes.flatMap((r) => r.cityIds));
    return sortedCities.filter((c) => inRoutes.has(c.id));
  }, [routes, sortedCities]);

  const cityById = useMemo(
    () => new Map(cities.map((c) => [c.id, c])),
    [cities],
  );

  const visibleRoutes = useMemo(() => {
    let out = sortedRoutes;
    if (selectedCityIds.size > 0) {
      out = out.filter((r) =>
        Array.from(selectedCityIds).every((id) => r.cityIds.includes(id)),
      );
    }
    if (filterLengthId) {
      const bucket = LENGTH_BUCKETS.find((b) => b.id === filterLengthId);
      if (bucket) out = out.filter((r) => bucket.match(r.days));
    }
    return out;
  }, [sortedRoutes, selectedCityIds, filterLengthId]);

  const toggleCity = (id: string) => {
    setSelectedCityIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const clearAll = () => {
    setSelectedCityIds(new Set());
    setFilterLengthId(null);
  };

  // Result-summary text builds dynamically based on which filters are on.
  const filterDescription = useMemo(() => {
    const cityNames = Array.from(selectedCityIds)
      .map((id) => cityById.get(id)?.name)
      .filter((n): n is string => Boolean(n));
    const lengthLabel = filterLengthId
      ? LENGTH_BUCKETS.find((b) => b.id === filterLengthId)?.label
      : null;
    const cityClause =
      cityNames.length > 0 ? (
        <>
          include{" "}
          {cityNames.map((n, i) => (
            <span key={n}>
              <strong className="font-medium text-[#2C2C2A]">{n}</strong>
              {i < cityNames.length - 1 ? (
                <span> {i === cityNames.length - 2 ? "and" : ","} </span>
              ) : null}
            </span>
          ))}
        </>
      ) : null;
    const lengthClause = lengthLabel ? (
      <>
        run <strong className="font-medium text-[#2C2C2A]">{lengthLabel}</strong>
      </>
    ) : null;
    const count = visibleRoutes.length;
    const noun = count === 1 ? "route" : "routes";
    if (cityClause && lengthClause) {
      return (
        <>
          {count} {noun} {cityClause} and {lengthClause}.
        </>
      );
    }
    if (cityClause) {
      return (
        <>
          {count} {noun} {cityClause}.
        </>
      );
    }
    if (lengthClause) {
      return (
        <>
          {count} {noun} {lengthClause}.
        </>
      );
    }
    return <>{routes.length} routes total.</>;
  }, [
    visibleRoutes.length,
    selectedCityIds,
    filterLengthId,
    cityById,
    routes.length,
  ]);

  const anyFilterActive = selectedCityIds.size > 0 || filterLengthId !== null;

  return (
    <>
      {/* Filter sections */}
      <div className="mt-6 flex flex-col gap-5 rounded-[16px] border border-[#D3D1C7] bg-[#FBFAF6] p-5">
        {/* By length */}
        <div>
          <div className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
            Filter by length
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterChip
              label="Any length"
              active={filterLengthId === null}
              onClick={() => setFilterLengthId(null)}
            />
            {LENGTH_BUCKETS.map((b) => (
              <FilterChip
                key={b.id}
                label={b.label}
                active={filterLengthId === b.id}
                onClick={() =>
                  setFilterLengthId(filterLengthId === b.id ? null : b.id)
                }
              />
            ))}
          </div>
        </div>

        {/* By city — multi-select */}
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <div className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
              Filter by city
              <span className="ml-2 normal-case tracking-normal text-[10px] text-[#888780]">
                (pick any — routes must include all picked)
              </span>
            </div>
            {selectedCityIds.size > 0 ? (
              <button
                type="button"
                onClick={() => setSelectedCityIds(new Set())}
                className="text-[11px] text-[#5F5E5A] hover:text-[#2C2C2A]"
              >
                Clear cities
              </button>
            ) : null}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {filterableCities.map((c) => (
              <FilterChip
                key={c.id}
                label={c.name}
                active={selectedCityIds.has(c.id)}
                onClick={() => toggleCity(c.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Result summary + global clear */}
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <p className="text-[12px] text-[#5F5E5A]">{filterDescription}</p>
        {anyFilterActive ? (
          <button
            type="button"
            onClick={clearAll}
            className="shrink-0 text-[12px] font-medium text-[#D85A30] underline-offset-4 hover:underline"
          >
            Clear all filters
          </button>
        ) : null}
      </div>

      {/* Two-column grid of route cards using the rich map variant */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {visibleRoutes.map((route) => {
          const cityNames = route.cityIds
            .map((id) => cityById.get(id)?.name)
            .filter((n): n is string => Boolean(n));
          return (
            <Link
              key={route.id}
              href={`/routes/${route.id}`}
              className="group flex flex-col overflow-hidden rounded-[16px] border border-[#D3D1C7] bg-white transition-colors hover:border-[#B4B2A9]"
            >
              <div className="flex flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-serif italic text-[22px] leading-tight text-[#2C2C2A]">
                    {route.name}
                  </h2>
                  <span className="shrink-0 text-[11px] text-[#888780]">
                    {route.days} days
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-[#888780]">
                  {route.transport}
                </p>
                <p className="mt-3 line-clamp-2 text-[13px] leading-[1.55] text-[#2C2C2A]">
                  {route.tagline}
                </p>
              </div>

              <div className="border-t border-[#EBEAE3] bg-[#FBFAF6]">
                <RouteMap route={route} cities={cities} width="100%" />
              </div>

              {cityNames.length ? (
                <div className="border-t border-[#EBEAE3] px-5 py-3">
                  <p className="text-[12px] leading-[1.5] text-[#5F5E5A]">
                    {cityNames.join(" → ")}
                  </p>
                </div>
              ) : null}
            </Link>
          );
        })}
      </div>

      {visibleRoutes.length === 0 ? (
        <div className="mt-10 rounded-[16px] border border-dashed border-[#D3D1C7] p-8 text-center">
          <p className="text-[13px] text-[#5F5E5A]">
            No routes match these filters.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-3 text-[12px] font-medium text-[#D85A30] underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : null}
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "inline-flex h-8 items-center rounded-full bg-[#D85A30] px-3.5 text-[12px] font-medium text-white"
          : "inline-flex h-8 items-center rounded-full border border-[#D3D1C7] bg-white px-3.5 text-[12px] text-[#2C2C2A] hover:border-[#B4B2A9]"
      }
    >
      {label}
    </button>
  );
}
