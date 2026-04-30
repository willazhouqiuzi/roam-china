import type { POI } from "./poi";

export const chaozhouPOIs: POI[] = [
  {
    id: "kaiyuan-temple",
    name: "Kaiyuan Temple",
    nameZh: "开元寺",
    pinyin: "Kāiyuán Sì",
    mapX: 340,
    mapY: 200,
    glyph: "元",
    prose:
      "A Tang-dynasty Buddhist temple at the heart of the old city — courtyards of tea-tree, an iron Tang stupa, and pilgrims who have come every week for forty years.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Inside Kaiyuan Temple", creator: "Slow China" },
      { timestamp: "09:00", videoTitle: "The Iron Stupa", creator: "Henry Sun" },
    ],
  },
  {
    id: "guangji-bridge",
    name: "Guangji Bridge",
    nameZh: "广济桥",
    pinyin: "Guǎngjì Qiáo",
    mapX: 390,
    mapY: 220,
    glyph: "桥",
    prose:
      "A 1,000-year-old bridge over the Han River — half stone arches, half a movable section of pontoon boats that gets disassembled at evening. Lit gold at night.",
    videoClips: [
      { timestamp: "04:15", videoTitle: "Guangji Bridge at Sunset", creator: "Slow China" },
      { timestamp: "10:30", videoTitle: "The Pontoon Section Opens", creator: "Henry Sun" },
    ],
  },
  {
    id: "paifang-street",
    name: "Paifang Street",
    nameZh: "牌坊街",
    pinyin: "Páifāng Jiē",
    mapX: 320,
    mapY: 230,
    glyph: "坊",
    labelLeft: true,
    prose:
      "Twenty-three reconstructed Ming-Qing memorial arches over a stone-paved walking street — beef noodle stalls, tea shops, and the city's main pulse after 6 PM.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "An Evening on Paifang Street", creator: "Slow China" },
      { timestamp: "08:15", videoTitle: "Beef Noodles Under the Arches", creator: "The Hot Plate" },
    ],
  },
  {
    id: "han-river",
    name: "Han River",
    nameZh: "韩江",
    pinyin: "Hán Jiāng",
    mapX: 430,
    mapY: 200,
    glyph: "韩",
    prose:
      "The river that gave Chaozhou its food and trade — named for Han Yu, the Tang-dynasty exile who taught locals to farm. Walk the bund at sunset.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Han River Bund at Dusk", creator: "Henry Sun" },
      { timestamp: "07:30", videoTitle: "Old River Walls of Chaozhou", creator: "Slow China" },
    ],
  },
  {
    id: "phoenix-mountain",
    name: "Phoenix Mountain",
    nameZh: "凤凰山",
    pinyin: "Fènghuáng Shān",
    mapX: 200,
    mapY: 130,
    glyph: "凤",
    prose:
      "The hills outside Chaozhou where Phoenix Single-Bush oolong is grown — 600-year-old tea trees, terraces above 1,000 m, and gongfu tea brewed on the spot.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "An Old Tea Tree on Phoenix Mountain", creator: "Slow China" },
      { timestamp: "11:30", videoTitle: "Gongfu Tea on the Slope", creator: "Henry Sun" },
    ],
  },
  {
    id: "gongfu-tea",
    name: "Gongfu Tea House",
    nameZh: "潮州工夫茶",
    pinyin: "Cháozhōu Gōngfu Chá",
    mapX: 320,
    mapY: 250,
    glyph: "茶",
    labelLeft: true,
    prose:
      "Gongfu tea was perfected here — small clay pots, three rinses before the first cup, leaves rebrewed eight times. Any old tea house off Paifang Street will do.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Inside a Chaozhou Tea House", creator: "Slow China" },
      { timestamp: "09:50", videoTitle: "The Eight-Brew Method", creator: "Henry Sun" },
    ],
  },
  {
    id: "city-wall",
    name: "Ancient City Wall",
    nameZh: "潮州古城墙",
    pinyin: "Cháozhōu Gǔchéngqiáng",
    mapX: 305,
    mapY: 195,
    glyph: "墙",
    labelLeft: true,
    labelAbove: true,
    prose:
      "Ming-era city walls still ringing the old quarter, with seven surviving gates. Walkable in 90 minutes, with the river side giving the best views.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "A Walk on the Chaozhou Wall", creator: "Henry Sun" },
      { timestamp: "10:30", videoTitle: "Seven Gates of the Old Town", creator: "Slow China" },
    ],
  },
  {
    id: "chaozhou-opera",
    name: "Chaozhou Opera",
    nameZh: "潮剧",
    pinyin: "Cháojù",
    mapX: 350,
    mapY: 250,
    glyph: "剧",
    prose:
      "A regional opera form 600 years old — high-pitched arias, gongs and drums, plays performed in temple courtyards on festival nights. Ask your hotel for the schedule.",
    videoClips: [
      { timestamp: "05:15", videoTitle: "A Chaozhou Opera Night", creator: "Slow China" },
      { timestamp: "12:00", videoTitle: "Gongs, Drums, and an Aria", creator: "Henry Sun" },
    ],
  },
];
