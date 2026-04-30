import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import Header from "@/components/Header";
import CityHeroIllustration from "@/components/CityHeroIllustration";
import CityMap from "@/components/CityMap";
import { cities } from "@/data/cities";
import type { City } from "@/data/cities";
import { cityMapConfigs } from "@/lib/city-map-config";
import { getCityVideoLinks } from "@/lib/videos";
import { faqs } from "@/data/faqs";
import FAQEntry from "@/components/FAQEntry";

type GlanceKey = keyof City["glance"];

const GLANCE_FIELDS: Array<{ key: GlanceKey; label: string }> = [
  { key: "bestMonths", label: "Best months" },
  { key: "typicalStay", label: "Typical stay" },
  { key: "pace", label: "Pace" },
  { key: "knownFor", label: "Known for" },
  { key: "closestAirport", label: "Closest airport" },
  { key: "dontMiss", label: "Don't miss" },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const city = cities.find((c) => c.id === id);
  if (!city) notFound();

  const mapConfig = city.hasCityMap ? cityMapConfigs[city.id] : undefined;
  const cityFAQs = faqs.filter(
    (f) => f.category === "city" && f.cityIds?.includes(city.id),
  );

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <FadeIn>
        <div className="mx-auto w-full max-w-[1100px] px-6 pt-6">
          <Link
            href="/"
            className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
          >
            ← All of China
          </Link>

          <header className="mt-8 max-w-[720px]">
            <h1
              className="font-serif italic text-[#2C2C2A]"
              style={{ fontSize: 56, lineHeight: 1.1 }}
            >
              {city.name}
            </h1>
            <p className="mt-2 text-[14px] text-[#888780]">
              {city.nameZh} · {city.name}
            </p>
            <p className="mt-1 text-[12px] text-[#5F5E5A]">
              {city.region} · {city.daysHint}
            </p>
            <p
              className="mt-5 text-[#2C2C2A]"
              style={{ fontSize: 17, lineHeight: 1.65 }}
            >
              {city.blurb}
            </p>
          </header>

          {/* Hero photo + At a glance, side-by-side. Photo gets a touch more
              real estate; glance grid sits next to it as a 2-col fact sheet. */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-10">
            <CityHeroIllustration city={city} />
            <div className="md:pt-2">
              <div className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
                At a glance
              </div>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {GLANCE_FIELDS.map((field) => (
                  <div key={field.key}>
                    <dt className="text-[11px] text-[#888780]">{field.label}</dt>
                    <dd className="mt-1 text-[13px] leading-[1.5] text-[#2C2C2A]">
                      {city.glance[field.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {mapConfig ? (
          <section className="mx-auto mt-16 w-full max-w-[1100px] border-t border-[#D3D1C7] px-6 pt-10">
            <header className="mb-6 flex items-baseline justify-between gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
                  01
                </span>
                <h2
                  className="font-serif italic text-[#2C2C2A]"
                  style={{ fontSize: 30, lineHeight: 1.1 }}
                >
                  Eight places in {city.name}
                </h2>
              </div>
              <p className="hidden text-[12px] text-[#888780] sm:block">
                Click a marker to switch.
              </p>
            </header>
            <CityMap
              cityId={city.id}
              pois={mapConfig.pois}
              defaultPoiId={mapConfig.defaultPoiId}
              decoration={mapConfig.decoration}
              ariaLabel={`${city.name} places of interest`}
            />
            {mapConfig.note ? (
              <p className="mt-4 text-[12px] text-[#5F5E5A]">{mapConfig.note}</p>
            ) : null}
          </section>
        ) : null}

        <div className="mx-auto w-full max-w-[880px] px-6">
          <section className="mt-16 border-t border-[#D3D1C7] pt-10">
            <div className="flex items-baseline gap-4">
              <span className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
                02
              </span>
              <h2
                className="font-serif italic text-[#2C2C2A]"
                style={{ fontSize: 30, lineHeight: 1.1 }}
              >
                On video
              </h2>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {getCityVideoLinks(city).map((video) => (
                <li
                  key={video.title}
                  className="flex items-center justify-between gap-4 rounded-[12px] border border-[#D3D1C7] p-4"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-[#888780]">YouTube</div>
                    <div className="mt-1 truncate text-[14px] text-[#2C2C2A]">
                      {video.title}
                    </div>
                    <div className="mt-1 text-[12px] text-[#5F5E5A]">
                      {video.creator}
                    </div>
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-[13px] text-[#D85A30] hover:underline"
                  >
                    Watch ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {cityFAQs.length > 0 ? (
            <section className="mt-16 border-t border-[#D3D1C7] pt-10">
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
                    03
                  </span>
                  <h2
                    className="font-serif italic text-[#2C2C2A]"
                    style={{ fontSize: 30, lineHeight: 1.1 }}
                  >
                    Practical
                  </h2>
                </div>
                <Link
                  href="/help"
                  className="shrink-0 text-[12px] font-medium text-[#D85A30] underline-offset-4 hover:underline"
                >
                  All travel basics →
                </Link>
              </div>
              <p className="mt-3 text-[13px] text-[#5F5E5A]">
                {cityFAQs.length === 1
                  ? "One thing worth knowing before you go."
                  : `${cityFAQs.length} things worth knowing before you go.`}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {cityFAQs.map((faq) => (
                  <FAQEntry key={faq.id} faq={faq} />
                ))}
              </div>
            </section>
          ) : null}

          <footer className="mt-20 mb-16 text-center">
            <Link
              href="/"
              className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
            >
              ← All of China
            </Link>
          </footer>
        </div>
      </FadeIn>
    </main>
  );
}
