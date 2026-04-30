import type { POI } from "./poi";

export const lhasaPOIs: POI[] = [
  {
    id: "potala-palace",
    name: "Potala Palace",
    nameZh: "布达拉宫",
    pinyin: "Bùdálāgōng",
    mapX: 305,
    mapY: 205,
    glyph: "宫",
    labelLeft: true,
    prose:
      "The thirteen-story winter palace of the Dalai Lamas, built into the side of Red Hill at 3,700 m. Tickets are released by quota at 7 am the previous day; queue early or book through your guide. Inside, the gilded chambers go on for what feels like hours.",
    videoClips: [
      { timestamp: "02:30", videoTitle: "Sunrise at the Potala Palace", creator: "Far Corners" },
      { timestamp: "08:15", videoTitle: "Inside the Red Palace", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "jokhang-temple",
    name: "Jokhang Temple",
    nameZh: "大昭寺",
    pinyin: "Dàzhāosì",
    mapX: 380,
    mapY: 220,
    glyph: "昭",
    prose:
      "The spiritual heart of Tibet — pilgrims prostrate themselves on the flagstones in front from before sunrise. The 7th-century main hall holds the Jowo Sakyamuni statue, the most sacred Buddhist object in Tibet. Visit at 6 am with the pilgrims for the real version.",
    videoClips: [
      { timestamp: "01:50", videoTitle: "Pilgrims at Jokhang at Sunrise", creator: "Far Corners" },
      { timestamp: "07:40", videoTitle: "Inside the Main Hall", creator: "Mira Lin" },
    ],
  },
  {
    id: "barkhor-street",
    name: "Barkhor Street",
    nameZh: "八廓街",
    pinyin: "Bākuòjiē",
    mapX: 395,
    mapY: 245,
    glyph: "街",
    labelRight: true,
    prose:
      "The clockwise circumambulation route around the Jokhang — pilgrims with prayer wheels, traders selling turquoise, monks in burgundy robes. Walk it at least once at dawn; the energy is unlike anywhere else. Tea houses ring the second row of buildings.",
    videoClips: [
      { timestamp: "03:15", videoTitle: "Walking the Barkhor at Dawn", creator: "Slow Travel China" },
      { timestamp: "09:00", videoTitle: "Inside a Pilgrim Teahouse", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "norbulingka",
    name: "Norbulingka",
    nameZh: "罗布林卡",
    pinyin: "Luóbùlínkǎ",
    mapX: 215,
    mapY: 235,
    glyph: "园",
    labelLeft: true,
    prose:
      "The Dalai Lamas' summer palace and its 360,000 m² of gardens — willows, ornamental ponds, and pavilions where the 14th Dalai Lama played as a child. Tibetans picnic here in July for the Shoton (yogurt) Festival; otherwise it's a quiet afternoon walk.",
    videoClips: [
      { timestamp: "04:20", videoTitle: "Inside the Summer Palace", creator: "Far Corners" },
      { timestamp: "10:30", videoTitle: "Shoton Festival at Norbulingka", creator: "Wild Life Asia" },
    ],
  },
  {
    id: "sera-monastery",
    name: "Sera Monastery",
    nameZh: "色拉寺",
    pinyin: "Sèlāsì",
    mapX: 400,
    mapY: 110,
    glyph: "色",
    labelExtra: "+half day",
    labelRight: true,
    prose:
      "The 'great three' Gelug monastery north of Lhasa, famous for the afternoon monk debates — 200 monks gathered in the courtyard, clapping, slapping prayer beads, shouting questions at one another. Daily 3 to 5 pm, except Sundays.",
    videoClips: [
      { timestamp: "02:55", videoTitle: "Sera Monk Debates", creator: "Far Corners" },
      { timestamp: "08:30", videoTitle: "Inside Sera's Halls", creator: "Roads & Kingdoms" },
    ],
  },
  {
    id: "drepung-monastery",
    name: "Drepung Monastery",
    nameZh: "哲蚌寺",
    pinyin: "Zhébàngsì",
    mapX: 195,
    mapY: 115,
    glyph: "哲",
    labelExtra: "+half day",
    labelLeft: true,
    prose:
      "Once the largest monastery in the world (over 10,000 monks), now home to a few hundred. White-walled buildings stack up the hillside above Lhasa. Climb to the top for the city view. Combine with Sera in a single day if you have a guide and a car.",
    videoClips: [
      { timestamp: "03:40", videoTitle: "Climbing Drepung", creator: "Wild Life Asia" },
      { timestamp: "09:50", videoTitle: "Inside the Main Assembly Hall", creator: "Far Corners" },
    ],
  },
  {
    id: "yamdrok-lake",
    name: "Yamdrok Lake",
    nameZh: "羊湖",
    pinyin: "Yánghú",
    mapX: 390,
    mapY: 340,
    glyph: "羊",
    labelExtra: "+1 day",
    prose:
      "One of the three sacred lakes of Tibet — a 638 km² turquoise stretch behind the Khampa-La pass at 4,990 m. The drive over the pass is itself the experience. Don't go between November and April; the road is sometimes closed for snow.",
    videoClips: [
      { timestamp: "04:00", videoTitle: "Yamdrok from Khampa-La Pass", creator: "Wild Life Asia" },
      { timestamp: "11:15", videoTitle: "The Drive Up", creator: "Far Corners" },
    ],
  },
  {
    id: "namtso-lake",
    name: "Namtso Lake",
    nameZh: "纳木错",
    pinyin: "Nàmùcuò",
    mapX: 165,
    mapY: 330,
    glyph: "纳",
    labelExtra: "+2 days",
    labelLeft: true,
    prose:
      "The highest saltwater lake in the world (4,718 m), accessible from Lhasa via the 5,190 m Lakenla Pass. Stay overnight at the basic lakeside guesthouses for stargazing — there's almost no light pollution at this altitude. Closed in winter.",
    videoClips: [
      { timestamp: "05:30", videoTitle: "Stargazing at Namtso", creator: "Wild Life Asia" },
      { timestamp: "12:00", videoTitle: "The Lakenla Pass", creator: "Far Corners" },
    ],
  },
];
