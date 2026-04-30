import type { POI } from "./poi";

export const chongqingPOIs: POI[] = [
  {
    id: "hongya-cave",
    name: "Hongya Cave",
    nameZh: "洪崖洞",
    pinyin: "Hóngyádòng",
    mapX: 340,
    mapY: 200,
    glyph: "崖",
    prose:
      "The eleven-story stilt-house complex hanging off a cliff above the Jialing River — Studio Ghibli's Spirited Away aesthetic, lit gold every night from 7 to 10 pm. Crowds peak at 8; arrive by 6:30 to get on the river-facing terraces. The view from the bridge across is the photo.",
    videoClips: [
      { timestamp: "02:00", videoTitle: "Hongya Cave at 7 pm", creator: "Henry Sun" },
      { timestamp: "08:30", videoTitle: "Inside the Stilt Houses", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "liziba-light-rail",
    name: "Liziba Light Rail",
    nameZh: "李子坝轻轨",
    pinyin: "Lǐzǐbà Qīngguǐ",
    mapX: 235,
    mapY: 215,
    glyph: "轨",
    labelLeft: true,
    prose:
      "The Line-2 train passes straight through the sixth and eighth floors of a residential apartment block — yes, really. Trains every 4 minutes from 6:30 am to 11 pm. The viewing platform across the road is mobbed at peak hours; come on a weekday morning before 9.",
    videoClips: [
      { timestamp: "01:35", videoTitle: "Train Through the Building", creator: "Far Corners" },
      { timestamp: "07:20", videoTitle: "Inside a Liziba Apartment", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "jiefangbei",
    name: "Jiefangbei",
    nameZh: "解放碑",
    pinyin: "Jiěfàngbēi",
    mapX: 380,
    mapY: 235,
    glyph: "碑",
    labelRight: true,
    prose:
      "The Liberation Monument plaza at the heart of downtown — a small column dwarfed by the LED-clad skyscrapers ringing it. Shopping spreads in every direction underground. Come at night for the lights; the surrounding streets stay open until 11.",
    videoClips: [
      { timestamp: "03:10", videoTitle: "Jiefangbei After Dark", creator: "Henry Sun" },
      { timestamp: "09:00", videoTitle: "Underground Shopping", creator: "Slow Travel China" },
    ],
  },
  {
    id: "ciqikou",
    name: "Ciqikou Old Town",
    nameZh: "磁器口古镇",
    pinyin: "Cíqìkǒu",
    mapX: 175,
    mapY: 250,
    glyph: "瓷",
    labelLeft: true,
    prose:
      "A 1,000-year-old porcelain market town on the Jialing's south bank — flagstone streets, ancestral halls, snack stalls deep-frying sweet potato cakes. Heavily restored but the pace is local and the river view from the western edge is genuine.",
    videoClips: [
      { timestamp: "02:40", videoTitle: "An Afternoon in Ciqikou", creator: "Yuxi Travels" },
      { timestamp: "08:10", videoTitle: "Sweet Potato Cakes at the Stall", creator: "The Hot Plate" },
    ],
  },
  {
    id: "eling-park",
    name: "Eling Park",
    nameZh: "鹅岭公园",
    pinyin: "Élǐng Gōngyuán",
    mapX: 270,
    mapY: 175,
    glyph: "鹅",
    labelLeft: true,
    prose:
      "A hilltop park 380 m above the Yangtze, the highest viewpoint in the central district. The renovated SunTek Plaza on top has a glass-floor cantilever; not for the squeamish. Best at dusk when the city lights ladder up in tiers below.",
    videoClips: [
      { timestamp: "03:55", videoTitle: "Sunset from Eling Park", creator: "Far Corners" },
      { timestamp: "10:00", videoTitle: "The SunTek Glass Floor", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "dazu-rock-carvings",
    name: "Dazu Rock Carvings",
    nameZh: "大足石刻",
    pinyin: "Dàzú Shíkè",
    mapX: 90,
    mapY: 130,
    glyph: "刻",
    labelExtra: "+1 day",
    prose:
      "A UNESCO site of 50,000 Tang and Song-era Buddhist stone carvings carved into hillsides 2 hours northwest of Chongqing. Baoding Mountain is the headline; the 31 m sleeping Buddha is older than most cathedrals. Crowds are light on weekdays.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "The Sleeping Buddha at Dazu", creator: "Far Corners" },
      { timestamp: "11:00", videoTitle: "Inside Baoding Mountain", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "wulong-karst",
    name: "Wulong Karst",
    nameZh: "武隆喀斯特",
    pinyin: "Wǔlóng Kāsītè",
    mapX: 545,
    mapY: 295,
    glyph: "武",
    labelExtra: "+1–2 days",
    prose:
      "Three natural bridges and a 200 m sinkhole, used as a Transformers 4 backdrop and a Zhang Yimou set. Three hours southeast of Chongqing by bullet train. Can be done as a long day-trip but better with an overnight stop in the karst hotels.",
    videoClips: [
      { timestamp: "05:15", videoTitle: "The Three Natural Bridges", creator: "Wild Life Asia" },
      { timestamp: "12:30", videoTitle: "Inside the Sinkhole", creator: "Far Corners" },
    ],
  },
  {
    id: "yangtze-cruise",
    name: "Yangtze Three Gorges",
    nameZh: "长江三峡",
    pinyin: "Cháng Jiāng Sān Xiá",
    mapX: 460,
    mapY: 340,
    glyph: "峡",
    labelExtra: "+4–5 day cruise",
    prose:
      "The cruise that begins (or ends) in Chongqing — four to five days down the Yangtze through the gorges to Yichang. Boats leave most evenings from Chaotianmen pier. Pick a smaller boat for sundeck space; the bigger ones are floating hotels with limited views.",
    videoClips: [
      { timestamp: "06:00", videoTitle: "Through the Wu Gorge", creator: "Slow Travel China" },
      { timestamp: "12:00", videoTitle: "Boarding at Chaotianmen", creator: "Far Corners" },
    ],
  },
];
