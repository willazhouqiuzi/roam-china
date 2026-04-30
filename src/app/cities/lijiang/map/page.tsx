import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { lijiangPOIs } from "@/data/poi-lijiang";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const lijiangDecoration = (
  <>
    {/* Jade Dragon Mountain (snow peak silhouette in the north) */}
    <path
      d="M 340 80 L 380 50 L 420 90 L 450 70 L 490 110 L 380 110 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.7"
    />
    <path
      d="M 372 60 L 380 50 L 388 60 M 442 75 L 450 70 L 458 78"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1"
      opacity="0.7"
    />
    <text
      x="415"
      y="135"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Jade Dragon Mountain · 玉龙雪山
    </text>
    {/* Old town ring (faint dashed circle around old town POIs) */}
    <ellipse
      cx="335"
      cy="240"
      rx="55"
      ry="35"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="335"
      y="290"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old town · 大研古城
    </text>
  </>
);

export default function LijiangMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/lijiang"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Lijiang
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Lijiang
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Cobblestones at altitude · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="lijiang"
            pois={lijiangPOIs}
            defaultPoiId="old-town"
            decoration={lijiangDecoration}
            ariaLabel="Lijiang places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 days here. Add a third for Jade Dragon or Tiger Leaping Gorge.
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
