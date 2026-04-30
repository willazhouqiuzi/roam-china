// scripts/generate-china-outline.mjs
//
// One-shot: read the China GeoJSON, dissolve provinces into country outlines,
// project to viewBox 0 0 680 400, reproject 8 city coordinates, regenerate
// bezier paths for all 5 curated routes.
//
// Run: `node scripts/generate-china-outline.mjs`
// Output: scripts/_geo-output.json (paste-ready data)

import fs from "node:fs";
import path from "node:path";
import {
  union as turfUnion,
  simplify as turfSimplify,
  featureCollection,
  polygon as turfPoly,
  multiPolygon as turfMulti,
  area as turfArea,
} from "@turf/turf";

const INPUT = "C:/Users/willa.zhou/Downloads/cn.json";
const OUT = path.resolve("scripts/_geo-output.json");

const VB_W = 680;
const VB_H = 400;
const PADDING = 18;

const HAINAN = new Set(["Hainan Province"]);
const TAIWAN = new Set(["Taiwan Province"]);

// Real city coordinates (lng, lat), used to re-project city positions
const CITY_COORDS = {
  beijing: [116.4074, 39.9042],
  xian: [108.9398, 34.3416],
  chengdu: [104.0668, 30.5728],
  guilin: [110.2799, 25.2736],
  shanghai: [121.4737, 31.2304],
  hangzhou: [120.1551, 30.2741],
  kunming: [102.7129, 25.0389],
  chongqing: [106.5516, 29.5630],
  // Phase: +9 cities
  suzhou: [120.5853, 31.2989],
  lhasa: [91.1, 29.65],
  harbin: [126.6333, 45.75],
  qingdao: [120.3826, 36.0671],
  xiamen: [118.0894, 24.4798],
  lijiang: [100.2257, 26.8721],
  dali: [100.2675, 25.6065],
  zhangjiajie: [110.479, 29.117],
  yangshuo: [110.497, 24.778],
  jiuzhaigou: [103.9168, 33.1817],
};

const ROUTES = {
  "classic-first-time": ["beijing", "xian", "chengdu", "guilin", "shanghai"],
  "slow-south": ["kunming", "dali", "lijiang"],
  "karst-and-rivers": ["guilin", "yangshuo"],
  "two-capitals": ["beijing", "xian"],
  "eastern-refinement": ["shanghai", "hangzhou"],
  // chinahighlights-inspired (skeleton only; descriptions written in our voice)
  "golden-triangle": ["beijing", "xian", "shanghai"],
  "china-classic-12": ["beijing", "xian", "guilin", "shanghai"],
  "natural-wonders": ["beijing", "xian", "zhangjiajie", "guilin", "shanghai"],
  "essence-and-panda": ["beijing", "xian", "chengdu", "shanghai"],
  "yunnan-and-chongqing": ["kunming", "dali", "lijiang", "chongqing"],
  "classic-with-yunnan": ["shanghai", "guilin", "kunming", "dali", "lijiang", "chengdu", "xian", "beijing"],
  "epic-yunnan-tibet": ["shanghai", "guilin", "kunming", "dali", "lijiang", "lhasa", "chengdu"],
  "grand-tour-landmarks": ["shanghai", "suzhou", "hangzhou", "guilin", "zhangjiajie", "xian", "beijing"],
  "must-see-tibet": ["beijing", "xian", "lhasa", "chengdu", "zhangjiajie", "guilin", "shanghai"],
  "panorama-china": ["beijing", "xian", "zhangjiajie", "guilin", "kunming", "chengdu", "chongqing", "shanghai"],
  "panda-and-jiuzhaigou": ["chengdu", "jiuzhaigou", "chongqing"],
};

const data = JSON.parse(fs.readFileSync(INPUT, "utf8"));
console.log(`Loaded ${data.features.length} features.`);

// Bucket features by group
const groups = { mainland: [], hainan: [], taiwan: [] };
for (const f of data.features) {
  const name = f.properties.name;
  const g = HAINAN.has(name) ? "hainan" : TAIWAN.has(name) ? "taiwan" : "mainland";
  groups[g].push(f);
}
console.log(
  `Groups: mainland=${groups.mainland.length}, hainan=${groups.hainan.length}, taiwan=${groups.taiwan.length}`
);

// Dissolve each group via turf union (pairwise reduce)
function dissolveGroup(features) {
  if (!features.length) return null;
  // Normalise each feature into Feature<Polygon|MultiPolygon> with empty props
  const polys = features.map((f) => {
    if (f.geometry.type === "Polygon") return turfPoly(f.geometry.coordinates);
    if (f.geometry.type === "MultiPolygon") return turfMulti(f.geometry.coordinates);
    throw new Error(`Unexpected geometry type: ${f.geometry.type}`);
  });
  if (polys.length === 1) return polys[0];
  // turf.union accepts a FeatureCollection of polygons
  return turfUnion(featureCollection(polys));
}

function simplifyFeature(feat, tolerance) {
  // tolerance is in degrees (input CRS). At China latitude ~35°, 1° ≈ 90 km.
  // 0.05° ≈ 4.5 km — appropriate for a small map at viewBox scale ~10 px/°.
  return turfSimplify(feat, { tolerance, highQuality: false, mutate: false });
}

// Keep only the N largest polygons in a MultiPolygon — drops tiny offshore islands.
function keepLargest(feat, n) {
  if (feat.geometry.type !== "MultiPolygon") return feat;
  const polys = feat.geometry.coordinates
    .map((coords) => ({ coords, area: turfArea(turfPoly(coords)) }))
    .sort((a, b) => b.area - a.area)
    .slice(0, n)
    .map((p) => p.coords);
  return turfMulti(polys);
}

const mainlandUnion = simplifyFeature(keepLargest(dissolveGroup(groups.mainland), 1), 0.05);
const hainanUnion = simplifyFeature(keepLargest(dissolveGroup(groups.hainan), 1), 0.02);
const taiwanUnion = simplifyFeature(keepLargest(dissolveGroup(groups.taiwan), 1), 0.02);

console.log(`Mainland union geometry type: ${mainlandUnion.geometry.type}`);
console.log(`Hainan union geometry type: ${hainanUnion.geometry.type}`);
console.log(`Taiwan union geometry type: ${taiwanUnion.geometry.type}`);

// Compute global bounding box across all groups
function ringBounds(ring, b) {
  for (const [lng, lat] of ring) {
    if (lng < b.minLng) b.minLng = lng;
    if (lng > b.maxLng) b.maxLng = lng;
    if (lat < b.minLat) b.minLat = lat;
    if (lat > b.maxLat) b.maxLat = lat;
  }
}
function geomBounds(geom, b) {
  if (geom.type === "Polygon") {
    for (const r of geom.coordinates) ringBounds(r, b);
  } else if (geom.type === "MultiPolygon") {
    for (const p of geom.coordinates) for (const r of p) ringBounds(r, b);
  }
}
const bounds = { minLng: Infinity, maxLng: -Infinity, minLat: Infinity, maxLat: -Infinity };
geomBounds(mainlandUnion.geometry, bounds);
geomBounds(hainanUnion.geometry, bounds);
geomBounds(taiwanUnion.geometry, bounds);
console.log("Bounds:", bounds);

// Equirectangular projection scaled to fit viewBox with padding, centered
const lngRange = bounds.maxLng - bounds.minLng;
const latRange = bounds.maxLat - bounds.minLat;
const scaleX = (VB_W - 2 * PADDING) / lngRange;
const scaleY = (VB_H - 2 * PADDING) / latRange;
const SCALE = Math.min(scaleX, scaleY);
const projW = lngRange * SCALE;
const projH = latRange * SCALE;
const OFFX = (VB_W - projW) / 2;
const OFFY = (VB_H - projH) / 2;

function project(lng, lat) {
  const x = OFFX + (lng - bounds.minLng) * SCALE;
  const y = OFFY + (bounds.maxLat - lat) * SCALE;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

// Geometry → SVG path d-string (one or more M..Z subpaths)
function ringToSubpath(ring) {
  if (ring.length < 2) return "";
  const pts = ring.map(([lng, lat]) => project(lng, lat));
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) d += ` L ${pts[i][0]} ${pts[i][1]}`;
  return d + " Z";
}
function geomToPath(geom) {
  const subs = [];
  if (geom.type === "Polygon") {
    for (const r of geom.coordinates) subs.push(ringToSubpath(r));
  } else if (geom.type === "MultiPolygon") {
    for (const p of geom.coordinates) for (const r of p) subs.push(ringToSubpath(r));
  }
  return subs.filter(Boolean).join(" ");
}

const mainlandPath = geomToPath(mainlandUnion.geometry);
const hainanPath = geomToPath(hainanUnion.geometry);
const taiwanPath = geomToPath(taiwanUnion.geometry);
console.log(
  `Path lengths: mainland=${mainlandPath.length}, hainan=${hainanPath.length}, taiwan=${taiwanPath.length}`
);

// Reproject city coords
const projectedCities = {};
for (const [id, [lng, lat]] of Object.entries(CITY_COORDS)) {
  const [x, y] = project(lng, lat);
  projectedCities[id] = { x: Math.round(x), y: Math.round(y) };
}
console.log("Cities:", projectedCities);

// Generate a smooth cubic bezier path linking the cities in order
function buildBezier(points) {
  if (points.length < 2) {
    if (points.length === 1) {
      const p = points[0];
      // Single city: tiny arc loop near the dot for visual hint
      return `M ${p.x - 12} ${p.y} Q ${p.x} ${p.y - 14} ${p.x + 12} ${p.y}`;
    }
    return "";
  }
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    // Smooth S-shaped control points
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const cp1x = a.x + dx * 0.35;
    const cp1y = a.y + dy * 0.1;
    const cp2x = a.x + dx * 0.65;
    const cp2y = b.y - dy * 0.1;
    d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${b.x} ${b.y}`;
  }
  return d;
}

const projectedRoutes = {};
for (const [id, ids] of Object.entries(ROUTES)) {
  const pts = ids.map((cid) => projectedCities[cid]).filter(Boolean);
  projectedRoutes[id] = buildBezier(pts);
}
console.log("Routes:", projectedRoutes);

const output = {
  generatedAt: new Date().toISOString(),
  source: INPUT,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  projection: { type: "equirectangular", bounds, scale: SCALE, offsetX: OFFX, offsetY: OFFY, padding: PADDING },
  mainlandPath,
  hainanPath,
  taiwanPath,
  cities: projectedCities,
  routes: projectedRoutes,
};

fs.writeFileSync(OUT, JSON.stringify(output, null, 2));
console.log(`\nWritten to ${OUT}`);
