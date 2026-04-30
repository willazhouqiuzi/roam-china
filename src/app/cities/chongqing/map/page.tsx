import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { chongqingPOIs } from "@/data/poi-chongqing";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const chongqingDecoration = (
  <>
    {/* Jialing River from north, joining Yangtze in the centre */}
    <path
      d="M 60 90 Q 180 130 280 200 Q 320 230 380 240"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.55"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="80"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Jialing River · 嘉陵江
    </text>
    {/* Yangtze River — bigger, joining Jialing and continuing east */}
    <path
      d="M 60 320 Q 200 290 320 260 Q 380 240 440 270 Q 540 320 640 350"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3.5"
      opacity="0.6"
      strokeLinecap="round"
    />
    <text
      x="540"
      y="295"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.75"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yangtze · 长江
    </text>
    {/* Peninsula label (the city core sits at the rivers' confluence) */}
    <text
      x="365"
      y="260"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yuzhong peninsula · 渝中半岛
    </text>
  </>
);

export default function ChongqingMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/chongqing"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Chongqing
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Chongqing
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Vertical, neon, unrelenting · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="chongqing"
            pois={chongqingPOIs}
            defaultPoiId="hongya-cave"
            decoration={chongqingDecoration}
            ariaLabel="Chongqing places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 days here; add days for the Yangtze cruise or Wulong karst.
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
