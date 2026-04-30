import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { chengduPOIs } from "@/data/poi-chengdu";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const chengduDecoration = (
  <>
    <path
      d="M 40 110 Q 180 88 280 130 Q 380 165 480 145 Q 560 132 660 105"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <path
      d="M 50 320 Q 200 300 340 318 Q 480 335 640 315"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <ellipse
      cx="370"
      cy="220"
      rx="220"
      ry="115"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="370"
      y="225"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old city · 1st ring
    </text>
    <text
      x="48"
      y="102"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Jin River
    </text>
  </>
);

export default function ChengduMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/chengdu"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Chengdu
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Chengdu
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            A city that moves slower than you · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="chengdu"
            pois={chengduPOIs}
            defaultPoiId="park"
            decoration={chengduDecoration}
            ariaLabel="Chengdu places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 to 3 days here. Add Mt. Qingcheng for a fourth.
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
