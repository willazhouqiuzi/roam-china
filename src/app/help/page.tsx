import Link from "next/link";
import Header from "@/components/Header";
import FAQEntry from "@/components/FAQEntry";
import HashOpener from "@/components/HashOpener";
import { faqs } from "@/data/faqs";
import { cities } from "@/data/cities";

export default function HelpPage() {
  const generalFAQs = faqs.filter((f) => f.category === "general");
  const cityFAQs = faqs.filter((f) => f.category === "city");

  // Group city FAQs by their primary city (first entry in cityIds).
  const byCity = new Map<string, typeof cityFAQs>();
  for (const f of cityFAQs) {
    const primaryCityId = f.cityIds?.[0];
    if (!primaryCityId) continue;
    if (!byCity.has(primaryCityId)) byCity.set(primaryCityId, []);
    byCity.get(primaryCityId)!.push(f);
  }

  // Order city groups using the same logic as the city list page —
  // marquee 5 first, then geographically.
  const cityOrder = cities
    .filter((c) => byCity.has(c.id))
    .sort((a, b) => {
      const aRank = a.routeOrder ?? 99;
      const bRank = b.routeOrder ?? 99;
      if (aRank !== bRank) return aRank - bRank;
      if (a.mapY !== b.mapY) return a.mapY - b.mapY;
      return a.mapX - b.mapX;
    });

  // Group general FAQs by their topic for visual rhythm on a long page.
  const generalByTopic = new Map<string, typeof generalFAQs>();
  for (const f of generalFAQs) {
    if (!generalByTopic.has(f.topic)) generalByTopic.set(f.topic, []);
    generalByTopic.get(f.topic)!.push(f);
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HashOpener />
      <section className="mx-auto w-full max-w-[860px] px-6 pt-8 pb-16">
        <h1
          className="font-serif italic text-[#2C2C2A]"
          style={{ fontSize: 40, lineHeight: 1.1 }}
        >
          Travel basics
        </h1>
        <p className="mt-2 text-[13px] text-[#5F5E5A]">
          The practical questions foreign travelers actually ask about China —
          payment, visas, taxis, and what to know before you visit each city.
        </p>

        {/* General FAQs */}
        <section className="mt-12 border-t border-[#D3D1C7] pt-10">
          <div className="flex items-baseline gap-4">
            <span className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
              01
            </span>
            <h2
              className="font-serif italic text-[#2C2C2A]"
              style={{ fontSize: 30, lineHeight: 1.1 }}
            >
              Before you go
            </h2>
          </div>
          <p className="mt-3 text-[13px] text-[#5F5E5A]">
            {generalFAQs.length} general questions, anywhere in China.
          </p>

          <div className="mt-6 flex flex-col gap-6">
            {Array.from(generalByTopic.entries()).map(([topic, list]) => (
              <div key={topic} className="flex flex-col gap-2.5">
                <div className="text-[12px] font-medium text-[#5F5E5A]">
                  {topic}
                </div>
                {list.map((faq) => (
                  <FAQEntry key={faq.id} faq={faq} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* City FAQs */}
        <section className="mt-16 border-t border-[#D3D1C7] pt-10">
          <div className="flex items-baseline gap-4">
            <span className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
              02
            </span>
            <h2
              className="font-serif italic text-[#2C2C2A]"
              style={{ fontSize: 30, lineHeight: 1.1 }}
            >
              By city
            </h2>
          </div>
          <p className="mt-3 text-[13px] text-[#5F5E5A]">
            {cityFAQs.length} questions tied to specific destinations on the
            map.
          </p>

          <div className="mt-6 flex flex-col gap-8">
            {cityOrder.map((city) => {
              const list = byCity.get(city.id);
              if (!list || list.length === 0) return null;
              return (
                <div key={city.id} className="flex flex-col gap-2.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif italic text-[20px] text-[#2C2C2A]">
                      {city.name}
                    </h3>
                    <Link
                      href={`/cities/${city.id}`}
                      className="text-[12px] font-medium text-[#D85A30] underline-offset-4 hover:underline"
                    >
                      Open {city.name} guide →
                    </Link>
                  </div>
                  {list.map((faq) => (
                    <FAQEntry key={faq.id} faq={faq} />
                  ))}
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-20 mb-8 text-center">
          <Link
            href="/"
            className="inline-block text-[12px] text-[#5F5E5A] hover:text-[#2C2C2A]"
          >
            ← Back to map
          </Link>
        </footer>
      </section>
    </main>
  );
}
