import type { POI } from "./poi";

export const harbinPOIs: POI[] = [
  {
    id: "saint-sophia",
    name: "Saint Sophia Cathedral",
    nameZh: "圣索菲亚大教堂",
    pinyin: "Shèng Suǒfēiyà Dàjiàotáng",
    mapX: 340,
    mapY: 215,
    glyph: "教",
    labelAbove: true,
    prose:
      "A 1907 Russian-Byzantine cathedral with a 53 m green onion dome, no longer a church but a museum of old Harbin. The plaza around it fills with pigeons and weddings on weekends. Beautiful at any time, but most photogenic at dusk in winter when snow stacks on the dome.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Saint Sophia in Snow", creator: "Henry Sun" },
      { timestamp: "08:00", videoTitle: "Inside the Cathedral", creator: "Far Corners" },
    ],
  },
  {
    id: "central-avenue",
    name: "Central Avenue",
    nameZh: "中央大街",
    pinyin: "Zhōngyāng Dàjiē",
    mapX: 305,
    mapY: 230,
    glyph: "街",
    labelLeft: true,
    prose:
      "1.5 km of Russian, Byzantine, and Renaissance facades on a cobbled pedestrian street — built between 1898 and the 1930s. Modern Harbinites eat ice cream here in -25°C weather (yes, really). Madieer's ice cream stick is the local rite of passage.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Central Avenue at -25°C", creator: "Yuxi Travels" },
      { timestamp: "09:30", videoTitle: "Madieer's Ice Cream Stick", creator: "The Hot Plate" },
    ],
  },
  {
    id: "ice-snow-world",
    name: "Ice and Snow World",
    nameZh: "冰雪大世界",
    pinyin: "Bīngxuě Dà Shìjiè",
    mapX: 460,
    mapY: 130,
    glyph: "冰",
    labelExtra: "Jan only",
    prose:
      "An entire city carved out of ice every December and January — palaces, slides, towers, all lit from within with coloured LEDs. Open 11 am to 9 pm; the lighting starts at 5 pm. Dress for -30°C and bring spare batteries; phones die fast in this cold.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Inside Ice and Snow World", creator: "Far Corners" },
      { timestamp: "11:20", videoTitle: "The Ice Slide at Night", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "sun-island",
    name: "Sun Island",
    nameZh: "太阳岛",
    pinyin: "Tàiyángdǎo",
    mapX: 340,
    mapY: 95,
    glyph: "岛",
    labelAbove: true,
    prose:
      "An island park across the Songhua, host to the Snow Sculpture Festival each January — 200+ ice sculptures from international competition. Cable car or foot from the south bank in winter. Quiet and green in summer if you visit then; few tourists.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Snow Sculptures on Sun Island", creator: "Wild Life Asia" },
      { timestamp: "10:00", videoTitle: "Crossing the Frozen Songhua", creator: "Far Corners" },
    ],
  },
  {
    id: "songhua-river",
    name: "Songhua River",
    nameZh: "松花江",
    pinyin: "Sōnghuā Jiāng",
    mapX: 335,
    mapY: 165,
    glyph: "江",
    labelLeft: true,
    labelAbove: true,
    prose:
      "The river that freezes solid for four months each year — Harbiners drive cars on it, set up ice fishing villages, and skate from bank to bank. Summer is the inverse: river cruises, swimming pools, willow promenades. The bank in front of Stalin Park is the canonical spot.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Songhua in February", creator: "Henry Sun" },
      { timestamp: "08:45", videoTitle: "Ice Fishing on the River", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "harbin-beer",
    name: "Harbin Beer Factory",
    nameZh: "哈尔滨啤酒厂",
    pinyin: "Hā'ěrbīn Píjiǔ Chǎng",
    mapX: 215,
    mapY: 250,
    glyph: "啤",
    labelLeft: true,
    prose:
      "China's oldest brewery, founded by a Polish émigré in 1900 — predates Tsingtao by three years. The on-site museum walks through the brewery's Russian-empire roots and the cellar where the original copper kettles still sit. Tours include a tasting; the unfiltered draft is the prize.",
    videoClips: [
      { timestamp: "04:25", videoTitle: "Inside the Harbin Beer Factory", creator: "The Hot Plate" },
      { timestamp: "10:30", videoTitle: "Tasting the Unfiltered Draft", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "volga-manor",
    name: "Volga Manor",
    nameZh: "伏尔加庄园",
    pinyin: "Fú'ěrjiā Zhuāngyuán",
    mapX: 545,
    mapY: 255,
    glyph: "庄",
    labelExtra: "+half day",
    prose:
      "A 600,000 m² Russian-themed park east of the city — cathedrals, manor houses, lakes, all built in the 2000s for nostalgia. Touristy and unironic. In winter, the snow makes it look like a Russian fairy tale; in summer, it's a wedding venue.",
    videoClips: [
      { timestamp: "03:10", videoTitle: "Volga Manor in Snow", creator: "Yuxi Travels" },
      { timestamp: "09:00", videoTitle: "The Russian Cathedrals", creator: "Far Corners" },
    ],
  },
  {
    id: "tiger-park",
    name: "Siberian Tiger Park",
    nameZh: "东北虎林园",
    pinyin: "Dōngběi Hǔ Línyuán",
    mapX: 195,
    mapY: 130,
    glyph: "虎",
    labelExtra: "+half day",
    labelLeft: true,
    prose:
      "A breeding centre for Amur (Siberian) tigers — over 1,000 of them — that you tour in a wire-caged bus. Ethically dubious, undeniably striking. The tigers in the snow are the photo. Avoid the staged feeding shows; opt for the regular drive-through tour instead.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Tigers in the Snow", creator: "Wild Life Asia" },
      { timestamp: "11:30", videoTitle: "Inside the Park", creator: "Far Corners" },
    ],
  },
];
