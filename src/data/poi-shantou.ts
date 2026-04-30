import type { POI } from "./poi";

export const shantouPOIs: POI[] = [
  {
    id: "xiaogongyuan",
    name: "Xiaogongyuan Old Town",
    nameZh: "小公园",
    pinyin: "Xiǎogōngyuán",
    mapX: 300,
    mapY: 220,
    glyph: "园",
    labelLeft: true,
    prose:
      "A fan-shaped colonial-era quarter with arcade-style shophouses, slowly being restored. The 1932 Yongping Hotel is the centerpiece; come at dusk when the lights start.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Walking Xiaogongyuan", creator: "Slow China" },
      { timestamp: "09:00", videoTitle: "Inside the Yongping Hotel", creator: "Henry Sun" },
    ],
  },
  {
    id: "babanyi-beef",
    name: "Babanyi Beef Hotpot",
    nameZh: "八合里牛肉火锅",
    pinyin: "Bāhélǐ Niúròu Huǒguō",
    mapX: 350,
    mapY: 230,
    glyph: "牛",
    prose:
      "The famous beef hotpot chain that started in Shantou — clear soup, slices labeled by which muscle they came from, dipped for ten seconds and eaten fast.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "How Shantou Eats Beef Hotpot", creator: "The Hot Plate" },
      { timestamp: "08:00", videoTitle: "Twelve Cuts of Beef", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "nanao-island",
    name: "Nan'ao Island",
    nameZh: "南澳岛",
    pinyin: "Nán'ào Dǎo",
    mapX: 525,
    mapY: 280,
    glyph: "澳",
    labelLeft: true,
    prose:
      "Guangdong's only inhabited offshore island, connected by a 9-km bridge. Quiet beaches, seafood off the boat, and a wind-farm-spotted ridge at the top.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "A Day on Nan'ao Island", creator: "Slow China" },
      { timestamp: "10:30", videoTitle: "Crossing the Sea Bridge", creator: "Henry Sun" },
    ],
  },
  {
    id: "chen-cihong",
    name: "Chen Cihong Mansion",
    nameZh: "陈慈黉故居",
    pinyin: "Chén Cíhóng Gùjū",
    mapX: 220,
    mapY: 200,
    glyph: "宅",
    labelAbove: true,
    prose:
      "An overseas-Chinese magnate's 1910 estate — 506 rooms across three connected mansions, where Hokkien-style courtyards meet Italian tile work.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "Inside Chen Cihong Mansion", creator: "Henry Sun" },
      { timestamp: "10:00", videoTitle: "The Hybrid Architecture", creator: "Slow China" },
    ],
  },
  {
    id: "queshi-park",
    name: "Queshi Scenic Area",
    nameZh: "礐石风景区",
    pinyin: "Quèshí Fēngjǐngqū",
    mapX: 340,
    mapY: 280,
    glyph: "石",
    labelAbove: true,
    prose:
      "Granite hills and old shrines on the south side of Shantou Bay — the cable car up gives a view of the whole city, harbor, and Nan'ao bridge.",
    videoClips: [
      { timestamp: "03:50", videoTitle: "Queshi Cable Car View", creator: "Henry Sun" },
      { timestamp: "09:30", videoTitle: "Granite Shrines on the Hill", creator: "Slow China" },
    ],
  },
  {
    id: "shantou-beach",
    name: "Shantou Beach",
    nameZh: "汕头海滨",
    pinyin: "Shàntóu Hǎibīn",
    mapX: 350,
    mapY: 320,
    glyph: "海",
    prose:
      "A long working harbor turning into a sea-side promenade — fishing boats, evening kite-flyers, and pufferfish in the markets behind.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Shantou Harbor at Sunset", creator: "Slow China" },
      { timestamp: "08:20", videoTitle: "The Fish Market After Hours", creator: "The Hot Plate" },
    ],
  },
  {
    id: "lao-ma-gong",
    name: "Lao Ma Gong Temple",
    nameZh: "老妈宫",
    pinyin: "Lǎomā Gōng",
    mapX: 305,
    mapY: 200,
    glyph: "庙",
    labelLeft: true,
    prose:
      "The oldest temple in Shantou — a Mazu (sea-goddess) shrine where every fishing crew used to stop before going out. Locals still light incense before long trips.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Mazu Worship at Lao Ma Gong", creator: "Henry Sun" },
      { timestamp: "09:00", videoTitle: "An Old Sea Shrine", creator: "Slow China" },
    ],
  },
  {
    id: "fishball-noodles",
    name: "Fishball Noodles Street",
    nameZh: "鱼丸粿条",
    pinyin: "Yúwán Guǒtiáo",
    mapX: 320,
    mapY: 240,
    glyph: "丸",
    labelAbove: true,
    prose:
      "Hand-pounded fishball noodles in clear broth, with rice-flour ribbons soft enough to slurp. Most shops in the old town serve a version; ask for the chewiest balls.",
    videoClips: [
      { timestamp: "02:40", videoTitle: "Hand-Pounded Fishballs", creator: "The Hot Plate" },
      { timestamp: "07:50", videoTitle: "A Bowl Before Lunch", creator: "Yuxi Travels" },
    ],
  },
];
