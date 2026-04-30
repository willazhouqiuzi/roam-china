"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { City } from "@/data/cities";
import type { Route } from "@/data/routes";

type Props = {
  route: Route;
  cities: City[];
  /**
   * For each city id, an optional flag indicating a hero photo exists on
   * disk. Computed at build time on the server (we can't do `fs` in a
   * client component). Missing entries fall back to the gradient placeholder.
   */
  heroAvailable: Record<string, boolean>;
};

const GLANCE_FIELDS: Array<{
  key: keyof City["glance"];
  label: string;
}> = [
  { key: "typicalStay", label: "Typical stay" },
  { key: "knownFor", label: "Known for" },
  { key: "dontMiss", label: "Don't miss" },
];

export default function RouteCityList({ route, cities, heroAvailable }: Props) {
  const cityById = new Map(cities.map((c) => [c.id, c]));
  // Default open: just the first city, so users see the pattern. Subsequent
  // ones expand on click. Lets us show the structure without overwhelming.
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(route.cityIds.slice(0, 1)),
  );

  const toggle = (cityId: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(cityId)) next.delete(cityId);
      else next.add(cityId);
      return next;
    });
  };

  return (
    <ol className="flex flex-col gap-4">
      {route.cityIds.map((cityId, idx) => {
        const city = cityById.get(cityId);
        if (!city) return null;
        const dayRange = route.dayRanges[idx] ?? "";
        const isOpen = openIds.has(cityId);
        const hasHero = heroAvailable[cityId];

        return (
          <li
            key={cityId}
            className="overflow-hidden rounded-[16px] border border-[#D3D1C7] bg-white"
          >
            <button
              type="button"
              onClick={() => toggle(cityId)}
              aria-expanded={isOpen}
              aria-controls={`route-city-${cityId}`}
              className="flex w-full items-start gap-5 p-5 text-left transition-colors hover:bg-[#FBFAF6]"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D85A30] text-center text-[11px] leading-tight text-white"
                aria-hidden
              >
                {dayRange}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-serif italic text-[22px] text-[#2C2C2A]">
                    {city.name}
                  </h2>
                  <span className="shrink-0 text-[11px] text-[#888780]">
                    {city.nameZh} · {city.region}
                  </span>
                </div>
                <p className="mt-1 text-[14px] leading-[1.6] text-[#2C2C2A]">
                  {city.blurb}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-[12px] text-[#5F5E5A]">
                  {isOpen ? "Hide details" : "Show details"}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <path
                      d="M2 3.5 L5 6.5 L8 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  id={`route-city-${cityId}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#EBEAE3] px-5 pt-5 pb-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-[200px_1fr]">
                      {hasHero ? (
                        <div className="overflow-hidden rounded-[12px] bg-[#F1EFE8] sm:aspect-[4/3]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/images/cities/${cityId}.jpg`}
                            alt={city.name}
                            className="block h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex aspect-[4/3] items-center justify-center rounded-[12px]"
                          style={{
                            background:
                              "linear-gradient(180deg, #FAECE7 0%, #F5C4B3 100%)",
                          }}
                          aria-hidden
                        >
                          <span
                            className="font-serif italic"
                            style={{
                              fontSize: 56,
                              color: "#4A1B0C",
                              opacity: 0.7,
                              lineHeight: 1,
                            }}
                          >
                            {city.nameZh}
                          </span>
                        </div>
                      )}

                      <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                        {GLANCE_FIELDS.map((field) => (
                          <div key={field.key}>
                            <dt className="text-[11px] text-[#888780]">
                              {field.label}
                            </dt>
                            <dd className="mt-0.5 text-[13px] leading-[1.5] text-[#2C2C2A]">
                              {city.glance[field.key]}
                            </dd>
                          </div>
                        ))}
                        <div className="sm:col-span-2">
                          <dt className="text-[11px] text-[#888780]">
                            Best months
                          </dt>
                          <dd className="mt-0.5 text-[13px] leading-[1.5] text-[#2C2C2A]">
                            {city.glance.bestMonths}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-5 border-t border-[#EBEAE3] pt-4">
                      <Link
                        href={`/cities/${cityId}`}
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-[#D85A30] underline-offset-4 hover:underline"
                      >
                        Open full {city.name} page →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
