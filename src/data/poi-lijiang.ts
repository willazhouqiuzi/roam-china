import type { POI } from "./poi";

export const lijiangPOIs: POI[] = [
  {
    id: "old-town",
    name: "Lijiang Old Town",
    nameZh: "丽江古城",
    pinyin: "Lìjiāng Gǔchéng",
    mapX: 340,
    mapY: 230,
    glyph: "古",
    labelAbove: true,
    prose:
      "A UNESCO maze of cobblestone alleys, tiled rooftops, and small streams running past every doorway. Walk in before 8 am or after 9 pm to find the alleys without the crowds. Get lost on purpose — every wrong turn ends in a courtyard teahouse or Naxi-music bar.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Lijiang Old Town Before the Crowds", creator: "Mira Lin" },
      { timestamp: "08:00", videoTitle: "Walking the Alleys at Night", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "black-dragon-pool",
    name: "Black Dragon Pool",
    nameZh: "黑龙潭",
    pinyin: "Hēilóngtán",
    mapX: 340,
    mapY: 165,
    glyph: "潭",
    labelAbove: true,
    prose:
      "A clear-water pool just north of the old town, the canonical photo spot for Jade Dragon Snow Mountain reflected in still water. Arrive at first light when the air is still and the reflection is mirror-clean. Free entry if you have an old town maintenance ticket.",
    videoClips: [
      { timestamp: "01:50", videoTitle: "Reflection at Black Dragon Pool", creator: "Mira Lin" },
      { timestamp: "06:20", videoTitle: "Dawn at the Pool", creator: "Slow Travel China" },
    ],
  },
  {
    id: "mu-mansion",
    name: "Mu Family Mansion",
    nameZh: "木府",
    pinyin: "Mùfǔ",
    mapX: 305,
    mapY: 240,
    glyph: "木",
    labelLeft: true,
    prose:
      "The reconstructed compound of the Mu chieftains who ruled this corner of Yunnan for 470 years. Halls, courtyards, and a hilltop pagoda with old-town views. Less crowded than the rest of the old town — go in early morning, before the tour groups.",
    videoClips: [
      { timestamp: "03:25", videoTitle: "Inside the Mu Family Mansion", creator: "Roads & Kingdoms" },
      { timestamp: "09:15", videoTitle: "Naxi History at the Mansion", creator: "Far Corners" },
    ],
  },
  {
    id: "sifang-square",
    name: "Sifang Square",
    nameZh: "四方街",
    pinyin: "Sìfāng Jiē",
    mapX: 365,
    mapY: 245,
    glyph: "方",
    labelRight: true,
    prose:
      "The heart of the old town — flagstone square at the meeting of four streets. Naxi grandmothers in traditional dress dance here in late afternoons, mostly unselfconscious. The cafés on the perimeter are tourist-priced but the people-watching is free.",
    videoClips: [
      { timestamp: "04:10", videoTitle: "Naxi Dancing at Sifang Square", creator: "Mira Lin" },
      { timestamp: "07:40", videoTitle: "Sifang at Sundown", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "jade-dragon",
    name: "Jade Dragon Snow Mountain",
    nameZh: "玉龙雪山",
    pinyin: "Yùlóng Xuěshān",
    mapX: 410,
    mapY: 110,
    glyph: "雪",
    labelExtra: "+1 day",
    labelLeft: true,
    labelAbove: true,
    prose:
      "The 5,596 m peak that looms over Lijiang on clear days, accessible by cable car to a glacier viewpoint at 4,506 m. Bring oxygen — the dispenser cans at the base are not optional for most visitors. Go early; afternoon clouds cover the summit by 1 pm most days.",
    videoClips: [
      { timestamp: "02:45", videoTitle: "Up the Glacier Cable Car", creator: "Wild Life Asia" },
      { timestamp: "09:50", videoTitle: "Jade Dragon at Sunrise", creator: "Far Corners" },
    ],
  },
  {
    id: "tiger-leaping-gorge",
    name: "Tiger Leaping Gorge",
    nameZh: "虎跳峡",
    pinyin: "Hǔtiào Xiá",
    mapX: 175,
    mapY: 125,
    glyph: "峡",
    labelExtra: "+1–2 days",
    prose:
      "One of the deepest gorges in the world — 3,800 m from river to ridge. The high trail is a two-day trek with guesthouses along the way; the low trail is a half-day drive plus a steep descent to Tiger Leaping Stone. Trails close in heavy rain; check before going.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Walking the High Trail", creator: "Far Corners" },
      { timestamp: "11:20", videoTitle: "The Tiger Leaping Stone", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "baisha-old-town",
    name: "Baisha Old Town",
    nameZh: "白沙古镇",
    pinyin: "Báishā Gǔzhèn",
    mapX: 250,
    mapY: 175,
    glyph: "沙",
    labelLeft: true,
    prose:
      "The oldest of the Lijiang region's three towns — earlier than the famous old town, much quieter, mostly local Naxi residents. Murals from the Ming dynasty in the temple, embroidery workshops on the main street, and almost no tour groups.",
    videoClips: [
      { timestamp: "02:55", videoTitle: "An Afternoon in Baisha", creator: "Slow Travel China" },
      { timestamp: "08:30", videoTitle: "The Ming Murals", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "lashi-lake",
    name: "Lashi Lake",
    nameZh: "拉市海",
    pinyin: "Lāshìhǎi",
    mapX: 245,
    mapY: 295,
    glyph: "海",
    labelExtra: "+half day",
    labelLeft: true,
    prose:
      "A wetland lake 10 km west of Lijiang — horse riding, kayaks in summer, migratory birds in winter. Tea-horse caravan replicas trot tourists in circles, but escape onto the smaller paths and the views over the lake to the snow mountain are the real reward.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Horseback Around Lashi Lake", creator: "Wild Life Asia" },
      { timestamp: "07:00", videoTitle: "Winter Birds at Lashi", creator: "Mira Lin" },
    ],
  },
];
