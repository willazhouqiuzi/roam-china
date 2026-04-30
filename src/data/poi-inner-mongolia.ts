import type { POI } from "./poi";

export const innerMongoliaPOIs: POI[] = [
  {
    id: "xilamuren",
    name: "Xilamuren Grassland",
    nameZh: "希拉穆仁草原",
    pinyin: "Xīlāmùrén Cǎoyuán",
    mapX: 340,
    mapY: 180,
    glyph: "草",
    prose:
      "The closest grassland to Hohhot — green from June to August, with yurt camps, horseback rides, and the occasional Naadam festival. Touristy but beginner-friendly.",
    videoClips: [
      { timestamp: "03:10", videoTitle: "A Day on the Grassland", creator: "Slow China" },
      { timestamp: "08:30", videoTitle: "Naadam Wrestling", creator: "Henry Sun" },
    ],
  },
  {
    id: "huitengxile",
    name: "Huitengxile Grassland",
    nameZh: "辉腾锡勒草原",
    pinyin: "Huīténgxīlè Cǎoyuán",
    mapX: 260,
    mapY: 165,
    glyph: "腾",
    labelLeft: true,
    prose:
      "Higher and wilder than Xilamuren — rolling hills, dozens of small lakes, fewer tour buses. Sheep dot every horizon.",
    videoClips: [
      { timestamp: "04:30", videoTitle: "The Lakes of Huitengxile", creator: "Far Out Travel" },
      { timestamp: "10:50", videoTitle: "A Quiet Yurt Stay", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "genghis-mausoleum",
    name: "Genghis Khan Mausoleum",
    nameZh: "成吉思汗陵",
    pinyin: "Chéngjísīhán Líng",
    mapX: 310,
    mapY: 245,
    glyph: "陵",
    prose:
      "A symbolic burial site (no one knows where Genghis is actually buried) on the Ordos plateau. Three blue-roofed yurt-shaped halls, with daily ceremonial offerings.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "The Mausoleum Ceremony", creator: "Slow China" },
      { timestamp: "10:00", videoTitle: "Genghis's Real Resting Place", creator: "Far Out Travel" },
    ],
  },
  {
    id: "resonant-sand-bay",
    name: "Resonant Sand Bay",
    nameZh: "响沙湾",
    pinyin: "Xiǎngshā Wān",
    mapX: 260,
    mapY: 285,
    glyph: "沙",
    labelAbove: true,
    prose:
      "Singing dunes in the Kubuqi desert — when the sand slides, it hums. Camel trains, sand-boarding, and a desert-art camp at the edge.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "The Singing Dunes", creator: "Henry Sun" },
      { timestamp: "09:20", videoTitle: "Camel Train at Sunrise", creator: "WildlifeCN" },
    ],
  },
  {
    id: "dazhao-temple",
    name: "Dazhao Temple",
    nameZh: "大召寺",
    pinyin: "Dàzhào Sì",
    mapX: 350,
    mapY: 215,
    glyph: "召",
    prose:
      "Hohhot's oldest temple, built 1580 — a Mongolian-style Tibetan Buddhist hall with a silver Buddha and walls of cabinet-stored prayer scrolls.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "Inside Dazhao", creator: "Slow China" },
      { timestamp: "08:45", videoTitle: "Hohhot's Old Quarter", creator: "Henry Sun" },
    ],
  },
  {
    id: "ic-museum",
    name: "Inner Mongolia Museum",
    nameZh: "内蒙古博物院",
    pinyin: "Nèiměnggǔ Bówùyuàn",
    mapX: 380,
    mapY: 220,
    glyph: "博",
    labelAbove: true,
    prose:
      "Mongolia's full sweep, from Xiongnu burials to dinosaur fossils to a 7-meter mammoth skeleton. The grassland-people exhibit is beautifully done.",
    videoClips: [
      { timestamp: "05:30", videoTitle: "Inside the Mongolia Museum", creator: "Henry Sun" },
      { timestamp: "12:00", videoTitle: "Xiongnu Bronze Treasures", creator: "Slow China" },
    ],
  },
  {
    id: "hailar",
    name: "Hailar Grasslands",
    nameZh: "海拉尔草原",
    pinyin: "Hǎilā'ěr Cǎoyuán",
    mapX: 560,
    mapY: 100,
    glyph: "海",
    labelLeft: true,
    prose:
      "The far northeast Mongolian grasslands — endless green, herds of horses, almost no tourists. Closer to Russia than to Beijing.",
    videoClips: [
      { timestamp: "06:00", videoTitle: "Hailar in High Summer", creator: "Far Out Travel" },
      { timestamp: "13:30", videoTitle: "Sunrise Herd", creator: "WildlifeCN" },
    ],
  },
  {
    id: "ordos",
    name: "Ordos",
    nameZh: "鄂尔多斯",
    pinyin: "È'ěrduōsī",
    mapX: 290,
    mapY: 255,
    glyph: "鄂",
    labelAbove: true,
    prose:
      "The famous \"ghost city\" Kangbashi has slowly filled in — a high-modernist showpiece on the desert. Worth a half-day if you're in the region.",
    videoClips: [
      { timestamp: "04:15", videoTitle: "Kangbashi, A Decade Later", creator: "Henry Sun" },
      { timestamp: "10:20", videoTitle: "Ordos Modern Architecture", creator: "Slow China" },
    ],
  },
];
