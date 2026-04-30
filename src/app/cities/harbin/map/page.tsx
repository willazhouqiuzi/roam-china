import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { harbinPOIs } from "@/data/poi-harbin";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const harbinDecoration = (
  <>
    {/* Songhua River — wide curve through middle */}
    <path
      d="M 60 150 Q 200 130 340 165 Q 480 200 640 175"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="6"
      opacity="0.5"
      strokeLinecap="round"
    />
    <path
      d="M 60 150 Q 200 130 340 165 Q 480 200 640 175"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      opacity="0.5"
      strokeDasharray="2 4"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="125"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Songhua River · 松花江 (frozen Dec–Mar)
    </text>
    {/* Snowflake-style decorative dots scattered, suggesting winter */}
    <text x="100" y="60" fontSize="14" opacity="0.3" fill="#9FE1CB">❄</text>
    <text x="540" y="80" fontSize="14" opacity="0.3" fill="#9FE1CB">❄</text>
    <text x="600" y="350" fontSize="14" opacity="0.3" fill="#9FE1CB">❄</text>
    <text x="120" y="370" fontSize="14" opacity="0.3" fill="#9FE1CB">❄</text>
  </>
);

export default function HarbinMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/harbin"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Harbin
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Harbin
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Russian baroque, frozen river, ice festival in January · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="harbin"
            pois={harbinPOIs}
            defaultPoiId="ice-snow-world"
            decoration={harbinDecoration}
            ariaLabel="Harbin places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Two days here in any season; come in January for the ice festival, July for the green parks.
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
