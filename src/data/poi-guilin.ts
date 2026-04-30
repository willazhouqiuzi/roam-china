import type { POI } from "./poi";

export const guilinPOIs: POI[] = [
  {
    id: "elephant-trunk-hill",
    name: "Elephant Trunk Hill",
    nameZh: "象鼻山",
    pinyin: "Xiàngbíshān",
    mapX: 340,
    mapY: 230,
    glyph: "象",
    prose:
      "The karst peak with the natural arch that gave the city its symbol — the rock formation looks exactly like an elephant drinking from the Li River. Best photographed at sunset from the small bridge to the south. The cave runs through the trunk; you can stand under it.",
    videoClips: [
      { timestamp: "02:35", videoTitle: "Sunset at Elephant Trunk Hill", creator: "Mira Lin" },
      { timestamp: "07:50", videoTitle: "Inside the Trunk", creator: "Far Corners" },
    ],
  },
  {
    id: "sun-moon-pagodas",
    name: "Sun and Moon Pagodas",
    nameZh: "日月双塔",
    pinyin: "Rì Yuè Shuāngtǎ",
    mapX: 320,
    mapY: 200,
    glyph: "塔",
    labelLeft: true,
    prose:
      "Twin pagodas on the south side of Shanhu Lake — the gold (Sun) and silver (Moon) towers, lit gold and silver at night. The bronze pagoda has interior wood carvings worth the entry. Walk between them via the underwater corridor.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Sun and Moon Pagodas at Dusk", creator: "Henry Sun" },
      { timestamp: "08:40", videoTitle: "The Underwater Walk", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "solitary-beauty-peak",
    name: "Solitary Beauty Peak",
    nameZh: "独秀峰",
    pinyin: "Dúxiùfēng",
    mapX: 360,
    mapY: 195,
    glyph: "峰",
    labelAbove: true,
    prose:
      "A single karst peak rising 152 m inside the old Jingjiang Princes' City. Climb the 306 steps to the top for the best in-city view of Guilin. The princes' compound at the foot is a reconstructed Ming-dynasty mansion, surprisingly intact.",
    videoClips: [
      { timestamp: "04:10", videoTitle: "Climbing Solitary Beauty Peak", creator: "Far Corners" },
      { timestamp: "09:25", videoTitle: "Inside the Princes' City", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "reed-flute-cave",
    name: "Reed Flute Cave",
    nameZh: "芦笛岩",
    pinyin: "Lúdíyán",
    mapX: 270,
    mapY: 175,
    glyph: "洞",
    labelLeft: true,
    labelExtra: "+half day",
    prose:
      "A 240 m karst cave in the northwest of the city — limestone formations lit in coloured floods, all with names: 'Crystal Palace', 'Dragon Pagoda', 'Mushroom Hill'. Inscriptions on the walls go back 1,200 years. Touristy and unironic. Worth a half-morning.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Inside Reed Flute Cave", creator: "Mira Lin" },
      { timestamp: "06:20", videoTitle: "The Coloured Limestone", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "yao-mountain",
    name: "Yao Mountain",
    nameZh: "尧山",
    pinyin: "Yáoshān",
    mapX: 450,
    mapY: 230,
    glyph: "山",
    labelExtra: "+half day",
    prose:
      "The highest peak in central Guilin (909 m) — cable car up, alpine slide back down (yes, really). The ridge views in clear weather show the karst landscape stretching to the horizon. Avoid weekends.",
    videoClips: [
      { timestamp: "04:50", videoTitle: "The Yao Shan Slide", creator: "Wild Life Asia" },
      { timestamp: "10:00", videoTitle: "Karst from the Top", creator: "Far Corners" },
    ],
  },
  {
    id: "two-rivers-four-lakes",
    name: "Two Rivers Four Lakes",
    nameZh: "两江四湖",
    pinyin: "Liǎng Jiāng Sì Hú",
    mapX: 305,
    mapY: 245,
    glyph: "江",
    labelRight: true,
    labelAbove: true,
    prose:
      "The interconnected waterways through the city centre — restored Ming-dynasty canals plus the Li and Tao rivers, walkable shore-to-shore in two hours. Best at night when the bridges and pagodas are lit.",
    videoClips: [
      { timestamp: "02:45", videoTitle: "Two Rivers Four Lakes at Night", creator: "Henry Sun" },
      { timestamp: "11:15", videoTitle: "A Walk Along the Canals", creator: "Slow Travel China" },
    ],
  },
  {
    id: "longji-rice-terraces",
    name: "Longji Rice Terraces",
    nameZh: "龙脊梯田",
    pinyin: "Lóngjǐ Tītián",
    mapX: 175,
    mapY: 90,
    glyph: "梯",
    labelExtra: "+1 day trip",
    prose:
      "Two hours northwest of Guilin in the hills — Zhuang and Yao minority villages perched above terraced rice fields that change colour with the season. Stay overnight at Pingan or Dazhai. Best in mid-May (water mirrors) and mid-October (gold).",
    videoClips: [
      { timestamp: "06:00", videoTitle: "Longji at Mid-May", creator: "Slow Travel China" },
      { timestamp: "09:50", videoTitle: "Sunrise at Pingan", creator: "Mira Lin" },
    ],
  },
  {
    id: "daxu-old-town",
    name: "Daxu Old Town",
    nameZh: "大圩古镇",
    pinyin: "Dàxū",
    mapX: 430,
    mapY: 320,
    glyph: "圩",
    labelExtra: "+half day",
    prose:
      "A 1,300-year-old market town on the Li River, 18 km south of Guilin — flagstone streets, blue-roof shops, hardly any tourists. Take bus 88 from the city. Pair with a Li River bamboo raft if you have a full day.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "An Afternoon in Daxu", creator: "Yuxi Travels" },
      { timestamp: "08:10", videoTitle: "The Old Stone Streets", creator: "Roads & Kingdoms" },
    ],
  },
];
