import type { POI } from "./poi";

export const zhangjiajiePOIs: POI[] = [
  {
    id: "tianzi-mountain",
    name: "Tianzi Mountain",
    nameZh: "天子山",
    pinyin: "Tiānzǐshān",
    mapX: 305,
    mapY: 200,
    glyph: "天",
    labelLeft: true,
    prose:
      "The flagship viewpoint of Wulingyuan — a maze of pillars and ridges seen from the cliff-top platforms. Cable car up, foot trails out to the edge. Sunrise at Yubi Peak is the canonical photo. Avoid public holidays unless you like queues for the cable car.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Sunrise at Tianzi Mountain", creator: "Far Corners" },
      { timestamp: "08:50", videoTitle: "The Yubi Peak Platform", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "yuanjiajie",
    name: "Hallelujah Mountain",
    nameZh: "袁家界",
    pinyin: "Yuánjiājiè",
    mapX: 365,
    mapY: 215,
    glyph: "悬",
    labelRight: true,
    prose:
      "The cluster of vertical sandstone pillars that became Pandora's hanging mountains in Avatar. Bailong Elevator drops you at the base; walk the rim trails for the iconic views. Crowds are heaviest 10 am to 2 pm — sleep in the park and shoot at sunrise.",
    videoClips: [
      { timestamp: "03:45", videoTitle: "Walking the Avatar Rim", creator: "Far Corners" },
      { timestamp: "10:20", videoTitle: "Inside Pandora", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "golden-whip-stream",
    name: "Golden Whip Stream",
    nameZh: "金鞭溪",
    pinyin: "Jīnbiān Xī",
    mapX: 320,
    mapY: 285,
    glyph: "溪",
    labelLeft: true,
    prose:
      "The 7.5 km valley walk along the bottom of Wulingyuan, between the pillars rather than above them — completely different angle on the landscape. Wild macaques along the path; don't bring food in plain sight. Two-and-a-half hours start to finish, mostly flat.",
    videoClips: [
      { timestamp: "04:15", videoTitle: "Walking the Golden Whip", creator: "Wild Life Asia" },
      { timestamp: "11:40", videoTitle: "Macaques in the Valley", creator: "Far Corners" },
    ],
  },
  {
    id: "tianmen-mountain",
    name: "Tianmen Mountain",
    nameZh: "天门山",
    pinyin: "Tiānménshān",
    mapX: 535,
    mapY: 215,
    glyph: "门",
    labelAbove: true,
    prose:
      "A separate mountain south of the city, defined by the natural arch (Heaven's Door) you reach by climbing 999 steps. The world's longest cable car runs from the city centre to the top; the descent winds along 99 hairpin turns by bus.",
    videoClips: [
      { timestamp: "03:00", videoTitle: "Tianmen Cable Car", creator: "Far Corners" },
      { timestamp: "09:30", videoTitle: "Climbing to Heaven's Door", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "glass-bridge",
    name: "Grand Canyon Glass Bridge",
    nameZh: "大峡谷玻璃桥",
    pinyin: "Dà Xiágǔ Bōli Qiáo",
    mapX: 425,
    mapY: 305,
    glyph: "桥",
    labelRight: true,
    prose:
      "The 430 m glass-bottom bridge spanning the Zhangjiajie Grand Canyon at 300 m above the valley floor. Numbers go to 800 visitors at a time; book a slot at least a day ahead. Combine with the canyon's elevator-and-trail hike for a half-day.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Walking the Glass Bridge", creator: "Wild Life Asia" },
      { timestamp: "09:50", videoTitle: "Below the Bridge", creator: "Far Corners" },
    ],
  },
  {
    id: "bailong-elevator",
    name: "Bailong Elevator",
    nameZh: "百龙天梯",
    pinyin: "Bǎilóng Tiāntī",
    mapX: 410,
    mapY: 165,
    glyph: "梯",
    labelRight: true,
    labelAbove: true,
    prose:
      "The world's tallest outdoor sightseeing elevator — 326 m up the side of a sandstone cliff in less than two minutes. Heavy queues at peak; fast track if you book ahead. Some people walk up the steps instead — it's 4,000 of them, two hours, and free.",
    videoClips: [
      { timestamp: "01:55", videoTitle: "Up the Bailong Elevator", creator: "Far Corners" },
      { timestamp: "06:20", videoTitle: "The Stairs Up the Cliff", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "wulingyuan",
    name: "Wulingyuan Scenic Area",
    nameZh: "武陵源",
    pinyin: "Wǔlíngyuán",
    mapX: 235,
    mapY: 130,
    glyph: "陵",
    labelLeft: true,
    prose:
      "The UNESCO-listed core that contains Tianzi, Yuanjiajie, and the Golden Whip — 397 km², over 3,000 sandstone columns, and a multi-day ticket that lets you re-enter. Stay inside the park gates rather than the city for sunrise access.",
    videoClips: [
      { timestamp: "05:00", videoTitle: "Inside Wulingyuan", creator: "Far Corners" },
      { timestamp: "12:10", videoTitle: "Three Days in the Park", creator: "Slow Travel China" },
    ],
  },
  {
    id: "furong-town",
    name: "Furong Town",
    nameZh: "芙蓉镇",
    pinyin: "Fúróng Zhèn",
    mapX: 130,
    mapY: 305,
    glyph: "镇",
    labelExtra: "+1 day",
    prose:
      "A 2,000-year-old Tujia-minority town built around a 60 m waterfall — stone houses on stilts above the cascade, cobbled main street, far less polished than the major scenic spots. Two hours from Zhangjiajie city by bus. Stay overnight for the lit waterfall.",
    videoClips: [
      { timestamp: "03:35", videoTitle: "Furong Town at Night", creator: "Slow Travel China" },
      { timestamp: "10:00", videoTitle: "Inside the Waterfall Town", creator: "Roads & Kingdoms" },
    ],
  },
];
