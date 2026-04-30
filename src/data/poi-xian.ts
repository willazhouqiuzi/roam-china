import type { POI } from "./poi";

export const xianPOIs: POI[] = [
  {
    id: "bell-tower",
    name: "Bell Tower",
    nameZh: "钟楼",
    pinyin: "Zhōnglóu",
    mapX: 340,
    mapY: 205,
    glyph: "钟",
    prose:
      "Ming dynasty tower at the geographic centre of the old city — the place all Xi'an addresses are measured from. Climb up at dusk for the view down the four cardinal streets. Ring the actual bell on weekend mornings, one yuan a strike.",
    videoClips: [
      { timestamp: "02:00", videoTitle: "Inside the Bell Tower", creator: "Henry Sun" },
      { timestamp: "04:30", videoTitle: "Climbing to the Top", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "muslim-quarter",
    name: "Muslim Quarter",
    nameZh: "回民街",
    pinyin: "Huímínjiē",
    mapX: 290,
    mapY: 200,
    glyph: "回",
    labelLeft: true,
    labelAbove: true,
    prose:
      "The food street that runs west from the Drum Tower — lamb skewers grilled on cumin, biang biang noodles, persimmon cakes, pomegranate juice pressed at the stall. Crowded at all hours, worst between 7 and 9 pm. Go for breakfast or after 10 pm if you can.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Eating Through the Muslim Quarter", creator: "The Hot Plate" },
      { timestamp: "11:20", videoTitle: "Lamb Skewers, Up Close", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "terracotta-army",
    name: "Terracotta Army",
    nameZh: "兵马俑",
    pinyin: "Bīngmǎyǒng",
    mapX: 550,
    mapY: 220,
    glyph: "俑",
    labelExtra: "+half day",
    prose:
      "The 8,000-strong clay army Qin Shi Huang ordered to guard him in death, 36 km east of Xi'an. Pit One is the icon — vast, eerie, every face individual. Pit Three, the smaller command pit, is often less crowded and holds the best-preserved figures. Go in November or April, before the crowds.",
    videoClips: [
      { timestamp: "01:25", videoTitle: "Inside Pit One of the Terracotta Army", creator: "Far Corners" },
      { timestamp: "08:55", videoTitle: "The Bronze Chariots Up Close", creator: "Mira Lin" },
    ],
  },
  {
    id: "wild-goose-pagoda",
    name: "Big Wild Goose Pagoda",
    nameZh: "大雁塔",
    pinyin: "Dàyàntǎ",
    mapX: 340,
    mapY: 295,
    glyph: "雁",
    prose:
      "A seven-storey Tang dynasty pagoda built in 652 to house the Buddhist scriptures Xuanzang brought back from India. Climb to the top for a view over the south of the city. The fountain show in the square out front runs at noon and 8 pm — synchronised water and light, slightly absurd.",
    videoClips: [
      { timestamp: "02:50", videoTitle: "Climbing the Wild Goose Pagoda", creator: "Henry Sun" },
      { timestamp: "09:30", videoTitle: "The Fountain Show at 8 pm", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "shaanxi-museum",
    name: "Shaanxi History Museum",
    nameZh: "陕西历史博物馆",
    pinyin: "Shǎnxī Lìshǐ Bówùguǎn",
    mapX: 270,
    mapY: 290,
    glyph: "史",
    labelLeft: true,
    prose:
      "China's first state-of-the-art museum, holding the country's best Tang dynasty artifacts. Murals from imperial tombs, Han pottery, the largest collection of imperial seals anywhere. Entry is free but capped at 12,000 a day — book online.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Inside the Tang Mural Hall", creator: "Far Corners" },
      { timestamp: "07:30", videoTitle: "An Hour at the Shaanxi History Museum", creator: "Mira Lin" },
    ],
  },
  {
    id: "tang-paradise",
    name: "Tang Paradise",
    nameZh: "大唐芙蓉园",
    pinyin: "Dàtáng Fúróngyuán",
    mapX: 410,
    mapY: 290,
    glyph: "唐",
    labelRight: true,
    prose:
      "A reconstructed Tang-dynasty pleasure park near the Wild Goose Pagoda — water gardens, lanterns, an evening light show, occasional fireworks. Touristy, but the night views genuinely look like a dynasty painting come to life.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Tang Paradise at Dusk", creator: "Mira Lin" },
      { timestamp: "06:50", videoTitle: "The Night Show", creator: "Slow Travel China" },
    ],
  },
  {
    id: "han-yang-ling",
    name: "Han Yang Ling",
    nameZh: "汉阳陵",
    pinyin: "Hàn Yánglíng",
    mapX: 290,
    mapY: 105,
    glyph: "汉",
    labelExtra: "+half day",
    prose:
      "The mausoleum of Han Emperor Jingdi, 20 km north of Xi'an — quieter than the Terracotta Army, more intimate. Thousands of foot-tall figurines lie in pits beneath a glass floor you walk over. Arrive at opening to have the place almost to yourself.",
    videoClips: [
      { timestamp: "02:25", videoTitle: "Inside Han Yang Ling", creator: "Far Corners" },
      { timestamp: "09:00", videoTitle: "The Glass Floor Walk", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "mt-hua",
    name: "Mt. Hua",
    nameZh: "华山",
    pinyin: "Huàshān",
    mapX: 590,
    mapY: 290,
    glyph: "华",
    labelLeft: true,
    labelExtra: "+1 day trip",
    prose:
      "One of China's five sacred peaks, two hours east of Xi'an by bullet train. The famous Plank Walk in the Sky is a wooden boardwalk pinned to a cliff face — harness rented at the top. Five summits in total; North is the cable-car peak, South is the highest at 2,154 m.",
    videoClips: [
      { timestamp: "05:30", videoTitle: "The Plank Walk in the Sky", creator: "Wild Life Asia" },
      { timestamp: "10:45", videoTitle: "Climbing Mt. Hua at Sunrise", creator: "Far Corners" },
    ],
  },
];
