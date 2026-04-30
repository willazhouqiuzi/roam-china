import type { POI } from "./poi";

export const xinjiangPOIs: POI[] = [
  {
    id: "tianshan-tianchi",
    name: "Tianshan Heavenly Lake",
    nameZh: "天山天池",
    pinyin: "Tiānshān Tiānchí",
    mapX: 410,
    mapY: 130,
    glyph: "天",
    labelLeft: true,
    prose:
      "An alpine lake at 1,900 m, ringed by spruce and snow peaks. Two hours' drive from Urumqi — go in summer for the green meadows, autumn for the gold larches.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Tianshan in Late Summer", creator: "Far Out Travel" },
      { timestamp: "08:15", videoTitle: "The Drive Up From Urumqi", creator: "WildlifeCN" },
    ],
  },
  {
    id: "urumqi-bazaar",
    name: "Urumqi Grand Bazaar",
    nameZh: "乌鲁木齐大巴扎",
    pinyin: "Wūlǔmùqí Dà Bāzhá",
    mapX: 380,
    mapY: 165,
    glyph: "巴",
    prose:
      "Xinjiang's biggest covered bazaar — Uyghur silk, dried fruits, hand-knotted carpets, and lamb skewers grilled in the open. Touristy but the food upstairs is real.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Inside Urumqi's Grand Bazaar", creator: "Ulan Travels" },
      { timestamp: "11:20", videoTitle: "Lamb Skewers and Naan", creator: "The Hot Plate" },
    ],
  },
  {
    id: "kanas-lake",
    name: "Kanas Lake",
    nameZh: "喀纳斯湖",
    pinyin: "Kānàsī Hú",
    mapX: 305,
    mapY: 80,
    glyph: "湖",
    prose:
      "A turquoise alpine lake on the Mongolian-Russian-Kazakh border, surrounded by Tuvan villages. The autumn colors here are some of China's most photographed.",
    videoClips: [
      { timestamp: "04:10", videoTitle: "Autumn at Kanas", creator: "Slow China" },
      { timestamp: "09:45", videoTitle: "A Tuvan Village Morning", creator: "Far Out Travel" },
    ],
  },
  {
    id: "turpan-grape",
    name: "Turpan Grape Valley",
    nameZh: "吐鲁番葡萄沟",
    pinyin: "Tǔlǔfān Pútaogōu",
    mapX: 490,
    mapY: 175,
    glyph: "葡",
    labelLeft: true,
    prose:
      "An oasis valley shaded entirely by grape trellises, in the second-lowest depression on Earth. The grapes are dried into raisins right where they grow.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Grape Valley in Harvest", creator: "WildlifeCN" },
      { timestamp: "07:30", videoTitle: "Karez Underground Channels", creator: "Silk Road Stories" },
    ],
  },
  {
    id: "flaming-mountains",
    name: "Flaming Mountains",
    nameZh: "火焰山",
    pinyin: "Huǒyàn Shān",
    mapX: 525,
    mapY: 200,
    glyph: "焰",
    labelAbove: true,
    prose:
      "Red sandstone hills near Turpan that turn orange-flame at sunset. The hottest place in China — surface temperatures hit 80°C in summer.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Flaming Mountains at Sundown", creator: "Far Out Travel" },
      { timestamp: "08:50", videoTitle: "Journey to the West, the Real Place", creator: "Henry Sun" },
    ],
  },
  {
    id: "kashgar-old-town",
    name: "Kashgar Old Town",
    nameZh: "喀什古城",
    pinyin: "Kāshí Gǔchéng",
    mapX: 130,
    mapY: 270,
    glyph: "城",
    labelAbove: true,
    prose:
      "China's westernmost city, closer to Baghdad than Beijing. Mud-brick alleys, copper-smithing courtyards, and a Uyghur-language bookshop on every other corner.",
    videoClips: [
      { timestamp: "04:25", videoTitle: "Walking Kashgar's Old Quarters", creator: "Ulan Travels" },
      { timestamp: "10:00", videoTitle: "A Day with a Coppersmith", creator: "Slow China" },
    ],
  },
  {
    id: "kashgar-bazaar",
    name: "Kashgar Sunday Bazaar",
    nameZh: "喀什大巴扎",
    pinyin: "Kāshí Dà Bāzhá",
    mapX: 165,
    mapY: 290,
    glyph: "市",
    prose:
      "The Sunday livestock market — sheep, donkeys, the occasional camel, sold the way they have been for centuries. Outside the city, get there early.",
    videoClips: [
      { timestamp: "05:15", videoTitle: "Kashgar's Sunday Animal Market", creator: "Roads & Kingdoms" },
      { timestamp: "12:30", videoTitle: "Bargaining for a Donkey", creator: "Henry Sun" },
    ],
  },
  {
    id: "karakul-lake",
    name: "Karakul Lake",
    nameZh: "喀拉库勒湖",
    pinyin: "Kālākùlè Hú",
    mapX: 130,
    mapY: 330,
    glyph: "拉",
    labelAbove: true,
    prose:
      "A turquoise high-altitude lake (3,600 m) on the Karakoram Highway, with Muztagh Ata's snow cone reflected on still days. Kyrgyz yurts on the shore for overnight stays.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Sunset Reflections at Karakul", creator: "Far Out Travel" },
      { timestamp: "09:00", videoTitle: "A Night in a Kyrgyz Yurt", creator: "Slow China" },
    ],
  },
];
