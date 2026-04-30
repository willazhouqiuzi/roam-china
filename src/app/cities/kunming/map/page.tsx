import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { kunmingPOIs } from "@/data/poi-kunming";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const kunmingDecoration = (
  <>
    {/* Dianchi Lake — large ellipse SW */}
    <ellipse
      cx="250"
      cy="320"
      rx="120"
      ry="50"
      fill="#9FE1CB"
      opacity="0.25"
      stroke="#9FE1CB"
      strokeWidth="1"
    />
    <text
      x="250"
      y="325"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Dianchi · 滇池
    </text>
    {/* Western Hills — mountain silhouette */}
    <path
      d="M 70 300 L 100 240 L 130 270 L 160 220 L 200 260 L 220 250 L 220 310 L 70 310 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.6"
    />
    {/* Old city ring (faint dashed circle around the centre) */}
    <ellipse
      cx="335"
      cy="200"
      rx="60"
      ry="40"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="335"
      y="148"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old city · 老城
    </text>
  </>
);

export default function KunmingMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/kunming"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Kunming
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Kunming
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            The Spring City · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="kunming"
            pois={kunmingPOIs}
            defaultPoiId="green-lake-park"
            decoration={kunmingDecoration}
            ariaLabel="Kunming places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 2 days here, then push west to Dali and Lijiang.
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
