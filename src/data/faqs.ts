// Travel FAQ content for foreign tourists — synthesized from 2025 web
// research (china-briefing, chinahighlights, trip.com, tibettravel.org,
// chinadiscovery, china-mike, et al.). Each entry is a tight Q+A in
// English at a 2026 timeframe — answers are practical, no fluff, with
// the specific numbers, names, or limits travelers actually need.
//
// `category` is either "general" (applies anywhere in China) or "city"
// (applies to one or more specific cityIds). UI can group by category and
// surface city FAQs on the matching city page.

export type FAQCategory = "general" | "city";

export type FAQ = {
  id: string;
  category: FAQCategory;
  /** Cities this FAQ is most relevant to. Used for city-page surfacing. */
  cityIds?: string[];
  /** Short tag the question rolls up into ("Payment", "Visa", etc.). */
  topic: string;
  question: string;
  /** Plain-text answer. Newlines split paragraphs for rendering. */
  answer: string;
};

export const faqs: FAQ[] = [
  // ─── GENERAL ─────────────────────────────────────────────────────────

  {
    id: "visa-free-transit",
    category: "general",
    topic: "Visa & entry",
    question: "Do I need a visa to visit China?",
    answer: `Maybe not. China's 240-hour visa-free transit policy lets citizens of 55 countries (UK, US, Australia, Germany, France, Japan, Canada, Indonesia, etc.) stay up to 10 days without a tourist visa, as long as you have an onward ticket to a third country and enter through one of 60 approved ports. The 240 hours start at midnight (Beijing time) the day after you land.

For longer stays or as a non-eligible nationality, you'll need to apply for a tourist (L) visa from a Chinese embassy before you fly. You can do tourism, business meetings, or visit family on visa-free transit — but no work, study, or news reporting.`,
  },

  {
    id: "alipay-wechat-foreigners",
    category: "general",
    topic: "Payment",
    question: "Can I use Alipay or WeChat Pay as a foreigner?",
    answer: `Yes — both apps now have an "International Version" designed for visitors. You register with your foreign mobile number, upload a passport photo, and link a Visa, Mastercard, or other foreign card. The interface is in English.

Single-transaction limit on Alipay International is now USD 5,000 (raised from 1,000), with an annual cap of USD 50,000. Once set up, you can scan and pay almost anywhere — taxis, street vendors, supermarkets, museums, train stations.

Tip: install both before you fly. Some merchants only accept one. Cash still works, especially in markets and small shops.`,
  },

  {
    id: "internet-vpn-esim",
    category: "general",
    topic: "Internet",
    question: "Will my Google, WhatsApp, and Instagram work?",
    answer: `Not on a Chinese SIM. The Great Firewall blocks Google, WhatsApp, Instagram, Facebook, X, YouTube, and most Western apps.

The simplest fix is an international travel eSIM (Nomad, Airalo, Trip.com China eSIM, etc.) bought before you fly. These route your data through Hong Kong or Singapore, so the firewall doesn't apply — Google Maps and WhatsApp work normally without a VPN.

Alternatives: keep using your home carrier's roaming plan, or install a paid VPN before arrival. (You can't download VPN apps from inside China.) Free VPNs are unreliable. Unauthorized VPN use is technically illegal, but enforcement against tourists is rare.`,
  },

  {
    id: "didi-taxi",
    category: "general",
    topic: "Transport",
    question: "How do I take a taxi?",
    answer: `Download DiDi (China's Uber) before you arrive. Switch the app to English; sign up with your foreign phone number and link a Visa or Mastercard for payment. You can also use DiDi as a mini-program inside Alipay — that version doesn't even require a Chinese phone number.

The driver will ask for the last 4 digits of your phone number to confirm pickup, so screenshot it. In-app messaging auto-translates between Chinese and English. There's a 24/7 English support line under Help → Contact us.

Street taxis still exist but most drivers don't speak English; you'll want your destination written in Chinese characters to show them. Tipping is not expected.`,
  },

  {
    id: "high-speed-rail",
    category: "general",
    topic: "Transport",
    question: "How do I book high-speed train tickets?",
    answer: `Two options:

**Official 12306 app or website (English version):** register with your passport, upload a photo of the passport page + a selfie, and an officer verifies you within minutes to a week. Once verified, you can book trains 15 days in advance. Pay with international card or UnionPay.

**Trip.com:** simpler for first-time visitors — pure English, takes Visa/Mastercard, charges a small booking fee but skips the verification step. Recommended if you want to book before flying.

At the station, scan your passport at the security gate (no paper ticket needed). Arrive 30–45 min early. High-speed trains in China are extremely punctual — if you miss it, your ticket is forfeit.`,
  },

  {
    id: "tap-water",
    category: "general",
    topic: "Health",
    question: "Can I drink the tap water?",
    answer: `No. Even in Beijing and Shanghai, tap water isn't safe to drink directly — older pipe networks introduce sediment and other contaminants. Locals always boil it or use a filter.

Bottled water is everywhere — convenience stores, hotels, sights — and costs ¥3–5 ($0.50) per liter. Most hotels provide complimentary bottled water in the room and a kettle to boil tap water. Tea, coffee, and bottled drinks at restaurants are all safe.

Brushing your teeth with tap water is generally fine, but use bottled water if you have a sensitive stomach.`,
  },

  {
    id: "tipping",
    category: "general",
    topic: "Etiquette",
    question: "Am I expected to tip?",
    answer: `Almost never. Tipping is not part of Chinese culture — restaurants, taxis, hotels, and shops do not expect tips, and many will refuse one. Many high-end restaurants add a 10–15% service charge to the bill, which covers it.

Exceptions: tour guides and drivers on multi-day private tours (¥50–100/day per person is normal). DiDi drivers who help with luggage might appreciate ¥10–20 if you offer. Bellhops and housekeeping in luxury international-brand hotels accept ¥20–50.

For 95% of your trip, just pay the listed price.`,
  },

  {
    id: "plug-adapter",
    category: "general",
    topic: "Practical",
    question: "What plug adapter do I need?",
    answer: `China uses 220 V / 50 Hz with three socket types: A (two flat parallel pins, US-style), C (two round pins, EU-style), and I (three flat angled pins, Australia-style). Most modern hotels accept all three.

If you're coming from the US, your phone/laptop chargers will plug in directly — but check the label for "100–240 V". Anything 110V-only (some hair dryers, curling irons) needs a separate voltage converter, not just a plug adapter.

Travelers from the UK and Australia need a basic plug adapter. A universal travel adapter (USD 15–25) covers all three socket types.`,
  },

  {
    id: "cash-atms",
    category: "general",
    topic: "Payment",
    question: "Do I still need cash?",
    answer: `A few hundred yuan is enough. Mobile payment dominates — about 95% of transactions, even from street vendors — but cash is universally accepted as a backup, and ATMs are easy to find.

Bank of China has the largest ATM network and accepts most foreign Visa/Mastercard/UnionPay cards. Daily withdrawal limit is usually ¥2,000–¥5,000 (roughly USD 280–700). Both your bank and the Chinese bank will charge a fee per withdrawal, so take the maximum each time.

Avoid airport currency-exchange booths — rates are bad. Better to withdraw at a Bank of China ATM in town.`,
  },

  {
    id: "translation-apps",
    category: "general",
    topic: "Language",
    question: "How do I get by without speaking Mandarin?",
    answer: `Three apps cover most situations:

**Google Translate** — best general all-purpose. Camera mode reads menus and signs. Download the offline Chinese pack before you fly.

**Pleco** — the gold standard Chinese dictionary, free. Draw a character with your finger to look it up.

**WeChat** — long-press any Chinese message and tap "Translate" to read it instantly.

Most major sights have English signage, hotel staff at 4-star+ properties speak English, and DiDi messages auto-translate. Outside the big cities and tourist hubs you'll lean on the camera-mode translator more.`,
  },

  {
    id: "esim-sim-card",
    category: "general",
    topic: "Internet",
    question: "Should I get a Chinese SIM or an eSIM?",
    answer: `Get an international eSIM before you fly. Trip.com, Airalo, Holafly, and Nomad all sell China eSIMs that route around the Great Firewall — Google, Maps, WhatsApp all work natively, no VPN needed.

You can't buy an eSIM inside China — only physical SIMs from China Mobile / Unicom / Telecom, and those will block Google etc.

If your phone is too old to support eSIM (iPhone XR and earlier, most pre-2020 Androids), buy a physical China Unicom SIM at the airport — but you'll need a VPN to reach Google.

Pricing is typically USD 15–30 for 7–14 days of unlimited data.`,
  },

  {
    id: "best-time-to-visit",
    category: "general",
    topic: "Practical",
    question: "When's the best time to visit China?",
    answer: `**Spring (April–May)** and **autumn (September–October)** are the sweet spots — pleasant weather, blue skies in the north, and full opening of all sights. Avoid the first week of October (Golden Week national holiday) when domestic crowds peak.

**Summer (June–August)** is hot and humid in the south and east. Some destinations (Yunnan, Tibet, Xinjiang grasslands) are at their best.

**Winter (December–February)** is cold but uncrowded — and the only time to see Harbin's Ice and Snow Festival. Avoid Chinese New Year week (late Jan / early Feb) — trains and hotels sell out months ahead.`,
  },

  {
    id: "safety",
    category: "general",
    topic: "Safety",
    question: "Is China safe for tourists?",
    answer: `Very. Violent crime against foreigners is exceedingly rare — China has one of the lowest violent-crime rates of any major travel destination, and you can walk most cities late at night without concern.

The realistic risks are scams (overpriced tea ceremonies in Beijing's Wangfujing area, fake "art student" gallery scams in Shanghai), pickpocketing in crowded transit hubs, and unlicensed taxis at airports. Use DiDi instead of black cabs; ignore strangers who approach you in English at tourist hotspots.

Petty annoyances aside, China is one of the easiest large countries to travel solo, including for women.`,
  },

  {
    id: "food-dietary",
    category: "general",
    topic: "Food",
    question: "What if I have dietary restrictions?",
    answer: `**Vegetarians:** harder than expected — many "vegetable" dishes contain pork or oyster sauce. Buddhist temple restaurants (素菜馆 sùcàiguǎn) are the safest. Apps like HappyCow list foreign-friendly veg spots in major cities.

**Halal:** Hui Muslim restaurants (清真 qīngzhēn) are everywhere, especially in Xi'an, Lanzhou, and Yinchuan. Look for the green crescent sign.

**Gluten-free:** very difficult. Soy sauce contains wheat, and most noodles aren't rice. Cantonese (rice-based) and Hot Pot (you control the ingredients) are easier than wheat-based northern food.

**Allergies:** carry a printed Chinese-language allergy card; phone translation apps aren't reliable enough at restaurants. The most common culprits are peanut oil and shrimp paste.`,
  },

  {
    id: "first-time-itinerary",
    category: "general",
    topic: "Planning",
    question: "What's a good first-time itinerary?",
    answer: `For 10 days: **Beijing → Xi'an → Chengdu → Guilin/Yangshuo → Shanghai**, all by high-speed rail except the Chengdu→Guilin leg (a short flight). Two days per city covers the headline sights without rushing.

For 7 days, drop Chengdu and Guilin. For 14, add Zhangjiajie (Avatar mountains) or Suzhou + Hangzhou for water-town and West Lake atmosphere.

For 21 days, you can add a Tibet permit + Lhasa (4 days), or swing through Yunnan (Kunming → Dali → Lijiang) for slow southern travel.

Roam China's Routes section has 26 hand-picked itineraries with this kind of pacing.`,
  },

  // ─── CITY-SPECIFIC ───────────────────────────────────────────────────

  {
    id: "lhasa-altitude-sickness",
    category: "city",
    cityIds: ["lhasa", "qinghai"],
    topic: "Altitude",
    question: "How do I avoid altitude sickness in Lhasa?",
    answer: `Lhasa is at 3,656 m. Most travelers feel mild symptoms (headache, breathlessness, poor sleep) for the first 24–48 hours.

**Before you fly:** rest well, hydrate, avoid colds. Fly into Lhasa rather than going overland — counterintuitively, faster ascent followed by 2–3 days of rest works better than a long bus ride that exhausts you.

**On arrival:** take it slow for 2–3 days. No running, no climbing, no hot showers right away. Drink 3–4 L of water daily.

**Medication:** ask your doctor about Diamox (acetazolamide) — start 24h before arrival, continue for 2 days. Local Tibetan herbal supplement Hongjingtian (红景天) is widely sold and safe to try.

**Avoid:** heavy meals, alcohol, smoking. Iron-rich food (red meat, dark greens) helps red-blood-cell production.

Most people fully acclimatize in 2 days.`,
  },

  {
    id: "tibet-permit",
    category: "city",
    cityIds: ["lhasa"],
    topic: "Permits",
    question: "How do I get a Tibet Travel Permit?",
    answer: `Foreigners cannot apply directly — you must book through a licensed Tibetan travel agency, who applies for the permit on your behalf. You cannot travel independently in Tibet; a guide is required everywhere outside Lhasa.

**Required documents:** passport (6+ months validity) + scan of your Chinese tourist visa (L visa). Visa-exempt nationals (Singapore, Japan, Malaysia, etc.) skip the visa step.

**Timing:** apply at least 15 working days before your trip. Permits take 8+ working days. Add more time if you're going to Everest Base Camp or Mount Kailash (additional Alien Travel Permit + Military Permit).

**Cost:** the permit itself is free, but the mandatory tour package (3-day minimum, with guide and driver) starts around USD 800/person.

Once issued, you'll need the original on hand at airports and rail stations.`,
  },

  {
    id: "forbidden-city-tickets",
    category: "city",
    cityIds: ["beijing"],
    topic: "Tickets",
    question: "How do I book Forbidden City tickets?",
    answer: `Tickets are timed entry, capped at 40,000/day, and **never sold at the gate**. Book online up to 7 days in advance — exactly at 8:00 PM Beijing time, 7 days before the visit date. Peak summer dates sell out within minutes.

**Where to book:** the official site (bookingticket.dpm.org.cn) has an English option. Pay by Alipay, WeChat, or Chinese bank card. International travelers without those can book through Trip.com, Viator, or a local tour operator (small markup, usually worth it).

**Entry:** show your passport at the Meridian Gate — no paper ticket. The same passport you used to book.

**Tips:** enter as early as possible, exit through the north gate, then climb Jingshan Park behind it for the classic top-down view.`,
  },

  {
    id: "great-wall-section",
    category: "city",
    cityIds: ["beijing"],
    topic: "Day trip",
    question: "Mutianyu or Badaling for the Great Wall?",
    answer: `**Mutianyu** is the better choice for most travelers. 90 minutes by car from central Beijing, fully restored, has a cable car up and a toboggan ride down, and far less mobbed by domestic tour groups. Pine forest views, more dramatic gradient, easier walking.

**Badaling** is closer to Beijing (60 min) and the most famous section, but it's also the busiest — domestic tour buses arrive by the dozen, and the wall itself feels like a theme park in summer.

**Both:** go in spring (April–May) or fall (September–October) for the best weather. Arrive at opening (7:30 AM) — the morning crowds are real.

**Wilder alternative:** Jinshanling, Simatai, or a Mutianyu-to-Jiankou hike, all unrestored, dramatic, and quiet — but require an early start and a private driver.`,
  },

  {
    id: "terracotta-army-visit",
    category: "city",
    cityIds: ["xian"],
    topic: "Day trip",
    question: "How do I visit the Terracotta Army?",
    answer: `The site is 40 km east of Xi'an. **Cheapest option:** Tourist Bus 5 (also numbered 306) from Xi'an Railway Station — leaves every 10 minutes, takes ~1 hour, costs ¥7. **Easier:** Metro Line 9 to Huaqing Pool, then Bus 602.

Tickets can be booked 7 days ahead on the museum's WeChat account. ¥120 for the full site (Pit 1 is the famous one with thousands of warriors). Hours 8:30–18:00, last entry 16:30.

A guided tour is genuinely worth it here — the on-site signage is sparse, and the history (Qin Shi Huang, the burial complex, the discovery in 1974) is what makes the site worth seeing. Local English-speaking guides cost ¥100–200; pre-booked tour packages from Xi'an run USD 50–80.

Allow 4 hours at the site itself, half a day total. Pair with the Tomb of Emperor Qin Shi Huang (1.5 km away) if you have time.`,
  },

  {
    id: "panda-base-booking",
    category: "city",
    cityIds: ["chengdu"],
    topic: "Tickets",
    question: "How do I book the Chengdu Panda Base?",
    answer: `Tickets are online-only — there's no walk-up window. Book on the WeChat Official Account "Panda Valley" or via Trip.com / Klook / GetYourGuide for an English booking flow. Tickets release 7 days in advance.

**Two locations** — different panda bases:

- **Chengdu Research Base of Giant Panda Breeding** (in north Chengdu) — closer to the city, more famous, but also more crowded. Best in the morning (7:30–10:00 AM), when pandas are most active before they nap.

- **Dujiangyan Panda Valley** (1 hour west) — fewer pandas but you can sometimes do a half-day "Panda Keeper" volunteer program (~USD 200, advance booking only).

**Hours:** 7:30 AM–6:00 PM (March–October), 8:00 AM–5:30 PM (November–February). Free for kids under 1.3 m.

**Tip:** go on weekdays. Weekends are 2–3x busier.`,
  },

  {
    id: "li-river-cruise",
    category: "city",
    cityIds: ["guilin", "yangshuo"],
    topic: "Day trip",
    question: "Should I cruise the Li River from Guilin or raft from Yangshuo?",
    answer: `**Both, on different days, ideally.**

**Guilin → Yangshuo cruise:** the classic 4-hour boat ride down the most photographed stretch of karst peaks. Departs Guilin at 9:30 AM, arrives Yangshuo around 1:30 PM. ¥215–450 depending on boat class. Book through your hotel or Trip.com — boats sell out in peak season.

**Yulong River bamboo raft (in Yangshuo):** 50-minute slow ride on a 4-person bamboo raft through the quieter side river — you're closer to the rice paddies and water buffalo. ¥120–200 per raft. Best at sunrise or just before sunset.

**Best time:** April–November, when the water is high enough for the cruise. Winter cruises sometimes shorten the route. May, June, September are sweet spots — green countryside, no summer crush.

End the day in Yangshuo's West Street area for the night market and karst-peak viewpoints.`,
  },

  {
    id: "jiuzhaigou-season",
    category: "city",
    cityIds: ["jiuzhaigou"],
    topic: "Planning",
    question: "When should I go to Jiuzhaigou?",
    answer: `**Late October to early November** is peak — autumn foliage reflected in the turquoise pools, the iconic Jiuzhaigou postcard. October 20 to November 10 specifically.

But that's also when you'll fight ~35,000+ daily visitors. Tickets and nearby hotels often sell out **2 months ahead** for late October. The first week of October (Golden Week) is even worse.

**Quieter alternatives with similar beauty:**
- **Mid-September:** lakes are at peak blue, foliage hasn't started, but the air is crisp and crowds are 1/3 of late October.
- **Late April–May:** spring snowmelt swells the falls; meadows green up. ~½ the autumn crowds.
- **Winter (December–February):** the park stays open but most lakes freeze and the ticket price drops 60%. Surreal and almost empty.

**Booking:** the park's online ticket portal (in Chinese) opens 60 days ahead. Book through a Chengdu-based agency for English service.

**Park is closed in heavy snow.** Check weather before you fly to Jiuzhaigou-Huanglong airport.`,
  },

  {
    id: "harbin-ice-festival-timing",
    category: "city",
    cityIds: ["harbin"],
    topic: "Festival",
    question: "When is the Harbin Ice Festival?",
    answer: `The official 2025–26 festival runs **January 5 to early March 2026**. Major venues actually open earlier:

- **Harbin Ice & Snow World** (the main attraction) — December 17, 2025
- **Sun Island Snow Sculpture Expo** — December 27, 2025
- **Zhaolin Park** — December 28, 2025

**Best time to go:** mid-January to early February — sculptures are fresh, lights are on every night, and you avoid both the Christmas crush and the Chinese New Year holiday week (mid-February 2026).

**Times to avoid:**
- First two weeks of January (peak domestic tourism)
- Chinese New Year week (February 17 ± 5 days)

**Prep:** bring real cold-weather gear. Daytime temps run -15 to -25°C, nights drop to -30°C. Heated insoles, hand warmers, balaclava. Most ice-sculpture viewing is at night.`,
  },

  {
    id: "zhangjiajie-planning",
    category: "city",
    cityIds: ["zhangjiajie"],
    topic: "Planning",
    question: "How many days for Zhangjiajie?",
    answer: `**Three days minimum** to see Zhangjiajie National Forest Park (the Avatar mountains) plus Tianmen Mountain. Two days if you cut Tianmen.

The park ticket (¥225) is valid 4 days; shuttle buses inside are included. Add ¥65 for the Bailong Elevator and ¥72 for the cable car if you don't want to hike.

**Best gates:** East Gate is most popular for accessing Yuanjiajie, Yangjiajie, and Tianzi Mountain (the most photographed sandstone-pillar viewpoints). Wulingyuan Gate is good if your hotel is in Wulingyuan town.

**Tianmen Mountain** (separate site, in Zhangjiajie city) is famous for the cliff-edge glass walkway, the world's longest cable car, and the 99-bend road. Half a day.

**Where to stay:** inside the park (Wulingyuan town) saves you 90 minutes of commute each morning. Stick to the East Gate side for ease.

**Best months:** late September to early November, or April–May. Avoid Golden Week (October 1–7) and rainy season (June–August).`,
  },

  {
    id: "shanghai-airports",
    category: "city",
    cityIds: ["shanghai"],
    topic: "Transport",
    question: "Pudong or Hongqiao — which Shanghai airport?",
    answer: `Shanghai has two major airports:

**Pudong (PVG)** — the international hub. Almost all flights from outside China land here. East of the city, 50 km from the Bund. Reach downtown by Maglev (8 minutes to Longyang Road, then transfer to Metro), or Metro Line 2 (~75 min direct), or DiDi (¥180–250).

**Hongqiao (SHA)** — mostly domestic, plus some Asia regional flights (Tokyo, Seoul, Hong Kong). West of the city, much closer — 15 km to the Bund. Connected to Metro Line 2 and Line 10, plus the high-speed rail station next door (one stop to Pudong, fast lines to Hangzhou, Suzhou, Beijing).

If you're flying into Shanghai then taking the train onward, **try to land at Hongqiao** — same building as the train station, no airport-to-station transfer needed.

If you're connecting domestically, the two are 90 minutes apart by metro — leave 4 hours minimum for the transfer.`,
  },

  {
    id: "xinjiang-restrictions",
    category: "city",
    cityIds: ["xinjiang"],
    topic: "Practical",
    question: "Is Xinjiang open to foreign tourists?",
    answer: `Yes — fully open. Foreigners visit independently, no special permit needed (unlike Tibet). Direct flights from Beijing/Shanghai to Urumqi, plus high-speed rail to Urumqi from Lanzhou (~12h, longer trip).

**What to expect:**
- Frequent ID checks at hotels, train stations, and major sights. Carry your passport at all times.
- Hotel registration is required nationwide; most hotels handle it automatically. A few smaller properties don't accept foreigners — book international chains or Trip.com-listed places to be safe.
- Photographing government buildings, security checkpoints, and police is not allowed. Standard tourist photography of bazaars, mosques, landscapes, food is fine.

**Practical tips:**
- Domestic flights are by far the easiest way to cover distances (Urumqi → Kashgar is 2h, vs 24h+ by train).
- Urumqi runs on Beijing time officially, but locals often use "Xinjiang time" (UTC+6, two hours behind). Confirm meeting times.
- Summer (May–September) is best. Winter is brutally cold and many sights close.`,
  },

  {
    id: "hangzhou-from-shanghai",
    category: "city",
    cityIds: ["hangzhou"],
    topic: "Day trip",
    question: "Is Hangzhou worth a day trip from Shanghai?",
    answer: `Worth a day, better as an overnight. **One hour by high-speed rail** (Shanghai Hongqiao to Hangzhou East), trains every 5–10 minutes, ¥70–90 second class. No advance booking needed except weekends.

**With one day** you can do West Lake (the eastern shore + boat ride) and Lingyin Temple. Tight but doable.

**With overnight,** add: a morning at Longjing tea plantations, an afternoon walk down Su Causeway in the rain (yes, in rain — that's how the Song Dynasty poets liked it), and dinner at Hefang Street.

**Best months:** April for cherry blossoms, October–November for tea harvest and clear skies, March for plum blossoms. Avoid weekends in peak season — domestic tourists from Shanghai descend on West Lake.

If your itinerary is Shanghai-only, Hangzhou is a worthwhile upgrade. If you're doing Suzhou + Hangzhou, an overnight in each is the right pace.`,
  },

  {
    id: "wuyuan-canola-season",
    category: "city",
    cityIds: ["wuyuan"],
    topic: "Seasonality",
    question: "When are Wuyuan's canola fields blooming?",
    answer: `**Mid-March to early April** is peak — terraced rapeseed (canola) fields turn golden against the white-walled Hui-style villages. The exact peak shifts each year by a week or two; check Chinese travel forums (or Trip.com's "moments" section) just before flying.

**Best villages for the bloom:** Jiangling (江岭) for terraced views from above, Sixiyan and Yancun for the village + flowers combination, Huangling for hillside terraces. All within a 30-minute drive of each other; rent a driver for the day.

**Other peak seasons:**
- **Late November:** the same villages turn red — Shicheng's camphor trees in particular. Very photogenic, much fewer tourists.
- **Late October:** Huangling becomes famous for "shai qiu" (晒秋) — drying chili peppers, corn, beans on rooftops, creating red-orange-yellow patterns.

**Skip:** July–August (rainy, hot), and February (everything bare).

**Getting there:** fly to Jingdezhen or Huangshan, then 1.5–2h by car. No direct high-speed rail to Wuyuan town itself.`,
  },

  {
    id: "chaoshan-food-trip",
    category: "city",
    cityIds: ["chaozhou", "shantou"],
    topic: "Food",
    question: "What do I eat in Chaozhou and Shantou?",
    answer: `Chaoshan (潮汕) is China's most fanatic food region. Plan a 2-day trip purely around eating:

**Beef hotpot (牛肉火锅)** — Shantou is the source. The cattle are slaughtered, butchered, and at the table within 4 hours; cuts are labeled by muscle ("hanging dragon", "fat hua") with strict 8–12 second dipping times. Try Babanyi (八合里) or Xinghua (杏花) for the famous chains, or any neighborhood spot — it's all good.

**Fishball noodles (鱼丸粿条)** — hand-pounded fishballs with rice ribbons in clear broth. Ask for the chewiest balls.

**Gongfu tea (工夫茶)** — Chaozhou perfected this slow ceremonial style. Tiny clay pots, rinses before the first cup, single-origin Phoenix Mountain oolong. Take a tea house seat for an hour.

**Sauces of note:** Shacha sauce (沙茶酱) for beef hotpot, fish sauce + chili oil for fishballs, garlic vinegar for everything else.

**Tip:** Shantou is for eating; Chaozhou for the old town walks (Guangji Bridge, Kaiyuan Temple). Sleep in either; they're 30 minutes apart by taxi.`,
  },

  {
    id: "yunnan-altitude-route",
    category: "city",
    cityIds: ["kunming", "dali", "lijiang"],
    topic: "Altitude",
    question: "Will I get altitude sickness in Yunnan?",
    answer: `Probably not, but the route matters.

**Altitudes:**
- Kunming: 1,890 m
- Dali: 1,975 m
- Lijiang: 2,400 m
- Shangri-La (if added): 3,200 m
- Tiger Leaping Gorge rim: 2,600 m
- Jade Dragon Snow Mountain (cable car top): 4,500 m

Below 2,500 m, most travelers feel nothing. Lijiang's altitude can give a mild headache for the first day if you fly in directly — drink water, take it easy.

**The classic acclimatization route is Kunming (1,890 m) → Dali (1,975 m) → Lijiang (2,400 m) → Shangri-La (3,200 m).** Each stop is a small step up, your body adapts gradually. Direct flights to Lijiang or Shangri-La are doable but you'll feel it more.

**Jade Dragon Snow Mountain's glacier park** at 4,500 m is the only place most travelers truly feel altitude. Buy a small oxygen canister (¥50) at the base, take it easy, don't run.`,
  },
];
