// scripts/_apply-geo.mjs - one-shot updater for cities.ts and routes.ts
import fs from "node:fs";

const o = JSON.parse(fs.readFileSync("scripts/_geo-output.json", "utf8"));

// --- cities.ts ---
{
  let src = fs.readFileSync("src/data/cities.ts", "utf8");
  for (const [id, { x, y }] of Object.entries(o.cities)) {
    const re = new RegExp(
      `(id:\\s*"${id}",[\\s\\S]*?mapX:\\s*)\\d+(,[\\s\\S]*?mapY:\\s*)\\d+(,)`,
      "m"
    );
    if (!re.test(src)) {
      console.log("NOT FOUND:", id);
      continue;
    }
    src = src.replace(re, `$1${x}$2${y}$3`);
    console.log(`cities ${id} → (${x}, ${y})`);
  }
  fs.writeFileSync("src/data/cities.ts", src);
}

// --- routes.ts ---
{
  let src = fs.readFileSync("src/data/routes.ts", "utf8");
  for (const [id, bezier] of Object.entries(o.routes)) {
    const re = new RegExp(
      `(id:\\s*"${id}",[\\s\\S]*?bezierPath:\\s*)"[^"]*"`,
      "m"
    );
    if (!re.test(src)) {
      console.log("NOT FOUND:", id);
      continue;
    }
    src = src.replace(re, `$1${JSON.stringify(bezier)}`);
    console.log(`routes ${id} bezier updated (${bezier.length} chars)`);
  }
  fs.writeFileSync("src/data/routes.ts", src);
}

console.log("done.");
