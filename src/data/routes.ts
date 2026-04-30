export type Route = {
  id: string;
  name: string;
  days: number;
  cityIds: string[];
  transport: string;
  tagline: string;
  dayRanges: string[];
  bezierPath: string;
};

export const routes: Route[] = [
  {
    id: "classic-first-time",
    name: "Classic First Time",
    days: 10,
    cityIds: ["beijing", "xian", "chengdu", "guilin", "shanghai"],
    transport: "High-speed rail + 1 flight",
    tagline:
      "The 10-day route that has worked for first-timers for twenty years.",
    dayRanges: ["Day 1–2", "Day 3–4", "Day 5–6", "Day 7–8", "Day 9–10"],
    bezierPath:
      "M 466 158 C 439.4 163.8 416.6 210.2 390 216 C 372.15 219.8 356.85 250.2 339 254 C 361.4 259.5 380.6 303.5 403 309 C 443.6 302.9 478.4 254.1 519 248",
  },
  {
    id: "slow-south",
    name: "Slow South",
    days: 7,
    cityIds: ["kunming", "dali", "lijiang"],
    transport: "Mountain rail and slow buses",
    tagline: "Yunnan, slowly. Mountains, minorities, mild weather.",
    dayRanges: ["Day 1–2", "Day 3–4", "Day 5–7"],
    bezierPath:
      "M 325 311 C 316.25 310.4 308.75 305.6 300 305 C 300 303.7 300 293.3 300 292",
  },
  {
    id: "karst-and-rivers",
    name: "Karst and Rivers",
    days: 7,
    cityIds: ["guilin", "yangshuo"],
    transport: "Bullet train and bamboo raft",
    tagline:
      "Down the Li River, into the karst — slow afternoons among bamboo, rice paddies, and limestone peaks.",
    dayRanges: ["Day 1–3", "Day 4–7"],
    bezierPath:
      "M 403 309 C 404.05 309.5 404.95 313.5 406 314",
  },
  {
    id: "two-capitals",
    name: "Two Capitals",
    days: 7,
    cityIds: ["beijing", "xian"],
    transport: "High-speed rail",
    tagline: "Two ancient capitals. Three thousand years of imperial China.",
    dayRanges: ["Day 1–4", "Day 5–7"],
    bezierPath: "M 466 158 C 439.4 163.8 416.6 210.2 390 216",
  },
  {
    id: "eastern-refinement",
    name: "Eastern Refinement",
    days: 7,
    cityIds: ["shanghai", "hangzhou"],
    transport: "Bullet train",
    tagline:
      "China's most refined corner — silk, tea, gardens, and the lake that inspired a thousand poems.",
    dayRanges: ["Day 1–4", "Day 5–7"],
    bezierPath: "M 519 248 C 514.1 248.9 509.9 256.1 505 257",
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle",
    days: 8,
    cityIds: ["beijing", "xian", "shanghai"],
    transport: "High-speed rail",
    tagline:
      "If you only have a week. The three cities every guidebook starts with.",
    dayRanges: ["Day 1–3", "Day 4–5", "Day 6–8"],
    bezierPath:
      "M 466 158 C 439.4 163.8 416.6 210.2 390 216 C 435.15 219.2 473.85 244.8 519 248",
  },
  {
    id: "china-classic-12",
    name: "China Classic",
    days: 12,
    cityIds: ["beijing", "xian", "guilin", "shanghai"],
    transport: "High-speed rail + 1 flight",
    tagline: "The four-city classic, paced for first-timers — three days each, no rush.",
    dayRanges: ["Day 1–3", "Day 4–6", "Day 7–9", "Day 10–12"],
    bezierPath:
      "M 466 158 C 439.4 163.8 416.6 210.2 390 216 C 394.55 225.3 398.45 299.7 403 309 C 443.6 302.9 478.4 254.1 519 248",
  },
  {
    id: "natural-wonders",
    name: "Natural Wonders Discovery",
    days: 14,
    cityIds: ["beijing", "xian", "zhangjiajie", "guilin", "shanghai"],
    transport: "High-speed rail + 1 flight",
    tagline:
      "The classic five plus Zhangjiajie's sandstone pillars rising out of the mist.",
    dayRanges: ["Day 1–3", "Day 4–5", "Day 6–8", "Day 9–11", "Day 12–14"],
    bezierPath:
      "M 466 158 C 439.4 163.8 416.6 210.2 390 216 C 395.25 221.3 399.75 263.7 405 269 C 404.3 273 403.7 305 403 309 C 443.6 302.9 478.4 254.1 519 248",
  },
  {
    id: "essence-and-panda",
    name: "Essence and Panda",
    days: 14,
    cityIds: ["beijing", "xian", "chengdu", "shanghai"],
    transport: "High-speed rail",
    tagline:
      "Three classic cities plus a long stay in Chengdu for pandas, mahjong, and slow afternoons.",
    dayRanges: ["Day 1–4", "Day 5–7", "Day 8–11", "Day 12–14"],
    bezierPath:
      "M 466 158 C 439.4 163.8 416.6 210.2 390 216 C 372.15 219.8 356.85 250.2 339 254 C 402 253.4 456 248.6 519 248",
  },
  {
    id: "yunnan-and-chongqing",
    name: "Yunnan and Chongqing",
    days: 11,
    cityIds: ["kunming", "dali", "lijiang", "chongqing"],
    transport: "Mountain rail, slow buses, and 1 flight",
    tagline:
      "Yunnan slow, then a couple of days in Chongqing for the contrast — vertical city, vertical mountains.",
    dayRanges: ["Day 1–3", "Day 4–5", "Day 6–8", "Day 9–11"],
    bezierPath:
      "M 325 311 C 316.25 310.4 308.75 305.6 300 305 C 300 303.7 300 293.3 300 292 C 322.75 289.3 342.25 267.7 365 265",
  },
  {
    id: "classic-with-yunnan",
    name: "Classic with Yunnan",
    days: 18,
    cityIds: ["shanghai", "guilin", "kunming", "dali", "lijiang", "chengdu", "xian", "beijing"],
    transport: "High-speed rail + flights",
    tagline:
      "Eighteen days, southern arc — Shanghai through Yunnan, then north to Beijing. The grand tour.",
    dayRanges: [
      "Day 1–2",
      "Day 3–4",
      "Day 5–6",
      "Day 7–8",
      "Day 9–10",
      "Day 11–13",
      "Day 14–15",
      "Day 16–18",
    ],
    bezierPath:
      "M 519 248 C 478.4 254.1 443.6 302.9 403 309 C 375.7 309.2 352.3 310.8 325 311 C 316.25 310.4 308.75 305.6 300 305 C 300 303.7 300 293.3 300 292 C 313.65 288.2 325.35 257.8 339 254 C 356.85 250.2 372.15 219.8 390 216 C 416.6 210.2 439.4 163.8 466 158",
  },
  {
    id: "epic-yunnan-tibet",
    name: "Epic with Yunnan and Tibet",
    days: 18,
    cityIds: ["shanghai", "guilin", "kunming", "dali", "lijiang", "lhasa", "chengdu"],
    transport: "High-speed rail + flights",
    tagline:
      "Yunnan's slow valleys to Tibet's high plateau, ending with pandas in Chengdu. Acclimatize in Kunming first.",
    dayRanges: [
      "Day 1–2",
      "Day 3–4",
      "Day 5–6",
      "Day 7–8",
      "Day 9–10",
      "Day 11–14",
      "Day 15–18",
    ],
    bezierPath:
      "M 519 248 C 478.4 254.1 443.6 302.9 403 309 C 375.7 309.2 352.3 310.8 325 311 C 316.25 310.4 308.75 305.6 300 305 C 300 303.7 300 293.3 300 292 C 267.1 289.2 238.9 266.8 206 264 C 252.55 263 292.45 255 339 254",
  },
  {
    id: "grand-tour-landmarks",
    name: "Grand Tour of Landmarks",
    days: 21,
    cityIds: ["shanghai", "suzhou", "hangzhou", "guilin", "zhangjiajie", "xian", "beijing"],
    transport: "High-speed rail + flights",
    tagline:
      "Twenty-one days of icons — water towns to karst peaks, terracotta to imperial gates.",
    dayRanges: [
      "Day 1–3",
      "Day 4–6",
      "Day 7–9",
      "Day 10–12",
      "Day 13–15",
      "Day 16–18",
      "Day 19–21",
    ],
    bezierPath:
      "M 519 248 C 515.5 247.9 512.5 247.1 509 247 C 507.6 248 506.4 256 505 257 C 469.3 262.2 438.7 303.8 403 309 C 403.7 305 404.3 273 405 269 C 399.75 263.7 395.25 221.3 390 216 C 416.6 210.2 439.4 163.8 466 158",
  },
  {
    id: "must-see-tibet",
    name: "Must-See China including Tibet",
    days: 21,
    cityIds: ["beijing", "xian", "lhasa", "chengdu", "zhangjiajie", "guilin", "shanghai"],
    transport: "High-speed rail + flights",
    tagline:
      "Seven cities, three weeks — the only itinerary that fits the Wall, Lhasa, and Avatar mountains in one trip.",
    dayRanges: [
      "Day 1–3",
      "Day 4–6",
      "Day 7–10",
      "Day 11–13",
      "Day 14–16",
      "Day 17–19",
      "Day 20–21",
    ],
    bezierPath:
      "M 466 158 C 439.4 163.8 416.6 210.2 390 216 C 325.6 220.8 270.4 259.2 206 264 C 252.55 263 292.45 255 339 254 C 362.1 255.5 381.9 267.5 405 269 C 404.3 273 403.7 305 403 309 C 443.6 302.9 478.4 254.1 519 248",
  },
  {
    id: "panorama-china",
    name: "Panorama China",
    days: 28,
    cityIds: ["beijing", "xian", "zhangjiajie", "guilin", "kunming", "chengdu", "chongqing", "shanghai"],
    transport: "High-speed rail + flights",
    tagline:
      "Twenty-eight days. Eight cities. The biggest tour we'll suggest, for travelers who don't want to come back.",
    dayRanges: [
      "Day 1–4",
      "Day 5–7",
      "Day 8–10",
      "Day 11–13",
      "Day 14–16",
      "Day 17–20",
      "Day 21–24",
      "Day 25–28",
    ],
    bezierPath:
      "M 466 158 C 439.4 163.8 416.6 210.2 390 216 C 395.25 221.3 399.75 263.7 405 269 C 404.3 273 403.7 305 403 309 C 375.7 309.2 352.3 310.8 325 311 C 329.9 305.3 334.1 259.7 339 254 C 348.1 255.1 355.9 263.9 365 265 C 418.9 263.3 465.1 249.7 519 248",
  },
  {
    id: "panda-and-jiuzhaigou",
    name: "Pandas and Jiuzhaigou",
    days: 8,
    cityIds: ["chengdu", "jiuzhaigou", "chongqing"],
    transport: "Flights and slow buses",
    tagline:
      "Pandas in the morning, alpine pools by afternoon, hotpot in Chongqing for the contrast.",
    dayRanges: ["Day 1–3", "Day 4–6", "Day 7–8"],
    bezierPath:
      "M 339 254 C 338.65 251.3 338.35 229.7 338 227 C 347.45 230.8 355.55 261.2 365 265",
  },
  {
    id: "coastal-mosaic",
    name: "Coastal Mosaic",
    days: 10,
    cityIds: ["qingdao", "shanghai", "hangzhou", "xiamen"],
    transport: "Bullet train + 1 flight",
    tagline:
      "Four coastal cities, four kinds of sea air — German bricks in Qingdao, Bund neon in Shanghai, West Lake quiet in Hangzhou, island life in Xiamen.",
    dayRanges: ["Day 1–2", "Day 3–5", "Day 6–7", "Day 8–10"],
    bezierPath:
      "M 507 198 C 511.2 215.5 514.8 230.5 519 248 C 514.1 251.15 509.9 253.85 505 257 C 497.65 278 491.35 296 484 317",
  },
  {
    id: "imperial-and-ice",
    name: "Imperial and Ice",
    days: 7,
    cityIds: ["beijing", "harbin"],
    transport: "Bullet train (4.5h) or 2h flight",
    tagline:
      "Imperial palaces, then north to a frozen city carved from blue ice. Come in January when the festival is on.",
    dayRanges: ["Day 1–3", "Day 4–7"],
    bezierPath: "M 466 158 C 503.1 137 534.9 119 572 98",
  },
  {
    id: "sea-and-beer",
    name: "Sea and Beer",
    days: 5,
    cityIds: ["qingdao", "xiamen"],
    transport: "1 flight",
    tagline:
      "Two coastal cities, two colonial pasts. Tsingtao at the source, Xiamen on its quiet island.",
    dayRanges: ["Day 1–2", "Day 3–5"],
    bezierPath: "M 507 198 C 498.95 239.65 492.05 275.35 484 317",
  },
  {
    id: "beijing-in-three",
    name: "Beijing in Three",
    days: 3,
    cityIds: ["beijing"],
    transport: "Subway and walking",
    tagline:
      "When you only have a long weekend. Forbidden City, the Wall in a day, and as much hutong as you can fit between.",
    dayRanges: ["Day 1–3"],
    bezierPath: "M 466 158",
  },
  {
    id: "yangtze-delta",
    name: "The Yangtze Delta",
    days: 5,
    cityIds: ["shanghai", "suzhou", "hangzhou"],
    transport: "Bullet train (under 1h between cities)",
    tagline:
      "China's most refined corner — neon Bund, silk gardens, and the lake that inspired a thousand poems. Three cities, all under an hour apart by train.",
    dayRanges: ["Day 1–2", "Day 3", "Day 4–5"],
    bezierPath:
      "M 519 248 C 515.5 247.65 512.5 247.35 509 247 C 507.6 250.5 506.4 253.5 505 257",
  },
  {
    id: "avatar-and-karst",
    name: "Avatar and Karst",
    days: 8,
    cityIds: ["zhangjiajie", "guilin", "yangshuo"],
    transport: "1 flight + bamboo raft",
    tagline:
      "The sandstone pillars that became Pandora, then south to where the Li River curves through bamboo. Two surreal landscapes in one trip.",
    dayRanges: ["Day 1–4", "Day 5–6", "Day 7–8"],
    bezierPath:
      "M 405 269 C 404.3 283 403.7 295 403 309 C 404.05 310.75 404.95 312.25 406 314",
  },
  {
    id: "yunnan-highlands",
    name: "Yunnan Highlands",
    days: 10,
    cityIds: ["kunming", "dali", "lijiang", "jiuzhaigou"],
    transport: "Mountain rail + 1 flight",
    tagline:
      "Yunnan's slow valleys, then one flight north to Jiuzhaigou's hundred turquoise pools. Acclimatize before you ascend.",
    dayRanges: ["Day 1–3", "Day 4–5", "Day 6–8", "Day 9–10"],
    bezierPath:
      "M 325 311 C 316.25 308.9 308.75 307.1 300 305 C 300 300.45 300 296.55 300 292 C 313.3 269.25 324.7 249.75 338 227",
  },
  {
    id: "tea-and-gardens",
    name: "Tea and Gardens",
    days: 8,
    cityIds: ["suzhou", "hangzhou", "xiamen"],
    transport: "Bullet train + 1 flight",
    tagline:
      "Suzhou's silk-loomed gardens, Hangzhou's longjing slopes, oolong on Xiamen's island. Eight days of slow brews.",
    dayRanges: ["Day 1–2", "Day 3–5", "Day 6–8"],
    bezierPath:
      "M 509 247 C 507.6 250.5 506.4 253.5 505 257 C 497.65 278 491.35 296 484 317",
  },
  {
    id: "pandas-and-pillars",
    name: "Pandas and Pillars",
    days: 7,
    cityIds: ["chengdu", "zhangjiajie"],
    transport: "1 flight + cable cars",
    tagline:
      "Pandas in the morning, then a flight east to the sandstone pillars. Two of China's most filmed scenes, paired.",
    dayRanges: ["Day 1–3", "Day 4–7"],
    bezierPath: "M 339 254 C 362.1 259.25 381.9 263.75 405 269",
  },
  {
    id: "spring-south",
    name: "Spring South",
    days: 10,
    cityIds: ["suzhou", "hangzhou", "guilin", "yangshuo"],
    transport: "Bullet train + 1 flight",
    tagline:
      "Southern China when the magnolias bloom — gardens in flower, karst peaks in mist, the Li River clear and warm.",
    dayRanges: ["Day 1–2", "Day 3–4", "Day 5–7", "Day 8–10"],
    bezierPath:
      "M 509 247 C 507.6 250.5 506.4 253.5 505 257 C 469.3 275.2 438.7 290.8 403 309 C 404.05 310.75 404.95 312.25 406 314",
  },
];
