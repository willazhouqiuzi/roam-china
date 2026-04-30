import type { POI } from "@/data/poi";
import poiAttribution from "@/data/poi-image-attribution.json";

type POIAttribution = {
  photoId: string;
  photoUrl: string;
  photographer: string;
  photographerUrl: string;
  unsplashQuery: string;
};

const ATTRIBUTION: Record<string, POIAttribution> = poiAttribution as Record<
  string,
  POIAttribution
>;

type Props = {
  cityId: string;
  poi: POI;
};

export default function POIPanel({ cityId, poi }: Props) {
  const key = `${cityId}/${poi.id}`;
  const attr = ATTRIBUTION[key];
  const hasPhoto = Boolean(attr);

  return (
    <article className="flex flex-col overflow-hidden rounded-[16px] border border-[#D3D1C7] bg-white">
      {hasPhoto ? (
        <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/pois/${cityId}-${poi.id}.jpg`}
            alt={poi.name}
            className="block h-full w-full object-cover"
            loading="eager"
          />
          {attr ? (
            <div className="pointer-events-auto absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 pt-5 pb-1.5 text-[9px] text-white/85">
              Photo by{" "}
              <a
                href={`${attr.photographerUrl}?utm_source=roam-china&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                {attr.photographer}
              </a>{" "}
              / Unsplash
            </div>
          ) : null}
        </div>
      ) : (
        <div
          className="flex w-full items-center justify-center"
          style={{ aspectRatio: "16 / 10", background: "#FAECE7" }}
          aria-hidden
        >
          <span
            className="font-serif italic"
            style={{ fontSize: 88, color: "#4A1B0C", opacity: 0.85, lineHeight: 1 }}
          >
            {poi.glyph}
          </span>
        </div>
      )}
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-5">
        <div>
          <h2 className="font-serif italic text-[20px] leading-tight text-[#2C2C2A]">
            {poi.name}
          </h2>
          <p className="mt-1 text-[11px] text-[#888780]">
            {poi.nameZh} · {poi.pinyin}
          </p>
        </div>
        <p className="text-[13px] leading-[1.55] text-[#2C2C2A]">{poi.prose}</p>
      </div>
    </article>
  );
}
