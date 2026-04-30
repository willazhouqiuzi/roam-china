// City detail page hero. Shows a 3-image carousel built from the same
// attribution data that drives the homepage city cards (primary + up to two
// extras). Falls back to a gradient + Chinese-character placeholder when no
// photos have been fetched yet.

import fs from "node:fs";
import path from "node:path";
import type { City } from "@/data/cities";
import attribution from "@/data/image-attribution.json";
import PhotoCarousel, { type CarouselImage } from "./PhotoCarousel";

type AttributionExtra = {
  slot: number;
  photoId: string;
  photoUrl: string;
  photographer: string;
  photographerUrl: string;
};

type Attribution = {
  photoId?: string;
  photoUrl?: string;
  photographer?: string;
  photographerUrl?: string;
  unsplashQuery?: string;
  extras?: AttributionExtra[];
};

const ATTRIBUTION: Record<string, Attribution> = attribution as Record<
  string,
  Attribution
>;

type Props = {
  city: City;
};

function imageExists(filename: string) {
  // Server-side check at build time. Each carousel slide is gated on the
  // file actually being on disk, so a partly-fetched batch never produces a
  // broken-image slide.
  try {
    const p = path.resolve(process.cwd(), "public/images/cities", filename);
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

function buildImages(city: City): CarouselImage[] {
  const attr = ATTRIBUTION[city.id];
  if (!attr) return [];
  const images: CarouselImage[] = [];
  if (attr.photoId && imageExists(`${city.id}.jpg`)) {
    images.push({
      src: `/images/cities/${city.id}.jpg`,
      alt: city.name,
      photographer: attr.photographer,
      photographerUrl: attr.photographerUrl,
    });
  }
  for (const extra of attr.extras ?? []) {
    if (imageExists(`${city.id}-${extra.slot}.jpg`)) {
      images.push({
        src: `/images/cities/${city.id}-${extra.slot}.jpg`,
        alt: city.name,
        photographer: extra.photographer,
        photographerUrl: extra.photographerUrl,
      });
    }
  }
  return images;
}

export default function CityHeroIllustration({ city }: Props) {
  const images = buildImages(city);

  if (images.length) {
    return <PhotoCarousel images={images} aspectRatio="16 / 9" />;
  }

  // Placeholder: gradient + Chinese characters
  return (
    <div
      className="flex aspect-[16/9] w-full flex-col items-center justify-center overflow-hidden rounded-[12px]"
      style={{ background: "linear-gradient(180deg, #FAECE7 0%, #F5C4B3 100%)" }}
      aria-hidden
    >
      <span
        className="font-serif italic"
        style={{ fontSize: 96, color: "#4A1B0C", opacity: 0.7, lineHeight: 1 }}
      >
        {city.nameZh}
      </span>
      <span
        className="mt-3 italic"
        style={{ fontSize: 14, color: "#4A1B0C", opacity: 0.5 }}
      >
        photo coming soon
      </span>
    </div>
  );
}
