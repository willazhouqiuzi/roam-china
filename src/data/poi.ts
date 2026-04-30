export type POI = {
  id: string;
  name: string;
  nameZh: string;
  pinyin: string;
  mapX: number;
  mapY: number;
  prose: string;
  glyph: string;
  videoClips: Array<{ timestamp: string; videoTitle: string; creator: string }>;
  labelExtra?: string;
  labelAbove?: boolean;
  labelLeft?: boolean;
  labelRight?: boolean;
};
