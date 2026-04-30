import type { ReactNode } from "react";
import type { POI } from "@/data/poi";
import { beijingPOIs } from "@/data/poi-beijing";
import { chengduPOIs } from "@/data/poi-chengdu";
import { shanghaiPOIs } from "@/data/poi-shanghai";
import { chongqingPOIs } from "@/data/poi-chongqing";
import { daliPOIs } from "@/data/poi-dali";
import { guilinPOIs } from "@/data/poi-guilin";
import { hangzhouPOIs } from "@/data/poi-hangzhou";
import { harbinPOIs } from "@/data/poi-harbin";
import { jiuzhaigouPOIs } from "@/data/poi-jiuzhaigou";
import { kunmingPOIs } from "@/data/poi-kunming";
import { lhasaPOIs } from "@/data/poi-lhasa";
import { lijiangPOIs } from "@/data/poi-lijiang";
import { qingdaoPOIs } from "@/data/poi-qingdao";
import { suzhouPOIs } from "@/data/poi-suzhou";
import { xianPOIs } from "@/data/poi-xian";
import { xiamenPOIs } from "@/data/poi-xiamen";
import { yangshuoPOIs } from "@/data/poi-yangshuo";
import { zhangjiajiePOIs } from "@/data/poi-zhangjiajie";
import { xinjiangPOIs } from "@/data/poi-xinjiang";
import { gansuPOIs } from "@/data/poi-gansu";
import { qinghaiPOIs } from "@/data/poi-qinghai";
import { ningxiaPOIs } from "@/data/poi-ningxia";
import { innerMongoliaPOIs } from "@/data/poi-inner-mongolia";
import { wuhanPOIs } from "@/data/poi-wuhan";
import { changshaPOIs } from "@/data/poi-changsha";
import { jingdezhenPOIs } from "@/data/poi-jingdezhen";
import { wuyuanPOIs } from "@/data/poi-wuyuan";
import { guangzhouPOIs } from "@/data/poi-guangzhou";
import { chaozhouPOIs } from "@/data/poi-chaozhou";
import { shantouPOIs } from "@/data/poi-shantou";

const SVG_LABEL_FONT = "var(--font-inter), system-ui, sans-serif";

export type CityMapConfig = {
  pois: POI[];
  defaultPoiId: string;
  /** Optional decorative SVG (rivers, mountains, etc.). Falls back to a
      plain backdrop if not provided. */
  decoration?: ReactNode;
  /** Optional one-line note shown below the map (e.g. "Most travelers spend 3 days here.") */
  note?: string;
};

// ───────── Beijing ─────────
const beijingDecoration = (
  <>
    <line
      x1="340"
      y1="60"
      x2="340"
      y2="360"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="340"
      y="50"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Central Axis · 中轴线
    </text>
    <rect
      x="180"
      y="140"
      width="320"
      height="200"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="340"
      y="350"
      textAnchor="middle"
      fontSize="11"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      2nd Ring · 二环
    </text>
  </>
);

// ───────── Chengdu ─────────
const chengduDecoration = (
  <>
    <path
      d="M 40 110 Q 180 88 280 130 Q 380 165 480 145 Q 560 132 660 105"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <path
      d="M 50 320 Q 200 300 340 318 Q 480 335 640 315"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <ellipse
      cx="370"
      cy="220"
      rx="220"
      ry="115"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="370"
      y="225"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old city · 1st ring
    </text>
    <text
      x="48"
      y="102"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Jin River
    </text>
  </>
);

// ───────── Shanghai ─────────
const shanghaiDecoration = (
  <>
    <path
      d="M 365 60 Q 380 150 410 230 Q 440 310 460 360"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.5"
      strokeLinecap="round"
    />
    <path
      d="M 60 130 Q 200 120 290 105 Q 360 100 460 105"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.5"
      strokeLinecap="round"
    />
    <ellipse
      cx="320"
      cy="252"
      rx="55"
      ry="35"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="320"
      y="295"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old City · 老城
    </text>
    <text
      x="430"
      y="160"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Huangpu River · 黄浦江
    </text>
    <text
      x="80"
      y="125"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Suzhou Creek · 苏州河
    </text>
  </>
);

// ───────── Chongqing ─────────
const chongqingDecoration = (
  <>
    <path
      d="M 60 90 Q 180 130 280 200 Q 320 230 380 240"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.55"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="80"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Jialing River · 嘉陵江
    </text>
    <path
      d="M 60 320 Q 200 290 320 260 Q 380 240 440 270 Q 540 320 640 350"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3.5"
      opacity="0.6"
      strokeLinecap="round"
    />
    <text
      x="540"
      y="295"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.75"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yangtze · 长江
    </text>
    <text
      x="365"
      y="260"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yuzhong peninsula · 渝中半岛
    </text>
  </>
);

// ───────── Dali ─────────
const daliDecoration = (
  <>
    <ellipse
      cx="465"
      cy="220"
      rx="80"
      ry="120"
      fill="#9FE1CB"
      opacity="0.25"
      stroke="#9FE1CB"
      strokeWidth="1"
    />
    <text
      x="465"
      y="225"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Erhai · 洱海
    </text>
    <path
      d="M 80 320 L 110 250 L 140 270 L 175 200 L 210 240 L 240 180 L 270 220 L 290 160 L 310 200 L 320 320 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.6"
    />
    <text
      x="180"
      y="100"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Cangshan · 苍山
    </text>
  </>
);

// ───────── Guilin ─────────
const guilinKarstPeaks: Array<[number, number]> = [
  [195, 240],
  [250, 285],
  [180, 320],
  [475, 285],
  [505, 350],
  [395, 350],
];

const guilinDecoration = (
  <>
    <path
      d="M 320 60 Q 340 140 350 220 Q 360 290 480 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.55"
      strokeLinecap="round"
    />
    <text
      x="425"
      y="70"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Li River · 漓江
    </text>
    {guilinKarstPeaks.map(([x, y], i) => (
      <path
        key={i}
        d={`M ${x - 8} ${y} L ${x} ${y - 18} L ${x + 8} ${y} Z`}
        fill="#D3D1C7"
        stroke="#B4B2A9"
        strokeWidth="0.5"
        opacity="0.6"
      />
    ))}
    <text
      x="218"
      y="345"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Karst peaks
    </text>
  </>
);

// ───────── Hangzhou ─────────
const hangzhouDecoration = (
  <>
    <ellipse
      cx="335"
      cy="205"
      rx="70"
      ry="50"
      fill="#9FE1CB"
      opacity="0.25"
      stroke="#9FE1CB"
      strokeWidth="1"
    />
    <text
      x="335"
      y="208"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      West Lake · 西湖
    </text>
    <path
      d="M 60 320 Q 200 290 340 295 Q 470 305 640 280"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="335"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Qiantang River · 钱塘江
    </text>
    <text
      x="180"
      y="225"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Tea hills · 茶山
    </text>
  </>
);

// ───────── Harbin ─────────
const harbinDecoration = (
  <>
    <path
      d="M 60 150 Q 200 130 340 165 Q 480 200 640 175"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="6"
      opacity="0.5"
      strokeLinecap="round"
    />
    <path
      d="M 60 150 Q 200 130 340 165 Q 480 200 640 175"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      opacity="0.5"
      strokeDasharray="2 4"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="125"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Songhua River · 松花江 (frozen Dec–Mar)
    </text>
    <text x="100" y="60" fontSize="14" opacity="0.3" fill="#9FE1CB">
      ❄
    </text>
    <text x="540" y="80" fontSize="14" opacity="0.3" fill="#9FE1CB">
      ❄
    </text>
    <text x="600" y="350" fontSize="14" opacity="0.3" fill="#9FE1CB">
      ❄
    </text>
    <text x="120" y="370" fontSize="14" opacity="0.3" fill="#9FE1CB">
      ❄
    </text>
  </>
);

// ───────── Jiuzhaigou ─────────
const jiuzhaigouDecoration = (
  <>
    <path
      d="M 250 200 Q 280 195 300 195 M 360 80 Q 350 130 330 175 Q 320 185 300 195 M 300 195 Q 320 240 360 320"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.55"
      strokeLinecap="round"
    />
    <text
      x="240"
      y="170"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Rize Valley · 日则沟
    </text>
    <text
      x="385"
      y="65"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Zechawa Valley · 则查洼沟
    </text>
    <text
      x="375"
      y="335"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Shuzheng Valley · 树正沟 ↓ Park entrance
    </text>
    <path
      d="M 100 100 L 140 70 L 180 100 L 220 60 L 260 100 L 280 70 L 280 200 L 100 200 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.45"
    />
    <path
      d="M 400 130 L 440 80 L 480 110 L 520 60 L 560 100 L 600 70 L 600 250 L 400 250 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.45"
    />
  </>
);

// ───────── Kunming ─────────
const kunmingDecoration = (
  <>
    <ellipse
      cx="250"
      cy="320"
      rx="120"
      ry="50"
      fill="#9FE1CB"
      opacity="0.25"
      stroke="#9FE1CB"
      strokeWidth="1"
    />
    <text
      x="250"
      y="325"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Dianchi · 滇池
    </text>
    <path
      d="M 70 300 L 100 240 L 130 270 L 160 220 L 200 260 L 220 250 L 220 310 L 70 310 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.6"
    />
    <ellipse
      cx="335"
      cy="200"
      rx="60"
      ry="40"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="335"
      y="148"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old city · 老城
    </text>
  </>
);

// ───────── Lhasa ─────────
const lhasaDecoration = (
  <>
    <path
      d="M 60 300 Q 200 290 340 300 Q 470 310 640 290"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="80"
      y="290"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Lhasa River · 拉萨河
    </text>
    <path
      d="M 40 80 L 90 50 L 130 70 L 180 40 L 230 75 L 280 45 L 330 70 L 380 35 L 430 65 L 480 40 L 530 70 L 580 50 L 640 75 L 640 90 L 40 90 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.65"
    />
    <text
      x="340"
      y="30"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Himalayan foothills · 喜马拉雅
    </text>
  </>
);

// ───────── Lijiang ─────────
const lijiangDecoration = (
  <>
    <path
      d="M 340 80 L 380 50 L 420 90 L 450 70 L 490 110 L 380 110 Z"
      fill="#F1EFE8"
      stroke="#B4B2A9"
      strokeWidth="0.5"
      opacity="0.7"
    />
    <path
      d="M 372 60 L 380 50 L 388 60 M 442 75 L 450 70 L 458 78"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1"
      opacity="0.7"
    />
    <text
      x="415"
      y="135"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Jade Dragon Mountain · 玉龙雪山
    </text>
    <ellipse
      cx="335"
      cy="240"
      rx="55"
      ry="35"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="335"
      y="290"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.5"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old town · 大研古城
    </text>
  </>
);

// ───────── Qingdao ─────────
const qingdaoDecoration = (
  <>
    <path
      d="M 60 280 Q 200 295 340 290 Q 470 285 640 295 L 640 400 L 60 400 Z"
      fill="#9FE1CB"
      opacity="0.2"
      stroke="none"
    />
    <path
      d="M 60 280 Q 200 295 340 290 Q 470 285 640 295"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.6"
    />
    <text
      x="540"
      y="370"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yellow Sea · 黄海
    </text>
    <ellipse
      cx="320"
      cy="210"
      rx="80"
      ry="55"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="225"
      y="155"
      textAnchor="start"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old town · 老城 (German concession)
    </text>
  </>
);

// ───────── Suzhou ─────────
const suzhouDecoration = (
  <>
    <path
      d="M 130 60 Q 145 150 155 220 Q 165 300 175 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="105"
      y="80"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Grand Canal · 大运河
    </text>
    <path
      d="M 280 140 L 420 140 M 280 165 L 420 165 M 280 220 L 420 220 M 280 250 L 420 250 M 280 280 L 420 280 M 300 140 L 300 280 M 350 140 L 350 280 M 400 140 L 400 280"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="0.7"
      opacity="0.4"
    />
    <rect
      x="265"
      y="125"
      width="170"
      height="170"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="350"
      y="120"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.55"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Old city · 古城
    </text>
  </>
);

// ───────── Xi'an ─────────
const xianDecoration = (
  <>
    <rect
      x="265"
      y="160"
      width="160"
      height="90"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="345"
      y="155"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      City Wall · 古城墙
    </text>
    <path
      d="M 80 70 Q 240 55 400 60 Q 560 65 660 55"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="100"
      y="50"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Wei River · 渭河
    </text>
  </>
);

// ───────── Xiamen ─────────
const xiamenDecoration = (
  <>
    <path
      d="M 60 130 Q 130 145 175 195 Q 200 230 215 290 Q 230 350 280 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2.5"
      opacity="0.55"
      strokeLinecap="round"
    />
    <path
      d="M 60 60 L 60 380 Q 230 350 215 290 Q 200 230 175 195 Q 130 145 60 130 Z"
      fill="#9FE1CB"
      opacity="0.18"
      stroke="none"
    />
    <text
      x="80"
      y="100"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Xiamen Strait · 厦门湾
    </text>
    <ellipse
      cx="220"
      cy="225"
      rx="38"
      ry="55"
      fill="#FFFFFF"
      opacity="0.7"
      stroke="#B4B2A9"
      strokeWidth="0.5"
    />
    <text
      x="220"
      y="295"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.6"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Gulangyu · 鼓浪屿
    </text>
  </>
);

// ───────── Yangshuo ─────────
const yangshuoKarstPeaks: Array<[number, number]> = [
  [180, 245],
  [240, 305],
  [165, 175],
  [495, 280],
  [510, 165],
  [275, 360],
];

const yangshuoDecoration = (
  <>
    <path
      d="M 440 60 Q 460 130 470 220 Q 475 290 460 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="3"
      opacity="0.6"
      strokeLinecap="round"
    />
    <text
      x="490"
      y="80"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.75"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Li River · 漓江
    </text>
    <path
      d="M 240 60 Q 260 150 280 230 Q 290 310 305 380"
      fill="none"
      stroke="#9FE1CB"
      strokeWidth="2"
      opacity="0.5"
      strokeLinecap="round"
    />
    <text
      x="200"
      y="78"
      fontSize="11"
      fontStyle="italic"
      fill="#0F6E56"
      opacity="0.7"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Yulong · 遇龙河
    </text>
    {yangshuoKarstPeaks.map(([x, y], i) => (
      <path
        key={i}
        d={`M ${x - 8} ${y} L ${x} ${y - 22} L ${x + 8} ${y} Z`}
        fill="#D3D1C7"
        stroke="#B4B2A9"
        strokeWidth="0.5"
        opacity="0.55"
      />
    ))}
  </>
);

// ───────── Zhangjiajie ─────────
const zhangjiajiePillars: Array<[number, number, number]> = [
  [220, 170, 70],
  [260, 250, 60],
  [340, 240, 75],
  [400, 245, 55],
  [385, 175, 65],
  [445, 270, 50],
];

const zhangjiajieDecoration = (
  <>
    <path
      d="M 145 90 Q 200 80 270 95 Q 340 105 400 100 Q 440 110 445 175 Q 450 240 420 280 Q 380 310 320 320 Q 250 320 200 305 Q 150 280 130 220 Q 110 150 145 90 Z"
      fill="none"
      stroke="#D3D1C7"
      strokeWidth="0.5"
      strokeDasharray="4 5"
    />
    <text
      x="280"
      y="80"
      textAnchor="middle"
      fontSize="11"
      fontStyle="italic"
      fill="#888780"
      opacity="0.6"
      style={{ fontFamily: SVG_LABEL_FONT }}
    >
      Wulingyuan park · 武陵源
    </text>
    {zhangjiajiePillars.map(([x, y, h], i) => (
      <path
        key={i}
        d={`M ${x - 4} ${y} L ${x - 4} ${y - h} Q ${x} ${y - h - 4} ${x + 4} ${y - h} L ${x + 4} ${y} Z`}
        fill="#E5E2D9"
        stroke="#B4B2A9"
        strokeWidth="0.4"
        opacity="0.5"
      />
    ))}
  </>
);

export const cityMapConfigs: Record<string, CityMapConfig> = {
  beijing: {
    pois: beijingPOIs,
    defaultPoiId: "forbidden-city",
    decoration: beijingDecoration,
    note: "Most travelers spend 3 days here. Add the Wall for a fourth.",
  },
  chengdu: {
    pois: chengduPOIs,
    defaultPoiId: "park",
    decoration: chengduDecoration,
    note: "Most travelers spend 2 to 3 days here. Add Mt. Qingcheng for a fourth.",
  },
  shanghai: {
    pois: shanghaiPOIs,
    defaultPoiId: "bund",
    decoration: shanghaiDecoration,
    note: "Most travelers spend 2 to 3 days here. Add a day for Suzhou or Hangzhou.",
  },
  chongqing: {
    pois: chongqingPOIs,
    defaultPoiId: "hongya-cave",
    decoration: chongqingDecoration,
    note: "Most travelers spend 2 days here; add days for the Yangtze cruise or Wulong karst.",
  },
  dali: {
    pois: daliPOIs,
    defaultPoiId: "erhai-lake",
    decoration: daliDecoration,
    note: "Most travelers spend 2 days here. Add a day to cycle around Erhai.",
  },
  guilin: {
    pois: guilinPOIs,
    defaultPoiId: "elephant-trunk-hill",
    decoration: guilinDecoration,
    note: "Most travelers spend 2 days here, then move to Yangshuo for 2 more.",
  },
  hangzhou: {
    pois: hangzhouPOIs,
    defaultPoiId: "west-lake",
    decoration: hangzhouDecoration,
    note: "Most travelers spend 1 to 2 days here. Pair with Shanghai for an easy bullet-train side trip.",
  },
  harbin: {
    pois: harbinPOIs,
    defaultPoiId: "ice-snow-world",
    decoration: harbinDecoration,
    note: "Two days here in any season; come in January for the ice festival, July for the green parks.",
  },
  jiuzhaigou: {
    pois: jiuzhaigouPOIs,
    defaultPoiId: "five-coloured-pool",
    decoration: jiuzhaigouDecoration,
    note: "Two days in the valley itself; add a third for Huanglong.",
  },
  kunming: {
    pois: kunmingPOIs,
    defaultPoiId: "green-lake-park",
    decoration: kunmingDecoration,
    note: "Most travelers spend 2 days here, then push west to Dali and Lijiang.",
  },
  lhasa: {
    pois: lhasaPOIs,
    defaultPoiId: "potala-palace",
    decoration: lhasaDecoration,
    note: "Most travelers spend 3 days here. Add 1 to 3 more for the lakes or the road to Everest.",
  },
  lijiang: {
    pois: lijiangPOIs,
    defaultPoiId: "old-town",
    decoration: lijiangDecoration,
    note: "Most travelers spend 2 days here. Add a third for Jade Dragon or Tiger Leaping Gorge.",
  },
  qingdao: {
    pois: qingdaoPOIs,
    defaultPoiId: "zhanqiao-pier",
    decoration: qingdaoDecoration,
    note: "One full day for the old town and brewery; a second for Mt. Lao.",
  },
  suzhou: {
    pois: suzhouPOIs,
    defaultPoiId: "humble-administrator",
    decoration: suzhouDecoration,
    note: "One full day for the gardens; add a second for Tongli or a slow morning on Pingjiang.",
  },
  xian: {
    pois: xianPOIs,
    defaultPoiId: "terracotta-army",
    decoration: xianDecoration,
    note: "Most travelers spend 2 days here. Add a day for Mt. Hua.",
  },
  xiamen: {
    pois: xiamenPOIs,
    defaultPoiId: "gulangyu",
    decoration: xiamenDecoration,
    note: "Two days here, including a full day on Gulangyu. Sleep on the island once.",
  },
  yangshuo: {
    pois: yangshuoPOIs,
    defaultPoiId: "yulong-river",
    decoration: yangshuoDecoration,
    note: "Most travelers spend 2 days here, mixed walking and water.",
  },
  zhangjiajie: {
    pois: zhangjiajiePOIs,
    defaultPoiId: "yuanjiajie",
    decoration: zhangjiajieDecoration,
    note: "Most travelers spend 2 to 3 days here. Stay inside the park gates if you can.",
  },
  xinjiang: {
    pois: xinjiangPOIs,
    defaultPoiId: "tianshan-tianchi",
    note: "Five to seven days; longer to cross to Kashgar. Book domestic flights between cities.",
  },
  gansu: {
    pois: gansuPOIs,
    defaultPoiId: "mogao-caves",
    note: "Four days for Dunhuang; longer to add Zhangye and Lanzhou.",
  },
  qinghai: {
    pois: qinghaiPOIs,
    defaultPoiId: "qinghai-lake",
    note: "Three days, including a circuit of Qinghai Lake. Acclimatize at 2,200m.",
  },
  ningxia: {
    pois: ningxiaPOIs,
    defaultPoiId: "western-xia-tombs",
    note: "Two to three days. The Western Xia tombs and Shapotou are the can't-miss pair.",
  },
  "inner-mongolia": {
    pois: innerMongoliaPOIs,
    defaultPoiId: "xilamuren",
    note: "Two to three days at the grasslands plus Hohhot. Come in summer.",
  },
  wuhan: {
    pois: wuhanPOIs,
    defaultPoiId: "yellow-crane-tower",
    note: "Two to three days. Avoid July–August heat.",
  },
  changsha: {
    pois: changshaPOIs,
    defaultPoiId: "wenheyou",
    note: "Two to three days; add a fourth for Zhangjiajie.",
  },
  jingdezhen: {
    pois: jingdezhenPOIs,
    defaultPoiId: "tao-xichuan",
    note: "Two days for the kilns and museums. The Saturday market is the highlight.",
  },
  wuyuan: {
    pois: wuyuanPOIs,
    defaultPoiId: "jiangling",
    note: "Two to three days across the village clusters. Mid-March or late November.",
  },
  guangzhou: {
    pois: guangzhouPOIs,
    defaultPoiId: "canton-tower",
    note: "Two to three days for food and the old quarters.",
  },
  chaozhou: {
    pois: chaozhouPOIs,
    defaultPoiId: "kaiyuan-temple",
    note: "Two days. Pair with Shantou for a full Chaoshan trip.",
  },
  shantou: {
    pois: shantouPOIs,
    defaultPoiId: "xiaogongyuan",
    note: "Two days, mostly for eating. Add a day for Nan'ao Island.",
  },
};
