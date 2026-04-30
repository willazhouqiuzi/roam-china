import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { qingdaoPOIs } from "@/data/poi-qingdao";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const qingdaoDecoration = (
  <>
    {/* Coastline / sea — large soft band along the bottom */}
    <path
      d="M 60 280 Q 200 295 340 290 Q 470 285 640 295 L 640 400 L 60 400 Z"
      fill="#9FE1CB"
      opacity="0.2"
      stroke="none"
    />
    <path
      d="M 60 280 Q 200 295 340 290 Q 470 285 640 295"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.6"
    />
    <text
      x="540"
      y="370"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yellow Sea · 黄海
    </text>
    {/* German concession ring (faint dashed) */}
    <ellipse
      cx="320"
      cy="210"
      rx="80"
      ry="55"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="225"
      y="155"
      textAnchor="start"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old town · 老城 (German concession)
    </text>
  </>
);

export default function QingdaoMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/qingdao"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Qingdao
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Qingdao
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            German bricks, ocean wind, beer at the source · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="qingdao"
            pois={qingdaoPOIs}
            defaultPoiId="zhanqiao-pier"
            decoration={qingdaoDecoration}
            ariaLabel="Qingdao places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            One full day for the old town and brewery; a second for Mt. Lao.
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
