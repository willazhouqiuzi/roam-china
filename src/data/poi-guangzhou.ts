import type { POI } from "./poi";

export const guangzhouPOIs: POI[] = [
  {
    id: "canton-tower",
    name: "Canton Tower",
    nameZh: "广州塔",
    pinyin: "Guǎngzhōu Tǎ",
    mapX: 390,
    mapY: 250,
    glyph: "塔",
    prose:
      "The slim 600-m \"little waist\" tower across from the new business district. Glass observation decks, a small Ferris wheel on top, and the city's best night view.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Canton Tower at Night", creator: "Henry Sun" },
      { timestamp: "08:50", videoTitle: "On Top of the Waist", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "shamian-island",
    name: "Shamian Island",
    nameZh: "沙面岛",
    pinyin: "Shāmiàn Dǎo",
    mapX: 310,
    mapY: 240,
    glyph: "沙",
    labelLeft: true,
    prose:
      "A 19th-century sandbank that became the British and French concession — banyan-shaded streets of European mansions, now coffee shops and weddings.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Walking Shamian on a Sunday", creator: "Slow China" },
      { timestamp: "10:30", videoTitle: "Banyan Trees and Mansions", creator: "Henry Sun" },
    ],
  },
  {
    id: "chen-clan",
    name: "Chen Clan Ancestral Hall",
    nameZh: "陈家祠",
    pinyin: "Chénjiā Cí",
    mapX: 320,
    mapY: 200,
    glyph: "祠",
    labelLeft: true,
    prose:
      "An 1894 Cantonese folk-art masterpiece — every roof ridge, beam, and column carved or molded with figures, animals, and stories. Now a folk-art museum.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "Inside the Chen Clan Hall", creator: "Slow China" },
      { timestamp: "11:00", videoTitle: "The Roof Ridge Figures", creator: "Henry Sun" },
    ],
  },
  {
    id: "yuexiu-park",
    name: "Yuexiu Park",
    nameZh: "越秀公园",
    pinyin: "Yuèxiù Gōngyuán",
    mapX: 360,
    mapY: 175,
    glyph: "秀",
    labelAbove: true,
    prose:
      "Guangzhou's biggest urban park, with the Five Goats statue and a 600-year-old surviving section of the Ming city wall. Tai chi by 7 AM, badminton by 8.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "The Five Goats", creator: "Henry Sun" },
      { timestamp: "09:15", videoTitle: "Tai Chi at Yuexiu", creator: "Slow China" },
    ],
  },
  {
    id: "sun-yat-sen-hall",
    name: "Sun Yat-sen Memorial Hall",
    nameZh: "中山纪念堂",
    pinyin: "Zhōngshān Jìniàntáng",
    mapX: 370,
    mapY: 200,
    glyph: "山",
    prose:
      "A 1929 octagonal hall built where Sun Yat-sen took his oath as president — green-tile roof, white-stone columns, a giant ginkgo tree out front. Free to walk into.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Inside Sun Yat-sen Memorial Hall", creator: "Henry Sun" },
      { timestamp: "10:00", videoTitle: "The Old Ginkgo Tree", creator: "Slow China" },
    ],
  },
  {
    id: "beijing-road",
    name: "Beijing Road",
    nameZh: "北京路",
    pinyin: "Běijīng Lù",
    mapX: 370,
    mapY: 220,
    glyph: "京",
    prose:
      "Guangzhou's oldest commercial street — a glass floor mid-way reveals five centuries of stratified pavement. Otherwise: cha chaan tengs, a Uniqlo, and the same crowd as Nanjing Road.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Walking Beijing Road", creator: "Slow China" },
      { timestamp: "08:30", videoTitle: "Underglass Five-Layer Street", creator: "Henry Sun" },
    ],
  },
  {
    id: "yum-cha",
    name: "Tao Tao Ju Yum Cha",
    nameZh: "陶陶居",
    pinyin: "Táotáo Jū",
    mapX: 340,
    mapY: 220,
    glyph: "茶",
    labelAbove: true,
    prose:
      "Guangzhou's most famous yum cha house, in business since 1880. Order shrimp dumplings at 9 AM, sit until 11. The dim sum cart still rolls.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "A Morning at Tao Tao Ju", creator: "The Hot Plate" },
      { timestamp: "07:50", videoTitle: "Cantonese Dim Sum, Front Cart", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "pearl-river-cruise",
    name: "Pearl River Cruise",
    nameZh: "珠江夜游",
    pinyin: "Zhūjiāng Yèyóu",
    mapX: 390,
    mapY: 240,
    glyph: "珠",
    prose:
      "An hour-long evening boat ride past every neon-lit landmark — Canton Tower, the bridges, the old waterfront. Cheesy and worth it once.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Pearl River After Dark", creator: "Slow China" },
      { timestamp: "08:50", videoTitle: "From the Boat", creator: "Yuxi Travels" },
    ],
  },
];
