import type { POI } from "./poi";

export const daliPOIs: POI[] = [
  {
    id: "old-town",
    name: "Dali Old Town",
    nameZh: "大理古城",
    pinyin: "Dàlǐ Gǔchéng",
    mapX: 270,
    mapY: 220,
    glyph: "古",
    labelLeft: true,
    prose:
      "A walled Bai-minority town between Cangshan Mountain and Erhai Lake — much sleepier than Lijiang, more honest. Foreigner Street (Yangren Jie) is touristy at lunchtime; the back alleys are still local. Stay a couple of nights inside the walls.",
    videoClips: [
      { timestamp: "02:20", videoTitle: "A Walk Through Dali Old Town", creator: "Mira Lin" },
      { timestamp: "08:10", videoTitle: "Foreigner Street After Hours", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "erhai-lake",
    name: "Erhai Lake",
    nameZh: "洱海",
    pinyin: "Ěrhǎi",
    mapX: 430,
    mapY: 220,
    glyph: "海",
    prose:
      "The 250 km² ear-shaped lake east of Dali, ringed by a paved bike path that takes a leisurely two days to circumnavigate. Sunrise from the eastern shore at Shuanglang is the view that put Dali on the wallpaper of every Chinese laptop.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Cycling Around Erhai", creator: "Slow Travel China" },
      { timestamp: "10:45", videoTitle: "Sunrise from Shuanglang", creator: "Mira Lin" },
    ],
  },
  {
    id: "three-pagodas",
    name: "Three Pagodas",
    nameZh: "崇圣寺三塔",
    pinyin: "Chóngshèngsì Sāntǎ",
    mapX: 245,
    mapY: 175,
    glyph: "塔",
    labelLeft: true,
    prose:
      "Three Tang dynasty pagodas at the foot of Cangshan, the older central one 9th-century. The complex behind has been heavily reconstructed but the pagodas are original. Best photo from the reflecting pool, north side, mid-afternoon when the sun is behind the mountain.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "The Three Pagodas Reflection", creator: "Mira Lin" },
      { timestamp: "07:30", videoTitle: "Inside Chongsheng Temple", creator: "Far Corners" },
    ],
  },
  {
    id: "cangshan",
    name: "Cangshan Mountain",
    nameZh: "苍山",
    pinyin: "Cāngshān",
    mapX: 175,
    mapY: 195,
    glyph: "苍",
    labelLeft: true,
    prose:
      "The 19-peak range that walls off Dali from the west — chair lifts up to a horizontal trail along the contour, eight hours along the spine if you do the full loop. Snow-capped from December to April. Bring layers; it's 10°C cooler at the top.",
    videoClips: [
      { timestamp: "04:15", videoTitle: "The Cangshan Spine Trail", creator: "Wild Life Asia" },
      { timestamp: "09:55", videoTitle: "Up the Cable Car", creator: "Far Corners" },
    ],
  },
  {
    id: "shuanglang",
    name: "Shuanglang",
    nameZh: "双廊",
    pinyin: "Shuāngláng",
    mapX: 510,
    mapY: 145,
    glyph: "廊",
    labelExtra: "+half day",
    prose:
      "A small lakeside village on Erhai's east shore, packed with boutique guesthouses and over-water restaurants. Get there by ferry from Dali for the lake view, or by car along the eastern road for the rural Bai villages. Sunsets here look across the lake to Cangshan.",
    videoClips: [
      { timestamp: "03:10", videoTitle: "An Evening in Shuanglang", creator: "Slow Travel China" },
      { timestamp: "08:40", videoTitle: "Ferry Across Erhai", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "xizhou",
    name: "Xizhou",
    nameZh: "喜洲",
    pinyin: "Xǐzhōu",
    mapX: 305,
    mapY: 130,
    glyph: "洲",
    labelExtra: "+half day",
    prose:
      "A traditional Bai-architecture town 18 km north of Dali, three-courtyard houses with carved wooden screens. The morning market is real, not staged. Try xizhou baba — the savoury flatbread cooked over coals at the street corner.",
    videoClips: [
      { timestamp: "02:35", videoTitle: "Xizhou's Bai Houses", creator: "Roads & Kingdoms" },
      { timestamp: "06:50", videoTitle: "Baba at the Corner Stall", creator: "The Hot Plate" },
    ],
  },
  {
    id: "butterfly-spring",
    name: "Butterfly Spring",
    nameZh: "蝴蝶泉",
    pinyin: "Húdiéquán",
    mapX: 345,
    mapY: 100,
    glyph: "蝶",
    labelExtra: "+half day",
    labelRight: true,
    prose:
      "A small pool fed by a hot spring at the foot of Cangshan, ringed by old trees. The Bai legend says butterflies gather here in early summer. Whether or not they do — and they sometimes do — the walk through the cool forest is worth the detour.",
    videoClips: [
      { timestamp: "01:55", videoTitle: "Butterfly Spring in May", creator: "Wild Life Asia" },
      { timestamp: "05:30", videoTitle: "The Bai Legend", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "east-coast-cycling",
    name: "Erhai East Coast",
    nameZh: "洱海东岸",
    pinyin: "Ěrhǎi Dōng'àn",
    mapX: 525,
    mapY: 245,
    glyph: "骑",
    labelExtra: "+1 day",
    prose:
      "The 50 km bike path along the eastern shore — quieter than the western road, more Bai farmhouses, fewer cafés, better lake views. Rent at any old-town shop, leave at sunrise, end at Shuanglang for lunch. Buses bring the bike back.",
    videoClips: [
      { timestamp: "04:50", videoTitle: "The East Coast Bike Loop", creator: "Slow Travel China" },
      { timestamp: "11:00", videoTitle: "Sunrise on the East Shore", creator: "Mira Lin" },
    ],
  },
];
