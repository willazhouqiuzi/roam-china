// FAQ display component. Two variants:
//   - alwaysOpen={true}   → plain card with question + answer always visible
//                           (used on city detail pages where 1–2 FAQs are
//                           highly contextual)
//   - alwaysOpen={false}  → native <details> disclosure (used on /help page
//                           where 30+ FAQs benefit from being collapsed)

import type { ReactNode } from "react";
import type { FAQ } from "@/data/faqs";

type Props = {
  faq: FAQ;
  alwaysOpen?: boolean;
};

// Render an answer string into paragraph blocks with simple **bold** support.
function renderAnswer(answer: string): ReactNode[] {
  return answer.split(/\n\n+/).map((para, i) => (
    <p key={i}>{parseInline(para)}</p>
  ));
}

function parseInline(text: string): ReactNode[] {
  // Split on **...** while preserving the markers.
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-[#2C2C2A]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function FAQEntry({ faq, alwaysOpen = false }: Props) {
  const Eyebrow = (
    <div className="text-[11px] tracking-[0.18em] text-[#888780] uppercase">
      {faq.topic}
    </div>
  );
  const Question = (
    <h3
      className="font-medium text-[#2C2C2A]"
      style={{ fontSize: 17, lineHeight: 1.35 }}
    >
      {faq.question}
    </h3>
  );
  const Answer = (
    <div className="flex flex-col gap-3 text-[14px] leading-[1.6] text-[#2C2C2A]">
      {renderAnswer(faq.answer)}
    </div>
  );

  if (alwaysOpen) {
    return (
      <article
        id={faq.id}
        className="rounded-[14px] border border-[#D3D1C7] bg-white p-5"
      >
        {Eyebrow}
        <div className="mt-2">{Question}</div>
        <div className="mt-3">{Answer}</div>
      </article>
    );
  }

  return (
    <details
      id={faq.id}
      className="group rounded-[14px] border border-[#D3D1C7] bg-white open:bg-[#FBFAF6]"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 hover:bg-[#FBFAF6] open:bg-transparent">
        <div className="min-w-0 flex-1">
          {Eyebrow}
          <div className="mt-2">{Question}</div>
        </div>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-[18px] text-[#888780] transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="border-t border-[#EBEAE3] px-5 pt-4 pb-5">{Answer}</div>
    </details>
  );
}
