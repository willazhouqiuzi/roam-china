"use client";

import Link from "next/link";
import type { City } from "@/data/cities";
import PhotoCarousel, { type CarouselImage } from "./PhotoCarousel";
import attribution from "@/data/image-attribution.json";

type Attribution = {
  photoId?: string;
  photoUrl?: string;
  photographer?: string;
  photographerUrl?: string;
  unsplashQuery?: string;
  extras?: Array<{
    slot: number;
    photoId: string;
    photoUrl: string;
    photographer: string;
    photographerUrl: string;
  }>;
};

const ATTRIBUTION: Record<string, Attribution> = attribution as Record<string, Attribution>;

type GlanceKey = keyof City["glance"];

const GLANCE_FIELDS: Array<{ key: GlanceKey; label: string }> = [
  { key: "bestMonths", label: "Best months" },
  { key: "typicalStay", label: "Typical stay" },
  { key: "pace", label: "Pace" },
  { key: "knownFor", label: "Known for" },
  { key: "closestAirport", label: "Closest airport" },
  { key: "dontMiss", label: "Don't miss" },
];

function buildImages(city: City): CarouselImage[] {
  const attr = ATTRIBUTION[city.id];
  if (!attr) return [];
  const images: CarouselImage[] = [];
  if (attr.photoId) {
    images.push({
      src: `/images/cities/${city.id}.jpg`,
      alt: city.name,
      photographer: attr.photographer,
      photographerUrl: attr.photographerUrl,
    });
  }
  for (const extra of attr.extras ?? []) {
    images.push({
      src: `/images/cities/${city.id}-${extra.slot}.jpg`,
      alt: city.name,
      photographer: extra.photographer,
      photographerUrl: extra.photographerUrl,
    });
  }
  return images;
}

type Props = {
  city: City;
  inTrip: boolean;
  onAddToTrip: (city: City) => void;
  onRemoveFromTrip: (city: City) => void;
  onClose: () => void;
};

export default function CityPreview({
  city,
  inTrip,
  onAddToTrip,
  onRemoveFromTrip,
  onClose,
}: Props) {
  const images = buildImages(city);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[16px] border border-[#D3D1C7] bg-white">
      <div className="flex-1 overflow-y-auto p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2
              className="font-serif italic text-[#2C2C2A]"
              style={{ fontSize: 28, lineHeight: 1.1 }}
            >
              {city.name}
            </h2>
            <p className="mt-1 text-[12px] text-[#888780]">
              {city.nameZh} · {city.region} · {city.daysHint}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="shrink-0 text-[#888780] hover:text-[#2C2C2A]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path
                d="M1 1 L13 13 M13 1 L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          {images.length ? (
            <PhotoCarousel images={images} />
          ) : (
            <div
              className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-[12px]"
              style={{
                background: "linear-gradient(180deg, #FAECE7 0%, #F5C4B3 100%)",
              }}
              aria-hidden
            >
              <span
                className="font-serif italic"
                style={{ fontSize: 80, color: "#4A1B0C", opacity: 0.7, lineHeight: 1 }}
              >
                {city.nameZh}
              </span>
            </div>
          )}
        </div>

        <p className="mt-4 text-[14px] leading-[1.6] text-[#2C2C2A]">
          {city.blurb}
        </p>

        <h3 className="mt-5 font-serif italic text-[18px] text-[#2C2C2A]">
          At a glance
        </h3>
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
          {GLANCE_FIELDS.map((field) => (
            <div key={field.key} className="min-w-0">
              <dt className="text-[11px] text-[#888780]">{field.label}</dt>
              <dd className="mt-0.5 text-[13px] leading-snug text-[#2C2C2A]">
                {city.glance[field.key]}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-[#D3D1C7] p-4">
        {inTrip ? (
          <button
            type="button"
            onClick={() => onRemoveFromTrip(city)}
            className="h-9 flex-1 rounded-[8px] border border-[#D3D1C7] bg-white px-4 text-[13px] text-[#2C2C2A] transition-colors hover:border-[#B4B2A9]"
          >
            ✓ In your trip — remove
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAddToTrip(city)}
            className="h-9 flex-1 rounded-[8px] bg-[#D85A30] px-4 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            + Add to trip
          </button>
        )}
        <Link
          href={`/cities/${city.id}`}
          className="inline-flex h-9 items-center rounded-[8px] border border-[#D3D1C7] bg-white px-4 text-[13px] text-[#2C2C2A] transition-colors hover:border-[#B4B2A9]"
        >
          View details ↗
        </Link>
      </div>
    </article>
  );
}
