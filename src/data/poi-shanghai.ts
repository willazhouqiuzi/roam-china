import type { POI } from "./poi";

export const shanghaiPOIs: POI[] = [
  {
    id: "bund",
    name: "The Bund",
    nameZh: "外滩",
    pinyin: "Wàitān",
    mapX: 350,
    mapY: 195,
    glyph: "滩",
    labelLeft: true,
    prose:
      "The west bank of the Huangpu, lined with the colonial banks and trading houses that built modern Shanghai. Walk south along the promenade as Pudong's skyline switches on across the river — the timing window is 6 to 6:30 in winter. Crowds before that, easier viewing after.",
    videoClips: [
      { timestamp: "02:15", videoTitle: "Sunset at the Bund", creator: "Henry Sun" },
      { timestamp: "06:40", videoTitle: "A Walk Along Zhongshan East 1 Road", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "lujiazui",
    name: "Lujiazui",
    nameZh: "陆家嘴",
    pinyin: "Lùjiāzuǐ",
    mapX: 445,
    mapY: 215,
    glyph: "浦",
    prose:
      "Pudong's skyscraper canyon — Jin Mao, the World Financial Center, and Shanghai Tower at 632 m. Take the elevator up SWFC at sundown to watch the city light up below. The mall at the foot has the cleanest bathrooms in Asia.",
    videoClips: [
      { timestamp: "03:20", videoTitle: "Top of the Shanghai Tower", creator: "Far Corners" },
      { timestamp: "09:55", videoTitle: "Pudong Skyline at Night", creator: "Henry Sun" },
    ],
  },
  {
    id: "yu-garden",
    name: "Yu Garden",
    nameZh: "豫园",
    pinyin: "Yùyuán",
    mapX: 310,
    mapY: 250,
    glyph: "豫",
    labelLeft: true,
    prose:
      "A 16th-century private garden in the Old City — rockeries, koi pools, zigzag bridges, all designed to slow your eye. The bazaar around it is touristy but the snack stalls hold up: Nanxiang for xiaolongbao, the corner stand for beggar's chicken. Come on a weekday before 10.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "Inside Yu Garden", creator: "Mira Lin" },
      { timestamp: "07:50", videoTitle: "Xiaolongbao at Nanxiang", creator: "The Hot Plate" },
    ],
  },
  {
    id: "nanjing-road",
    name: "Nanjing Road",
    nameZh: "南京路",
    pinyin: "Nánjīng Lù",
    mapX: 280,
    mapY: 175,
    glyph: "京",
    labelAbove: true,
    prose:
      "The two-mile pedestrian shopping street running west from the Bund to People's Square. Eastern half is neon and crowds; western half (Nanjing West) is luxury brands. Crowds peak after 7 pm — before that it's almost calm and the historic facades are still visible.",
    videoClips: [
      { timestamp: "01:45", videoTitle: "Nanjing Road on a Saturday", creator: "Henry Sun" },
      { timestamp: "11:20", videoTitle: "The Old Department Stores", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "shanghai-museum",
    name: "Shanghai Museum",
    nameZh: "上海博物馆",
    pinyin: "Shànghǎi Bówùguǎn",
    mapX: 240,
    mapY: 220,
    glyph: "博",
    labelLeft: true,
    labelAbove: true,
    prose:
      "Four floors of Chinese antiquity on People's Square — bronzes, ceramics, jades, Ming furniture, paintings, calligraphy. The bronze gallery alone is world-class. Admission is free; the 30 RMB audio guide is worth it. Closed Mondays.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Inside the Bronze Gallery", creator: "Far Corners" },
      { timestamp: "08:15", videoTitle: "An Hour at the Shanghai Museum", creator: "Mira Lin" },
    ],
  },
  {
    id: "french-concession",
    name: "French Concession",
    nameZh: "法租界",
    pinyin: "Fǎzūjiè",
    mapX: 180,
    mapY: 245,
    glyph: "法",
    labelAbove: true,
    prose:
      "Plane trees, Art Deco villas, third-wave coffee in former lane houses. Walk Wukang Road on a Saturday morning, then drift south through Anfu and Wulumuqi. The Propaganda Poster Art Centre is hidden in an apartment-block basement — worth the search.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "A Saturday in the French Concession", creator: "Yuxi Travels" },
      { timestamp: "09:40", videoTitle: "Wukang Road, End to End", creator: "Slow Travel China" },
    ],
  },
  {
    id: "tianzifang",
    name: "Tianzifang",
    nameZh: "田子坊",
    pinyin: "Tiánzǐfāng",
    mapX: 215,
    mapY: 295,
    glyph: "弄",
    labelLeft: true,
    prose:
      "A maze of stone-gate alleys converted into boutique studios, indie cafés, and small bars. Touristy on weekends, quieter on weekday afternoons. Pair it with a stroll up Taikang Road for the smaller shops and the spillover into the wider French Concession.",
    videoClips: [
      { timestamp: "03:55", videoTitle: "Inside Tianzifang's Alleys", creator: "Mira Lin" },
      { timestamp: "10:10", videoTitle: "An Afternoon on Taikang Road", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "m50",
    name: "M50",
    nameZh: "M50创意园",
    pinyin: "M Wǔ-Líng",
    mapX: 245,
    mapY: 110,
    glyph: "艺",
    prose:
      "A converted textile mill on Suzhou Creek — the original Shanghai contemporary-art district. Galleries on three floors of brick buildings, mostly free entry. Less polished than 798 in Beijing — that's the point. Closed Mondays.",
    videoClips: [
      { timestamp: "06:25", videoTitle: "A Saturday at M50", creator: "Roads & Kingdoms" },
      { timestamp: "12:00", videoTitle: "The Studios Behind the Studios", creator: "Slow Travel China" },
    ],
  },
];
