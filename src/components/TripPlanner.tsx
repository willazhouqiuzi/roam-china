"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { City } from "@/data/cities";
import { suggestRoutes } from "@/lib/route-suggestions";

type Props = {
  tripCities: City[];
  onRemove: (city: City) => void;
  onClear: () => void;
};

export default function TripPlanner({
  tripCities,
  onRemove,
  onClear,
}: Props) {
  const hasTrip = tripCities.length > 0;
  if (!hasTrip) return null;

  const suggestions = suggestRoutes(tripCities);

  return (
    <section className="mx-auto max-w-[1100px] px-6 pt-8 pb-10">
      <div className="flex items-baseline justify-between gap-4">
        <h2
          className="font-serif italic text-[#2C2C2A]"
          style={{ fontSize: 28, lineHeight: 1.1 }}
        >
          Your trip
        </h2>
        <button
          type="button"
          onClick={onClear}
          className="text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
            {tripCities.map((c) => (
              <span
                key={c.id}
                className="inline-flex items-center gap-2 rounded-full border border-[#D85A30] bg-[#FAECE7] px-3 py-1 text-[13px] text-[#4A1B0C]"
              >
                {c.name}
                <button
                  type="button"
                  onClick={() => onRemove(c)}
                  aria-label={`Remove ${c.name} from trip`}
                  className="text-[#888780] hover:text-[#2C2C2A]"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                    <path
                      d="M1 1 L9 9 M9 1 L1 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {suggestions.map((s, i) => {
              if (s.kind === "curated") {
                return (
                  <motion.div
                    key={`curated-${s.route.id}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="rounded-[16px] border border-[#D3D1C7] bg-white p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] uppercase tracking-wide text-[#888780]">
                          Curated route — matches your selection
                        </div>
                        <h3 className="mt-1 font-serif italic text-[20px] text-[#2C2C2A]">
                          {s.route.name}
                        </h3>
                        <p className="mt-1 text-[12px] text-[#5F5E5A]">
                          {s.route.days} days · {s.route.transport}
                        </p>
                        <p className="mt-2 text-[13px] text-[#2C2C2A]">{s.route.tagline}</p>
                        {s.orderedCities.length ? (
                          <p className="mt-2 text-[12px] text-[#5F5E5A]">
                            Your cities in this route: {s.orderedCities.map((c) => c.name).join(" → ")}
                          </p>
                        ) : null}
                      </div>
                      <Link
                        href={`/routes/${s.route.id}`}
                        className="inline-flex h-9 shrink-0 items-center rounded-[8px] border border-[#D85A30] bg-white px-4 text-[13px] font-medium text-[#D85A30] transition-colors hover:bg-[#FAECE7]"
                      >
                        Open route →
                      </Link>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key="custom"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="rounded-[16px] border border-[#B4B2A9] bg-white p-5"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="text-[11px] uppercase tracking-wide text-[#888780]">
                      Your custom route
                    </div>
                  </div>
                  <h3 className="mt-1 font-serif italic text-[20px] text-[#2C2C2A]">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#2C2C2A]">{s.tagline}</p>
                  <ol className="mt-3 flex flex-wrap items-center gap-2">
                    {s.orderedCities.map((c, idx) => (
                      <li key={c.id} className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D3D1C7] bg-white px-3 py-1 text-[13px] text-[#2C2C2A]">
                          <span className="text-[11px] text-[#888780]">{idx + 1}</span>
                          {c.name}
                          <span className="text-[11px] text-[#888780]">{c.daysHint}</span>
                        </span>
                        {idx < s.orderedCities.length - 1 ? (
                          <span className="text-[#D85A30]">→</span>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 flex">
                    <Link
                      href={`/routes/custom?cities=${s.orderedCities
                        .map((c) => c.id)
                        .join(",")}`}
                      className="inline-flex h-9 items-center rounded-[8px] bg-[#D85A30] px-4 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                    >
                      Generate full itinerary →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
    </section>
  );
}
