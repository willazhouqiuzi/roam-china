import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import RouteMap from "@/components/RouteMap";
import RouteCityList from "@/components/RouteCityList";
import { cities } from "@/data/cities";
import type { City } from "@/data/cities";
import {
  buildCustomRoute,
  orderCustomRouteCities,
} from "@/lib/custom-route";

function imageExists(filename: string) {
  try {
    const p = path.resolve(process.cwd(), "public/images/cities", filename);
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

// Major hubs surfaced as quick "end here" buttons. Order = display order.
// Other cities show up under a "somewhere else" disclosure.
const PRIMARY_HUB_IDS = ["beijing", "shanghai", "chengdu", "hangzhou", "kunming"];

export default async function CustomRoutePage({
  searchParams,
}: {
  searchParams: Promise<{ cities?: string; endAt?: string }>;
}) {
  const { cities: citiesParam, endAt: endAtParam } = await searchParams;
  const requestedIds = (citiesParam ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const cityById = new Map(cities.map((c) => [c.id, c]));
  const requestedCities = requestedIds
    .map((id) => cityById.get(id))
    .filter((c): c is City => Boolean(c));

  if (requestedCities.length === 0) {
    redirect("/");
  }

  // If endAt points to a city we don't have, ignore it.
  const endAtId =
    endAtParam && cityById.has(endAtParam) ? endAtParam : undefined;

  // Make sure the end-at city is actually in the requested set so it shows
  // on the map even if the user picked it only via the picker. Append at
  // the end of requestedIds if missing — orderCustomRouteCities handles
  // pinning it to the end regardless.
  const fullCityList = endAtId && !requestedIds.includes(endAtId)
    ? [...requestedCities, cityById.get(endAtId)!]
    : requestedCities;

  const orderedCities = orderCustomRouteCities(fullCityList, endAtId);
  const route = buildCustomRoute(orderedCities);
  const endCity = endAtId ? cityById.get(endAtId) : undefined;

  // Pre-compute hero photo availability for the accordion.
  const heroAvailable: Record<string, boolean> = {};
  for (const cityId of route.cityIds) {
    heroAvailable[cityId] = imageExists(`${cityId}.jpg`);
  }

  // URL builders for the picker.
  // Always uses the union of requestedIds + the new endAtId so the city
  // shows up on the map.
  const uniqueRequested = Array.from(new Set(requestedIds));
  const buildEndAtUrl = (newEndAtId: string) => {
    const merged = uniqueRequested.includes(newEndAtId)
      ? uniqueRequested
      : [...uniqueRequested, newEndAtId];
    return `/routes/custom?cities=${merged.join(",")}&endAt=${newEndAtId}`;
  };
  const removeEndAtUrl = `/routes/custom?cities=${uniqueRequested.join(",")}`;

  // Hubs first, then the rest of the cities for the "elsewhere" list.
  const primaryHubs = PRIMARY_HUB_IDS
    .map((id) => cityById.get(id))
    .filter((c): c is City => Boolean(c));
  const primaryHubIdSet = new Set(PRIMARY_HUB_IDS);
  const otherCities = cities.filter((c) => !primaryHubIdSet.has(c.id));

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Back to map
        </Link>

        <header className="mt-6">
          <div className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
            Your custom itinerary
          </div>
          <h1
            className="mt-2 font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 56, lineHeight: 1.1 }}
          >
            {route.name}
          </h1>
          <p className="mt-2 text-[12px] text-[#888780]">
            {route.days} days · {orderedCities.length}{" "}
            {orderedCities.length === 1 ? "city" : "cities"}
          </p>
          <p className="mt-3 max-w-[720px] text-[14px] leading-[1.6] text-[#5F5E5A]">
            {route.tagline}
          </p>
        </header>

        <div className="mt-10">
          <RouteMap route={route} cities={cities} width="100%" />
        </div>

        <section className="mt-12">
          <div className="mb-6 flex items-baseline gap-4">
            <span className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
              Day by day
            </span>
            <h2
              className="font-serif italic text-[#2C2C2A]"
              style={{ fontSize: 26, lineHeight: 1.1 }}
            >
              {orderedCities.length}{" "}
              {orderedCities.length === 1 ? "city" : "cities"}, in order
            </h2>
          </div>
          <RouteCityList
            route={route}
            cities={cities}
            heroAvailable={heroAvailable}
          />
        </section>

        {/* Departure city picker — surfaces major hubs as quick buttons,
            with all other cities tucked under a disclosure. */}
        <section className="mt-12 rounded-[16px] border border-[#D3D1C7] bg-white p-6">
          <div className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
            Plan your departure
          </div>
          <h3
            className="mt-2 font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 22, lineHeight: 1.15 }}
          >
            {endCity
              ? `Ending in ${endCity.name}`
              : "End your trip in a major hub?"}
          </h3>
          <p className="mt-2 max-w-[720px] text-[13px] leading-[1.55] text-[#5F5E5A]">
            {endCity
              ? `${endCity.glance.closestAirport} Most international flights leave from here.`
              : "Most international travelers fly home from one of these cities. Pick one as your final stop and we'll pin it to the end of your itinerary."}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {primaryHubs.map((hub) => {
              const isCurrent = hub.id === endAtId;
              return (
                <Link
                  key={hub.id}
                  href={isCurrent ? removeEndAtUrl : buildEndAtUrl(hub.id)}
                  className={
                    isCurrent
                      ? "inline-flex h-9 items-center gap-1 rounded-[8px] bg-[#D85A30] px-4 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                      : "inline-flex h-9 items-center gap-1 rounded-[8px] border border-[#D3D1C7] bg-white px-4 text-[13px] text-[#2C2C2A] transition-colors hover:border-[#B4B2A9]"
                  }
                >
                  {isCurrent ? `✓ ${hub.name}` : `+ End in ${hub.name}`}
                </Link>
              );
            })}
          </div>

          <details className="mt-4 group">
            <summary className="cursor-pointer text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]">
              Or end somewhere else…
            </summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {otherCities.map((c) => {
                const isCurrent = c.id === endAtId;
                return (
                  <Link
                    key={c.id}
                    href={isCurrent ? removeEndAtUrl : buildEndAtUrl(c.id)}
                    className={
                      isCurrent
                        ? "inline-flex h-8 items-center gap-1 rounded-[8px] bg-[#D85A30] px-3 text-[12px] font-medium text-white"
                        : "inline-flex h-8 items-center gap-1 rounded-[8px] border border-[#D3D1C7] bg-white px-3 text-[12px] text-[#2C2C2A] hover:border-[#B4B2A9]"
                    }
                  >
                    {isCurrent ? `✓ ${c.name}` : c.name}
                  </Link>
                );
              })}
            </div>
          </details>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-[16px] border border-[#D3D1C7] bg-white p-5">
          <p className="text-[13px] text-[#5F5E5A]">
            Want to tweak this? Add or remove cities on the map and regenerate.
          </p>
          <Link
            href="/"
            className="inline-flex h-9 shrink-0 items-center rounded-[8px] border border-[#D3D1C7] bg-white px-4 text-[13px] text-[#2C2C2A] transition-colors hover:border-[#B4B2A9]"
          >
            ← Back to map
          </Link>
        </footer>
      </section>
    </main>
  );
}
