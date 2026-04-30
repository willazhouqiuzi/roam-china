import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { lhasaPOIs } from "@/data/poi-lhasa";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const lhasaDecoration = (
  <>
    {/* Lhasa River curving through the south */}
    <path
      d="M 60 300 Q 200 290 340 300 Q 470 310 640 290"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="290"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Lhasa River · 拉萨河
    </text>
    {/* Mountain silhouettes (Himalayan foothills) along the top */}
    <path
      d="M 40 80 L 90 50 L 130 70 L 180 40 L 230 75 L 280 45 L 330 70 L 380 35 L 430 65 L 480 40 L 530 70 L 580 50 L 640 75 L 640 90 L 40 90 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.65"
    />
    <text
      x="340"
      y="30"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Himalayan foothills · 喜马拉雅
    </text>
  </>
);

export default function LhasaMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/lhasa"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Lhasa
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Lhasa
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Three thousand five hundred meters up · 8 places · Tibet permit required
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="lhasa"
            pois={lhasaPOIs}
            defaultPoiId="potala-palace"
            decoration={lhasaDecoration}
            ariaLabel="Lhasa places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 3 days here. Add 1 to 3 more for the lakes or the road to Everest.
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
