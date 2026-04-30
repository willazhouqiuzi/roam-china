import type { POI } from "./poi";

export const hangzhouPOIs: POI[] = [
  {
    id: "west-lake",
    name: "West Lake",
    nameZh: "西湖",
    pinyin: "Xīhú",
    mapX: 340,
    mapY: 200,
    glyph: "湖",
    prose:
      "The lake that has shaped Chinese landscape painting for a thousand years — willows, stone bridges, distant pagodas through morning mist. Walk the Su Causeway in autumn for the foliage. Rent a paddleboat in summer. The whole loop is 15 km on a bike, about 45 minutes.",
    videoClips: [
      { timestamp: "02:20", videoTitle: "Sunrise on West Lake", creator: "Mira Lin" },
      { timestamp: "09:15", videoTitle: "The Causeways at Dawn", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "su-causeway",
    name: "Su Causeway",
    nameZh: "苏堤",
    pinyin: "Sūdī",
    mapX: 290,
    mapY: 195,
    glyph: "堤",
    labelLeft: true,
    prose:
      "The longer of West Lake's two causeways, built by the poet Su Dongpo when he was the regional governor in the 11th century. Six arch bridges across 2.8 km. Walk it from south to north and end at the lakeside teahouses near Beishan Road.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Walking Su Causeway in October", creator: "Slow Travel China" },
      { timestamp: "07:30", videoTitle: "The Six Bridges", creator: "Mira Lin" },
    ],
  },
  {
    id: "bai-causeway",
    name: "Bai Causeway",
    nameZh: "白堤",
    pinyin: "Báidī",
    mapX: 335,
    mapY: 165,
    glyph: "白",
    labelAbove: true,
    prose:
      "The shorter causeway across the north end of the lake, named for Tang dynasty poet Bai Juyi. Lined with weeping willows that frame the silhouette of Baoshu Pagoda on the opposite hill. Best in early morning before the tour groups.",
    videoClips: [
      { timestamp: "03:25", videoTitle: "Bai Causeway at Sunrise", creator: "Mira Lin" },
      { timestamp: "06:50", videoTitle: "An Hour Along the Lake", creator: "Henry Sun" },
    ],
  },
  {
    id: "leifeng-pagoda",
    name: "Leifeng Pagoda",
    nameZh: "雷峰塔",
    pinyin: "Léifēngtǎ",
    mapX: 370,
    mapY: 245,
    glyph: "塔",
    labelLeft: true,
    prose:
      "A reconstructed Song dynasty pagoda on the south shore — the original collapsed in 1924. Climb up at sunset for the canonical postcard angle on the lake. The pagoda houses a buried set of Buddhist relics; the elevator inside is glass-floored.",
    videoClips: [
      { timestamp: "04:20", videoTitle: "Sunset from Leifeng Pagoda", creator: "Henry Sun" },
      { timestamp: "09:45", videoTitle: "Inside the Pagoda", creator: "Far Corners" },
    ],
  },
  {
    id: "lingyin-temple",
    name: "Lingyin Temple",
    nameZh: "灵隐寺",
    pinyin: "Língyǐnsì",
    mapX: 240,
    mapY: 180,
    glyph: "灵",
    labelLeft: true,
    labelAbove: true,
    prose:
      "One of China's oldest Buddhist temples, founded in 326. The hillside in front is carved with hundreds of Song-dynasty Buddhist sculptures. Come on a weekday morning, walk slowly, and listen for the chanting from inside the main hall.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Inside Lingyin Temple", creator: "Far Corners" },
      { timestamp: "11:00", videoTitle: "The Carved Cliffs", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "longjing",
    name: "Longjing Tea Village",
    nameZh: "龙井村",
    pinyin: "Lóngjǐng",
    mapX: 215,
    mapY: 245,
    glyph: "茶",
    labelLeft: true,
    prose:
      "The hillside village that gives Longjing tea its name — terraced tea fields, traditional houses, family teahouses serving cha and biscuits. Pre-Qingming green tea (early April) is the prized harvest. Take bus 27 from West Lake.",
    videoClips: [
      { timestamp: "02:55", videoTitle: "A Day in Longjing Village", creator: "Slow Travel China" },
      { timestamp: "08:20", videoTitle: "Tasting Pre-Qingming Tea", creator: "The Hot Plate" },
    ],
  },
  {
    id: "hefang-street",
    name: "Hefang Street",
    nameZh: "河坊街",
    pinyin: "Héfāngjiē",
    mapX: 410,
    mapY: 235,
    glyph: "街",
    labelRight: true,
    prose:
      "Restored Qing-dynasty street running east of the lake — handicraft shops, snack stalls, traditional candy makers, scissors-making demonstrations. Touristy, but the night version (after dusk) keeps something. Try the dingsheng cake at Zhi Wei Guan.",
    videoClips: [
      { timestamp: "04:40", videoTitle: "Hefang Street at Night", creator: "Yuxi Travels" },
      { timestamp: "10:15", videoTitle: "Old Crafts at Hefang", creator: "Slow Travel China" },
    ],
  },
  {
    id: "six-harmonies",
    name: "Six Harmonies Pagoda",
    nameZh: "六和塔",
    pinyin: "Liùhétǎ",
    mapX: 300,
    mapY: 295,
    glyph: "六",
    labelExtra: "+half day",
    prose:
      "A 13-storey octagonal pagoda above the Qiantang River, built in 970 to calm the river's tidal bore. Climb to the top for the view of the modern road bridge below — a strange juxtaposition that makes you feel the millennium. Quiet on weekdays.",
    videoClips: [
      { timestamp: "03:10", videoTitle: "Inside Six Harmonies Pagoda", creator: "Mira Lin" },
      { timestamp: "09:35", videoTitle: "The Qiantang River from the Top", creator: "Henry Sun" },
    ],
  },
];
