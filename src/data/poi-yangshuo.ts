import type { POI } from "./poi";

export const yangshuoPOIs: POI[] = [
  {
    id: "yulong-river",
    name: "Yulong River",
    nameZh: "遇龙河",
    pinyin: "Yùlóng Hé",
    mapX: 295,
    mapY: 235,
    glyph: "龙",
    labelLeft: true,
    prose:
      "The smaller, slower river west of town — bamboo rafts drifting past karst peaks, water buffalo on the banks, almost no engines. Two-hour rafting sections from various jetties; the Jinlong jetty is the canonical first leg. Best at first light.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Yulong River at Dawn", creator: "Mira Lin" },
      { timestamp: "08:00", videoTitle: "A Bamboo Raft Section", creator: "Slow Travel China" },
    ],
  },
  {
    id: "west-street",
    name: "West Street",
    nameZh: "西街",
    pinyin: "Xījiē",
    mapX: 380,
    mapY: 220,
    glyph: "街",
    prose:
      "The 1.5 km flagstone street that's been the backpacker spine of Yangshuo since the 80s — dumpling stalls, pizza joints, climbing-gear shops, tour-booking offices. Tacky but it's where everything lives. Find a quieter side street if you want to sleep.",
    videoClips: [
      { timestamp: "01:50", videoTitle: "West Street at Night", creator: "Yuxi Travels" },
      { timestamp: "07:20", videoTitle: "Backpacker Yangshuo, 30 Years On", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "moon-hill",
    name: "Moon Hill",
    nameZh: "月亮山",
    pinyin: "Yuèliangshān",
    mapX: 330,
    mapY: 320,
    glyph: "月",
    labelLeft: true,
    prose:
      "A karst peak with a 50 m natural arch through the top — climb 800 steps for the view through the moon-shape. Rock climbers run routes up the inside of the arch on weekends. The trailhead is a 20-minute bike from town.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Climbing Moon Hill", creator: "Wild Life Asia" },
      { timestamp: "08:45", videoTitle: "Climbers Inside the Arch", creator: "Far Corners" },
    ],
  },
  {
    id: "xianggong-mountain",
    name: "Xianggong Mountain",
    nameZh: "相公山",
    pinyin: "Xiānggōngshān",
    mapX: 215,
    mapY: 110,
    glyph: "相",
    labelLeft: true,
    prose:
      "The sunrise viewpoint of the Li River — looking south, the river snakes through pillared peaks while mist rises off the surface. 30 minutes by car from town. Tour groups arrive at 6 am; show up by 5:30 to get a clear bit of fence.",
    videoClips: [
      { timestamp: "04:20", videoTitle: "Xianggong Sunrise", creator: "Mira Lin" },
      { timestamp: "10:00", videoTitle: "Mist on the Li", creator: "Far Corners" },
    ],
  },
  {
    id: "shilihualang",
    name: "Ten-Mile Gallery",
    nameZh: "十里画廊",
    pinyin: "Shílǐ Huàláng",
    mapX: 410,
    mapY: 290,
    glyph: "画",
    labelRight: true,
    prose:
      "A 10 km cycling road south of town between karst peaks — hence the 'gallery' name. Rent a bike from West Street. Two hours round-trip including stops at Big Banyan, Moon Hill, and the various viewpoints along the way.",
    videoClips: [
      { timestamp: "02:55", videoTitle: "Cycling the Gallery Road", creator: "Slow Travel China" },
      { timestamp: "09:10", videoTitle: "Karst Along the Bike Path", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "big-banyan",
    name: "Big Banyan Tree",
    nameZh: "大榕树",
    pinyin: "Dà Róngshù",
    mapX: 360,
    mapY: 295,
    glyph: "榕",
    labelLeft: true,
    prose:
      "A 1,400-year-old banyan tree, twenty metres around at the base, the prop in the Liu Sanjie folk legend that gave Yangshuo its romantic reputation. The park around it is touristy but the tree itself is undeniably impressive. 6 km south of town.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Under the Big Banyan", creator: "Wild Life Asia" },
      { timestamp: "08:20", videoTitle: "The Liu Sanjie Legend", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "impression-sanjie",
    name: "Impression Liu Sanjie",
    nameZh: "印象·刘三姐",
    pinyin: "Yìnxiàng Liú Sānjiě",
    mapX: 460,
    mapY: 230,
    glyph: "印",
    labelRight: true,
    prose:
      "Zhang Yimou's outdoor light-and-sound spectacle on the Li River — 600 performers, lit karst peaks as backdrop, ethnic-minority music, no rain plan. Two evening shows in summer, one in spring/autumn. Closes in winter. Book a few days ahead.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Inside Impression Liu Sanjie", creator: "Far Corners" },
      { timestamp: "11:00", videoTitle: "The Light Show on the Li", creator: "Henry Sun" },
    ],
  },
  {
    id: "yangshuo-park",
    name: "Yangshuo Park",
    nameZh: "阳朔公园",
    pinyin: "Yángshuò Gōngyuán",
    mapX: 415,
    mapY: 165,
    glyph: "公",
    labelAbove: true,
    prose:
      "The local park in town — a quiet karst hill with a small pagoda at the top, the easiest viewpoint over Yangshuo's roofs and the Li River below. Free entry, a 15-minute climb. Locals come for tai chi at 6 am and ballroom dancing in the evening.",
    videoClips: [
      { timestamp: "02:15", videoTitle: "Tai Chi at Yangshuo Park", creator: "Slow Travel China" },
      { timestamp: "06:50", videoTitle: "View from the Pagoda", creator: "Yuxi Travels" },
    ],
  },
];
