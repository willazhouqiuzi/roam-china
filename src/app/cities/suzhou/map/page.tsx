import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { suzhouPOIs } from "@/data/poi-suzhou";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const suzhouDecoration = (
  <>
    {/* Grand Canal — runs N-S on the west side of the city */}
    <path
      d="M 130 60 Q 145 150 155 220 Q 165 300 175 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="105"
      y="80"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Grand Canal · 大运河
    </text>
    {/* Network of small canals through the old city */}
    <path
      d="M 280 140 L 420 140 M 280 165 L 420 165 M 280 220 L 420 220 M 280 250 L 420 250 M 280 280 L 420 280 M 300 140 L 300 280 M 350 140 L 350 280 M 400 140 L 400 280"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="0.7"
      opacity="0.4"
    />
    {/* Old city wall (square) */}
    <rect
      x="265"
      y="125"
      width="170"
      height="170"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="350"
      y="120"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old city · 古城
    </text>
  </>
);

export default function SuzhouMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/suzhou"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Suzhou
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Suzhou
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Gardens and canals · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="suzhou"
            pois={suzhouPOIs}
            defaultPoiId="humble-administrator"
            decoration={suzhouDecoration}
            ariaLabel="Suzhou places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            One full day for the gardens; add a second for Tongli or a slow morning on Pingjiang.
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
