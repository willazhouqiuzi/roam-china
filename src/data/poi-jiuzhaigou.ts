import type { POI } from "./poi";

// Jiuzhaigou is a Y-shaped national park, not a city. Coordinates here trace the valley
// roughly: north (Long Lake) at top, two branches diverge from Nuorilang Falls in the middle.

export const jiuzhaigouPOIs: POI[] = [
  {
    id: "five-coloured-pool",
    name: "Five-Coloured Pool",
    nameZh: "五花海",
    pinyin: "Wǔhuāhǎi",
    mapX: 350,
    mapY: 175,
    glyph: "花",
    prose:
      "The most photographed pool in the park — turquoise, jade, and cobalt at the same instant, depending on which mineral is suspended where. Boardwalks loop the perimeter; arrive at first entry (7 am) for the still water before the wind picks up.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Sunrise at the Five-Coloured Pool", creator: "Mira Lin" },
      { timestamp: "08:50", videoTitle: "Why the Water Is Like That", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "long-lake",
    name: "Long Lake",
    nameZh: "长海",
    pinyin: "Chánghǎi",
    mapX: 360,
    mapY: 80,
    glyph: "长",
    labelAbove: true,
    prose:
      "The largest lake in the park (3,103 m altitude), at the very top of the southern branch — bus to the end, walk five minutes to the viewing platform. No outflow; locals call it the bottomless lake. Snowmelt feeds it; in winter the surface freezes solid.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Long Lake in October", creator: "Wild Life Asia" },
      { timestamp: "09:40", videoTitle: "The Walk to the Top", creator: "Far Corners" },
    ],
  },
  {
    id: "pearl-shoals",
    name: "Pearl Shoals Waterfall",
    nameZh: "珍珠滩瀑布",
    pinyin: "Zhēnzhū Tān Pùbù",
    mapX: 250,
    mapY: 200,
    glyph: "珠",
    labelLeft: true,
    prose:
      "A 162 m wide waterfall fed by the Pearl Shoals — a sloping limestone slab the river runs over before plunging. Featured in Journey to the West (the 1986 TV adaptation, in the opening credits). Walk around it on the boardwalk; lower viewpoint is the best.",
    videoClips: [
      { timestamp: "02:55", videoTitle: "At the Foot of Pearl Shoals", creator: "Far Corners" },
      { timestamp: "08:30", videoTitle: "The Journey to the West Spot", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "mirror-lake",
    name: "Mirror Lake",
    nameZh: "镜海",
    pinyin: "Jìnghǎi",
    mapX: 380,
    mapY: 250,
    glyph: "镜",
    labelRight: true,
    prose:
      "The lake whose name describes itself — at first light, before any wind, the surface is so still that the surrounding peaks fold underneath unbroken. Ten minutes of stillness then the wind picks up. Get there at 7:15 am; the rangers won't let you in earlier.",
    videoClips: [
      { timestamp: "01:50", videoTitle: "Mirror Lake at Dawn", creator: "Mira Lin" },
      { timestamp: "06:00", videoTitle: "The Reflection Window", creator: "Slow Travel China" },
    ],
  },
  {
    id: "nuorilang-falls",
    name: "Nuorilang Falls",
    nameZh: "诺日朗瀑布",
    pinyin: "Nuòrìlǎng Pùbù",
    mapX: 300,
    mapY: 195,
    glyph: "诺",
    labelRight: true,
    prose:
      "The 320 m wide travertine waterfall at the Y-junction of the park's two valleys — the bus hub for the entire park. View it from the upper deck at the bus station, then walk the lower boardwalk for the misty close-up. Quieter at lunchtime when the buses are full.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Nuorilang Falls Up Close", creator: "Wild Life Asia" },
      { timestamp: "09:15", videoTitle: "Above and Below the Falls", creator: "Far Corners" },
    ],
  },
  {
    id: "tiger-lake",
    name: "Tiger Lake",
    nameZh: "老虎海",
    pinyin: "Lǎohǔhǎi",
    mapX: 320,
    mapY: 240,
    glyph: "虎",
    prose:
      "A long blue-green lake on the lower valley named for the tiger-stripe pattern its surface makes when the wind ripples it. Walk the entire shoreline boardwalk in 30 minutes; the southern end has the best autumn-foliage backdrop.",
    videoClips: [
      { timestamp: "02:25", videoTitle: "Tiger Lake in Autumn", creator: "Mira Lin" },
      { timestamp: "07:30", videoTitle: "Walking the Shoreline", creator: "Slow Travel China" },
    ],
  },
  {
    id: "shuzheng-village",
    name: "Shuzheng Village",
    nameZh: "树正寨",
    pinyin: "Shùzhèng Zhài",
    mapX: 380,
    mapY: 290,
    glyph: "村",
    labelRight: true,
    prose:
      "One of the nine Tibetan villages that gave Jiuzhaigou (Nine-Village Valley) its name — wooden houses on stilts, prayer flags between the trees. Most residents have moved to the entrance area; what remains is a small, mostly authentic settlement on the boardwalk loop.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "A Walk Through Shuzheng", creator: "Roads & Kingdoms" },
      { timestamp: "10:00", videoTitle: "The Tibetan Village Inside the Park", creator: "Far Corners" },
    ],
  },
  {
    id: "huanglong",
    name: "Huanglong",
    nameZh: "黄龙",
    pinyin: "Huánglóng",
    mapX: 530,
    mapY: 195,
    glyph: "黄",
    labelExtra: "+1 day",
    prose:
      "A separate UNESCO travertine landscape three hours by car east of Jiuzhaigou — terraced calcite pools that look like a painter's palette of yellows and turquoises, plus a 5 km boardwalk climb to the top at 3,569 m. Often combined with Jiuzhaigou into a single trip; bring oxygen.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "The Travertine Terraces of Huanglong", creator: "Wild Life Asia" },
      { timestamp: "11:30", videoTitle: "Climbing to the Top of Huanglong", creator: "Far Corners" },
    ],
  },
];
