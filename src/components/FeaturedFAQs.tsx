// Three featured "before you fly" FAQs surfaced on the homepage. Mirrors
// the FeaturedRoutes layout so the homepage has parallel discovery sections:
// pick a route OR get oriented on the practical basics.

import Link from "next/link";
import { faqs, type FAQ } from "@/data/faqs";

const FEATURED_FAQ_IDS = [
  "visa-free-transit",
  "alipay-wechat-foreigners",
  "internet-vpn-esim",
];

function snippet(answer: string, max = 140): string {
  const firstPara = answer.split(/\n\n/)[0] ?? "";
  // Strip the **bold** markdown markers for the preview.
  const plain = firstPara.replace(/\*\*([^*]+)\*\*/g, "$1");
  if (plain.length <= max) return plain;
  // Truncate at a word boundary if possible.
  const cut = plain.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…";
}

export default function FeaturedFAQs() {
  const featured: FAQ[] = FEATURED_FAQ_IDS.map((id) =>
    faqs.find((f) => f.id === id),
  ).filter((f): f is FAQ => Boolean(f));

  if (!featured.length) return null;

  return (
    <section className="border-t border-[#D3D1C7] bg-[#FBFAF6]">
      <div className="mx-auto max-w-[1100px] px-6 pt-14 pb-16">
        <header className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[#888780]">
              Before you fly
            </div>
            <h2
              className="mt-2 font-serif italic text-[#2C2C2A]"
              style={{ fontSize: 32, lineHeight: 1.1 }}
            >
              Three things every traveler asks.
            </h2>
          </div>
          <Link
            href="/help"
            className="shrink-0 text-[13px] font-medium text-[#D85A30] underline-offset-4 hover:underline"
          >
            All travel basics →
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((faq) => (
            <Link
              key={faq.id}
              href={`/help#${faq.id}`}
              className="group flex h-full flex-col rounded-[16px] border border-[#D3D1C7] bg-white p-6 transition-colors hover:border-[#B4B2A9]"
            >
              <div className="text-[11px] tracking-[0.18em] uppercase text-[#888780]">
                {faq.topic}
              </div>
              <h3
                className="mt-3 font-medium text-[#2C2C2A]"
                style={{ fontSize: 17, lineHeight: 1.35 }}
              >
                {faq.question}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-[1.55] text-[#5F5E5A]">
                {snippet(faq.answer)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[#D85A30] underline-offset-4 group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
