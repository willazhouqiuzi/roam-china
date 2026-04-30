import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Header from "@/components/Header";
import { cities } from "@/data/cities";
import { routes } from "@/data/routes";
import { sortCitiesForList } from "@/lib/list-order";
import attribution from "@/data/image-attribution.json";

type Attribution = {
  photoId?: string;
  photographer?: string;
};

const ATTRIBUTION: Record<string, Attribution> = attribution as Record<
  string,
  Attribution
>;

function imageExists(filename: string) {
  try {
    const p = path.resolve(process.cwd(), "public/images/cities", filename);
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

export default function CitiesIndexPage() {
  const sortedCities = sortCitiesForList(cities, routes);
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-8 pb-16">
        <h1
          className="font-serif italic text-[#2C2C2A]"
          style={{ fontSize: 40, lineHeight: 1.1 }}
        >
          Cities
        </h1>
        <p className="mt-2 text-[13px] text-[#5F5E5A]">
          {sortedCities.length} cities, each with eight places, each place
          pinned to a real travel video.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedCities.map((city) => {
            const hasPhoto =
              Boolean(ATTRIBUTION[city.id]?.photoId) &&
              imageExists(`${city.id}.jpg`);
            return (
              <Link
                key={city.id}
                href={`/cities/${city.id}`}
                className="group flex flex-col overflow-hidden rounded-[14px] border border-[#D3D1C7] bg-white transition-colors hover:border-[#B4B2A9]"
              >
                {hasPhoto ? (
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#F1EFE8]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/cities/${city.id}.jpg`}
                      alt={city.name}
                      className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div
                    className="flex aspect-[16/10] w-full items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #FAECE7 0%, #F5C4B3 100%)",
                    }}
                    aria-hidden
                  >
                    <span
                      className="font-serif italic"
                      style={{
                        fontSize: 44,
                        color: "#4A1B0C",
                        opacity: 0.7,
                        lineHeight: 1,
                      }}
                    >
                      {city.nameZh}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-1.5 p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h2 className="font-serif italic text-[19px] leading-tight text-[#2C2C2A]">
                      {city.name}
                    </h2>
                    <span className="shrink-0 text-[10px] text-[#888780]">
                      {city.daysHint}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#888780]">
                    {city.nameZh} · {city.region}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-[1.5] text-[#2C2C2A]">
                    {city.blurb}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
