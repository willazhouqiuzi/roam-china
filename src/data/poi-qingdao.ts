import type { POI } from "./poi";

export const qingdaoPOIs: POI[] = [
  {
    id: "zhanqiao-pier",
    name: "Zhanqiao Pier",
    nameZh: "栈桥",
    pinyin: "Zhànqiáo",
    mapX: 305,
    mapY: 245,
    glyph: "桥",
    labelLeft: true,
    prose:
      "The 440 m pier in front of the old town, with its 1891 octagonal pavilion at the seaward end — the icon on every Tsingtao bottle. At low tide you can walk on the rocks beside it. Sunset is the photo; mid-day is mobbed.",
    videoClips: [
      { timestamp: "02:25", videoTitle: "Sunset at Zhanqiao Pier", creator: "Henry Sun" },
      { timestamp: "07:50", videoTitle: "The Octagonal Pavilion", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "tsingtao-brewery",
    name: "Tsingtao Brewery Museum",
    nameZh: "青岛啤酒博物馆",
    pinyin: "Qīngdǎo Píjiǔ Bówùguǎn",
    mapX: 270,
    mapY: 175,
    glyph: "啤",
    labelLeft: true,
    labelAbove: true,
    prose:
      "The original 1903 German brewery, still pouring at the source — the museum walks through the colonial origins, the brass kettles, and ends with a tasting room and a free draught. The neighbourhood around it sells beer in plastic bags from late afternoon.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Inside the Tsingtao Brewery", creator: "The Hot Plate" },
      { timestamp: "08:30", videoTitle: "Beer in a Plastic Bag", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "badaguan",
    name: "Badaguan",
    nameZh: "八大关",
    pinyin: "Bādàguān",
    mapX: 410,
    mapY: 230,
    glyph: "关",
    labelRight: true,
    prose:
      "A neighbourhood of pre-1949 villas in twenty European architectural styles — Spanish, Russian, French, German — laid out along eight tree-lined streets. Best in autumn for the maple leaves. The houses are mostly private but the streets are walkable any time.",
    videoClips: [
      { timestamp: "04:15", videoTitle: "Walking Badaguan in Autumn", creator: "Slow Travel China" },
      { timestamp: "09:40", videoTitle: "The Twenty Styles", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "st-michaels",
    name: "St. Michael's Cathedral",
    nameZh: "圣弥厄尔大教堂",
    pinyin: "Shèng Mí'è'ěr Dàjiàotáng",
    mapX: 340,
    mapY: 195,
    glyph: "堂",
    prose:
      "A 1930s German Gothic cathedral with twin 60 m bell towers, anchoring the old town's tallest hill. Open for masses Sunday morning; tours the rest of the week. The plaza in front is wedding photo central — turn up Saturday afternoon if you enjoy people-watching.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Sunday Mass at St. Michael's", creator: "Far Corners" },
      { timestamp: "08:00", videoTitle: "Wedding Photos in the Plaza", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "old-town",
    name: "Qingdao Old Town",
    nameZh: "青岛老城",
    pinyin: "Qīngdǎo Lǎochéng",
    mapX: 290,
    mapY: 210,
    glyph: "老",
    labelAbove: true,
    prose:
      "The German concession quarter — red-tile roofs, narrow lanes, signs in fading German. The hills run steep down to the bay. Best explored on foot starting from the cathedral, working downhill toward the pier. Coffee culture is genuine here; not transplanted.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "An Afternoon in the Old Town", creator: "Slow Travel China" },
      { timestamp: "10:10", videoTitle: "Coffee in a Concession Lane", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "may-fourth-square",
    name: "May Fourth Square",
    nameZh: "五四广场",
    pinyin: "Wǔ Sì Guǎngchǎng",
    mapX: 460,
    mapY: 275,
    glyph: "四",
    labelRight: true,
    prose:
      "The modern centrepiece of new Qingdao — a 30 m red sculpture commemorating the May Fourth Movement, ringed by the steel-and-glass towers of the eastern district. Lit at night with the sea behind. Take it in with Wusi Square's beach 200 m south.",
    videoClips: [
      { timestamp: "02:15", videoTitle: "May Fourth Square at Night", creator: "Henry Sun" },
      { timestamp: "07:00", videoTitle: "The Sculpture and the Sea", creator: "Mira Lin" },
    ],
  },
  {
    id: "pichaiyuan",
    name: "Pichaiyuan",
    nameZh: "劈柴院",
    pinyin: "Pīcháiyuàn",
    mapX: 270,
    mapY: 130,
    glyph: "院",
    labelLeft: true,
    labelAbove: true,
    prose:
      "A century-old food alley off Central Road — seafood skewers grilled at the door, beer in plastic bags, dumpling stalls steaming up the lane. Everything is touristy; everything is also good. Crowds peak after 7 pm. Try the spicy clams.",
    videoClips: [
      { timestamp: "03:55", videoTitle: "Pichaiyuan at Night", creator: "The Hot Plate" },
      { timestamp: "09:20", videoTitle: "Spicy Clams at the Stall", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "mt-lao",
    name: "Mt. Lao",
    nameZh: "崂山",
    pinyin: "Láoshān",
    mapX: 555,
    mapY: 315,
    glyph: "崂",
    labelExtra: "+1 day",
    prose:
      "A 1,133 m sacred Daoist mountain east of the city — the only major peak in China that meets the sea. Cable car or six-hour climb. Taiqing Palace at the foot is the third-oldest Daoist temple in China. Avoid weekends; the locals all come.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Climbing Mt. Lao", creator: "Wild Life Asia" },
      { timestamp: "11:30", videoTitle: "Inside Taiqing Palace", creator: "Far Corners" },
    ],
  },
];
