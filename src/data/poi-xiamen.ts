import type { POI } from "./poi";

export const xiamenPOIs: POI[] = [
  {
    id: "gulangyu",
    name: "Gulangyu Island",
    nameZh: "鼓浪屿",
    pinyin: "Gǔlàngyǔ",
    mapX: 245,
    mapY: 240,
    glyph: "屿",
    labelLeft: true,
    prose:
      "A 2 km² UNESCO island a short ferry from Xiamen — colonial mansions, no cars, narrow alleys lined with banyan and frangipani. Sleep here at least one night for the empty alleys after the day-trippers go home. Ferry tickets sell out at peak; book ahead.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Gulangyu in the Morning", creator: "Slow Travel China" },
      { timestamp: "08:15", videoTitle: "Inside the Colonial Villas", creator: "Mira Lin" },
    ],
  },
  {
    id: "sunlight-rock",
    name: "Sunlight Rock",
    nameZh: "日光岩",
    pinyin: "Rìguāngyán",
    mapX: 195,
    mapY: 185,
    glyph: "光",
    labelLeft: true,
    prose:
      "Gulangyu's highest point at 92 m — a granite peak with a 180° view of the island, the city across the strait, and the South China Sea. Climb up at dawn or dusk; mid-day the rocks are too hot. Combine with the Piano Museum at the base.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Sunset from Sunlight Rock", creator: "Mira Lin" },
      { timestamp: "07:50", videoTitle: "Inside the Piano Museum", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "nanputuo-temple",
    name: "Nanputuo Temple",
    nameZh: "南普陀寺",
    pinyin: "Nánpǔtuósì",
    mapX: 380,
    mapY: 230,
    glyph: "普",
    labelRight: true,
    prose:
      "A thousand-year-old Buddhist temple on the slope of Wulao Peak, just outside Xiamen University — vegetarian lunch counter inside, free entry, the canonical Fujian temple experience. Climb the path behind the main hall for a city view.",
    videoClips: [
      { timestamp: "02:55", videoTitle: "Inside Nanputuo Temple", creator: "Far Corners" },
      { timestamp: "08:40", videoTitle: "Vegetarian Lunch at the Temple", creator: "The Hot Plate" },
    ],
  },
  {
    id: "xiamen-university",
    name: "Xiamen University",
    nameZh: "厦门大学",
    pinyin: "Xiàmén Dàxué",
    mapX: 415,
    mapY: 270,
    glyph: "大",
    labelRight: true,
    prose:
      "One of China's prettiest campuses — beachfront, palm-lined, red-tile-roofed colonial buildings. Free to enter but limited to 1,000 visitors a day; reserve through WeChat. Furong Tunnel between two of the dorms is covered in student murals.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Walking Xiamen University", creator: "Yuxi Travels" },
      { timestamp: "09:20", videoTitle: "Furong Tunnel's Murals", creator: "Slow Travel China" },
    ],
  },
  {
    id: "zengcuoan",
    name: "Zengcuoan",
    nameZh: "曾厝垵",
    pinyin: "Zēngcuò'ān",
    mapX: 470,
    mapY: 330,
    glyph: "曾",
    labelLeft: true,
    prose:
      "A former fishing village turned hipster-leaning backpacker hub, a 10-minute walk from Xiamen University. Guesthouses and cafés in old courtyards, oysters at the night market, live-music bars. Touristy by day; mellow after midnight.",
    videoClips: [
      { timestamp: "02:40", videoTitle: "Zengcuoan at Night", creator: "Yuxi Travels" },
      { timestamp: "08:00", videoTitle: "Oyster Stalls at the Market", creator: "The Hot Plate" },
    ],
  },
  {
    id: "hulishan-fort",
    name: "Hulishan Fort",
    nameZh: "胡里山炮台",
    pinyin: "Húlǐshān Pàotái",
    mapX: 320,
    mapY: 320,
    glyph: "炮",
    labelLeft: true,
    prose:
      "An 1894 coastal fortress with a 28 cm Krupp cannon — the largest in service anywhere when it was built. The cannon is fired at noon (yes, with a real explosion). Combine with a walk along the Huandao Road sea promenade.",
    videoClips: [
      { timestamp: "03:25", videoTitle: "Noon Cannon at Hulishan", creator: "Far Corners" },
      { timestamp: "09:00", videoTitle: "Walking the Huandao Road", creator: "Slow Travel China" },
    ],
  },
  {
    id: "bailuzhou",
    name: "Bailuzhou Park",
    nameZh: "白鹭洲",
    pinyin: "Báilùzhōu",
    mapX: 425,
    mapY: 165,
    glyph: "鹭",
    labelRight: true,
    prose:
      "An island park in the middle of Yundang Lake — egrets nest in the trees, locals come to fly kites, the music fountain at 8 pm runs in summer. Free entry, walking paths, an unhurried way to spend an afternoon.",
    videoClips: [
      { timestamp: "02:00", videoTitle: "Egrets at Bailuzhou", creator: "Wild Life Asia" },
      { timestamp: "07:30", videoTitle: "The Music Fountain at 8 pm", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "wuyuan-bay",
    name: "Wuyuan Bay",
    nameZh: "五缘湾",
    pinyin: "Wǔyuán Wān",
    mapX: 555,
    mapY: 130,
    glyph: "湾",
    labelLeft: true,
    prose:
      "A wetland park in the northeast of the city — mangroves, swans on the bay, biking paths, weekend yacht-watching. Empty on weekday mornings, busy on weekend afternoons. Pair with a sunset on the Xiamen International Cruise Centre's east balcony.",
    videoClips: [
      { timestamp: "03:50", videoTitle: "Wuyuan Bay at Sunrise", creator: "Mira Lin" },
      { timestamp: "10:15", videoTitle: "Cycling the Mangrove Path", creator: "Slow Travel China" },
    ],
  },
];
