"use client";

import { useState } from "react";

export type CarouselImage = {
  src: string;
  alt: string;
  photographer?: string;
  photographerUrl?: string;
};

type Props = {
  images: CarouselImage[];
  /** CSS aspect-ratio, e.g. "4 / 3" (default), "16 / 9". */
  aspectRatio?: string;
};

export default function PhotoCarousel({ images, aspectRatio = "4 / 3" }: Props) {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const single = images.length === 1;
  const current = images[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-[12px] bg-[#F1EFE8]"
      style={{ aspectRatio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={current.src}
        src={current.src}
        alt={current.alt}
        className="block h-full w-full object-cover"
        loading="eager"
      />

      {/* Per-slide attribution, bottom-left, semi-transparent */}
      {current.photographer ? (
        <div className="pointer-events-auto absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 pt-6 pb-2 text-[10px] text-white/85">
          Photo by{" "}
          {current.photographerUrl ? (
            <a
              href={`${current.photographerUrl}?utm_source=roam-china&utm_medium=referral`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {current.photographer}
            </a>
          ) : (
            current.photographer
          )}{" "}
          on Unsplash
        </div>
      ) : null}

      {/* Prev / Next arrows (only when more than 1) */}
      {!single ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[#2C2C2A] shadow-sm transition-opacity hover:bg-white"
          >
            <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
              <path
                d="M7 1 L2 6 L7 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[#2C2C2A] shadow-sm transition-opacity hover:bg-white"
          >
            <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
              <path
                d="M3 1 L8 6 L3 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute left-1/2 top-2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Photo ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
