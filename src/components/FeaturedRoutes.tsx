// Featured routes section for the homepage. Shows three hand-picked routes —
// chosen to span first-timer / landscape / off-beaten-path so the variety of
// the catalog reads at a glance.

import Link from "next/link";
import { routes } from "@/data/routes";
import { cities } from "@/data/cities";

const FEATURED_ROUTE_IDS = [
  "classic-first-time",
  "karst-and-rivers",
  "must-see-tibet",
];

export default function FeaturedRoutes() {
  const cityById = new Map(cities.map((c) => [c.id, c]));
  const featured = FEATURED_ROUTE_IDS.map((id) =>
    routes.find((r) => r.id === id),
  ).filter((r): r is (typeof routes)[number] => Boolean(r));

  if (!featured.length) return null;

  return (
    <section className="border-t border-[#D3D1C7] bg-[#FBFAF6]">
      <div className="mx-auto max-w-[1100px] px-6 pt-14 pb-16">
        <header className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#888780]">
              Where to begin
            </div>
            <h2
              className="mt-2 font-serif italic text-[#2C2C2A]"
              style={{ fontSize: 32, lineHeight: 1.1 }}
            >
              Three routes to start with.
            </h2>
          </div>
          <Link
            href="/routes"
            className="shrink-0 text-[13px] font-medium text-[#D85A30] underline-offset-4 hover:underline"
          >
            All {routes.length} routes →
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((route) => {
            const cityNames = route.cityIds
              .map((id) => cityById.get(id)?.name)
              .filter((n): n is string => Boolean(n));
            return (
              <Link
                key={route.id}
                href={`/routes/${route.id}`}
                className="group flex h-full flex-col rounded-[16px] border border-[#D3D1C7] bg-white p-6 transition-colors hover:border-[#B4B2A9]"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#888780]">
                  {route.days} days · {route.transport}
                </div>
                <h3
                  className="mt-3 font-serif italic text-[#2C2C2A]"
                  style={{ fontSize: 24, lineHeight: 1.15 }}
                >
                  {route.name}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-[1.55] text-[#2C2C2A]">
                  {route.tagline}
                </p>
                {cityNames.length ? (
                  <p className="mt-4 text-[12px] text-[#5F5E5A]">
                    {cityNames.join(" → ")}
                  </p>
                ) : null}
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[#D85A30] underline-offset-4 group-hover:underline">
                  Open route →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
