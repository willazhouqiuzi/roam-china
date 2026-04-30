import Link from "next/link";
import Header from "@/components/Header";
import CityMap from "@/components/CityMap";
import { hangzhouPOIs } from "@/data/poi-hangzhou";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

const hangzhouDecoration = (
  <>
    <ellipse
      cx="335"
      cy="205"
      rx="70"
      ry="50"
      fill="#9FE1CB"
      opacity="0.25"
      stroke="#9FE1CB"
      strokeWidth="1"
    />
    <text
      x="335"
      y="208"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      West Lake · 西湖
    </text>
    <path
      d="M 60 320 Q 200 290 340 295 Q 470 305 640 280"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="335"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Qiantang River · 钱塘江
    </text>
    <text
      x="180"
      y="225"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Tea hills · 茶山
    </text>
  </>
);

export default function HangzhouMapPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-16">
        <Link
          href="/cities/hangzhou"
          className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
        >
          ← Hangzhou
        </Link>

        <header className="mt-6">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 32, lineHeight: 1.1 }}
          >
            Hangzhou
          </h1>
          <p className="mt-1 text-[12px] text-[#888780]">
            The lake that inspired a thousand poems · 8 places
          </p>
        </header>

        <div className="mt-8">
          <CityMap
            cityId="hangzhou"
            pois={hangzhouPOIs}
            defaultPoiId="west-lake"
            decoration={hangzhouDecoration}
            ariaLabel="Hangzhou places of interest"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] bg-white p-4">
          <p className="text-[12px] text-[#5F5E5A]">
            Most travelers spend 1 to 2 days here. Pair with Shanghai for an easy bullet-train side trip.
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
