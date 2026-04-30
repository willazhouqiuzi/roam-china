// scripts/fetch-unsplash-pois.mjs
//
// Fetches one photo per POI from Unsplash and saves to
// public/images/pois/{city}-{poi}.jpg.
// Attribution stored in src/data/poi-image-attribution.json keyed "{city}/{poi}".
//
// CLI:
//   node scripts/fetch-unsplash-pois.mjs                 # all configured POIs
//   node scripts/fetch-unsplash-pois.mjs default         # one per city (the
//                                                          city map's default POI)
//   node scripts/fetch-unsplash-pois.mjs only beijing    # all POIs in beijing
//
// Rate limit: Unsplash demo apps are 50 req/hour. Each POI = 1 search call
// = 1 API request. 18 default POIs fits comfortably; 144 total POIs needs
// 3 batches across 3 hours.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Buffer } from "node:buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

function loadEnv() {
  const envPath = path.resolve(ROOT, ".env.local");
  const raw = fs.readFileSync(envPath, "utf8");
  const env = {};
  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

const ACCESS_KEY = loadEnv().UNSPLASH_ACCESS_KEY;
if (!ACCESS_KEY) {
  console.error("ERROR: UNSPLASH_ACCESS_KEY missing");
  process.exit(1);
}

// All POIs across 18 cities, with an Unsplash-ready search query for each.
// Default-POI rows come first per city for prioritisation; total = 144.
const ALL_POIS = [
  // Beijing
  { city: "beijing", poi: "forbidden-city", query: "Forbidden City Beijing" },
  { city: "beijing", poi: "tiananmen", query: "Tiananmen Square Beijing" },
  { city: "beijing", poi: "temple-heaven", query: "Temple of Heaven Beijing" },
  { city: "beijing", poi: "summer-palace", query: "Summer Palace Beijing" },
  { city: "beijing", poi: "great-wall", query: "Mutianyu Great Wall" },
  { city: "beijing", poi: "798", query: "798 Art District Beijing" },
  { city: "beijing", poi: "hutong", query: "Beijing hutong alley" },
  { city: "beijing", poi: "peking-duck", query: "Peking duck slicing" },

  // Chengdu
  { city: "chengdu", poi: "park", query: "Chengdu People's Park tea house" },
  { city: "chengdu", poi: "panda", query: "Chengdu Panda Base" },
  { city: "chengdu", poi: "kuanzhai", query: "Kuanzhai Alley Chengdu" },
  { city: "chengdu", poi: "wuhou", query: "Wuhou Shrine Jinli Chengdu" },
  { city: "chengdu", poi: "hotpot", query: "hotpot Chengdu" },
  { city: "chengdu", poi: "taikoo", query: "Taikoo Li Chengdu Daci Temple" },
  { city: "chengdu", poi: "dongjiao", query: "Chengdu art district" },
  { city: "chengdu", poi: "qingcheng", query: "Mount Qingcheng" },

  // Shanghai
  { city: "shanghai", poi: "bund", query: "Shanghai Bund" },
  { city: "shanghai", poi: "lujiazui", query: "Shanghai Lujiazui Pudong skyscraper" },
  { city: "shanghai", poi: "yu-garden", query: "Yu Garden Shanghai" },
  { city: "shanghai", poi: "nanjing-road", query: "Nanjing Road Shanghai" },
  { city: "shanghai", poi: "shanghai-museum", query: "Chinese ancient bronze museum" },
  { city: "shanghai", poi: "french-concession", query: "Shanghai French Concession plane trees" },
  { city: "shanghai", poi: "tianzifang", query: "Tianzifang Shanghai alley" },
  { city: "shanghai", poi: "m50", query: "Shanghai M50 art" },

  // Xi'an
  { city: "xian", poi: "bell-tower", query: "Xian Bell Tower" },
  { city: "xian", poi: "muslim-quarter", query: "Xian Muslim Quarter food street" },
  { city: "xian", poi: "terracotta-army", query: "Terracotta Army Xian" },
  { city: "xian", poi: "wild-goose-pagoda", query: "Chinese pagoda Xian" },
  { city: "xian", poi: "shaanxi-museum", query: "Tang dynasty artifact" },
  { city: "xian", poi: "tang-paradise", query: "Tang Paradise Xian night" },
  { city: "xian", poi: "han-yang-ling", query: "Han Yang Ling Xian" },
  { city: "xian", poi: "mt-hua", query: "Mount Hua sacred peak China" },

  // Hangzhou
  { city: "hangzhou", poi: "west-lake", query: "Hangzhou West Lake" },
  { city: "hangzhou", poi: "su-causeway", query: "Hangzhou West Lake Su Causeway" },
  { city: "hangzhou", poi: "bai-causeway", query: "West Lake Hangzhou bridge" },
  { city: "hangzhou", poi: "leifeng-pagoda", query: "Leifeng Pagoda Hangzhou" },
  { city: "hangzhou", poi: "lingyin-temple", query: "Lingyin Temple Hangzhou" },
  { city: "hangzhou", poi: "longjing", query: "Longjing tea village Hangzhou" },
  { city: "hangzhou", poi: "hefang-street", query: "Hangzhou old street" },
  { city: "hangzhou", poi: "six-harmonies", query: "Hangzhou pagoda" },

  // Guilin
  { city: "guilin", poi: "elephant-trunk-hill", query: "Elephant Trunk Hill Guilin" },
  { city: "guilin", poi: "sun-moon-pagodas", query: "Guilin Sun Moon Pagodas night" },
  { city: "guilin", poi: "solitary-beauty-peak", query: "Guilin park lake" },
  { city: "guilin", poi: "reed-flute-cave", query: "Reed Flute Cave Guilin" },
  { city: "guilin", poi: "yao-mountain", query: "Yao Mountain Guilin karst view" },
  { city: "guilin", poi: "two-rivers-four-lakes", query: "Guilin lake pagoda night" },
  { city: "guilin", poi: "longji-rice-terraces", query: "rice terraces China" },
  { city: "guilin", poi: "daxu-old-town", query: "Daxu old town Guilin" },

  // Lijiang
  { city: "lijiang", poi: "old-town", query: "Lijiang old town" },
  { city: "lijiang", poi: "black-dragon-pool", query: "Lijiang Black Dragon Pool snow mountain" },
  { city: "lijiang", poi: "mu-mansion", query: "Mu Family Mansion Lijiang" },
  { city: "lijiang", poi: "sifang-square", query: "Lijiang lantern night" },
  { city: "lijiang", poi: "jade-dragon", query: "Jade Dragon Snow Mountain" },
  { city: "lijiang", poi: "tiger-leaping-gorge", query: "Yunnan canyon river" },
  { city: "lijiang", poi: "baisha-old-town", query: "Baisha old town Yunnan" },
  { city: "lijiang", poi: "lashi-lake", query: "Yunnan lake horse" },

  // Dali
  { city: "dali", poi: "old-town", query: "Dali old town Yunnan" },
  { city: "dali", poi: "erhai-lake", query: "Erhai Lake Dali" },
  { city: "dali", poi: "three-pagodas", query: "Three Pagodas Dali" },
  { city: "dali", poi: "cangshan", query: "Cangshan mountain Dali" },
  { city: "dali", poi: "shuanglang", query: "Yunnan lakeside" },
  { city: "dali", poi: "xizhou", query: "Yunnan traditional courtyard" },
  { city: "dali", poi: "butterfly-spring", query: "Butterfly Spring Dali" },
  { city: "dali", poi: "east-coast-cycling", query: "Erhai Lake cycling" },

  // Suzhou
  { city: "suzhou", poi: "humble-administrator", query: "Humble Administrator Garden Suzhou" },
  { city: "suzhou", poi: "lingering-garden", query: "Lingering Garden Suzhou" },
  { city: "suzhou", poi: "master-of-nets", query: "Suzhou garden pavilion" },
  { city: "suzhou", poi: "tiger-hill", query: "Suzhou pagoda hill" },
  { city: "suzhou", poi: "pingjiang-road", query: "Suzhou canal water town" },
  { city: "suzhou", poi: "silk-museum", query: "Chinese silk fabric" },
  { city: "suzhou", poi: "hanshan-temple", query: "苏州寒山寺" },
  { city: "suzhou", poi: "tongli", query: "Tongli water town" },

  // Lhasa
  { city: "lhasa", poi: "potala-palace", query: "Potala Palace Lhasa" },
  { city: "lhasa", poi: "jokhang-temple", query: "Jokhang Temple Lhasa pilgrim" },
  { city: "lhasa", poi: "barkhor-street", query: "Barkhor Street Lhasa" },
  { city: "lhasa", poi: "norbulingka", query: "拉萨罗布林卡" },
  { city: "lhasa", poi: "sera-monastery", query: "Sera Monastery Lhasa monks debate" },
  { city: "lhasa", poi: "drepung-monastery", query: "Tibetan monastery hillside" },
  { city: "lhasa", poi: "yamdrok-lake", query: "Yamdrok Lake Tibet turquoise" },
  { city: "lhasa", poi: "namtso-lake", query: "Namtso Lake Tibet" },

  // Kunming
  { city: "kunming", poi: "green-lake-park", query: "Kunming park lake" },
  { city: "kunming", poi: "yuantong-temple", query: "昆明圆通寺" },
  { city: "kunming", poi: "dianchi-lake", query: "Dianchi Lake Kunming" },
  { city: "kunming", poi: "western-hills", query: "昆明西山" },
  { city: "kunming", poi: "stone-forest", query: "云南石林" },
  { city: "kunming", poi: "flower-market", query: "Yunnan flower market" },
  { city: "kunming", poi: "kunming-black-dragon", query: "Kunming Black Dragon Pool plum blossom" },
  { city: "kunming", poi: "yuanyang-rice-terraces", query: "Yuanyang rice terraces" },

  // Chongqing
  { city: "chongqing", poi: "hongya-cave", query: "Hongya Cave Chongqing" },
  { city: "chongqing", poi: "liziba-light-rail", query: "Chongqing Liziba light rail building" },
  { city: "chongqing", poi: "jiefangbei", query: "Chongqing Jiefangbei plaza night" },
  { city: "chongqing", poi: "ciqikou", query: "Ciqikou old town Chongqing" },
  { city: "chongqing", poi: "eling-park", query: "Chongqing skyline view" },
  { city: "chongqing", poi: "dazu-rock-carvings", query: "Dazu rock carvings Buddha" },
  { city: "chongqing", poi: "wulong-karst", query: "China natural bridge karst" },
  { city: "chongqing", poi: "yangtze-cruise", query: "Yangtze Three Gorges" },

  // Zhangjiajie
  { city: "zhangjiajie", poi: "tianzi-mountain", query: "Tianzi Mountain Zhangjiajie sunrise" },
  { city: "zhangjiajie", poi: "yuanjiajie", query: "Zhangjiajie Avatar mountains" },
  { city: "zhangjiajie", poi: "golden-whip-stream", query: "Golden Whip Stream Zhangjiajie" },
  { city: "zhangjiajie", poi: "tianmen-mountain", query: "Tianmen Mountain Heaven Door" },
  { city: "zhangjiajie", poi: "glass-bridge", query: "Zhangjiajie glass bridge canyon" },
  { city: "zhangjiajie", poi: "bailong-elevator", query: "Zhangjiajie cliff" },
  { city: "zhangjiajie", poi: "wulingyuan", query: "Wulingyuan park sandstone" },
  { city: "zhangjiajie", poi: "furong-town", query: "湖南芙蓉镇瀑布" },

  // Yangshuo
  { city: "yangshuo", poi: "yulong-river", query: "Yulong River Yangshuo bamboo raft" },
  { city: "yangshuo", poi: "west-street", query: "Yangshuo street night" },
  { city: "yangshuo", poi: "moon-hill", query: "Moon Hill Yangshuo arch" },
  { city: "yangshuo", poi: "xianggong-mountain", query: "Xianggong mountain Li River sunrise" },
  { city: "yangshuo", poi: "shilihualang", query: "Yangshuo cycling karst" },
  { city: "yangshuo", poi: "big-banyan", query: "Yangshuo big banyan tree" },
  { city: "yangshuo", poi: "impression-sanjie", query: "Impression Liu Sanjie Li River" },
  { city: "yangshuo", poi: "yangshuo-park", query: "阳朔公园" },

  // Harbin
  { city: "harbin", poi: "saint-sophia", query: "Saint Sophia Cathedral Harbin" },
  { city: "harbin", poi: "central-avenue", query: "Harbin Russian architecture" },
  { city: "harbin", poi: "ice-snow-world", query: "Harbin ice and snow world" },
  { city: "harbin", poi: "sun-island", query: "snow sculpture festival" },
  { city: "harbin", poi: "songhua-river", query: "Songhua River winter" },
  { city: "harbin", poi: "harbin-beer", query: "Harbin beer factory" },
  { city: "harbin", poi: "volga-manor", query: "Harbin Volga Manor Russian" },
  { city: "harbin", poi: "tiger-park", query: "Siberian tiger snow" },

  // Qingdao
  { city: "qingdao", poi: "zhanqiao-pier", query: "Qingdao Zhanqiao pier pavilion" },
  { city: "qingdao", poi: "tsingtao-brewery", query: "Tsingtao brewery Qingdao" },
  { city: "qingdao", poi: "badaguan", query: "Badaguan Qingdao villa" },
  { city: "qingdao", poi: "st-michaels", query: "青岛天主教堂" },
  { city: "qingdao", poi: "old-town", query: "Qingdao old town red tile" },
  { city: "qingdao", poi: "may-fourth-square", query: "青岛五四广场" },
  { city: "qingdao", poi: "pichaiyuan", query: "青岛劈柴院" },
  { city: "qingdao", poi: "mt-lao", query: "Daoist mountain China" },

  // Xiamen
  { city: "xiamen", poi: "gulangyu", query: "Gulangyu island Xiamen" },
  { city: "xiamen", poi: "sunlight-rock", query: "鼓浪屿日光岩" },
  { city: "xiamen", poi: "nanputuo-temple", query: "厦门南普陀寺" },
  { city: "xiamen", poi: "xiamen-university", query: "Chinese university campus" },
  { city: "xiamen", poi: "zengcuoan", query: "厦门曾厝垵" },
  { city: "xiamen", poi: "hulishan-fort", query: "Hulishan fort Xiamen cannon" },
  { city: "xiamen", poi: "bailuzhou", query: "厦门白鹭洲" },
  { city: "xiamen", poi: "wuyuan-bay", query: "Xiamen sea park" },

  // Jiuzhaigou
  { city: "jiuzhaigou", poi: "five-coloured-pool", query: "Jiuzhaigou turquoise water" },
  { city: "jiuzhaigou", poi: "long-lake", query: "Jiuzhaigou Long Lake" },
  { city: "jiuzhaigou", poi: "pearl-shoals", query: "Jiuzhaigou waterfall" },
  { city: "jiuzhaigou", poi: "mirror-lake", query: "Jiuzhaigou Mirror Lake reflection" },
  { city: "jiuzhaigou", poi: "nuorilang-falls", query: "九寨沟诺日朗瀑布" },
  { city: "jiuzhaigou", poi: "tiger-lake", query: "Jiuzhaigou autumn lake" },
  { city: "jiuzhaigou", poi: "shuzheng-village", query: "Jiuzhaigou Tibetan village" },
  { city: "jiuzhaigou", poi: "huanglong", query: "Huanglong travertine pools" },

  // Xinjiang
  { city: "xinjiang", poi: "tianshan-tianchi", query: "天山天池" },
  { city: "xinjiang", poi: "urumqi-bazaar", query: "乌鲁木齐大巴扎" },
  { city: "xinjiang", poi: "kanas-lake", query: "Xinjiang autumn lake" },
  { city: "xinjiang", poi: "turpan-grape", query: "吐鲁番葡萄沟" },
  { city: "xinjiang", poi: "flaming-mountains", query: "Xinjiang red mountains" },
  { city: "xinjiang", poi: "kashgar-old-town", query: "喀什古城" },
  { city: "xinjiang", poi: "kashgar-bazaar", query: "Xinjiang Uyghur market" },
  { city: "xinjiang", poi: "karakul-lake", query: "Pamir Mountains lake" },

  // Gansu
  { city: "gansu", poi: "mogao-caves", query: "Dunhuang Buddhist cave" },
  { city: "gansu", poi: "crescent-lake", query: "鸣沙山月牙泉" },
  { city: "gansu", poi: "zhangye-danxia", query: "张掖丹霞" },
  { city: "gansu", poi: "jiayuguan", query: "Jiayuguan fortress Great Wall" },
  { city: "gansu", poi: "lanzhou-yellow", query: "兰州黄河" },
  { city: "gansu", poi: "labrang", query: "Tibetan monastery prayer wheel" },
  { city: "gansu", poi: "maijishan", query: "Buddhist cliff caves" },
  { city: "gansu", poi: "bingling-si", query: "Buddha cliff carving" },

  // Qinghai
  { city: "qinghai", poi: "qinghai-lake", query: "青海湖" },
  { city: "qinghai", poi: "chaka-salt-lake", query: "salt lake sky mirror" },
  { city: "qinghai", poi: "kumbum-monastery", query: "塔尔寺" },
  { city: "qinghai", poi: "tongren", query: "同仁热贡" },
  { city: "qinghai", poi: "mengda-tianchi", query: "孟达天池" },
  { city: "qinghai", poi: "xining-mosque", query: "西宁东关清真大寺" },
  { city: "qinghai", poi: "bird-island", query: "青海湖鸟岛" },
  { city: "qinghai", poi: "yushu", query: "玉树" },

  // Ningxia
  { city: "ningxia", poi: "western-xia-tombs", query: "西夏王陵" },
  { city: "ningxia", poi: "helan-mountain", query: "贺兰山岩画" },
  { city: "ningxia", poi: "shapotou", query: "沙坡头" },
  { city: "ningxia", poi: "sand-lake", query: "宁夏沙湖" },
  { city: "ningxia", poi: "yinchuan-drum", query: "银川鼓楼" },
  { city: "ningxia", poi: "helan-wine", query: "China vineyard mountain" },
  { city: "ningxia", poi: "zhongwei-desert", query: "Tengger desert dunes" },
  { city: "ningxia", poi: "shuidong-gou", query: "水洞沟" },

  // Inner Mongolia
  { city: "inner-mongolia", poi: "xilamuren", query: "希拉穆仁草原" },
  { city: "inner-mongolia", poi: "huitengxile", query: "辉腾锡勒草原" },
  { city: "inner-mongolia", poi: "genghis-mausoleum", query: "成吉思汗陵" },
  { city: "inner-mongolia", poi: "resonant-sand-bay", query: "响沙湾" },
  { city: "inner-mongolia", poi: "dazhao-temple", query: "Hohhot temple" },
  { city: "inner-mongolia", poi: "ic-museum", query: "内蒙古博物院" },
  { city: "inner-mongolia", poi: "hailar", query: "海拉尔草原" },
  { city: "inner-mongolia", poi: "ordos", query: "鄂尔多斯" },

  // Wuhan
  { city: "wuhan", poi: "yellow-crane-tower", query: "黄鹤楼" },
  { city: "wuhan", poi: "east-lake", query: "武汉东湖" },
  { city: "wuhan", poi: "wuhan-uni", query: "武汉大学樱花" },
  { city: "wuhan", poi: "yangtze-bridge", query: "武汉长江大桥" },
  { city: "wuhan", poi: "tanhualin", query: "昙华林" },
  { city: "wuhan", poi: "hubei-museum", query: "湖北省博物馆" },
  { city: "wuhan", poi: "hubu-alley", query: "户部巷" },
  { city: "wuhan", poi: "guiyuan-temple", query: "归元寺" },

  // Changsha
  { city: "changsha", poi: "wenheyou", query: "长沙文和友" },
  { city: "changsha", poi: "yuelu-mountain", query: "岳麓山" },
  { city: "changsha", poi: "orange-isle", query: "橘子洲" },
  { city: "changsha", poi: "shaoshan", query: "韶山毛泽东" },
  { city: "changsha", poi: "pozi-street", query: "长沙坡子街" },
  { city: "changsha", poi: "hunan-museum", query: "湖南省博物馆" },
  { city: "changsha", poi: "yuelu-academy", query: "岳麓书院" },
  { city: "changsha", poi: "tianxin-pavilion", query: "天心阁" },

  // Jingdezhen
  { city: "jingdezhen", poi: "tao-xichuan", query: "景德镇陶溪川" },
  { city: "jingdezhen", poi: "imperial-kiln-museum", query: "景德镇御窑" },
  { city: "jingdezhen", poi: "hutian-kiln", query: "景德镇湖田窑" },
  { city: "jingdezhen", poi: "sanbao-valley", query: "景德镇三宝" },
  { city: "jingdezhen", poi: "ceramic-museum", query: "中国陶瓷博物馆" },
  { city: "jingdezhen", poi: "lao-chang", query: "景德镇陶瓷市集" },
  { city: "jingdezhen", poi: "yaoli", query: "瑶里古镇" },
  { city: "jingdezhen", poi: "old-factory", query: "景德镇瓷器" },

  // Wuyuan
  { city: "wuyuan", poi: "likeng-village", query: "婺源李坑" },
  { city: "wuyuan", poi: "jiangling", query: "婺源江岭油菜花" },
  { city: "wuyuan", poi: "sixiyan", query: "婺源思溪延村" },
  { city: "wuyuan", poi: "huangling", query: "婺源篁岭晒秋" },
  { city: "wuyuan", poi: "shicheng", query: "婺源石城" },
  { city: "wuyuan", poi: "wangkou", query: "婺源汪口" },
  { city: "wuyuan", poi: "xiaoqi", query: "婺源晓起" },
  { city: "wuyuan", poi: "yuetan-bay", query: "婺源月亮湾" },

  // Guangzhou
  { city: "guangzhou", poi: "canton-tower", query: "广州塔" },
  { city: "guangzhou", poi: "shamian-island", query: "广州沙面" },
  { city: "guangzhou", poi: "chen-clan", query: "陈家祠" },
  { city: "guangzhou", poi: "yuexiu-park", query: "越秀公园五羊" },
  { city: "guangzhou", poi: "sun-yat-sen-hall", query: "中山纪念堂" },
  { city: "guangzhou", poi: "beijing-road", query: "广州北京路" },
  { city: "guangzhou", poi: "yum-cha", query: "广州早茶" },
  { city: "guangzhou", poi: "pearl-river-cruise", query: "珠江夜游" },

  // Chaozhou
  { city: "chaozhou", poi: "kaiyuan-temple", query: "潮州开元寺" },
  { city: "chaozhou", poi: "guangji-bridge", query: "潮州广济桥" },
  { city: "chaozhou", poi: "paifang-street", query: "潮州牌坊街" },
  { city: "chaozhou", poi: "han-river", query: "潮州韩江" },
  { city: "chaozhou", poi: "phoenix-mountain", query: "凤凰单丛茶山" },
  { city: "chaozhou", poi: "gongfu-tea", query: "潮州工夫茶" },
  { city: "chaozhou", poi: "city-wall", query: "潮州古城墙" },
  { city: "chaozhou", poi: "chaozhou-opera", query: "潮剧" },

  // Shantou
  { city: "shantou", poi: "xiaogongyuan", query: "汕头小公园" },
  { city: "shantou", poi: "babanyi-beef", query: "潮汕牛肉火锅" },
  { city: "shantou", poi: "nanao-island", query: "南澳岛" },
  { city: "shantou", poi: "chen-cihong", query: "陈慈黉故居" },
  { city: "shantou", poi: "queshi-park", query: "汕头礐石" },
  { city: "shantou", poi: "shantou-beach", query: "汕头海滨" },
  { city: "shantou", poi: "lao-ma-gong", query: "汕头老妈宫" },
  { city: "shantou", poi: "fishball-noodles", query: "潮汕鱼丸粿条" },
];

// Backwards compatibility — the original "default" mode picks one POI per city.
const DEFAULT_POI_PER_CITY = new Set([
  "beijing/forbidden-city",
  "chengdu/park",
  "shanghai/bund",
  "xian/terracotta-army",
  "hangzhou/west-lake",
  "guilin/elephant-trunk-hill",
  "lijiang/old-town",
  "dali/erhai-lake",
  "suzhou/humble-administrator",
  "lhasa/potala-palace",
  "kunming/green-lake-park",
  "chongqing/hongya-cave",
  "zhangjiajie/yuanjiajie",
  "yangshuo/yulong-river",
  "harbin/ice-snow-world",
  "qingdao/zhanqiao-pier",
  "xiamen/gulangyu",
  "jiuzhaigou/five-coloured-pool",
]);
const DEFAULT_POIS = ALL_POIS.filter((p) => DEFAULT_POI_PER_CITY.has(`${p.city}/${p.poi}`));

// CLI parsing
//   default            18 default POIs (one per city)
//   all                all 144 POIs
//   city <id>          all 8 POIs for one city
//   priority           42 non-default POIs for the 6 marquee cities
//                      (beijing, shanghai, xian, chengdu, hangzhou, guilin)
//   only <id>          one default POI by city id (back-compat with prior runs)
const PRIORITY_CITIES = new Set(["beijing", "shanghai", "xian", "chengdu", "hangzhou", "guilin"]);

const args = process.argv.slice(2);
const mode = args[0] || "default";

let targets;
if (mode === "default") {
  targets = DEFAULT_POIS;
} else if (mode === "all") {
  targets = ALL_POIS;
} else if (mode === "priority") {
  targets = ALL_POIS.filter(
    (p) =>
      PRIORITY_CITIES.has(p.city) && !DEFAULT_POI_PER_CITY.has(`${p.city}/${p.poi}`)
  );
} else if (mode === "city" && args[1]) {
  targets = ALL_POIS.filter((p) => p.city === args[1]);
} else if (mode === "only" && args[1]) {
  targets = DEFAULT_POIS.filter((t) => t.city === args[1]);
} else {
  console.error(`Unknown mode "${mode}". Use: default | all | priority | city <id> | only <id>`);
  process.exit(1);
}

const OUT_DIR = path.resolve(ROOT, "public/images/pois");
const ATTRIBUTION_PATH = path.resolve(ROOT, "src/data/poi-image-attribution.json");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

let attribution = {};
if (fs.existsSync(ATTRIBUTION_PATH)) {
  try {
    attribution = JSON.parse(fs.readFileSync(ATTRIBUTION_PATH, "utf8"));
  } catch {
    attribution = {};
  }
}

async function searchPhoto(query) {
  const url = new URL("https://api.unsplash.com/search/photos");
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", "1");
  url.searchParams.set("orientation", "landscape");
  const r = await fetch(url, { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } });
  if (!r.ok) throw new Error(`HTTP ${r.status} — ${await r.text()}`);
  const json = await r.json();
  return json.results?.[0];
}

async function downloadImage(url, outPath) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Image HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(outPath, buf);
  return buf.length;
}

async function main() {
  let saved = 0;
  let skipped = 0;
  let rateLimited = false;

  for (const { city, poi, query } of targets) {
    const key = `${city}/${poi}`;
    process.stdout.write(`${key.padEnd(36)} `);

    // Skip if we already have this POI saved (idempotent re-run)
    if (attribution[key] && fs.existsSync(path.join(OUT_DIR, `${city}-${poi}.jpg`))) {
      console.log("· already saved, skipping");
      skipped++;
      continue;
    }

    try {
      const photo = await searchPhoto(query);
      if (!photo) {
        console.log("NO RESULTS");
        continue;
      }
      const outPath = path.join(OUT_DIR, `${city}-${poi}.jpg`);
      const bytes = await downloadImage(photo.urls.regular, outPath);
      attribution[key] = {
        photoId: photo.id,
        photoUrl: photo.links.html,
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
        unsplashQuery: query,
      };
      saved++;
      console.log(`✓ ${(bytes / 1024).toFixed(0)}KB · ${photo.user.name}`);
    } catch (err) {
      console.log(`ERROR — ${err.message}`);
      if (/Rate Limit/i.test(err.message)) {
        rateLimited = true;
        console.log("\n⏸ Hit rate limit. Stopping early — re-run after the window resets.");
        break;
      }
    }
  }

  fs.writeFileSync(ATTRIBUTION_PATH, JSON.stringify(attribution, null, 2));
  console.log(`\nAttribution → ${ATTRIBUTION_PATH}`);
  console.log(`Saved ${saved} new · skipped ${skipped} existing` + (rateLimited ? " · stopped at rate limit" : ""));
}

main();
