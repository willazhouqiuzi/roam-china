"use client";

import { motion } from "framer-motion";
import type { City } from "@/data/cities";
import { CHINA_LAND_D, HAINAN_PATH_D, TAIWAN_D } from "@/lib/map-shapes";

const COUNTRY_FADE_DURATION = 0.5;
const DOTS_BASE_DELAY = COUNTRY_FADE_DURATION;
const DOT_STAGGER = 0.025;
// Map label font. Inter sans — same as the body text used for route
// taglines etc., so the labels read consistently with the rest of the site.
const LABEL_FONT = "var(--font-inter), system-ui, sans-serif";
const ATMOSPHERE_FONT = "var(--font-instrument-serif), Georgia, serif";

type Props = {
  cities: City[];
  selectedCityId: string | null;
  tripCityIds: string[];
  onSelectCity: (city: City) => void;
};

// Sea labels — atmospheric annotations placed in empty water around the
// mainland. Italic serif, very faint — sit behind the city pins as
// editorial decoration. Coordinates are visual placements, not geographic.
const SEA_LABELS: Array<{ text: string; x: number; y: number; size: number }> = [
  { text: "Yellow Sea", x: 605, y: 195, size: 15 },
  { text: "黄海", x: 605, y: 213, size: 11 },
  { text: "East China Sea", x: 605, y: 290, size: 15 },
  { text: "东海", x: 605, y: 308, size: 11 },
  { text: "South China Sea", x: 540, y: 388, size: 15 },
  { text: "南海", x: 540, y: 405, size: 11 },
  { text: "Bohai", x: 530, y: 145, size: 13 },
];

// Region annotations — large, very faded italic words tucked behind pins,
// hinting at geography without competing with city names.
const REGION_LABELS: Array<{ text: string; x: number; y: number; size: number }> = [
  { text: "the Northwest", x: 195, y: 90, size: 18 },
  { text: "the Steppe", x: 480, y: 110, size: 16 },
  { text: "the Plateau", x: 175, y: 245, size: 17 },
  { text: "the Yangtze", x: 380, y: 295, size: 14 },
  { text: "the South", x: 380, y: 365, size: 16 },
];

export default function CountryMap({
  cities,
  selectedCityId,
  tripCityIds,
  onSelectCity,
}: Props) {
  const tripSet = new Set(tripCityIds);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[16px] border border-[#D3D1C7] p-4"
      style={{
        minHeight: 560,
        // Soft warm gradient + a hint of sea blue at the right edge.
        background:
          "radial-gradient(ellipse at 30% 35%, #FFFFFF 0%, #FBFAF6 55%, #F5F2E9 100%)",
      }}
    >
      <svg
        viewBox="0 0 680 410"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        className="block w-full h-full"
        role="img"
        aria-label="Map of China"
      >
        <defs>
          {/* Soft gradient on the China land — subtle warm tone with a
              slightly cooler edge, gives a gentle paper-relief feel. */}
          <radialGradient id="cm-land-fill" cx="48%" cy="42%" r="65%">
            <stop offset="0%" stopColor="#F4F1E6" />
            <stop offset="60%" stopColor="#EDE9DD" />
            <stop offset="100%" stopColor="#E5E1D2" />
          </radialGradient>
          <linearGradient id="cm-land-stroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A8A69D" />
            <stop offset="100%" stopColor="#B4B2A9" />
          </linearGradient>
          {/* Sea wash — very pale aqua over the right edge area. */}
          <linearGradient id="cm-sea-wash" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FBFAF6" stopOpacity="0" />
            <stop offset="100%" stopColor="#D7E8E3" stopOpacity="0.4" />
          </linearGradient>
          {/* Drop shadow for selected pins. */}
          <filter id="cm-pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.35" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sea wash on the eastern side of the canvas. */}
        <rect
          x="540"
          y="0"
          width="140"
          height="410"
          fill="url(#cm-sea-wash)"
        />

        {/* Region atmosphere labels — drawn first so they sit BEHIND
            country shape and pins. Faded italic serif. */}
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

        {/* China land + Hainan + Taiwan with subtle gradient fill. */}
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

        {/* Sea labels — drawn after land so they don't bleed under the
            country, but still beneath the pins. Faded italic serif. */}
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

        {/* City pins. Two tiers — marquee cities (on a curated route) get a
            slightly bigger dot + halo ring; secondary cities are smaller. */}
        {cities.map((city, idx) => {
          const isSelected = selectedCityId === city.id;
          const isInTrip = tripSet.has(city.id);
          const labelLeft = city.labelLeft ?? false;
          const isMarquee = city.isOnRoute;
          // Dot sizing — smaller than before, two tiers.
          const r = isMarquee ? 4 : 3;
          const labelGap = 5;
          const labelX = labelLeft
            ? city.mapX - r - labelGap
            : city.mapX + r + labelGap;
          const labelY =
            (city.labelAbove ? city.mapY - 12 : city.mapY + 4) +
            (city.labelDY ?? 0);

          return (
            <motion.g
              key={city.id}
              style={{
                cursor: "pointer",
                transformBox: "fill-box",
                transformOrigin: "center",
              }}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
                hover: {},
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: DOTS_BASE_DELAY + idx * DOT_STAGGER,
              }}
              onClick={() => onSelectCity(city)}
              role="button"
              aria-label={`Select ${city.name}`}
            >
              {/* Hit area — invisible larger circle for easier clicking. */}
              <circle
                cx={city.mapX}
                cy={city.mapY}
                r={14}
                fill="transparent"
              />

              {/* Selected halo — animated pulse. */}
              {isSelected ? (
                <motion.circle
                  cx={city.mapX}
                  cy={city.mapY}
                  r={r + 8}
                  fill="none"
                  stroke="#D85A30"
                  strokeWidth="1.5"
                  initial={{ opacity: 0.6, scale: 0.8 }}
                  animate={{ opacity: [0.6, 0, 0.6], scale: [0.8, 1.6, 0.8] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ) : null}

              {/* Trip ring — subtle orange halo. */}
              {isInTrip && !isSelected ? (
                <circle
                  cx={city.mapX}
                  cy={city.mapY}
                  r={r + 3}
                  fill="none"
                  stroke="#D85A30"
                  strokeWidth="1.2"
                />
              ) : null}

              {/* Marquee outer ring (faint). */}
              {isMarquee ? (
                <circle
                  cx={city.mapX}
                  cy={city.mapY}
                  r={r + 1.6}
                  fill="none"
                  stroke="#F5C4B3"
                  strokeWidth="1"
                />
              ) : null}

              {/* The dot itself. Hover scales up; selected/in-trip stays bigger. */}
              <motion.circle
                cx={city.mapX}
                cy={city.mapY}
                r={r}
                fill="#D85A30"
                filter={isSelected ? "url(#cm-pin-shadow)" : undefined}
                variants={{
                  visible: { scale: 1 },
                  hover: { scale: 1.35 },
                }}
                transition={{ type: "spring", stiffness: 360, damping: 20 }}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                }}
              />

              {/* Tiny inner highlight for dimensionality. */}
              <circle
                cx={city.mapX - r * 0.32}
                cy={city.mapY - r * 0.32}
                r={r * 0.4}
                fill="#FFFFFF"
                opacity="0.35"
                pointerEvents="none"
              />

              {/* Label — clickable too. Hover shifts color; on un-hover
                  returns to rest. The text is part of the parent <g>'s
                  hit target so clicking the name selects the city, which
                  helps when pins are clustered too tight to click. */}
              <motion.text
                x={labelX}
                y={labelY}
                textAnchor={labelLeft ? "end" : "start"}
                fontSize={isMarquee ? 12 : 11}
                fontWeight={isMarquee ? 500 : 400}
                stroke="#FBFAF6"
                strokeWidth="3.5"
                paintOrder="stroke"
                style={{
                  fontFamily: LABEL_FONT,
                  letterSpacing: "0.01em",
                  cursor: "pointer",
                }}
                variants={{
                  visible: { fill: isSelected ? "#D85A30" : "#2C2C2A" },
                  hover: { fill: "#D85A30" },
                }}
                transition={{ duration: 0.15 }}
              >
                {city.name}
              </motion.text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
