import type { POI } from "./poi";

export const kunmingPOIs: POI[] = [
  {
    id: "green-lake-park",
    name: "Green Lake Park",
    nameZh: "翠湖公园",
    pinyin: "Cuìhú Gōngyuán",
    mapX: 320,
    mapY: 200,
    glyph: "翠",
    labelLeft: true,
    prose:
      "A central lake park surrounded by old plane trees and crumbling concession-era villas. Black-headed gulls migrate here from Siberia in November and stay until March — locals feed them every afternoon. Tea houses on the western shore are the locals' Sunday spot.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Black-headed Gulls at Green Lake", creator: "Wild Life Asia" },
      { timestamp: "07:50", videoTitle: "An Afternoon at the Tea House", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "yuantong-temple",
    name: "Yuantong Temple",
    nameZh: "圆通寺",
    pinyin: "Yuántōngsì",
    mapX: 360,
    mapY: 195,
    glyph: "圆",
    labelRight: true,
    prose:
      "Kunming's oldest Buddhist temple, built in the Tang dynasty around the bowl of a karst depression. Pavilions sit on stilts in a central pond, reached by zigzag bridges. Free entry on Buddhist holidays — go on the eighth lunar day for the bell-and-drum service.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Inside Yuantong Temple", creator: "Far Corners" },
      { timestamp: "08:40", videoTitle: "The Bell-and-Drum Service", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "dianchi-lake",
    name: "Dianchi Lake",
    nameZh: "滇池",
    pinyin: "Diānchí",
    mapX: 285,
    mapY: 305,
    glyph: "滇",
    labelLeft: true,
    prose:
      "The 300 km² lake south of Kunming — once a clear-water gem, now slowly recovering from algae blooms. The Haigeng Park promenade is best for a winter walk; the gulls overwinter on the shore. Bring binoculars; the western hills across the lake hold Western Hills's white temple.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Dianchi in Winter", creator: "Mira Lin" },
      { timestamp: "10:00", videoTitle: "The Lake's Northern Shore", creator: "Slow Travel China" },
    ],
  },
  {
    id: "western-hills",
    name: "Western Hills",
    nameZh: "西山",
    pinyin: "Xīshān",
    mapX: 175,
    mapY: 270,
    glyph: "西",
    labelLeft: true,
    prose:
      "A 2,500 m ridge above Dianchi Lake — temples carved into cliffs, the famous Dragon Gate viewpoint at the top. Cable car up, two hours of walking along the Buddha-carved path back down. Best on weekday mornings when the haze hasn't built yet.",
    videoClips: [
      { timestamp: "03:30", videoTitle: "The Dragon Gate Viewpoint", creator: "Far Corners" },
      { timestamp: "09:20", videoTitle: "Walking the Carved Cliff Path", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "stone-forest",
    name: "Stone Forest",
    nameZh: "石林",
    pinyin: "Shílín",
    mapX: 530,
    mapY: 215,
    glyph: "林",
    labelExtra: "+1 day",
    prose:
      "An eerie field of black karst pinnacles 80 km southeast of Kunming, formed when a Permian-era seabed lifted and weathered. Touristy but legitimately strange — the bigger pinnacles tower 30 m. Stay on the back trails to escape the tour buses.",
    videoClips: [
      { timestamp: "02:55", videoTitle: "Inside the Stone Forest", creator: "Wild Life Asia" },
      { timestamp: "08:00", videoTitle: "The Back Trails", creator: "Far Corners" },
    ],
  },
  {
    id: "flower-market",
    name: "Dounan Flower Market",
    nameZh: "斗南花市",
    pinyin: "Dòunán Huāshì",
    mapX: 405,
    mapY: 305,
    glyph: "花",
    labelRight: true,
    prose:
      "The largest flower market in Asia, 20 km south of Kunming — wholesale auction halls, retail stalls, ten million stems traded a day. The auction is at 3 pm but the retail floor is open from 6 pm into the night, when stems sell off-floor at end-of-day prices.",
    videoClips: [
      { timestamp: "03:25", videoTitle: "Inside Dounan at Night", creator: "The Hot Plate" },
      { timestamp: "09:30", videoTitle: "The 3 pm Auction", creator: "Far Corners" },
    ],
  },
  {
    id: "kunming-black-dragon",
    name: "Black Dragon Pool Park",
    nameZh: "黑龙潭公园",
    pinyin: "Hēilóngtán",
    mapX: 290,
    mapY: 95,
    glyph: "龙",
    labelExtra: "+half day",
    prose:
      "Not the Lijiang one — Kunming has its own Black Dragon Pool, a Ming-era spring and Daoist temple complex 12 km north of the city. Plum blossoms in February are the draw. Pair with the nearby Botanical Garden for a half-day.",
    videoClips: [
      { timestamp: "02:10", videoTitle: "Plum Blossoms at Black Dragon Pool", creator: "Wild Life Asia" },
      { timestamp: "07:00", videoTitle: "Inside the Daoist Temple", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "yuanyang-rice-terraces",
    name: "Yuanyang Rice Terraces",
    nameZh: "元阳梯田",
    pinyin: "Yuányáng Tītián",
    mapX: 330,
    mapY: 360,
    glyph: "梯",
    labelExtra: "+2 days",
    prose:
      "The most photographed terraces in China — Hani-minority villages that have farmed these slopes for 1,300 years. Six hours south of Kunming by car. Best in January and February when the fields are flooded for the new season; the sunset reflections are unreal.",
    videoClips: [
      { timestamp: "05:45", videoTitle: "Yuanyang at Sunset", creator: "Far Corners" },
      { timestamp: "11:30", videoTitle: "Inside a Hani Village", creator: "Slow Travel China" },
    ],
  },
];
