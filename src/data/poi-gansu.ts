import type { POI } from "./poi";

export const gansuPOIs: POI[] = [
  {
    id: "mogao-caves",
    name: "Mogao Caves",
    nameZh: "莫高窟",
    pinyin: "Mògāo Kū",
    mapX: 140,
    mapY: 195,
    glyph: "莫",
    labelAbove: true,
    prose:
      "Nearly 500 Buddhist grottoes carved into a desert cliff, painted from the 4th to 14th centuries. Tickets are timed and limited; the night fluorescent tour is unreal.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Inside the Mogao Grottoes", creator: "Silk Road Stories" },
      { timestamp: "10:20", videoTitle: "A Thousand-Year-Old Mural", creator: "Henry Sun" },
    ],
  },
  {
    id: "crescent-lake",
    name: "Crescent Lake & Mingsha Dunes",
    nameZh: "鸣沙山月牙泉",
    pinyin: "Míngshā Shān Yuèyá Quán",
    mapX: 165,
    mapY: 220,
    glyph: "沙",
    prose:
      "A spring-fed crescent that has refused to dry up for two thousand years, ringed by 250-meter sand dunes. Climb at sunset, slide down by torchlight.",
    videoClips: [
      { timestamp: "04:05", videoTitle: "Camel Trains at Mingsha", creator: "Far Out Travel" },
      { timestamp: "09:30", videoTitle: "Sunset on the Dunes", creator: "Slow China" },
    ],
  },
  {
    id: "zhangye-danxia",
    name: "Zhangye Danxia",
    nameZh: "张掖丹霞",
    pinyin: "Zhāngyè Dānxiá",
    mapX: 290,
    mapY: 175,
    glyph: "霞",
    labelAbove: true,
    prose:
      "Striped sandstone hills in red, gold, and gray — laid down 24 million years and exposed by wind. Best 90 minutes after sunrise, when the colors burn brightest.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Rainbow Mountains of Zhangye", creator: "Far Out Travel" },
      { timestamp: "11:15", videoTitle: "Inside the Geopark", creator: "Henry Sun" },
    ],
  },
  {
    id: "jiayuguan",
    name: "Jiayuguan Fortress",
    nameZh: "嘉峪关",
    pinyin: "Jiāyù Guān",
    mapX: 240,
    mapY: 190,
    glyph: "关",
    labelLeft: true,
    prose:
      "The western terminus of the Great Wall — a fortified pass between two snow-capped ranges. The 1372 Ming-era complex is the best-preserved on the whole wall.",
    videoClips: [
      { timestamp: "03:25", videoTitle: "Where the Great Wall Ends", creator: "Silk Road Stories" },
      { timestamp: "08:40", videoTitle: "The Ming Garrison Walk", creator: "WildlifeCN" },
    ],
  },
  {
    id: "lanzhou-yellow",
    name: "Lanzhou Yellow River",
    nameZh: "兰州黄河",
    pinyin: "Lánzhōu Huánghé",
    mapX: 450,
    mapY: 220,
    glyph: "河",
    prose:
      "The only provincial capital the Yellow River runs through. Iron Bridge, beef noodles for breakfast, and a riverside walk that never feels finished.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Lanzhou Beef Noodles at 7 AM", creator: "The Hot Plate" },
      { timestamp: "10:30", videoTitle: "Walking the Yellow River", creator: "Henry Sun" },
    ],
  },
  {
    id: "labrang",
    name: "Labrang Monastery",
    nameZh: "拉卜楞寺",
    pinyin: "Lābǔlèng Sì",
    mapX: 430,
    mapY: 290,
    glyph: "寺",
    labelLeft: true,
    prose:
      "One of the six great monasteries of the Gelug Tibetan Buddhist sect, in the grasslands of Xiahe. Three thousand monks, a 3-km kora of prayer wheels.",
    videoClips: [
      { timestamp: "05:40", videoTitle: "Morning Kora at Labrang", creator: "Tibet Notes" },
      { timestamp: "12:50", videoTitle: "The Monk's Debate", creator: "Slow China" },
    ],
  },
  {
    id: "maijishan",
    name: "Maijishan Grottoes",
    nameZh: "麦积山石窟",
    pinyin: "Màijīshān Shíkū",
    mapX: 525,
    mapY: 250,
    glyph: "积",
    prose:
      "Buddhist statues clinging to a wheat-stack-shaped cliff, climbed by external wooden walkways. Carved between the 4th and 19th centuries, less crowded than Mogao.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Climbing the Maiji Cliff", creator: "Silk Road Stories" },
      { timestamp: "08:00", videoTitle: "The Standing Buddhas", creator: "Henry Sun" },
    ],
  },
  {
    id: "bingling-si",
    name: "Bingling Si Caves",
    nameZh: "炳灵寺石窟",
    pinyin: "Bǐnglíng Sì Shíkū",
    mapX: 425,
    mapY: 250,
    glyph: "灵",
    labelLeft: true,
    prose:
      "Cliff caves only reachable by boat across Liujiaxia Reservoir — a long ride past green canyon walls, with a 27-m Buddha at the end.",
    videoClips: [
      { timestamp: "04:50", videoTitle: "The Boat to Bingling Si", creator: "Far Out Travel" },
      { timestamp: "11:00", videoTitle: "The Tang Dynasty Buddha", creator: "Slow China" },
    ],
  },
];
