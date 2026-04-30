import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { yangshuoPOIs } from "@/data/poi-yangshuo";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const karstPeaks: Array<[number, number]> = [
  [180, 245],
  [240, 305],
  [165, 175],
  [495, 280],
  [510, 165],
  [275, 360],
];

const yangshuoDecoration = (
  <>
    {/* Li River winding north-south, eastern side */}
    <path
      d="M 440 60 Q 460 130 470 220 Q 475 290 460 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.6"
      strokeLinecap="round"
    />
    <text
      x="490"
      y="80"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.75"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Li River · 漓江
    </text>
    {/* Yulong River — smaller, on the west side */}
    <path
      d="M 240 60 Q 260 150 280 230 Q 290 310 305 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="200"
      y="78"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yulong · 遇龙河
    </text>
    {/* Karst peaks scattered */}
    {karstPeaks.map(([x, y], i) => (
      <path
        key={i}
        d={`M ${x - 8} ${y} L ${x} ${y - 22} L ${x + 8} ${y} Z`}
        fill="#D3D1C7"
        stroke="#B4B2A9"
        strokeWidth="0.5"
        opacity="0.55"
      />
    ))}
  </>
);

export default function YangshuoMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/yangshuo"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Yangshuo
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Yangshuo
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Karst, river, bicycle · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="yangshuo"
            pois={yangshuoPOIs}
            defaultPoiId="yulong-river"
            decoration={yangshuoDecoration}
            ariaLabel="Yangshuo places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 days here, mixed walking and water.
          </p>
          <button
            type="button"
            className="h-10 rounded-[8px] border border-[#D3D1C7] bg-white px-4 text-[14px] text-[#2C2C2A] transition-colors hover:border-[#B4B2A9]"
          >
            Add to trip
          </button>
        </div>
      </section>
    </main>
  );
}
