import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { xianPOIs } from "@/data/poi-xian";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const xianDecoration = (
  <>
    <rect
      x="265"
      y="160"
      width="160"
      height="90"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="345"
      y="155"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      City Wall · 古城墙
    </text>
    <path
      d="M 80 70 Q 240 55 400 60 Q 560 65 660 55"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="100"
      y="50"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Wei River · 渭河
    </text>
  </>
);

export default function XianMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/xian"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Xi&apos;an
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Xi&apos;an
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Thirteen dynasties, one city · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="xian"
            pois={xianPOIs}
            defaultPoiId="terracotta-army"
            decoration={xianDecoration}
            ariaLabel="Xi'an places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 days here. Add a day for Mt. Hua.
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
