import type { POI } from "./poi";

export const wuhanPOIs: POI[] = [
  {
    id: "yellow-crane-tower",
    name: "Yellow Crane Tower",
    nameZh: "黄鹤楼",
    pinyin: "Huánghè Lóu",
    mapX: 350,
    mapY: 240,
    glyph: "鹤",
    prose:
      "Wuhan's most-painted landmark — a five-story tower above the Yangtze, rebuilt in the 1980s on the spot it has occupied (in spirit) since the 3rd century.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Sunrise at Yellow Crane", creator: "Henry Sun" },
      { timestamp: "08:20", videoTitle: "The Tower Across the Yangtze", creator: "Slow China" },
    ],
  },
  {
    id: "east-lake",
    name: "East Lake",
    nameZh: "东湖",
    pinyin: "Dōnghú",
    mapX: 440,
    mapY: 215,
    glyph: "湖",
    prose:
      "China's largest urban lake — 33 km², six times the area of West Lake. Cycling paths, lotus ponds in summer, plum blossoms in February.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Cycling East Lake", creator: "Slow Travel China" },
      { timestamp: "09:00", videoTitle: "Lotus Blooms in Summer", creator: "Spring China" },
    ],
  },
  {
    id: "wuhan-uni",
    name: "Wuhan University",
    nameZh: "武汉大学",
    pinyin: "Wǔhàn Dàxué",
    mapX: 450,
    mapY: 195,
    glyph: "学",
    labelAbove: true,
    prose:
      "China's most beautiful campus — green-tiled buildings climbing Luojia Hill, a thousand cherry trees blooming for two weeks in late March.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Cherry Blossoms at Wuhan University", creator: "Spring China" },
      { timestamp: "10:30", videoTitle: "The Old Library Hall", creator: "Henry Sun" },
    ],
  },
  {
    id: "yangtze-bridge",
    name: "First Yangtze River Bridge",
    nameZh: "武汉长江大桥",
    pinyin: "Wǔhàn Chángjiāng Dàqiáo",
    mapX: 340,
    mapY: 265,
    glyph: "桥",
    labelAbove: true,
    prose:
      "China's first bridge across the Yangtze (1957), still in daily use. Walk it for the views; the lower deck carries trains, the upper, cars and people.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Walking the 1957 Bridge", creator: "Slow China" },
      { timestamp: "08:50", videoTitle: "Sunset Over the Yangtze", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "tanhualin",
    name: "Tanhualin",
    nameZh: "昙华林",
    pinyin: "Tánhuālín",
    mapX: 370,
    mapY: 200,
    glyph: "林",
    prose:
      "Wuhan's bohemian quarter — early-20th-century missionary buildings turned into cafes, vintage shops, and small galleries. Best on a slow weekend afternoon.",
    videoClips: [
      { timestamp: "03:50", videoTitle: "A Saturday in Tanhualin", creator: "Slow China" },
      { timestamp: "09:30", videoTitle: "Wuhan's Coffee Quarter", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "hubei-museum",
    name: "Hubei Provincial Museum",
    nameZh: "湖北省博物馆",
    pinyin: "Húběi Shěng Bówùguǎn",
    mapX: 430,
    mapY: 210,
    glyph: "钟",
    prose:
      "Home to the Marquis Yi of Zeng's bronze bells — 65 perfectly tuned bells from 433 BC, still playable. The museum still rings them on schedule.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "The Bianzhong Bells of Zeng", creator: "Slow China" },
      { timestamp: "11:40", videoTitle: "Inside the Bronze Hall", creator: "Henry Sun" },
    ],
  },
  {
    id: "hubu-alley",
    name: "Hubu Alley",
    nameZh: "户部巷",
    pinyin: "Hùbù Xiàng",
    mapX: 370,
    mapY: 220,
    glyph: "巷",
    prose:
      "Wuhan's breakfast street — hot-dry noodles, doupi, beef-wontons, three brands of soy milk. Get there by 8 AM or it's just lunch.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Wuhan Breakfast at Hubu Alley", creator: "The Hot Plate" },
      { timestamp: "07:45", videoTitle: "Hot-Dry Noodles, Step by Step", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "guiyuan-temple",
    name: "Guiyuan Temple",
    nameZh: "归元寺",
    pinyin: "Guīyuán Sì",
    mapX: 290,
    mapY: 240,
    glyph: "寺",
    labelLeft: true,
    prose:
      "A 17th-century Chan Buddhist temple on Hanyang side, famous for the Hall of 500 Arhats — every face different, painted gold, a count-yourself-out tradition at New Year.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "The Hall of 500 Arhats", creator: "Henry Sun" },
      { timestamp: "10:00", videoTitle: "Counting Your Arhat", creator: "Slow China" },
    ],
  },
];
