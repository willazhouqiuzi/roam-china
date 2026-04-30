import type { POI } from "./poi";

export const beijingPOIs: POI[] = [
  {
    id: "forbidden-city",
    name: "Forbidden City",
    nameZh: "紫禁城",
    pinyin: "Zǐjìnchéng",
    mapX: 340,
    mapY: 230,
    glyph: "紫",
    prose:
      "Pass under the giant portrait of Mao and the city reveals itself in stages — marble bridges, a courtyard wider than three football fields, the Hall of Supreme Harmony at the back. Stick to the central axis if you only have a morning, then loop east through the inner courts where the emperors actually lived. The roof tiles are imperial yellow because nobody else was allowed to use them. Buy tickets a week ahead — they cap entries at 80,000 a day and weekends sell out by noon.",
    videoClips: [
      { timestamp: "01:25", videoTitle: "Inside the Forbidden City", creator: "Henry Sun" },
      { timestamp: "08:40", videoTitle: "How to Walk the Imperial Axis", creator: "Far Corners" },
    ],
  },
  {
    id: "tiananmen",
    name: "Tiananmen Square",
    nameZh: "天安门广场",
    pinyin: "Tiān'ānmén Guǎngchǎng",
    mapX: 340,
    mapY: 295,
    glyph: "天",
    prose:
      "Stand in the middle of the square at sunrise, when the flag-raising ceremony pulls a crowd that has been waiting since four. The square is the largest in the world and you'll feel it: National Museum to the east, Great Hall to the west, Mao's mausoleum directly south. Bring your passport — the entry checkpoints are real. Linger long enough to watch the kites, but don't expect any benches.",
    videoClips: [
      { timestamp: "00:05", videoTitle: "Sunrise Flag Raising at Tiananmen", creator: "Henry Sun" },
      { timestamp: "04:50", videoTitle: "A Walk Across the Square", creator: "Yuxi Travels" },
    ],
  },
  {
    id: "temple-heaven",
    name: "Temple of Heaven",
    nameZh: "天坛",
    pinyin: "Tiāntán",
    mapX: 410,
    mapY: 360,
    glyph: "天",
    prose:
      "The blue-roofed Hall of Prayer for Good Harvests is the icon, but the park around it is the experience. Locals arrive at dawn — fan dancers in the long corridor, calligraphers writing characters with water on the flagstones, retirees swinging through the cypresses on calisthenics bars. The acoustic walls of the Echo Wall actually work. Save the temple itself for last and enter through the south gate so you walk in along the imperial axis.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Morning Tai Chi at Temple of Heaven", creator: "Slow Travel China" },
      { timestamp: "09:15", videoTitle: "Inside the Hall of Prayer", creator: "Far Corners" },
    ],
  },
  {
    id: "summer-palace",
    name: "Summer Palace",
    nameZh: "颐和园",
    pinyin: "Yíhéyuán",
    mapX: 130,
    mapY: 110,
    glyph: "颐",
    prose:
      "Empress Cixi's lake retreat — Kunming Lake on one side, Longevity Hill on the other, the longest covered corridor in the world tying them together. Rent a paddleboat in summer or skate the frozen lake in January. Don't miss the Marble Boat at the western edge: a folly built with money meant for the navy. Plan three hours minimum. Half a day if the weather is good.",
    videoClips: [
      { timestamp: "03:55", videoTitle: "A Boat Across Kunming Lake", creator: "Mira Lin" },
      { timestamp: "11:00", videoTitle: "The Long Corridor", creator: "Henry Sun" },
    ],
  },
  {
    id: "great-wall",
    name: "Mutianyu Great Wall",
    nameZh: "慕田峪长城",
    pinyin: "Mùtiányù Chángchéng",
    mapX: 540,
    mapY: 70,
    glyph: "长",
    prose:
      "The Wall most people picture when they say 'the Wall' — restored, photogenic, less mobbed than Badaling. Take the cable car up to tower 14 and walk east toward 23 if you want quiet, west toward 6 if you want the toboggan ride down. Wear real shoes; the steps are uneven and very steep at certain spots. Go in November or April, when the haze lifts and you can see the wall snake to the horizon.",
    videoClips: [
      { timestamp: "01:10", videoTitle: "Mutianyu in November", creator: "Far Corners" },
      { timestamp: "06:45", videoTitle: "The Toboggan Down the Wall", creator: "Yuxi Travels" },
    ],
    labelExtra: "+half day trip",
  },
  {
    id: "798",
    name: "798 Art District",
    nameZh: "798艺术区",
    pinyin: "Qī Jiǔ Bā Yìshùqū",
    mapX: 560,
    mapY: 200,
    glyph: "艺",
    prose:
      "Disused Bauhaus-style electronics factories from the 1950s, now galleries, bookstores, and coffee shops. Walk the central avenue first, then duck into the side streets where the rents are cheaper and the shows are stranger. UCCA is the anchor — pay the entry, see what's on. The pipes overhead still carry their original Mao-era slogans; read them in the better-lit cafés.",
    videoClips: [
      { timestamp: "02:18", videoTitle: "A Saturday in 798", creator: "Roads & Kingdoms" },
      { timestamp: "07:50", videoTitle: "Inside UCCA", creator: "Mira Lin" },
    ],
  },
  {
    id: "hutong",
    name: "Nanluoguxiang Hutong",
    nameZh: "南锣鼓巷",
    pinyin: "Nánluógǔxiàng",
    mapX: 280,
    mapY: 175,
    glyph: "胡",
    labelAbove: true,
    prose:
      "A north-south spine of grey-brick courtyards converted into cafés, sock shops, and snack stalls. Don't stay on the main street; walk into any of the perpendicular alleys to find what's actually old. The Drum Tower is a five-minute walk north, the lake at Houhai a few minutes northwest. Best in the late afternoon, when the light is low and the day-trippers have left.",
    videoClips: [
      { timestamp: "04:08", videoTitle: "An Afternoon in Nanluoguxiang", creator: "Yuxi Travels" },
      { timestamp: "10:30", videoTitle: "The Quiet Alleys Off the Main Street", creator: "Slow Travel China" },
    ],
  },
  {
    id: "peking-duck",
    name: "Peking Duck",
    nameZh: "四季民福",
    pinyin: "Sìjì Mínfú",
    mapX: 405,
    mapY: 275,
    glyph: "鸭",
    prose:
      "Siji Minfu is the duck most Beijingers recommend if you press them — roasted in a wood-fired oven, sliced tableside, wrapped in flour pancakes with scallions and hoisin. Book a day ahead; they don't take walk-ins at peak times. Order half a duck if you're two, and the duck-bone soup that comes after. The branch nearest the Forbidden City slots easily into a walking afternoon.",
    videoClips: [
      { timestamp: "00:45", videoTitle: "Slicing Peking Duck Tableside", creator: "The Hot Plate" },
      { timestamp: "08:20", videoTitle: "Why Siji Minfu Is the One", creator: "The Hot Plate" },
    ],
  },
];
