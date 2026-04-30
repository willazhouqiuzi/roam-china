// scripts/generate-images.mjs
//
// Generates a single test image via OpenRouter and saves it to public/images/test-park.jpg.
// Reads OPENROUTER_API_KEY from .env.local — does NOT take it from process env or args.
//
// Run: `node scripts/generate-images.mjs`

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Buffer } from "node:buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");

// ---------- config ----------

// Preference order — when we discover image-capable models, we'll try those
// matching these prefixes first, then anything else.
const PREFERRED_PREFIXES = [
  "black-forest-labs/",
  "google/gemini",
  "openai/",
  "stability",
];

const TEST_PROMPT =
  "Elderly Chinese man with songbird in bamboo cage hanging in wutong tree, " +
  "traditional Chengdu teahouse in People's Park, morning light, jasmine tea on " +
  "wooden table, editorial travel photography, soft natural light, slight film " +
  "grain, muted earth tones, slightly desaturated, shot on Leica with 35mm lens, " +
  "documentary style, candid moment, no people in foreground, no text, no logos, " +
  "4:3 aspect ratio, high detail";

const OUTPUT_PATH = resolve(ROOT, "public/images/test-park.jpg");

// ---------- env loading ----------

function loadEnvLocal() {
  const envPath = resolve(ROOT, ".env.local");
  if (!existsSync(envPath)) {
    console.error("ERROR: .env.local not found at", envPath);
    console.error("Create it with: OPENROUTER_API_KEY=sk-or-v1-...");
    process.exit(1);
  }
  const raw = readFileSync(envPath, "utf8");
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

const env = loadEnvLocal();
const apiKey = env.OPENROUTER_API_KEY;
if (!apiKey) {
  console.error("ERROR: OPENROUTER_API_KEY is missing or empty in .env.local");
  process.exit(1);
}

// ---------- request ----------

async function callOpenRouter(model) {
  const body = {
    model,
    messages: [{ role: "user", content: TEST_PROMPT }],
    modalities: ["image", "text"],
  };

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "Roam image test",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    return { ok: false, status: response.status, statusText: response.statusText, body: text };
  }

  const json = await response.json();
  return { ok: true, json };
}

// ---------- response shape extraction ----------
// OpenRouter returns image data in several shapes depending on the model.
// Try them all; on a miss, dump the response so the user can debug.

function extractImageRef(json) {
  const message = json?.choices?.[0]?.message;
  if (message) {
    if (Array.isArray(message.images) && message.images.length) {
      const first = message.images[0];
      const url = first?.image_url?.url || first?.url;
      if (url) return url;
    }
    if (Array.isArray(message.content)) {
      for (const part of message.content) {
        if (part?.type === "image_url" && part?.image_url?.url) return part.image_url.url;
        if (part?.type === "image" && part?.image_url?.url) return part.image_url.url;
        if (part?.type === "output_image" && part?.image_url?.url) return part.image_url.url;
      }
    }
  }

  if (Array.isArray(json?.data) && json.data.length) {
    const d = json.data[0];
    if (d?.b64_json) return `data:image/png;base64,${d.b64_json}`;
    if (d?.url) return d.url;
  }

  return null;
}

// ---------- save helpers ----------

function dataUrlToBuffer(url) {
  const m = url.match(/^data:([^;]+);base64,(.+)$/);
  if (!m) return null;
  return { mime: m[1], buffer: Buffer.from(m[2], "base64") };
}

async function fetchUrlToBuffer(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Image fetch ${url} → HTTP ${r.status}`);
  const mime = r.headers.get("content-type") || "image/jpeg";
  const ab = await r.arrayBuffer();
  return { mime, buffer: Buffer.from(ab) };
}

// ---------- attempt ----------

async function tryGenerate(model) {
  console.log(`\n→ Calling OpenRouter, model: ${model}`);
  const result = await callOpenRouter(model);

  if (!result.ok) {
    console.error(`  HTTP ${result.status} ${result.statusText}`);
    console.error(`  Response body:\n${result.body}`);
    return false;
  }

  const json = result.json;

  if (json?.usage) console.log("  Usage:", JSON.stringify(json.usage));
  if (json?.cost !== undefined) console.log(`  Cost (USD): ${json.cost}`);
  if (json?.id) console.log(`  Request id: ${json.id}`);

  const imageRef = extractImageRef(json);
  if (!imageRef) {
    console.error("  Could not find an image in the response. Full body:");
    console.error(JSON.stringify(json, null, 2));
    return false;
  }

  let payload;
  if (imageRef.startsWith("data:")) {
    payload = dataUrlToBuffer(imageRef);
    if (!payload) {
      console.error("  Failed to decode data URL. First 200 chars:", imageRef.slice(0, 200));
      return false;
    }
  } else {
    try {
      payload = await fetchUrlToBuffer(imageRef);
    } catch (err) {
      console.error("  Failed to fetch image URL:", err.message);
      return false;
    }
  }

  const dir = dirname(OUTPUT_PATH);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(OUTPUT_PATH, payload.buffer);
  console.log(
    `  Saved ${payload.mime} (${payload.buffer.length} bytes) → ${OUTPUT_PATH}`
  );
  if (!payload.mime.includes("jpeg") && OUTPUT_PATH.endsWith(".jpg")) {
    console.log(
      `  Note: actual format is ${payload.mime} but file extension is .jpg — browsers will still render it.`
    );
  }
  return true;
}

// ---------- discovery ----------
// OpenRouter's catalog changes; ask it which models can output images right now.

function modelOutputsImages(model) {
  const arch = model?.architecture;
  if (!arch) return false;

  // Modern field: array of output modalities
  if (Array.isArray(arch.output_modalities)) {
    return arch.output_modalities.includes("image");
  }

  // Legacy string field, e.g. "text+image->text" (vision input, text output)
  // or "text->image" (image generator). Only the right-hand side matters.
  if (typeof arch.modality === "string") {
    const arrowIdx = arch.modality.indexOf("->");
    if (arrowIdx === -1) return false;
    const outputSide = arch.modality.slice(arrowIdx + 2);
    return outputSide.includes("image");
  }

  return false;
}

async function discoverImageModels() {
  const r = await fetch("https://openrouter.ai/api/v1/models", {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!r.ok) {
    const text = await r.text();
    console.error(`Failed to list models: HTTP ${r.status}\n${text}`);
    return [];
  }
  const json = await r.json();
  const all = Array.isArray(json?.data) ? json.data : [];
  const imageModels = all.filter(modelOutputsImages);

  // Skip meta/router pseudo-models
  return imageModels.filter((m) => !m.id.startsWith("openrouter/"));
}

function rankCandidates(models) {
  const ranked = [];
  for (const prefix of PREFERRED_PREFIXES) {
    for (const m of models) {
      if (m.id.startsWith(prefix) && !ranked.includes(m)) ranked.push(m);
    }
  }
  for (const m of models) {
    if (!ranked.includes(m)) ranked.push(m);
  }
  return ranked;
}

// ---------- main ----------

async function main() {
  console.log("Discovering image-capable models on OpenRouter...");
  const imageModels = await discoverImageModels();

  if (!imageModels.length) {
    console.error(
      "No image-capable models found on your account. Confirm your account has access at https://openrouter.ai/models?modalities=image"
    );
    process.exit(1);
  }

  console.log(`\nFound ${imageModels.length} image-output model(s):`);
  for (const m of imageModels.slice(0, 30)) {
    const arch = m?.architecture;
    const modalityStr =
      (Array.isArray(arch?.output_modalities) && `out=[${arch.output_modalities.join(",")}]`) ||
      arch?.modality ||
      "?";
    const price = m?.pricing?.image ?? m?.pricing?.request ?? m?.pricing?.completion ?? "?";
    console.log(`  - ${m.id}   ${modalityStr}   (price: ${price})`);
  }

  const ranked = rankCandidates(imageModels);
  console.log(`\nWill try in order: ${ranked.slice(0, 5).map((m) => m.id).join(", ")}${ranked.length > 5 ? ", ..." : ""}`);

  for (const m of ranked) {
    const ok = await tryGenerate(m.id);
    if (ok) return;
  }

  console.error("\nAll candidate models failed. See response bodies above to diagnose.");
  process.exit(1);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
