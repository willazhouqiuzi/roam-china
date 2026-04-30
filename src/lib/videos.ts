// City video links shown in the "On video" section.
//
// Currently we don't curate specific YouTube videos by hand — instead each
// city gets three YouTube SEARCH URLs targeting different angles (a walking
// tour, food, and a travel guide). Clicking always lands on real, current
// videos, ranked by YouTube's algorithm.
//
// To replace any slot with a specific hand-picked video, just fill in the
// `url` field on the corresponding video entry in cities.ts — anything
// that's a real (non-placeholder) URL takes precedence over the generated
// search URL.

import type { City } from "@/data/cities";

export type CityVideoLink = {
  title: string;
  creator: string;
  url: string;
};

function ytSearch(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function isRealUrl(url: string | undefined): boolean {
  if (!url) return false;
  if (url.includes("placeholder")) return false;
  return /^https?:\/\//.test(url);
}

export function getCityVideoLinks(city: City): CityVideoLink[] {
  // Default 3 angles, generated from the city name.
  const defaults: CityVideoLink[] = [
    {
      title: `A Walk Through ${city.name}`,
      creator: "Travel vlog",
      url: ytSearch(`${city.name} walking tour`),
    },
    {
      title: `What to Eat in ${city.name}`,
      creator: "Food vlog",
      url: ytSearch(`${city.name} food`),
    },
    {
      title: `${city.name} Travel Guide`,
      creator: "Travel guide",
      url: ytSearch(`${city.name} travel guide`),
    },
  ];

  // If cities.ts has explicit hand-picked videos, slot them in. Real URLs
  // override the generated default; placeholders fall back to the default.
  const handPicked = city.videos ?? [];
  return defaults.map((d, i) => {
    const hp = handPicked[i];
    if (!hp) return d;
    return {
      title: hp.title || d.title,
      creator: hp.creator || d.creator,
      url: isRealUrl(hp.url) ? hp.url : d.url,
    };
  });
}
