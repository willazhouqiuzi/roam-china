// Quick overlap-checker by parsing the rendered HTML for all city map pages.
// Detects POI label collisions by computing approximate label widths from text content
// and the rendering rules in CityMap.tsx.
//
// run: node scripts/_check-overlaps.mjs

const cities = [
  "beijing", "chengdu", "shanghai", "xian", "hangzhou", "guilin",
  "lijiang", "dali", "suzhou", "lhasa",
  "kunming", "chongqing", "zhangjiajie", "yangshuo",
  "harbin", "qingdao", "xiamen", "jiuzhaigou",
];

const FONT_PX = 12;
const HALO_PX = 3;
const PX_PER_CHAR = 6.5; // approximation — 12px Inter

function fetchText(url) {
  return fetch(url).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
    return r.text();
  });
}

// Crude regex to pull POI motion.g blocks from the SSR HTML.
// We look for: aria-label="Select X" ... <text>name</text> with x= and y= attrs
function extractPois(html) {
  const out = [];
  // Match each <g ... aria-label="Select ..."> ... </g>
  const groupRe = /<g[^>]*aria-label="Select ([^"]+)"[\s\S]*?<\/g>/g;
  let m;
  while ((m = groupRe.exec(html))) {
    const name = m[1];
    const block = m[0];
    // The <text> with name as content — but text-anchor and x/y attrs vary
    const textRe = /<text\s+x="(-?\d+(?:\.\d+)?)"\s+y="(-?\d+(?:\.\d+)?)"\s+text-anchor="([^"]+)"[^>]*>([^<]+)<\/text>/g;
    let tm;
    while ((tm = textRe.exec(block))) {
      const content = tm[4].trim();
      if (content === name) {
        out.push({
          name,
          x: parseFloat(tm[1]),
          y: parseFloat(tm[2]),
          anchor: tm[3],
          width: content.length * PX_PER_CHAR,
        });
        break;
      }
    }
  }
  return out;
}

function bounds(p) {
  let left;
  if (p.anchor === "end") left = p.x - p.width;
  else if (p.anchor === "start") left = p.x;
  else left = p.x - p.width / 2; // middle
  return {
    name: p.name,
    left: left - HALO_PX,
    right: left + p.width + HALO_PX,
    top: p.y - FONT_PX - HALO_PX,
    bottom: p.y + HALO_PX,
  };
}

function overlap(a, b) {
  const xO = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
  const yO = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  return xO > 0 && yO > 0;
}

const results = [];

for (const city of cities) {
  try {
    const html = await fetchText(`http://localhost:3000/cities/${city}/map`);
    const pois = extractPois(html);
    const boxes = pois.map(bounds);
    const overlaps = [];
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        if (overlap(boxes[i], boxes[j])) {
          overlaps.push(`${boxes[i].name}+${boxes[j].name}`);
        }
      }
    }
    results.push({ city, count: pois.length, overlaps });
  } catch (e) {
    results.push({ city, error: e.message });
  }
}

for (const r of results) {
  if (r.error) {
    console.log(`${r.city.padEnd(14)} ERROR: ${r.error}`);
  } else if (!r.overlaps.length) {
    console.log(`${r.city.padEnd(14)} OK (${r.count} POIs)`);
  } else {
    console.log(`${r.city.padEnd(14)} ${r.overlaps.length} overlaps: ${r.overlaps.join(", ")}`);
  }
}
