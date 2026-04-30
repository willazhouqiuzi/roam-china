import { CHINA_LAND_D, HAINAN_PATH_D, TAIWAN_D } from "@/lib/map-shapes";
import type { City } from "@/data/cities";
import type { Route } from "@/data/routes";
import { inferSegment, transportLabel } from "@/lib/route-transport";

type Props = {
  route: Route;
  cities: City[];
  width?: number | string;
  height?: number | string;
  /** Show day-order numbers on each pin. Default true. */
  showNumbers?: boolean;
  /**
   * Pin radius in full-map units (will be scaled with the viewBox so
   * on-screen pin size stays constant regardless of zoom).
   */
  dotRadius?: number;
  /**
   * "rich" — city photos as pins + transport pills + auto-fit viewBox.
   * "compact" — small orange dots, used for routes-list thumbnails.
   */
  variant?: "rich" | "compact";
};

const FONT_FAMILY = "var(--font-inter), system-ui, sans-serif";
const FULL_W = 680;
const FULL_H = 400;
const FULL_ASPECT = FULL_W / FULL_H;

// Compute a viewBox that frames just the route's cities with adaptive
// padding, preserving the original 1.7:1 aspect.
//
// Padding scales with bbox: wide country-spanning routes get airy
// padding (so the China outline still feels present), while tight clusters
// (Guilin↔Yangshuo are only ~6 svg units apart) get minimal padding so the
// zoom is tight enough that pin photos don't overlap on screen.
function computeRouteViewBox(cities: City[]) {
  if (!cities.length) return { x: 0, y: 0, w: FULL_W, h: FULL_H };
  const xs = cities.map((c) => c.mapX);
  const ys = cities.map((c) => c.mapY);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const bboxW = maxX - minX;
  const bboxH = maxY - minY;
  const bboxMax = Math.max(bboxW, bboxH);

  // Adaptive padding: 30% of bbox max, with a minimum of 15 svg units.
  // For Guilin↔Yangshuo (bbox ~6) this is 15; for country-spanning routes
  // (bbox ~300) this is ~90.
  const pad = Math.max(15, bboxMax * 0.3);

  // Floor on viewBox dimension. 70 lets us zoom in tight enough for
  // 6-svg-unit clusters to render with non-overlapping pins; ~83 svg units
  // of width on a 1000px container = ~12px gap between adjacent pins.
  const MIN_W = 70;
  let w = Math.max(bboxW + 2 * pad, MIN_W);
  let h = Math.max(bboxH + 2 * pad, MIN_W / FULL_ASPECT);

  // Lock to map aspect — extend whichever dimension is too short.
  if (w / h < FULL_ASPECT) {
    w = h * FULL_ASPECT;
  } else {
    h = w / FULL_ASPECT;
  }

  // Cap at original map size — country-spanning routes use the full map.
  w = Math.min(w, FULL_W);
  h = Math.min(h, FULL_H);
  return { x: cx - w / 2, y: cy - h / 2, w, h };
}

// Transport icons drawn in a 12×12 logical box. Each is wrapped in a
// scale group when used so they shrink/grow with the viewBox.
function TransportIcon({ mode }: { mode: "rail" | "flight" | "bus" }) {
  if (mode === "flight") {
    // Top-down airplane silhouette — fuselage + perpendicular wings + a
    // small triangular tail. This is the universal "✈" reading; the
    // earlier paper-airplane wedge wasn't reading as a plane at small size.
    return (
      <path
        d="M 5 1 L 7 1 L 7 5 L 11 6 L 11 7 L 7 7 L 7 10 L 8 11 L 4 11 L 5 10 L 5 7 L 1 7 L 1 6 L 5 5 Z"
        fill="#FFFFFF"
        opacity="0.95"
      />
    );
  }
  if (mode === "bus") {
    return (
      <>
        <rect
          x="2.5"
          y="3"
          width="8"
          height="6.5"
          rx="1"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.1"
        />
        <circle cx="4.3" cy="9.5" r="0.9" fill="#FFFFFF" />
        <circle cx="8.7" cy="9.5" r="0.9" fill="#FFFFFF" />
      </>
    );
  }
  // rail
  return (
    <>
      <rect
        x="3"
        y="2.5"
        width="7"
        height="6.5"
        rx="1.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.1"
      />
      <line x1="3" y1="6" x2="10" y2="6" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="4.5" y1="11" x2="3.5" y2="12" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="8.5" y1="11" x2="9.5" y2="12" stroke="#FFFFFF" strokeWidth="1" />
    </>
  );
}

export default function RouteMap({
  route,
  cities,
  width = "100%",
  height,
  showNumbers = true,
  dotRadius = 9,
  variant = "rich",
}: Props) {
  const cityById = new Map(cities.map((c) => [c.id, c]));
  const routeCities = route.cityIds
    .map((id, idx) => ({ city: cityById.get(id), order: idx + 1 }))
    .filter((entry): entry is { city: City; order: number } => Boolean(entry.city));

  const isRich = variant === "rich";

  // Auto-fit viewBox to the route's cities, then derive a single `s` factor
  // that scales every pixel-sized constant. Keeping `screen_size = svg_size *
  // (container_w / viewBox_w)` constant means pins/labels/pills look the
  // same size regardless of zoom level.
  const vb = computeRouteViewBox(routeCities.map((rc) => rc.city));
  const s = vb.w / FULL_W;

  const pinR = isRich ? 22 * s : dotRadius * s;
  const labelGap = 8 * s;
  const labelFont = 11 * s;
  const labelStroke = 3 * s;
  const labelDYBelow = 14 * s;
  const numBadgeR = 9 * s;
  const numBadgeStroke = 2 * s;
  const numFont = 10 * s;
  const pillH = 20 * s;
  const pillRX = 10 * s;
  const pillFont = 10 * s;
  const pillPadL = 7 * s;
  const pillIconW = 12 * s;
  const pillIconY = 4 * s;
  const pillTextGap = 4 * s;
  const pillCharW = 6 * s;
  const pillMinW = 50 * s;
  const pillBaseW = 22 * s;
  const pillPadR = 6 * s;
  const pillPerpOffset = 28 * s;
  const bezierStroke = 2 * s;
  const bezierDash = 5 * s;
  const pinRingStroke = 1.5 * s;
  const outlineStroke = 0.75 * s;
  const photoInset = 2 * s;

  // Build segments between consecutive cities for the transport pills.
  // Pills get a perpendicular offset off the segment line so they don't
  // overlap city pin photos when pins are close together.
  const segments = isRich
    ? routeCities.slice(0, -1).map(({ city: a }, i) => {
        const b = routeCities[i + 1].city;
        const info = inferSegment(a.id, b.id);
        const dx = b.mapX - a.mapX;
        const dy = b.mapY - a.mapY;
        const length = Math.hypot(dx, dy) || 1;
        const perpX = -dy / length; // CCW perpendicular
        const perpY = dx / length;
        const text = info.duration ?? transportLabel(info.mode);
        const pillW = Math.max(
          pillMinW,
          pillBaseW + text.length * pillCharW,
        );
        return {
          mode: info.mode,
          text,
          pillW,
          cx: (a.mapX + b.mapX) / 2 + perpX * pillPerpOffset,
          cy: (a.mapY + b.mapY) / 2 + perpY * pillPerpOffset,
        };
      })
    : [];

  return (
    <svg
      viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`${route.name} route map`}
      className="block"
    >
      {/* Per-pin clip paths so each photo is round */}
      {isRich ? (
        <defs>
          {routeCities.map(({ city }) => (
            <clipPath key={`clip-${city.id}`} id={`route-pin-${city.id}`}>
              <circle cx={city.mapX} cy={city.mapY} r={pinR - photoInset} />
            </clipPath>
          ))}
        </defs>
      ) : null}

      <rect x={vb.x} y={vb.y} width={vb.w} height={vb.h} fill="#FBFAF6" />
      <path
        d={CHINA_LAND_D}
        fill="#F1EFE8"
        stroke="#B4B2A9"
        strokeWidth={outlineStroke}
        strokeLinejoin="round"
      />
      <path
        d={HAINAN_PATH_D}
        fill="#F1EFE8"
        stroke="#B4B2A9"
        strokeWidth={outlineStroke}
        strokeLinejoin="round"
      />
      <path
        d={TAIWAN_D}
        fill="#F1EFE8"
        stroke="#B4B2A9"
        strokeWidth={outlineStroke}
      />
      <path
        d={route.bezierPath}
        fill="none"
        stroke="#D85A30"
        strokeWidth={bezierStroke}
        strokeDasharray={`${bezierDash} ${bezierDash}`}
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Transport pills */}
      {segments.map((seg, i) => {
        const w = seg.pillW;
        const textCenterX =
          pillPadL +
          pillIconW +
          pillTextGap +
          (w - pillPadL - pillIconW - pillTextGap - pillPadR) / 2;
        return (
          <g
            key={`seg-${i}`}
            transform={`translate(${seg.cx - w / 2}, ${seg.cy - pillH / 2})`}
          >
            <rect
              width={w}
              height={pillH}
              rx={pillRX}
              fill="#4A1B0C"
              opacity="0.92"
            />
            <g
              transform={`translate(${pillPadL}, ${pillIconY}) scale(${s})`}
            >
              <TransportIcon mode={seg.mode} />
            </g>
            <text
              x={textCenterX}
              y={pillH / 2 + 0.5 * s}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={pillFont}
              fontWeight="500"
              fill="#FFFFFF"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {seg.text}
            </text>
          </g>
        );
      })}

      {/* City pins */}
      {routeCities.map(({ city, order }) =>
        isRich ? (
          <g key={city.id}>
            <circle cx={city.mapX} cy={city.mapY} r={pinR} fill="#FFFFFF" />
            <image
              href={`/images/cities/${city.id}.jpg`}
              x={city.mapX - (pinR - photoInset)}
              y={city.mapY - (pinR - photoInset)}
              width={(pinR - photoInset) * 2}
              height={(pinR - photoInset) * 2}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#route-pin-${city.id})`}
            />
            <circle
              cx={city.mapX}
              cy={city.mapY}
              r={pinR - 1 * s}
              fill="none"
              stroke="#D85A30"
              strokeWidth={pinRingStroke}
            />
            {showNumbers ? (
              <>
                <circle
                  cx={city.mapX + pinR - 4 * s}
                  cy={city.mapY + pinR - 4 * s}
                  r={numBadgeR}
                  fill="#D85A30"
                  stroke="#FBFAF6"
                  strokeWidth={numBadgeStroke}
                />
                <text
                  x={city.mapX + pinR - 4 * s}
                  y={city.mapY + pinR - 4 * s + 0.3 * s}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={numFont}
                  fontWeight="700"
                  fill="#FFFFFF"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {order}
                </text>
              </>
            ) : null}
            {(() => {
              const labelLeft = city.labelLeft ?? false;
              const labelAbove = city.labelAbove ?? false;
              const labelDYHint = (city.labelDY ?? 0) * s;
              let x: number;
              let y: number;
              let anchor: "start" | "middle" | "end";
              if (labelLeft) {
                x = city.mapX - pinR - labelGap;
                y = city.mapY + 4 * s + labelDYHint;
                anchor = "end";
              } else if (labelAbove) {
                x = city.mapX;
                y = city.mapY - pinR - 6 * s + labelDYHint;
                anchor = "middle";
              } else {
                x = city.mapX;
                y = city.mapY + pinR + labelDYBelow + labelDYHint;
                anchor = "middle";
              }
              return (
                <text
                  x={x}
                  y={y}
                  textAnchor={anchor}
                  fontSize={labelFont}
                  fontWeight="500"
                  fill="#2C2C2A"
                  stroke="#FBFAF6"
                  strokeWidth={labelStroke}
                  paintOrder="stroke"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {city.name}
                </text>
              );
            })()}
          </g>
        ) : (
          // Compact: orange numbered dot for routes-list thumbnails.
          <g key={city.id}>
            <circle cx={city.mapX} cy={city.mapY} r={pinR} fill="#D85A30" />
            {showNumbers ? (
              <text
                x={city.mapX}
                y={city.mapY + 0.5 * s}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={11 * s}
                fontWeight="700"
                fill="#FFFFFF"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {order}
              </text>
            ) : null}
          </g>
        ),
      )}
    </svg>
  );
}
