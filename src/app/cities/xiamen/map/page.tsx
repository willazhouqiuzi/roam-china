import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { xiamenPOIs } from "@/data/poi-xiamen";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const xiamenDecoration = (
  <>
    {/* Coastline / strait between Xiamen Island and Gulangyu */}
    <path
      d="M 60 130 Q 130 145 175 195 Q 200 230 215 290 Q 230 350 280 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.55"
      strokeLinecap="round"
    />
    {/* Sea fill (light) on the west side */}
    <path
      d="M 60 60 L 60 380 Q 230 350 215 290 Q 200 230 175 195 Q 130 145 60 130 Z"
      fill="#9FE1CB"
      opacity="0.18"
      stroke="none"
    />
    <text
      x="80"
      y="100"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Xiamen Strait · 厦门湾
    </text>
    {/* Gulangyu island outline (small ellipse) */}
    <ellipse
      cx="220"
      cy="225"
      rx="38"
      ry="55"
      fill="#FFFFFF"
      opacity="0.7"
      stroke="#B4B2A9"
      strokeWidth="0.5"
    />
    <text
      x="220"
      y="295"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.6"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Gulangyu · 鼓浪屿
    </text>
  </>
);

export default function XiamenMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/xiamen"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Xiamen
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Xiamen
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Island city, soft light, slow afternoons · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="xiamen"
            pois={xiamenPOIs}
            defaultPoiId="gulangyu"
            decoration={xiamenDecoration}
            ariaLabel="Xiamen places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Two days here, including a full day on Gulangyu. Sleep on the island once.
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
