import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { zhangjiajiePOIs } from "@/data/poi-zhangjiajie";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

// Sandstone pillar silhouettes scattered across the canvas
const pillars: Array<[number, number, number]> = [
  [220, 170, 70],
  [260, 250, 60],
  [340, 240, 75],
  [400, 245, 55],
  [385, 175, 65],
  [445, 270, 50],
];

const zhangjiajieDecoration = (
  <>
    {/* Wulingyuan park outline (rough) */}
    <path
      d="M 145 90 Q 200 80 270 95 Q 340 105 400 100 Q 440 110 445 175 Q 450 240 420 280 Q 380 310 320 320 Q 250 320 200 305 Q 150 280 130 220 Q 110 150 145 90 Z"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="280"
      y="80"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.6"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Wulingyuan park · 武陵源
    </text>
    {/* Sandstone pillars (tall narrow rectangles with rounded tops) */}
    {pillars.map(([x, y, h], i) => (
      <path
        key={i}
        d={`M ${x - 4} ${y} L ${x - 4} ${y - h} Q ${x} ${y - h - 4} ${x + 4} ${y - h} L ${x + 4} ${y} Z`}
        fill="#E5E2D9"
        stroke="#B4B2A9"
        strokeWidth="0.4"
        opacity="0.5"
      />
    ))}
  </>
);

export default function ZhangjiajieMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/zhangjiajie"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Zhangjiajie
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Zhangjiajie
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            The pillars that became Pandora · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="zhangjiajie"
            pois={zhangjiajiePOIs}
            defaultPoiId="yuanjiajie"
            decoration={zhangjiajieDecoration}
            ariaLabel="Zhangjiajie places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 to 3 days here. Stay inside the park gates if you can.
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
