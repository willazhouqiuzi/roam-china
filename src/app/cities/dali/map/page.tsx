import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { daliPOIs } from "@/data/poi-dali";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const daliDecoration = (
  <>
    {/* Erhai Lake — large ear-shaped ellipse east of city */}
    <ellipse
      cx="465"
      cy="220"
      rx="80"
      ry="120"
      fill="#9FE1CB"
      opacity="0.25"
      stroke="#9FE1CB"
      strokeWidth="1"
    />
    <text
      x="465"
      y="225"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Erhai · 洱海
    </text>
    {/* Cangshan range — mountain silhouette on the west */}
    <path
      d="M 80 320 L 110 250 L 140 270 L 175 200 L 210 240 L 240 180 L 270 220 L 290 160 L 310 200 L 320 320 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.6"
    />
    <text
      x="180"
      y="100"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Cangshan · 苍山
    </text>
  </>
);

export default function DaliMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/dali"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Dali
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Dali
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Lake on one side, mountains on the other · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="dali"
            pois={daliPOIs}
            defaultPoiId="erhai-lake"
            decoration={daliDecoration}
            ariaLabel="Dali places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 days here. Add a day to cycle around Erhai.
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
