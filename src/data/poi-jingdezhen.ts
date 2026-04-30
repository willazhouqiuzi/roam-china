import type { POI } from "./poi";

export const jingdezhenPOIs: POI[] = [
  {
    id: "tao-xichuan",
    name: "Tao Xichuan",
    nameZh: "陶溪川",
    pinyin: "Táo Xī Chuān",
    mapX: 340,
    mapY: 200,
    glyph: "陶",
    prose:
      "A converted state-owned porcelain factory, now the city's design hub — studios, galleries, a Saturday creator's market that draws students from across China.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Saturday at Tao Xichuan", creator: "Slow China" },
      { timestamp: "09:50", videoTitle: "Inside a Young Potter's Studio", creator: "Henry Sun" },
    ],
  },
  {
    id: "imperial-kiln-museum",
    name: "Imperial Kiln Museum",
    nameZh: "御窑博物馆",
    pinyin: "Yùyáo Bówùguǎn",
    mapX: 320,
    mapY: 220,
    glyph: "窑",
    labelLeft: true,
    prose:
      "Built over the foundations of the Ming-Qing imperial kilns. The brick-vault architecture echoes the kiln shapes; the collection includes shards from emperors' rejects.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "The Imperial Kiln Museum", creator: "Slow China" },
      { timestamp: "10:30", videoTitle: "Vault Architecture in Jingdezhen", creator: "Henry Sun" },
    ],
  },
  {
    id: "hutian-kiln",
    name: "Hutian Ancient Kiln Site",
    nameZh: "湖田古窑址",
    pinyin: "Hútián Gǔyáozhǐ",
    mapX: 380,
    mapY: 230,
    glyph: "湖",
    prose:
      "The medieval kilns that produced Yuan-dynasty blue-and-white for the world. Excavated dragon kilns, museum, and a path through the ruins.",
    videoClips: [
      { timestamp: "04:40", videoTitle: "Hutian Dragon Kiln", creator: "Slow China" },
      { timestamp: "10:10", videoTitle: "Yuan Blue-and-White at the Source", creator: "Henry Sun" },
    ],
  },
  {
    id: "sanbao-valley",
    name: "Sanbao Ceramic Valley",
    nameZh: "三宝陶艺村",
    pinyin: "Sānbǎo Táoyì Cūn",
    mapX: 320,
    mapY: 290,
    glyph: "宝",
    labelAbove: true,
    prose:
      "An artist village in the hills south of the city — old water-mills for clay, residency studios, and a famous restaurant that serves food in pottery seconds.",
    videoClips: [
      { timestamp: "05:30", videoTitle: "A Day at Sanbao Valley", creator: "Slow China" },
      { timestamp: "12:00", videoTitle: "Water-Mill Clay Processing", creator: "Henry Sun" },
    ],
  },
  {
    id: "ceramic-museum",
    name: "China Ceramic Museum",
    nameZh: "中国陶瓷博物馆",
    pinyin: "Zhōngguó Táocí Bówùguǎn",
    mapX: 380,
    mapY: 200,
    glyph: "瓷",
    prose:
      "A vast survey of Chinese porcelain from neolithic to now — Ming celadon, Qing famille rose, contemporary art porcelain. Free entry, half a day's worth.",
    videoClips: [
      { timestamp: "04:15", videoTitle: "Inside the Ceramic Museum", creator: "Henry Sun" },
      { timestamp: "10:45", videoTitle: "A Survey of Chinese Porcelain", creator: "Slow China" },
    ],
  },
  {
    id: "lao-chang",
    name: "Lao Chang Saturday Market",
    nameZh: "老厂周末市集",
    pinyin: "Lǎo Chǎng Zhōumò Shìjí",
    mapX: 340,
    mapY: 220,
    glyph: "厂",
    prose:
      "Inside Tao Xichuan: hundreds of student-run stalls every Saturday, with hand-thrown bowls, mugs, and statues at student prices. Get there early.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "The Saturday Market at Lao Chang", creator: "Slow China" },
      { timestamp: "08:30", videoTitle: "Bargaining for Bowls", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "yaoli",
    name: "Yaoli Ancient Town",
    nameZh: "瑶里古镇",
    pinyin: "Yáolǐ Gǔzhèn",
    mapX: 430,
    mapY: 130,
    glyph: "瑶",
    prose:
      "An hour and a half from Jingdezhen, a Ming-Qing village of stone-paved lanes and streamside houses — the kaolin clay that made the porcelain came from these hills.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Yaoli on a Misty Morning", creator: "Slow China" },
      { timestamp: "11:20", videoTitle: "Where the Clay Comes From", creator: "Henry Sun" },
    ],
  },
  {
    id: "old-factory",
    name: "Pottery Workshop Studios",
    nameZh: "雕塑瓷厂",
    pinyin: "Diāosù Cíchǎng",
    mapX: 300,
    mapY: 215,
    glyph: "工",
    labelLeft: true,
    prose:
      "A working-factory complex where you can drop in for a half-day pottery class. Most studios speak some English; the throwing wheels are old but solid.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "Throwing Pots in Jingdezhen", creator: "Studio Notes" },
      { timestamp: "10:00", videoTitle: "A Beginner's First Bowl", creator: "Slow China" },
    ],
  },
];
