import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { shanghaiPOIs } from "@/data/poi-shanghai";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const shanghaiDecoration = (
  <>
    <path
      d="M 365 60 Q 380 150 410 230 Q 440 310 460 360"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.5"
      strokeLinecap="round"
    />
    <path
      d="M 60 130 Q 200 120 290 105 Q 360 100 460 105"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.5"
      strokeLinecap="round"
    />
    <ellipse
      cx="320"
      cy="252"
      rx="55"
      ry="35"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="320"
      y="295"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old City · 老城
    </text>
    <text
      x="430"
      y="160"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Huangpu River · 黄浦江
    </text>
    <text
      x="80"
      y="125"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Suzhou Creek · 苏州河
    </text>
  </>
);

export default function ShanghaiMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/shanghai"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Shanghai
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Shanghai
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Where the trip ends · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="shanghai"
            pois={shanghaiPOIs}
            defaultPoiId="bund"
            decoration={shanghaiDecoration}
            ariaLabel="Shanghai places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 to 3 days here. Add a day for Suzhou or Hangzhou.
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
