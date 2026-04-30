import type { POI } from "./poi";

export const suzhouPOIs: POI[] = [
  {
    id: "humble-administrator",
    name: "Humble Administrator's Garden",
    nameZh: "拙政园",
    pinyin: "Zhuōzhèngyuán",
    mapX: 350,
    mapY: 180,
    glyph: "园",
    labelLeft: true,
    prose:
      "The largest of Suzhou's classical gardens (5.2 ha) and the textbook example of how 'borrowed scenery' works — every doorway frames a different painting. Built in the early Ming, redesigned at least three times since. Go in early morning before tour groups arrive at 9.",
    videoClips: [
      { timestamp: "02:25", videoTitle: "Inside the Humble Administrator's Garden", creator: "Henry Sun" },
      { timestamp: "08:50", videoTitle: "Why It's Called Humble", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "lingering-garden",
    name: "Lingering Garden",
    nameZh: "留园",
    pinyin: "Liúyuán",
    mapX: 250,
    mapY: 195,
    glyph: "留",
    labelLeft: true,
    labelAbove: true,
    prose:
      "More intimate than the Humble Administrator's, less photographed, sometimes considered the connoisseur's choice. Twelve scenic clusters in a single complex, all linked by a 700 m covered walkway. The cloud-shaped Taihu rocks in the central pool are the showpieces.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Lingering Garden Cloud Rocks", creator: "Mira Lin" },
      { timestamp: "07:15", videoTitle: "The Covered Walkway", creator: "Slow Travel China" },
    ],
  },
  {
    id: "master-of-nets",
    name: "Master of Nets Garden",
    nameZh: "网师园",
    pinyin: "Wǎngshīyuán",
    mapX: 380,
    mapY: 260,
    glyph: "网",
    labelRight: true,
    prose:
      "The smallest of Suzhou's UNESCO-listed gardens, and arguably the most perfectly composed — pavilions, pools, rockeries all in less than a hectare. Open at night in summer with classical Chinese music in the halls; book a week ahead.",
    videoClips: [
      { timestamp: "02:10", videoTitle: "Master of Nets at Night", creator: "Mira Lin" },
      { timestamp: "06:30", videoTitle: "A Tiny, Perfect Garden", creator: "Far Corners" },
    ],
  },
  {
    id: "tiger-hill",
    name: "Tiger Hill",
    nameZh: "虎丘",
    pinyin: "Hǔqiū",
    mapX: 230,
    mapY: 105,
    glyph: "虎",
    labelLeft: true,
    prose:
      "A 36 m hill topped with the leaning Yunyan Pagoda — built in 961, leaning since the 1600s. Su Dongpo wrote that visiting Suzhou without coming here was an unfinished trip. Pair with a wander through the surrounding rice fields and old village.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "The Leaning Pagoda Up Close", creator: "Henry Sun" },
      { timestamp: "09:20", videoTitle: "Around Tiger Hill Village", creator: "Slow Travel China" },
    ],
  },
  {
    id: "pingjiang-road",
    name: "Pingjiang Road",
    nameZh: "平江路",
    pinyin: "Píngjiāng Lù",
    mapX: 405,
    mapY: 195,
    glyph: "江",
    labelRight: true,
    prose:
      "A 1.6 km canal-side lane preserved with the original Song-dynasty street grid — stone bridges, white-walled tile-roofed houses, willows over the water. Most cafés are tourist-priced; the canal alone is the reason to come. Dawn is best.",
    videoClips: [
      { timestamp: "01:45", videoTitle: "Pingjiang Road Before Dawn", creator: "Mira Lin" },
      { timestamp: "10:00", videoTitle: "A Boat Down the Canal", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "silk-museum",
    name: "Suzhou Silk Museum",
    nameZh: "苏州丝绸博物馆",
    pinyin: "Sūzhōu Sīchóu Bówùguǎn",
    mapX: 320,
    mapY: 250,
    glyph: "丝",
    labelLeft: true,
    prose:
      "A surprisingly excellent state museum on the history of Chinese silk — silkworms in glass cages, looms running, a hall of imperial robes. Free entry, English captions, weekday afternoons are quiet. Skip the gift shop unless you want a 4,000 RMB scarf.",
    videoClips: [
      { timestamp: "04:25", videoTitle: "Inside the Suzhou Silk Museum", creator: "Far Corners" },
      { timestamp: "08:00", videoTitle: "Live Looms Running", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "hanshan-temple",
    name: "Hanshan Temple",
    nameZh: "寒山寺",
    pinyin: "Hánshānsì",
    mapX: 175,
    mapY: 245,
    glyph: "寒",
    labelLeft: true,
    prose:
      "The temple of Cold Mountain Bell — immortalised in the Tang poem every Chinese schoolchild memorises. Strike the bell yourself for 5 RMB. The temple itself is a heavy reconstruction; the experience is the bell, the canal beside it, and Maple Bridge nearby.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Striking the Cold Mountain Bell", creator: "Henry Sun" },
      { timestamp: "07:30", videoTitle: "The Tang Poem at Hanshan", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "tongli",
    name: "Tongli Water Town",
    nameZh: "同里古镇",
    pinyin: "Tónglǐ",
    mapX: 510,
    mapY: 320,
    glyph: "里",
    labelExtra: "+half day",
    prose:
      "A Ming-era water town 18 km southeast of Suzhou — fifteen canals, forty-nine bridges, more than half the houses still original. Touristy in mid-day, almost empty after 5 pm when the day-trippers leave. Stay overnight at a courtyard inn for the silent canals at dawn.",
    videoClips: [
      { timestamp: "03:35", videoTitle: "Tongli at Dawn", creator: "Slow Travel China" },
      { timestamp: "10:40", videoTitle: "The Canals After Dark", creator: "Mira Lin" },
    ],
  },
];
