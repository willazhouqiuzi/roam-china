// Infer the dominant mode of transport between two cities, and the typical
// duration of that leg.
//
// Heuristic: if the HSR ride exceeds ~4 hours, most travelers fly instead —
// the airport hassle pays off vs. half a day on a train. So we mark those
// long-distance pairs as flights even where direct HSR exists. Pairs under
// the 4h threshold stay on rail (HSR is faster door-to-door once you factor
// in airports, and lands you in the city centre).

export type TransportMode = "rail" | "flight" | "bus";

export type SegmentInfo = {
  mode: TransportMode;
  /** Display string like "5.5h" or "30 min". Null if unknown. */
  duration: string | null;
};

// Canonical key — alphabetically ordered city ids joined by `-`.
function pairKey(a: string, b: string): string {
  return a < b ? `${a}-${b}` : `${b}-${a}`;
}

const FLIGHT_PAIRS: ReadonlySet<string> = new Set(
  [
    // Anywhere ↔ Lhasa — practically always flight for trip planning.
    ["beijing", "lhasa"],
    ["chengdu", "lhasa"],
    ["guilin", "lhasa"],
    ["kunming", "lhasa"],
    ["lhasa", "lijiang"],
    ["lhasa", "shanghai"],
    ["lhasa", "xian"],

    // Lijiang far-east / far-north pairs — no useful direct HSR.
    ["chongqing", "lijiang"],
    ["chengdu", "lijiang"],
    ["lijiang", "shanghai"],
    ["beijing", "lijiang"],

    // Jiuzhaigou — flights from non-Chengdu hubs.
    ["chongqing", "jiuzhaigou"],
    ["beijing", "jiuzhaigou"],
    ["jiuzhaigou", "shanghai"],

    // Remote pairs to Zhangjiajie — most travelers fly.
    ["chengdu", "zhangjiajie"],
    ["xian", "zhangjiajie"],
    ["guilin", "zhangjiajie"],

    // Long east-west / west-east pairs where rail is impractical.
    ["chengdu", "guilin"],

    // ──── Long HSR pairs (rail >4h) — most travelers fly ────
    ["beijing", "xian"], // ~5.5h HSR vs ~2h flight
    ["beijing", "shanghai"], // ~4.5h HSR vs ~2h flight
    ["beijing", "chengdu"], // ~7.5h HSR vs ~3h flight
    ["beijing", "harbin"], // ~4.5h HSR vs ~2h flight
    ["xian", "shanghai"], // ~6h HSR vs ~2.5h flight
    ["chengdu", "shanghai"], // ~10h HSR vs ~3h flight
    ["chengdu", "kunming"], // ~6h HSR vs ~1.5h flight
    ["chongqing", "shanghai"], // ~11h HSR vs ~3h flight
    ["kunming", "guilin"], // ~6h HSR vs ~1.5h flight
    ["guilin", "shanghai"], // ~9h HSR vs ~2.5h flight
    ["guilin", "xian"], // ~10h HSR vs ~2.5h flight
    ["guilin", "hangzhou"], // ~7h HSR vs ~2.5h flight
    ["shanghai", "qingdao"], // ~4.5h HSR vs ~2h flight
    ["shanghai", "xiamen"], // ~6.5h HSR vs ~1.5h flight
    ["hangzhou", "xiamen"], // ~5h HSR vs ~1.5h flight
  ].map(([a, b]) => pairKey(a, b)),
);

const BUS_PAIRS: ReadonlySet<string> = new Set(
  [
    // Yangshuo has no rail station — bus from Guilin.
    ["guilin", "yangshuo"],
    // Jiuzhaigou from Chengdu — the typical traveler choice is the bus.
    ["chengdu", "jiuzhaigou"],
  ].map(([a, b]) => pairKey(a, b)),
);

// Hand-curated typical durations. Keys are alphabetically ordered city pairs.
// Rail durations are scheduled HSR times; flight durations are cruising
// times (door-to-door with airport buffer is roughly +1.5h).
const DURATIONS: Readonly<Record<string, string>> = {
  // ──── Rail (under 4h — still preferred over flying) ────
  [pairKey("beijing", "qingdao")]: "3.5h",
  [pairKey("xian", "chengdu")]: "3.5h",
  [pairKey("chengdu", "chongqing")]: "1.5h",
  [pairKey("kunming", "dali")]: "2h",
  [pairKey("kunming", "lijiang")]: "3.5h",
  [pairKey("dali", "lijiang")]: "2h",
  [pairKey("shanghai", "hangzhou")]: "1h",
  [pairKey("shanghai", "suzhou")]: "30 min",
  [pairKey("hangzhou", "suzhou")]: "1.5h",

  // ──── Flight ────
  // Within China — typical cruising times (excluding airport overhead).
  [pairKey("beijing", "xian")]: "2h",
  [pairKey("beijing", "shanghai")]: "2h",
  [pairKey("beijing", "chengdu")]: "3h",
  [pairKey("beijing", "harbin")]: "2h",
  [pairKey("xian", "shanghai")]: "2.5h",
  [pairKey("chengdu", "shanghai")]: "3h",
  [pairKey("chengdu", "kunming")]: "1.5h",
  [pairKey("chongqing", "shanghai")]: "3h",
  [pairKey("kunming", "guilin")]: "1.5h",
  [pairKey("guilin", "shanghai")]: "2.5h",
  [pairKey("guilin", "xian")]: "2.5h",
  [pairKey("guilin", "hangzhou")]: "2.5h",
  [pairKey("shanghai", "qingdao")]: "2h",
  [pairKey("shanghai", "xiamen")]: "1.5h",
  [pairKey("hangzhou", "xiamen")]: "1.5h",
  [pairKey("chengdu", "guilin")]: "2h",
  // Tibet — flights only.
  [pairKey("beijing", "lhasa")]: "4h",
  [pairKey("xian", "lhasa")]: "3.5h",
  [pairKey("chengdu", "lhasa")]: "2.5h",
  [pairKey("kunming", "lhasa")]: "2.5h",
  [pairKey("lhasa", "lijiang")]: "1.5h",
  [pairKey("lhasa", "shanghai")]: "6h",
  [pairKey("lhasa", "guilin")]: "5h",
  // Lijiang remote pairs.
  [pairKey("chongqing", "lijiang")]: "2h",
  [pairKey("chengdu", "lijiang")]: "1.5h",
  [pairKey("lijiang", "shanghai")]: "4h",
  [pairKey("beijing", "lijiang")]: "4h",
  // Jiuzhaigou flights.
  [pairKey("chongqing", "jiuzhaigou")]: "1.5h",
  [pairKey("beijing", "jiuzhaigou")]: "3h",
  [pairKey("jiuzhaigou", "shanghai")]: "3h",
  // Zhangjiajie flights.
  [pairKey("chengdu", "zhangjiajie")]: "2h",
  [pairKey("xian", "zhangjiajie")]: "2h",
  [pairKey("guilin", "zhangjiajie")]: "1.5h",

  // ──── Bus ────
  [pairKey("guilin", "yangshuo")]: "1.5h",
  [pairKey("chengdu", "jiuzhaigou")]: "8h",
};

export function inferTransport(
  fromCityId: string,
  toCityId: string,
): TransportMode {
  const k = pairKey(fromCityId, toCityId);
  if (FLIGHT_PAIRS.has(k)) return "flight";
  if (BUS_PAIRS.has(k)) return "bus";
  return "rail";
}

export function inferSegment(
  fromCityId: string,
  toCityId: string,
): SegmentInfo {
  const mode = inferTransport(fromCityId, toCityId);
  const duration = DURATIONS[pairKey(fromCityId, toCityId)] ?? null;
  return { mode, duration };
}

export function transportLabel(mode: TransportMode): string {
  switch (mode) {
    case "flight":
      return "Flight";
    case "bus":
      return "Bus";
    case "rail":
      return "Rail";
  }
}
