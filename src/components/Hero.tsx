// Homepage hero — editorial split layout: copy on the left, a 6-photo
// carousel on the right that rotates through marquee scenes (Beijing,
// Shanghai, Chengdu pandas, Jiuzhaigou, Lhasa, Yangshuo).

import fs from "node:fs";
import path from "node:path";
import cityAttribution from "@/data/image-attribution.json";
import poiAttribution from "@/data/poi-image-attribution.json";
import { cities } from "@/data/cities";
import { routes } from "@/data/routes";
import { cityMapConfigs } from "@/lib/city-map-config";
import PhotoCarousel, { type CarouselImage } from "./PhotoCarousel";

// Counts computed from the source data so they don't drift when cities,
// routes, or POIs are added.
const CITY_COUNT = cities.length;
const ROUTE_COUNT = routes.length;
const POI_COUNT = Object.values(cityMapConfigs).reduce(
  (sum, c) => sum + c.pois.length,
  0,
);

// Hand-picked carousel — 6 scenes that span China's variety: north, east,
// the panda hub, alpine pools, the Tibetan plateau, the karst south.
//
// `kind` decides which attribution map we look up: "city" → city primary
// photo + image-attribution.json; "poi" → POI photo + poi-image-attribution.json.
const HERO_CAROUSEL: Array<
  | { kind: "city"; cityId: string; alt: string }
  | { kind: "poi"; cityId: string; poiId: string; alt: string }
> = [
  { kind: "city", cityId: "beijing", alt: "The Forbidden City, Beijing" },
  { kind: "city", cityId: "shanghai", alt: "Shanghai's Bund at dusk" },
  { kind: "poi", cityId: "chengdu", poiId: "panda", alt: "A giant panda at the Chengdu base" },
  { kind: "city", cityId: "jiuzhaigou", alt: "Turquoise pools at Jiuzhaigou" },
  { kind: "city", cityId: "lhasa", alt: "The Potala Palace, Lhasa" },
  { kind: "city", cityId: "yangshuo", alt: "Karst peaks above the Yulong River, Yangshuo" },
];

type CityAttr = {
  photoId?: string;
  photographer?: string;
  photographerUrl?: string;
};
type POIAttr = {
  photoId?: string;
  photographer?: string;
  photographerUrl?: string;
};

const CITY_ATTR = cityAttribution as Record<string, CityAttr>;
const POI_ATTR = poiAttribution as Record<string, POIAttr>;

function imageExists(absSubdir: string, filename: string) {
  try {
    const p = path.resolve(process.cwd(), absSubdir, filename);
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

function buildCarouselImages(): CarouselImage[] {
  const out: CarouselImage[] = [];
  for (const entry of HERO_CAROUSEL) {
    if (entry.kind === "city") {
      if (!imageExists("public/images/cities", `${entry.cityId}.jpg`)) continue;
      const attr = CITY_ATTR[entry.cityId];
      out.push({
        src: `/images/cities/${entry.cityId}.jpg`,
        alt: entry.alt,
        photographer: attr?.photographer,
        photographerUrl: attr?.photographerUrl,
      });
    } else {
      const fileName = `${entry.cityId}-${entry.poiId}.jpg`;
      if (!imageExists("public/images/pois", fileName)) continue;
      const attr = POI_ATTR[`${entry.cityId}/${entry.poiId}`];
      out.push({
        src: `/images/pois/${fileName}`,
        alt: entry.alt,
        photographer: attr?.photographer,
        photographerUrl: attr?.photographerUrl,
      });
    }
  }
  return out;
}

export default function Hero() {
  const carouselImages = buildCarouselImages();

  return (
    <section className="border-b border-[#D3D1C7] bg-[#FBFAF6]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 px-6 pt-14 pb-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-12 md:pt-20 md:pb-20">
        {/* Left: copy */}
        <div className="flex flex-col gap-5">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#888780]">
            China, slow and unguided
          </div>
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 52, lineHeight: 1.05 }}
          >
            Mapped by the travelers who walked it.
          </h1>
          <p
            className="max-w-[520px] text-[#2C2C2A]"
            style={{ fontSize: 17, lineHeight: 1.6 }}
          >
            Real traveler footage pinned to every place. Plan a trip from what
            you actually see, not what a brochure tells you.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#5F5E5A]">
            <span>
              <strong className="font-medium text-[#2C2C2A]">{CITY_COUNT}</strong>{" "}
              cities
            </span>
            <span aria-hidden className="text-[#D3D1C7]">·</span>
            <span>
              <strong className="font-medium text-[#2C2C2A]">{ROUTE_COUNT}</strong>{" "}
              curated routes
            </span>
            <span aria-hidden className="text-[#D3D1C7]">·</span>
            <span>
              <strong className="font-medium text-[#2C2C2A]">{POI_COUNT}</strong>{" "}
              places, pinned
            </span>
          </div>
          <a
            href="#map"
            className="mt-4 inline-flex items-center gap-2 self-start text-[14px] font-medium text-[#D85A30] underline-offset-4 transition-colors hover:underline"
          >
            <span>Start with the map</span>
            <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Right: carousel of marquee scenes */}
        <div className="relative">
          {carouselImages.length > 0 ? (
            <PhotoCarousel images={carouselImages} aspectRatio="4 / 3" />
          ) : (
            <div
              className="flex w-full items-center justify-center rounded-[16px]"
              style={{
                aspectRatio: "4 / 3",
                background: "linear-gradient(180deg, #FAECE7 0%, #F5C4B3 100%)",
              }}
              aria-hidden
            >
              <span
                className="font-serif italic"
                style={{
                  fontSize: 96,
                  color: "#4A1B0C",
                  opacity: 0.7,
                  lineHeight: 1,
                }}
              >
                中国
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
