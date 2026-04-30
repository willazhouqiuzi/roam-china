import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { jiuzhaigouPOIs } from "@/data/poi-jiuzhaigou";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const jiuzhaigouDecoration = (
  <>
    {/* Y-shaped valley — two upper branches converging at Nuorilang, then down to entrance */}
    <path
      d="M 250 200 Q 280 195 300 195 M 360 80 Q 350 130 330 175 Q 320 185 300 195 M 300 195 Q 320 240 360 320"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.55"
      strokeLinecap="round"
    />
    <text
      x="240"
      y="170"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Rize Valley · 日则沟
    </text>
    <text
      x="385"
      y="65"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Zechawa Valley · 则查洼沟
    </text>
    <text
      x="375"
      y="335"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Shuzheng Valley · 树正沟 ↓ Park entrance
    </text>
    {/* Mountain peaks lining the valleys */}
    <path
      d="M 100 100 L 140 70 L 180 100 L 220 60 L 260 100 L 280 70 L 280 200 L 100 200 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.45"
    />
    <path
      d="M 400 130 L 440 80 L 480 110 L 520 60 L 560 100 L 600 70 L 600 250 L 400 250 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.45"
    />
  </>
);

export default function JiuzhaigouMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/jiuzhaigou"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Jiuzhaigou
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Jiuzhaigou
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Nine villages, three valleys, a hundred turquoise pools · 8 places · Closes in winter
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="jiuzhaigou"
            pois={jiuzhaigouPOIs}
            defaultPoiId="five-coloured-pool"
            decoration={jiuzhaigouDecoration}
            ariaLabel="Jiuzhaigou places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Two days in the valley itself; add a third for Huanglong.
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
