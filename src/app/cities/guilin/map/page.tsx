import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { guilinPOIs } from "@/data/poi-guilin";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

// Tiny scattered karst peak markers (suggestion of the landscape, not literal geography)
const karstPeaks: Array<[number, number]> = [
  [195, 240],
  [250, 285],
  [180, 320],
  [475, 285],
  [505, 350],
  [395, 350],
];

const guilinDecoration = (
  <>
    <path
      d="M 320 60 Q 340 140 350 220 Q 360 290 480 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.55"
      strokeLinecap="round"
    />
    <text
      x="425"
      y="70"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Li River · 漓江
    </text>
    {karstPeaks.map(([x, y], i) => (
      <path
        key={i}
        d={`M ${x - 8} ${y} L ${x} ${y - 18} L ${x + 8} ${y} Z`}
        fill="#D3D1C7"
        stroke="#B4B2A9"
        strokeWidth="0.5"
        opacity="0.6"
      />
    ))}
    <text
      x="218"
      y="345"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Karst peaks
    </text>
  </>
);

export default function GuilinMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/guilin"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Guilin
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Guilin
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            Karst peaks and slow rivers · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="guilin"
            pois={guilinPOIs}
            defaultPoiId="elephant-trunk-hill"
            decoration={guilinDecoration}
            ariaLabel="Guilin places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 days here, then move to Yangshuo for 2 more.
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
