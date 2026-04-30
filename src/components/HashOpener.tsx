"use client";

import { useEffect } from "react";

// When a user arrives at /help#some-faq-id (e.g. by clicking through from
// the homepage), open the matching <details> element so the answer is
// visible without an extra click — and re-scroll to compensate for the
// layout shift caused by opening it.
//
// Listens for hashchange too, so clicking another in-page anchor also
// opens that disclosure.
export default function HashOpener() {
  useEffect(() => {
    function openTarget() {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      // decodeURIComponent in case the id ever contains escaped chars.
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;
      if (el.tagName === "DETAILS") {
        (el as HTMLDetailsElement).open = true;
      }
      // Scroll into view (smooth) — works whether or not the element
      // was just opened.
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    openTarget();
    window.addEventListener("hashchange", openTarget);
    return () => window.removeEventListener("hashchange", openTarget);
  }, []);

  return null;
}
