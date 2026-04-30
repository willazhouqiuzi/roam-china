// scripts/fetch-unsplash-city-extras.mjs
//
// Fetches 2 extra photos per city for the homepage city-preview carousel.
// The existing primary photo (saved as {id}.jpg) becomes carousel slide 1;
// these new fetches save as {id}-2.jpg and {id}-3.jpg.
//
// Run: node scripts/fetch-unsplash-city-extras.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Buffer } from "node:buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

function loadEnv() {
  const envPath = path.resolve(ROOT, ".env.local");
  const raw = fs.readFileSync(envPath, "utf8");
  const env = {};
  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

const ACCESS_KEY = loadEnv().UNSPLASH_ACCESS_KEY;
if (!ACCESS_KEY) {
  console.error("ERROR: UNSPLASH_ACCESS_KEY missing");
  process.exit(1);
}

// Per-city queries — same primary as fetch-unsplash-images.mjs, used to
// keep the carousel thematically coherent.
const CITIES = [
  { id: "beijing", query: "Beijing forbidden city" },
  { id: "shanghai", query: "Shanghai bund skyline" },
  { id: "xian", query: "Xian terracotta army" },
  { id: "chengdu", query: "Chengdu giant panda" },
  { id: "guilin", query: "Guilin li river karst" },
  { id: "hangzhou", query: "Hangzhou west lake pagoda" },
  { id: "suzhou", query: "Suzhou china" },
  { id: "lhasa", query: "Lhasa potala palace tibet" },
  { id: "lijiang", query: "Lijiang old town yunnan" },
  { id: "dali", query: "Dali yunnan three pagodas" },
  { id: "yangshuo", query: "Yangshuo karst river" },
  { id: "kunming", query: "Kunming yunnan" },
  { id: "chongqing", query: "Chongqing skyline yangtze" },
  { id: "zhangjiajie", query: "Zhangjiajie sandstone pillars" },
  { id: "harbin", query: "Harbin ice festival saint sophia" },
  { id: "qingdao", query: "Qingdao china old town" },
  { id: "xiamen", query: "Xiamen gulangyu island" },
  { id: "jiuzhaigou", query: "Jiuzhaigou valley turquoise lake" },
];

const OUT_DIR = path.resolve(ROOT, "public/images/cities");
const ATTRIBUTION_PATH = path.resolve(ROOT, "src/data/image-attribution.json");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

let attribution = {};
if (fs.existsSync(ATTRIBUTION_PATH)) {
  try {
    attribution = JSON.parse(fs.readFileSync(ATTRIBUTION_PATH, "utf8"));
  } catch {
    attribution = {};
  }
}

async function searchPhotos(query, perPage = 4) {
  const url = new URL("https://api.unsplash.com/search/photos");
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", String(perPage));
  url.searchParams.set("orientation", "landscape");
  const r = await fetch(url, { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } });
  if (!r.ok) throw new Error(`HTTP ${r.status} — ${await r.text()}`);
  const json = await r.json();
  return json.results || [];
}

async function downloadImage(url, outPath) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Image HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(outPath, buf);
  return buf.length;
}

async function main() {
  for (const { id, query } of CITIES) {
    process.stdout.write(`${id.padEnd(14)} `);
    try {
      const results = await searchPhotos(query, 4);
      const existingId = attribution[id]?.photoId;
      // Skip the photo we already have (if any), then take 2 distinct ones for slides 2 and 3.
      const candidates = results.filter((p) => p.id !== existingId);
      const picks = candidates.slice(0, 2);
      if (picks.length < 2) {
        console.log(`only ${picks.length} new candidate(s) — skipping rest`);
      }

      const extras = [];
      for (let i = 0; i < picks.length; i++) {
        const photo = picks[i];
        const slot = i + 2; // slide 2 or slide 3
        const outPath = path.join(OUT_DIR, `${id}-${slot}.jpg`);
        const bytes = await downloadImage(photo.urls.regular, outPath);
        extras.push({
          slot,
          photoId: photo.id,
          photoUrl: photo.links.html,
          photographer: photo.user.name,
          photographerUrl: photo.user.links.html,
        });
        process.stdout.write(`✓-${slot} (${(bytes / 1024).toFixed(0)}KB ${photo.user.name})  `);
      }

      // Merge into attribution: keep the primary entry, add an "extras" array
      const prev = attribution[id] || {};
      attribution[id] = {
        ...prev,
        extras,
      };
      console.log("");
    } catch (err) {
      console.log(`ERROR — ${err.message}`);
    }
  }

  fs.writeFileSync(ATTRIBUTION_PATH, JSON.stringify(attribution, null, 2));
  console.log(`\nAttribution updated → ${ATTRIBUTION_PATH}`);
}

main();
