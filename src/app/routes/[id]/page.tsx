import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import RouteMap from "@/components/RouteMap";
import RouteCityList from "@/components/RouteCityList";
import { routes } from "@/data/routes";
import { cities } from "@/data/cities";

function imageExists(filename: string) {
  try {
    const p = path.resolve(process.cwd(), "public/images/cities", filename);
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const route = routes.find((r) => r.id === id);
  if (!route) notFound();

  // Pre-compute which cities have a primary hero photo so the client
  // accordion can render without a layout shift.
  const heroAvailable: Record<string, boolean> = {};
  for (const cityId of route.cityIds) {
    heroAvailable[cityId] = imageExists(`${cityId}.jpg`);
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/routes"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← All routes
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 56, lineHeight: 1.1 }}
          >
            {route.name}
          </h1>
          <p className="mt-2 text-[12px] text-[#888780]">
            {route.days} days · {route.transport}
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
              {route.cityIds.length} cities, in order
            </h2>
          </div>
          <RouteCityList
            route={route}
            cities={cities}
            heroAvailable={heroAvailable}
          />
        </section>
      </section>
    </main>
  );
}
