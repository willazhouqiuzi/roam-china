import type { POI } from "./poi";

export const qinghaiPOIs: POI[] = [
  {
    id: "qinghai-lake",
    name: "Qinghai Lake",
    nameZh: "青海湖",
    pinyin: "Qīnghǎi Hú",
    mapX: 340,
    mapY: 200,
    glyph: "湖",
    prose:
      "China's largest salt lake — 4,500 km² of pale blue, ringed by yellow canola fields in late July. The full road circuit is 360 km, three days by bike.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Cycling Around Qinghai Lake", creator: "Slow China" },
      { timestamp: "09:10", videoTitle: "Canola Bloom at the South Shore", creator: "Spring China" },
    ],
  },
  {
    id: "chaka-salt-lake",
    name: "Chaka Salt Lake",
    nameZh: "茶卡盐湖",
    pinyin: "Cháqiǎ Yánhú",
    mapX: 250,
    mapY: 220,
    glyph: "盐",
    labelLeft: true,
    prose:
      "China's mirror lake — a thin layer of brine over white salt that reflects the sky perfectly on still days. Take the little train out across the salt flats.",
    videoClips: [
      { timestamp: "04:15", videoTitle: "The Sky Mirror at Chaka", creator: "Far Out Travel" },
      { timestamp: "10:30", videoTitle: "Salt Train at Sunrise", creator: "Henry Sun" },
    ],
  },
  {
    id: "kumbum-monastery",
    name: "Kumbum Monastery",
    nameZh: "塔尔寺",
    pinyin: "Tǎ'ěr Sì",
    mapX: 480,
    mapY: 200,
    glyph: "塔",
    prose:
      "One of the six great Gelug Tibetan monasteries, on the birthplace of Tsongkhapa. The yak-butter sculpture hall is unique anywhere — flowers and figures carved in butter.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Inside Kumbum's Butter Hall", creator: "Tibet Notes" },
      { timestamp: "11:45", videoTitle: "Pilgrim Prostrations", creator: "Slow China" },
    ],
  },
  {
    id: "tongren",
    name: "Tongren Thangka Villages",
    nameZh: "同仁热贡",
    pinyin: "Tóngrén Règòng",
    mapX: 470,
    mapY: 270,
    glyph: "唐",
    prose:
      "Three Tibetan villages where every household paints thangkas — Buddhist scroll paintings — the way they have for six centuries. Watch them grind mineral pigments by hand.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "A Thangka, Six Months in the Making", creator: "Slow China" },
      { timestamp: "10:00", videoTitle: "The Painters of Wutun", creator: "Tibet Notes" },
    ],
  },
  {
    id: "mengda-tianchi",
    name: "Mengda Heavenly Lake",
    nameZh: "孟达天池",
    pinyin: "Mèngdá Tiānchí",
    mapX: 530,
    mapY: 240,
    glyph: "孟",
    labelLeft: true,
    prose:
      "An alpine lake surrounded by primordial forest, in the Salar autonomous county. Far enough off the route to feel like a discovery.",
    videoClips: [
      { timestamp: "03:50", videoTitle: "A Walk Around Mengda", creator: "Far Out Travel" },
      { timestamp: "09:20", videoTitle: "The Salar Villages", creator: "Henry Sun" },
    ],
  },
  {
    id: "xining-mosque",
    name: "Dongguan Grand Mosque",
    nameZh: "东关清真大寺",
    pinyin: "Dōngguān Qīngzhēn Dàsì",
    mapX: 490,
    mapY: 195,
    glyph: "寺",
    labelAbove: true,
    prose:
      "Xining's largest mosque, with a 600-year history and 14,000-person capacity at Friday prayers. The Hui Muslim quarter around it is the city's best-fed neighborhood.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Friday Prayers at Dongguan", creator: "Henry Sun" },
      { timestamp: "10:40", videoTitle: "The Hui Muslim Food Street", creator: "The Hot Plate" },
    ],
  },
  {
    id: "bird-island",
    name: "Bird Island",
    nameZh: "青海湖鸟岛",
    pinyin: "Niǎo Dǎo",
    mapX: 290,
    mapY: 195,
    glyph: "鸟",
    prose:
      "Two islets on the western edge of Qinghai Lake — 100,000+ migratory birds nest here in May–June. Bar-headed geese, brown-headed gulls, the occasional black-necked crane.",
    videoClips: [
      { timestamp: "05:30", videoTitle: "Migrants on Bird Island", creator: "WildlifeCN" },
      { timestamp: "12:10", videoTitle: "Bar-headed Geese at Sunrise", creator: "Far Out Travel" },
    ],
  },
  {
    id: "yushu",
    name: "Yushu Tibetan Plateau",
    nameZh: "玉树",
    pinyin: "Yùshù",
    mapX: 180,
    mapY: 320,
    glyph: "玉",
    labelAbove: true,
    prose:
      "Tibetan grasslands at 3,700 m, capital of the Kham region. The Mani stone wall here is the largest in the world — millions of stones with prayers carved into them.",
    videoClips: [
      { timestamp: "06:00", videoTitle: "The Mani Wall at Yushu", creator: "Tibet Notes" },
      { timestamp: "13:00", videoTitle: "Khampa Horsemen", creator: "Slow China" },
    ],
  },
];
