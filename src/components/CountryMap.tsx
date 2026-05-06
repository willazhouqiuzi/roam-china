"use client";

// Photo-pinned country map.
//
// Rendering strategy (cribbed from a Claude Design demo): the China outline,
// sea labels, route lines, and city name labels are all drawn in SVG. The
// city PIN itself is an HTML <button> with a CSS background-image, absolutely
// positioned on top of the SVG. SVG <pattern> for round photos is unreliable
// at small sizes — HTML divs render photos natively, support border-radius,
// crisp 2x sources, and easy hover transitions.
//
// To keep HTML pins aligned with the SVG as the container resizes, we use a
// ResizeObserver on the map area, then `toPixel(mapX, mapY)` projects a
// viewBox coordinate into a pixel offset accounting for the "meet"
// letterboxing that preserveAspectRatio adds.

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { City } from "@/data/cities";
import { CHINA_LAND_D, HAINAN_PATH_D, TAIWAN_D } from "@/lib/map-shapes";

// ── Layout constants ─────────────────────────────────────────────────────
const VB_W = 680;
const VB_H = 410;
const COUNTRY_FADE_DURATION = 0.5;
// City labels use Lora — an upright serif that reads like an old atlas
// without being italic. Instrument Serif is reserved for the (italic-only)
// atmospheric labels (sea names, region annotations).
const LABEL_FONT = 'var(--font-lora), Georgia, serif';
const ATMOSPHERE_FONT = "var(--font-instrument-serif), Georgia, serif";
const SANS_FONT = "var(--font-inter), system-ui, sans-serif";

// ── City visualization metadata ──────────────────────────────────────────
type Tier = 1 | 2 | 3;

// Pin radius in viewBox units. Tuned so that at typical desktop container
// width (~1000–1100 px → scale ≈ 1.5), pins render at roughly the requested
// pixel diameters: tier 1 ≈ 52 px, tier 2 ≈ 32 px, tier 3 ≈ 20 px.
const TIER_R: Record<Tier, number> = { 1: 18, 2: 11, 3: 7 };

const CITY_TIERS: Record<string, Tier> = {
  // tier 1 — anchor cities
  beijing: 1, shanghai: 1, xian: 1, chengdu: 1, guilin: 1, hangzhou: 1,
  // tier 2 — secondary cities + marquee detours
  chongqing: 2, suzhou: 2, lhasa: 2, kunming: 2, harbin: 2, qingdao: 2,
  xiamen: 2, lijiang: 2, dali: 2, zhangjiajie: 2, yangshuo: 2, jiuzhaigou: 2,
  guangzhou: 2, gansu: 2, xinjiang: 2,
  // tier 3 — off-beat / smaller destinations
  qinghai: 3, ningxia: 3, "inner-mongolia": 3, wuhan: 3, changsha: 3,
  jingdezhen: 3, wuyuan: 3, chaozhou: 3, shantou: 3,
};

// Category membership for the filter chips. A city can belong to multiple
// categories (e.g. Hangzhou is both Heritage and Nature, Chongqing is both
// Big city and Food). The filter chip matches if the city's array includes
// the chip's id.
type CategoryId = "cities" | "nature" | "food" | "heritage";
const CITY_CATEGORIES: Record<string, CategoryId[]> = {
  // Big cities
  beijing:           ["cities"],
  shanghai:          ["cities"],
  guangzhou:         ["cities", "food"],
  wuhan:             ["cities"],
  harbin:            ["cities"],
  chongqing:         ["cities", "food"],
  // Nature (incl. previously off-beat Xinjiang, and ex-Heritage Hangzhou /
  // Suzhou / Lijiang / Dali per the curated re-categorization)
  guilin:            ["nature"],
  kunming:           ["nature"],
  zhangjiajie:       ["nature"],
  yangshuo:          ["nature"],
  jiuzhaigou:        ["nature"],
  hangzhou:          ["nature", "heritage"],
  suzhou:            ["nature", "heritage"],
  lijiang:           ["nature"],
  dali:              ["nature"],
  xinjiang:          ["nature"],
  qingdao:           ["nature"],
  xiamen:            ["nature"],
  qinghai:           ["nature"],
  ningxia:           ["nature"],
  "inner-mongolia":  ["nature"],
  // Food
  chengdu:           ["food"],
  xian:              ["food", "heritage"],
  changsha:          ["food"],
  chaozhou:          ["food", "heritage"],
  shantou:           ["food"],
  // Heritage
  lhasa:             ["heritage"],
  gansu:             ["heritage"],
  jingdezhen:        ["heritage"],
  wuyuan:            ["heritage"],
};

// Single descriptive flavor tag per city — shown on the hover card line
// ("+3–4 DAYS · SPIRITUAL"). Independent of category membership above so we
// can pick the most evocative word, even if the city sits in multiple
// chip groups.
const CITY_TAG: Record<string, string> = {
  beijing: "capital",         shanghai: "metropolis",
  xian: "history",            chengdu: "food",
  guilin: "nature",           hangzhou: "lake & tea",
  chongqing: "metropolis",    suzhou: "gardens",
  lhasa: "spiritual",         kunming: "nature",
  harbin: "winter",           qingdao: "coastal",
  xiamen: "coastal",          lijiang: "old-town",
  dali: "old-town",           zhangjiajie: "nature",
  yangshuo: "nature",         jiuzhaigou: "nature",
  guangzhou: "food",          gansu: "silk-road",
  xinjiang: "silk-road",      qinghai: "lake",
  ningxia: "desert",          "inner-mongolia": "grasslands",
  wuhan: "urban",             changsha: "food",
  jingdezhen: "craft",        wuyuan: "village",
  chaozhou: "craft",          shantou: "food",
};

// Pinyin with tone marks for the hover preview card.
const CITY_PINYIN: Record<string, string> = {
  beijing: "Běijīng", shanghai: "Shànghǎi", xian: "Xī'ān", chengdu: "Chéngdū",
  guilin: "Guìlín", hangzhou: "Hángzhōu", lhasa: "Lāsà", chongqing: "Chóngqìng",
  suzhou: "Sūzhōu", kunming: "Kūnmíng", harbin: "Hā'ěrbīn", qingdao: "Qīngdǎo",
  xiamen: "Xiàmén", lijiang: "Lìjiāng", dali: "Dàlǐ", zhangjiajie: "Zhāngjiājiè",
  yangshuo: "Yángshuò", jiuzhaigou: "Jiǔzhàigōu", guangzhou: "Guǎngzhōu",
  gansu: "Gānsù", xinjiang: "Xīnjiāng", qinghai: "Qīnghǎi", ningxia: "Níngxià",
  "inner-mongolia": "Nèi Měnggǔ", wuhan: "Wǔhàn", changsha: "Chángshā",
  jingdezhen: "Jǐngdézhèn", wuyuan: "Wùyuán", chaozhou: "Cháozhōu",
  shantou: "Shàntóu",
};

// Pin position nudge (viewBox units) — for VISUAL spreading of tight
// geographic clusters. The underlying city.mapX/mapY stay correct as data;
// these offsets only shift where we draw the photo pin (and its label /
// the route line passing through it). Kept under ~10 units so cities still
// read as being in their actual region.
const PIN_OFFSET: Record<string, { dx: number; dy: number }> = {
  // Yangtze delta — Shanghai swallows Suzhou and Hangzhou geographically
  shanghai:    { dx:  10, dy:  -2 },  // nudge east into the sea
  suzhou:      { dx:  -8, dy: -22 },  // nudge NW
  hangzhou:    { dx: -16, dy:  16 },  // nudge SW
  // Sichuan basin
  chongqing:   { dx:   8, dy:  10 },  // nudge SE away from Chengdu
  // Yunnan
  lijiang:     { dx:  -6, dy: -10 },  // nudge NW
  dali:        { dx:   6, dy:   8 },  // nudge SE
  // Karst — Yangshuo overlaps Guilin
  yangshuo:    { dx:  10, dy:  24 },  // nudge SE further to clear Guilin
  // Jiangxi — Jingdezhen and Wuyuan are ~7 units apart
  jingdezhen:  { dx:  -6, dy:   2 },
  wuyuan:      { dx:   8, dy:  -8 },  // nudge NE
  // Central — Wuhan / Zhangjiajie / Changsha cluster
  wuhan:       { dx:   2, dy:  -8 },  // nudge N
  zhangjiajie: { dx:  -8, dy:  -4 },  // nudge W
  changsha:    { dx:   2, dy:   8 },  // nudge S
  // Chaoshan — Chaozhou and Shantou sit ~3 units apart
  chaozhou:    { dx:   0, dy:  -8 },  // nudge N
  shantou:     { dx:  10, dy:  10 },  // nudge SE
};

// Manual label offsets (viewBox units, relative to the *effective* pin
// position) for cities where the default left/right placement collides
// with a neighbor.
type LabelOff = { dx: number; dy: number; anchor: "start" | "middle" | "end" };
const LABEL_OFF: Record<string, LabelOff> = {
  // East delta
  shanghai:    { dx:  22, dy:   4, anchor: "start" },  // east into sea
  suzhou:      { dx: -16, dy:   4, anchor: "end" },    // W (clears Qingdao / Shanghai pins)
  hangzhou:    { dx:   0, dy:  32, anchor: "middle" }, // S, far enough to clear pin radius
  // Sichuan
  chengdu:     { dx: -22, dy:   4, anchor: "end" },
  chongqing:   { dx: -24, dy:  24, anchor: "end" },     // SW, far enough to clear Chengdu's label and pin
  jiuzhaigou:  { dx: -16, dy:   4, anchor: "end" },
  // Yunnan
  kunming:     { dx:  16, dy:   4, anchor: "start" },
  lijiang:     { dx: -16, dy:  -2, anchor: "end" },
  dali:        { dx: -16, dy:  10, anchor: "end" },
  // Karst
  guilin:      { dx:   0, dy: -22, anchor: "middle" },
  yangshuo:    { dx: -14, dy:  10, anchor: "end" },     // SW (away from Guangzhou)
  guangzhou:   { dx:  16, dy:   4, anchor: "start" },   // E (away from Yangshuo)
  // Jiangxi
  jingdezhen:  { dx: -10, dy:  -2, anchor: "end" },
  wuyuan:      { dx:  10, dy:   4, anchor: "start" },
  // Central
  wuhan:       { dx:   0, dy: -14, anchor: "middle" },
  zhangjiajie: { dx:   0, dy: -16, anchor: "middle" },  // above pin (sits in Xi'an↔Wuhan gap)
  changsha:    { dx:  10, dy:   8, anchor: "start" },
  // Chaoshan
  chaozhou:    { dx:   0, dy: -12, anchor: "middle" },
  shantou:     { dx:  12, dy:   8, anchor: "start" },
  // Xiamen — default labelLeft hits Guangzhou pin; above hits Hangzhou label.
  // Tuck it down-right toward the strait.
  xiamen:      { dx:  16, dy:  10, anchor: "start" },
};

// ── Filter chips ─────────────────────────────────────────────────────────
type ThemeKey = "all" | CategoryId;
const THEME_TAGS: Record<ThemeKey, { label: string }> = {
  all:      { label: "All" },
  cities:   { label: "Big cities" },
  nature:   { label: "Nature" },
  food:     { label: "Food" },
  heritage: { label: "Heritage" },
};

// ── Featured route overlays ──────────────────────────────────────────────
type StarterRoute = {
  id: string;
  name: string;
  days: number;
  color: string;
  stops: string[];
};

const STARTER_ROUTES: StarterRoute[] = [
  {
    id: "classic",
    name: "Classic First Time",
    days: 10,
    color: "#c4623a",
    stops: ["beijing", "xian", "chengdu", "guilin", "shanghai"],
  },
  {
    id: "epic",
    name: "Epic with Yunnan & Tibet",
    days: 18,
    color: "#5b8a6e",
    stops: ["shanghai", "guilin", "kunming", "dali", "lijiang", "lhasa", "chengdu"],
  },
  {
    id: "mustsee",
    name: "Must-See incl. Tibet",
    days: 21,
    color: "#7a6a8e",
    stops: ["beijing", "xian", "lhasa", "chengdu", "zhangjiajie", "guilin", "shanghai"],
  },
];

// ── Sea + region atmosphere labels (kept from previous version) ──────────
const SEA_LABELS: Array<{ text: string; x: number; y: number; size: number }> = [
  { text: "Yellow Sea",      x: 605, y: 195, size: 15 },
  { text: "黄海",             x: 605, y: 213, size: 11 },
  { text: "East China Sea",  x: 605, y: 290, size: 15 },
  { text: "东海",             x: 605, y: 308, size: 11 },
  { text: "South China Sea", x: 540, y: 388, size: 15 },
  { text: "南海",             x: 540, y: 405, size: 11 },
  { text: "Bohai",           x: 530, y: 145, size: 13 },
];

const REGION_LABELS: Array<{ text: string; x: number; y: number; size: number }> = [
  { text: "the Northwest", x: 195, y:  90, size: 18 },
  { text: "the Steppe",    x: 480, y: 110, size: 16 },
  { text: "the Plateau",   x: 175, y: 245, size: 17 },
  { text: "the Yangtze",   x: 380, y: 295, size: 14 },
  { text: "the South",     x: 380, y: 365, size: 16 },
];

// ─────────────────────────────────────────────────────────────────────────

type Props = {
  cities: City[];
  selectedCityId: string | null;
  tripCityIds: string[];
  onSelectCity: (city: City) => void;
};

export default function CountryMap({
  cities,
  selectedCityId,
  tripCityIds,
  onSelectCity,
}: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [theme, setTheme] = useState<ThemeKey>("all");
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const tripSet = new Set(tripCityIds);

  // Track the rendered map area in pixels so the HTML photo pins can sit
  // in the exact spot the SVG draws each city.
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapBox, setMapBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!mapRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      setMapBox({ w: r.width, h: r.height });
    });
    ro.observe(mapRef.current);
    return () => ro.disconnect();
  }, []);

  // Project a viewBox coordinate into pixel coordinates, accounting for the
  // meet-letterboxing preserveAspectRatio="xMidYMid meet" applies.
  const { scale, ox, oy } = useMemo(() => {
    if (!mapBox.w || !mapBox.h) return { scale: 0, ox: 0, oy: 0 };
    const s = Math.min(mapBox.w / VB_W, mapBox.h / VB_H);
    return {
      scale: s,
      ox: (mapBox.w - VB_W * s) / 2,
      oy: (mapBox.h - VB_H * s) / 2,
    };
  }, [mapBox]);

  function toPixel(mapX: number, mapY: number) {
    return { x: ox + mapX * scale, y: oy + mapY * scale };
  }

  // The effective rendering position for a city — geographic mapX/mapY plus
  // any manual visual nudge configured in PIN_OFFSET. Used by the photo pin,
  // the city label, AND the route line so they all line up.
  function effPos(city: City) {
    const o = PIN_OFFSET[city.id] ?? { dx: 0, dy: 0 };
    return { x: city.mapX + o.dx, y: city.mapY + o.dy };
  }

  function isVisible(cityId: string): boolean {
    if (theme !== "all") {
      const cats = CITY_CATEGORIES[cityId] ?? [];
      if (!cats.includes(theme)) return false;
    }
    if (activeRoute) {
      const r = STARTER_ROUTES.find((x) => x.id === activeRoute);
      if (r) return r.stops.includes(cityId);
    }
    return true;
  }

  // Render order — tier 3 first, tier 1 last, so larger photos overlay
  // smaller ones in clusters.
  const pinOrder = [...cities].sort((a, b) => {
    const ta = CITY_TIERS[a.id] ?? 3;
    const tb = CITY_TIERS[b.id] ?? 3;
    return tb - ta;
  });

  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden rounded-[16px] border border-[#D3D1C7]"
      style={{
        minHeight: 620,
        background:
          "radial-gradient(ellipse at 30% 35%, #FFFFFF 0%, #FBFAF6 55%, #F5F2E9 100%)",
      }}
    >
      {/* ── Toolbar — filter chips on the left, route buttons on the right ── */}
      <div className="flex flex-wrap items-start justify-between gap-3 px-4 pt-3 pb-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className="mr-1 text-[10px] tracking-[0.18em] uppercase text-[#888780]"
            style={{ fontFamily: SANS_FONT }}
          >
            Filter
          </span>
          {(Object.entries(THEME_TAGS) as [ThemeKey, (typeof THEME_TAGS)[ThemeKey]][]).map(
            ([k, v]) => {
              const active = theme === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setTheme(k)}
                  className="rounded-full px-3 py-1 text-[12px] font-medium transition-colors"
                  style={{
                    background: active ? "#2a2218" : "transparent",
                    color: active ? "#FBFAF6" : "#5a4632",
                    border: `1px solid ${active ? "#2a2218" : "#D3D1C7"}`,
                    fontFamily: SANS_FONT,
                  }}
                  aria-pressed={active}
                >
                  {v.label}
                </button>
              );
            },
          )}
        </div>

        <div className="flex flex-wrap justify-end gap-1.5">
          {STARTER_ROUTES.map((r) => {
            const active = activeRoute === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveRoute(active ? null : r.id)}
                className="rounded-full px-3 py-1 text-[10px] transition-colors"
                style={{
                  background: active ? r.color : "transparent",
                  color: active ? "#fff" : "#5a4632",
                  border: `1px solid ${active ? r.color : "#D3D1C7"}`,
                  fontFamily: SANS_FONT,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                aria-pressed={active}
              >
                {r.days}d · {r.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Map area (SVG + HTML pins overlay) ────────────────────────────── */}
      <div ref={mapRef} className="relative min-h-0 flex-1">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          className="block h-full w-full"
          role="img"
          aria-label="Map of China"
        >
          <defs>
            <radialGradient id="cm-land-fill" cx="48%" cy="42%" r="65%">
              <stop offset="0%" stopColor="#F4F1E6" />
              <stop offset="60%" stopColor="#EDE9DD" />
              <stop offset="100%" stopColor="#E5E1D2" />
            </radialGradient>
            <linearGradient id="cm-land-stroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A8A69D" />
              <stop offset="100%" stopColor="#B4B2A9" />
            </linearGradient>
            <linearGradient id="cm-sea-wash" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FBFAF6" stopOpacity="0" />
              <stop offset="100%" stopColor="#D7E8E3" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <rect x="540" y="0" width="140" height={VB_H} fill="url(#cm-sea-wash)" />

          <g aria-hidden opacity="0.18">
            {REGION_LABELS.map((r) => (
              <text
                key={`region-${r.text}`}
                x={r.x}
                y={r.y}
                textAnchor="middle"
                fontSize={r.size}
                fontStyle="italic"
                fill="#5F5E5A"
                style={{ fontFamily: ATMOSPHERE_FONT, letterSpacing: "0.03em" }}
              >
                {r.text}
              </text>
            ))}
          </g>

          <motion.path
            d={CHINA_LAND_D}
            fill="url(#cm-land-fill)"
            stroke="url(#cm-land-stroke)"
            strokeWidth="0.8"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: COUNTRY_FADE_DURATION, ease: "easeOut" }}
          />
          <motion.path
            d={HAINAN_PATH_D}
            fill="url(#cm-land-fill)"
            stroke="url(#cm-land-stroke)"
            strokeWidth="0.8"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: COUNTRY_FADE_DURATION, ease: "easeOut" }}
          />
          <motion.path
            d={TAIWAN_D}
            fill="url(#cm-land-fill)"
            stroke="url(#cm-land-stroke)"
            strokeWidth="0.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: COUNTRY_FADE_DURATION, ease: "easeOut" }}
          />

          <g aria-hidden>
            {SEA_LABELS.map((s) => (
              <text
                key={`sea-${s.text}`}
                x={s.x}
                y={s.y}
                textAnchor="middle"
                fontSize={s.size}
                fontStyle="italic"
                fill="#5A8C82"
                opacity="0.55"
                style={{ fontFamily: ATMOSPHERE_FONT, letterSpacing: "0.04em" }}
              >
                {s.text}
              </text>
            ))}
          </g>

          {/* ── Active route — white underglow + flowing colored dashes ── */}
          {activeRoute &&
            (() => {
              const route = STARTER_ROUTES.find((x) => x.id === activeRoute);
              if (!route) return null;
              const points = route.stops
                .map((id) => cities.find((c) => c.id === id))
                .filter((c): c is City => Boolean(c));
              if (points.length < 2) return null;
              const d = points
                .map((p, i) => {
                  const ep = effPos(p);
                  return `${i === 0 ? "M" : "L"} ${ep.x} ${ep.y}`;
                })
                .join(" ");
              return (
                <g>
                  <path
                    d={d}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <path
                    d={d}
                    fill="none"
                    stroke={route.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="8 5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="26"
                      to="0"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              );
            })()}

          {/* ── City NAME LABELS in SVG (scale with the map) ── */}
          {cities.map((city) => {
            const tier = CITY_TIERS[city.id] ?? 3;
            const r = TIER_R[tier];
            const off = LABEL_OFF[city.id];
            const isSel = selectedCityId === city.id;
            const isHov = hovered === city.id;
            const isInTrip = tripSet.has(city.id);
            const visible = isVisible(city.id);
            const ep = effPos(city);

            // Tier-3 cities don't show their name by default — too crowded.
            // The label appears on hover / selection / when added to the trip.
            const showLabel = tier !== 3 || isSel || isHov || isInTrip;
            if (!showLabel) return null;

            // Independent X / Y axes: labelLeft controls horizontal side,
            // labelAbove controls vertical side. LABEL_OFF wins when set.
            let lx: number;
            let ly: number;
            let anchor: "start" | "middle" | "end";
            if (off) {
              lx = ep.x + off.dx;
              ly = ep.y + off.dy;
              anchor = off.anchor;
            } else {
              const labelLeft = city.labelLeft ?? false;
              const labelAbove = city.labelAbove ?? false;
              const dy = city.labelDY ?? 0;
              if (labelLeft) {
                lx = ep.x - r - 4;
                anchor = "end";
              } else {
                lx = ep.x + r + 4;
                anchor = "start";
              }
              ly = ep.y + (labelAbove ? -r - 4 : 4) + dy;
            }

            return (
              <text
                key={`lbl-${city.id}`}
                x={lx}
                y={ly}
                fontSize={tier === 1 ? 13 : tier === 2 ? 11 : 10}
                fontWeight={tier === 1 ? 500 : 400}
                textAnchor={anchor}
                fill={isSel ? "#c4623a" : "#2C2C2A"}
                opacity={visible ? 1 : 0.2}
                stroke="#FBFAF6"
                strokeWidth="3"
                paintOrder="stroke"
                style={{
                  fontFamily: LABEL_FONT,
                  letterSpacing: "0.01em",
                  pointerEvents: "none",
                  transition: "opacity 0.25s",
                }}
              >
                {city.name}
              </text>
            );
          })}
        </svg>

        {/* ── PHOTO PINS — HTML buttons absolutely positioned over the SVG ── */}
        {scale > 0 &&
          pinOrder.map((city) => {
            const tier = CITY_TIERS[city.id] ?? 3;
            const baseR = TIER_R[tier] * scale; // pixel radius
            const isSel = selectedCityId === city.id;
            const isHover = hovered === city.id;
            const isInTrip = tripSet.has(city.id);
            const visible = isVisible(city.id);
            const r = isHover ? baseR + 5 : isSel ? baseR + 3 : baseR;
            const ep = effPos(city);
            const { x, y } = toPixel(ep.x, ep.y);
            const photoUrl = `/images/cities/${city.id}.jpg`;
            return (
              <button
                key={city.id}
                type="button"
                onMouseEnter={() => setHovered(city.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(city.id)}
                onBlur={() => setHovered(null)}
                onClick={() => onSelectCity(city)}
                aria-label={`Select ${city.name}`}
                className="absolute block rounded-full p-0"
                style={{
                  left: x - r,
                  top: y - r,
                  width: r * 2,
                  height: r * 2,
                  backgroundImage: `url(${photoUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#ddd",
                  border: isSel
                    ? "3px solid #c4623a"
                    : isInTrip
                    ? "2px solid #D85A30"
                    : "2px solid #fff",
                  boxShadow:
                    isHover || isSel
                      ? "0 4px 14px rgba(0,0,0,0.28)"
                      : "0 2px 6px rgba(0,0,0,0.18)",
                  cursor: "pointer",
                  opacity: visible ? 1 : 0.2,
                  transition:
                    "opacity 0.25s, box-shadow 0.2s, width 0.15s, height 0.15s, left 0.15s, top 0.15s, border-color 0.15s",
                  zIndex:
                    isHover || isSel ? 10 : tier === 1 ? 3 : tier === 2 ? 2 : 1,
                }}
              />
            );
          })}

        {/* ── Hover preview floating card ── */}
        {hovered && hovered !== selectedCityId && scale > 0 && (() => {
          const c = cities.find((x) => x.id === hovered);
          if (!c) return null;
          const ep = effPos(c);
          const { x, y } = toPixel(ep.x, ep.y);
          const tier = CITY_TIERS[c.id] ?? 3;
          const baseR = TIER_R[tier] * scale;
          const cardW = 200;
          const flipLeft = x + 36 + cardW > mapBox.w - 8;
          const cardLeft = flipLeft ? x - baseR - cardW - 12 : x + baseR + 12;
          const cardTop = Math.min(
            Math.max(8, y - 30),
            Math.max(8, mapBox.h - 110),
          );
          return (
            <div
              role="tooltip"
              className="pointer-events-none absolute"
              style={{
                left: cardLeft,
                top: cardTop,
                width: cardW,
                background: "#fff",
                border: "1px solid #D3D1C7",
                borderRadius: 10,
                padding: "10px 14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  fontFamily: LABEL_FONT,
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: 1.15,
                  color: "#2a2218",
                }}
              >
                {c.name}
              </div>
              <div
                className="mt-0.5"
                style={{
                  fontFamily: LABEL_FONT,
                  fontSize: 12,
                  color: "#7a6750",
                }}
              >
                {c.nameZh}
                {CITY_PINYIN[c.id] ? (
                  <>
                    {" · "}
                    <i>{CITY_PINYIN[c.id]}</i>
                  </>
                ) : null}
              </div>
              <div
                className="mt-1.5"
                style={{
                  fontFamily: SANS_FONT,
                  fontSize: 10,
                  color: "#888780",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {c.daysHint} · {(CITY_TAG[c.id] ?? "").replace("-", " ")}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
