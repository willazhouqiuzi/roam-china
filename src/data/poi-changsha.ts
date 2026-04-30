import type { POI } from "./poi";

export const changshaPOIs: POI[] = [
  {
    id: "wenheyou",
    name: "Wenheyou",
    nameZh: "文和友",
    pinyin: "Wén Hé Yǒu",
    mapX: 380,
    mapY: 220,
    glyph: "友",
    prose:
      "A seven-story food complex built like a 1980s Changsha tenement — neon, smoky alleyways, every Hunan dish you've heard of. Lunch wait is two hours; come at 9 PM.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Inside Wenheyou", creator: "The Hot Plate" },
      { timestamp: "09:15", videoTitle: "Stinky Tofu at Midnight", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "yuelu-mountain",
    name: "Yuelu Mountain",
    nameZh: "岳麓山",
    pinyin: "Yuèlù Shān",
    mapX: 240,
    mapY: 220,
    glyph: "麓",
    labelLeft: true,
    prose:
      "A green hill on the west bank of the Xiang, with Han-era pavilions, autumn red leaves, and the thousand-year Yuelu Academy at its foot.",
    videoClips: [
      { timestamp: "04:20", videoTitle: "Yuelu in Autumn Red", creator: "Slow China" },
      { timestamp: "10:40", videoTitle: "The Climb to Aiwan Pavilion", creator: "Henry Sun" },
    ],
  },
  {
    id: "orange-isle",
    name: "Orange Isle",
    nameZh: "橘子洲",
    pinyin: "Júzizhōu",
    mapX: 310,
    mapY: 220,
    glyph: "橘",
    labelAbove: true,
    prose:
      "A long thin island in the middle of the Xiang River — Mao's giant stone head at the south tip, fireworks every Saturday night.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Saturday Fireworks at Orange Isle", creator: "Slow China" },
      { timestamp: "09:50", videoTitle: "Mao's Stone Head", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "shaoshan",
    name: "Shaoshan (Mao's Hometown)",
    nameZh: "韶山",
    pinyin: "Sháoshān",
    mapX: 160,
    mapY: 295,
    glyph: "韶",
    labelAbove: true,
    prose:
      "An hour by train from Changsha, the village Mao Zedong was born in. His childhood house, the family pond, a shrine-like museum — pilgrimage if you're curious.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "A Day Trip to Shaoshan", creator: "Henry Sun" },
      { timestamp: "11:10", videoTitle: "Mao's Childhood Home", creator: "Slow China" },
    ],
  },
  {
    id: "pozi-street",
    name: "Pozi Street",
    nameZh: "坡子街",
    pinyin: "Pōzi Jiē",
    mapX: 380,
    mapY: 200,
    glyph: "坡",
    prose:
      "Changsha's other food street — narrower than Wenheyou, more local. Sister-in-law's stinky tofu, crayfish in red oil, sticky-rice ice cream.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Pozi Street After Dark", creator: "The Hot Plate" },
      { timestamp: "08:45", videoTitle: "Crayfish in Red Oil", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "hunan-museum",
    name: "Hunan Provincial Museum",
    nameZh: "湖南省博物馆",
    pinyin: "Húnán Shěng Bówùguǎn",
    mapX: 390,
    mapY: 175,
    glyph: "博",
    prose:
      "Home to the Mawangdui finds — a 2,100-year-old mummy preserved with skin still elastic, lacquerware so glossy it looks new. Free, timed-ticket entry.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "The Mawangdui Mummy", creator: "Slow China" },
      { timestamp: "11:00", videoTitle: "Han Lacquer at the Hunan Museum", creator: "Henry Sun" },
    ],
  },
  {
    id: "yuelu-academy",
    name: "Yuelu Academy",
    nameZh: "岳麓书院",
    pinyin: "Yuèlù Shūyuàn",
    mapX: 260,
    mapY: 230,
    glyph: "院",
    prose:
      "One of China's four great Confucian academies, founded in 976. Calligraphy halls, plum trees, study rooms — now part of Hunan University.",
    videoClips: [
      { timestamp: "03:50", videoTitle: "Inside Yuelu Academy", creator: "Henry Sun" },
      { timestamp: "09:30", videoTitle: "Confucian Calligraphy Halls", creator: "Slow China" },
    ],
  },
  {
    id: "tianxin-pavilion",
    name: "Tianxin Pavilion",
    nameZh: "天心阁",
    pinyin: "Tiānxīn Gé",
    mapX: 390,
    mapY: 240,
    glyph: "心",
    labelAbove: true,
    prose:
      "The last surviving section of Changsha's old city wall, with a triple-eaved pavilion on top. Locals come to fly kites; the views over the city are best at dusk.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Sunset at Tianxin Pavilion", creator: "Slow China" },
      { timestamp: "10:00", videoTitle: "Walking Changsha's Old Wall", creator: "Henry Sun" },
    ],
  },
];
