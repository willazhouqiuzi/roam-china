// scripts/fetch-unsplash-images.mjs
//
// Fetches one hero image per city from Unsplash, saves to public/images/cities/{id}.jpg,
// and writes attribution metadata to src/data/image-attribution.json.
//
// Reads UNSPLASH_ACCESS_KEY from .env.local. Run:
//   node scripts/fetch-unsplash-images.mjs           # all 18 cities
//   node scripts/fetch-unsplash-images.mjs beijing   # single city (for testing)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Buffer } from "node:buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

// ---------- env ----------

function loadEnv() {
  const envPath = path.resolve(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error(`ERROR: ${envPath} not found.`);
    process.exit(1);
  }
  const raw = fs.readFileSync(envPath, "utf8");
  const env = {};
  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

const env = loadEnv();
const ACCESS_KEY = env.UNSPLASH_ACCESS_KEY;
if (!ACCESS_KEY) {
  console.error("ERROR: UNSPLASH_ACCESS_KEY missing or empty in .env.local");
  process.exit(1);
}

// ---------- city → query mapping ----------

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

  // ---- 12 new cities/regions ----
  { id: "xinjiang", query: "Xinjiang desert mountains" },
  { id: "gansu", query: "Dunhuang desert oasis" },
  { id: "qinghai", query: "Qinghai lake canola" },
  { id: "ningxia", query: "desert mountain China" },
  { id: "inner-mongolia", query: "Mongolia grassland yurt" },
  { id: "wuhan", query: "Wuhan yellow crane tower" },
  { id: "changsha", query: "长沙橘子洲" },
  { id: "jingdezhen", query: "Chinese porcelain pottery" },
  { id: "wuyuan", query: "yellow canola field China" },
  { id: "guangzhou", query: "Guangzhou canton tower night" },
  { id: "chaozhou", query: "Chaozhou bridge old town" },
  { id: "shantou", query: "Chinese fishing village" },
];

// CLI: optional filter argument
const arg = process.argv[2];
const targets = arg ? CITIES.filter((c) => c.id === arg) : CITIES;
if (arg && !targets.length) {
  console.error(`ERROR: no city with id "${arg}". Valid: ${CITIES.map((c) => c.id).join(", ")}`);
  process.exit(1);
}

// ---------- output paths ----------

const OUT_DIR = path.resolve(ROOT, "public/images/cities");
const ATTRIBUTION_PATH = path.resolve(ROOT, "src/data/image-attribution.json");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// ---------- API calls ----------

async function searchPhoto(query) {
  const url = new URL("https://api.unsplash.com/search/photos");
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", "1");
  url.searchParams.set("orientation", "landscape");

  const r = await fetch(url, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Search failed: HTTP ${r.status} — ${text}`);
  }
  const json = await r.json();
  return json.results?.[0];
}

async function trackDownload(photo) {
  // Unsplash API guidelines: when an app actually uses a photo, hit the
  // photo's tracking endpoint so the photographer's stats reflect the use.
  if (!photo.links?.download_location) return;
  try {
    await fetch(photo.links.download_location, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    });
  } catch {
    // Non-fatal — analytics endpoint failure shouldn't stop the script.
  }
}

async function downloadImage(url, outPath) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Image download HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(outPath, buf);
  return buf.length;
}

// ---------- main ----------

async function main() {
  // Load existing attribution so single-city runs don't wipe other entries
  let attribution = {};
  if (fs.existsSync(ATTRIBUTION_PATH)) {
    try {
      attribution = JSON.parse(fs.readFileSync(ATTRIBUTION_PATH, "utf8"));
    } catch {
      attribution = {};
    }
  }

  for (const { id, query } of targets) {
    process.stdout.write(`${id.padEnd(14)} "${query}" ... `);

    // Idempotent skip — if we already have the file AND the attribution
    // entry, leave it alone. Saves rate-limit budget on re-runs and
    // protects existing photos from being overwritten by a new search.
    const outPath = path.join(OUT_DIR, `${id}.jpg`);
    if (attribution[id]?.photoId && fs.existsSync(outPath)) {
      console.log("· already saved, skipping");
      continue;
    }

    try {
      const photo = await searchPhoto(query);
      if (!photo) {
        console.log("NO RESULTS");
        continue;
      }
      const bytes = await downloadImage(photo.urls.regular, outPath);
      await trackDownload(photo);
      attribution[id] = {
        photoId: photo.id,
        photoUrl: photo.links.html,
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
        unsplashQuery: query,
      };
      console.log(`✓ ${(bytes / 1024).toFixed(0)} KB · ${photo.user.name}`);
    } catch (err) {
      console.log(`ERROR — ${err.message}`);
    }
  }

  fs.writeFileSync(ATTRIBUTION_PATH, JSON.stringify(attribution, null, 2));
  console.log(`\nAttribution → ${ATTRIBUTION_PATH}`);
}

main().catch((err) => {
  console.error("\nFATAL:", err);
  process.exit(1);
});
