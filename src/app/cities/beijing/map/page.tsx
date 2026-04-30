import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { beijingPOIs } from "@/data/poi-beijing";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const beijingDecoration = (
  <>
    <line
      x1="340"
      y1="60"
      x2="340"
      y2="360"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="340"
      y="50"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Central Axis · 中轴线
    </text>
    <rect
      x="180"
      y="140"
      width="320"
      height="200"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="340"
      y="350"
      textAnchor="middle"
      fontSize="11"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      2nd Ring · 二环
    </text>
  </>
);

export default function BeijingMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/beijing"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Beijing
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Beijing
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Where the journey begins · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="beijing"
            pois={beijingPOIs}
            defaultPoiId="forbidden-city"
            decoration={beijingDecoration}
            ariaLabel="Beijing places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 3 days here. Add the Wall for a fourth.
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
