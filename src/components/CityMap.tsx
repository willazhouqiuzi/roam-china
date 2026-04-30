"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import POIPanel from "./POIPanel";
import type { POI } from "@/data/poi";

type Props = {
  cityId: string;
  pois: POI[];
  defaultPoiId: string;
  decoration?: ReactNode;
  ariaLabel?: string;
};

export default function CityMap({
  cityId,
  pois,
  defaultPoiId,
  decoration,
  ariaLabel = "City places of interest",
}: Props) {
  const [selectedId, setSelectedId] = useState<string>(defaultPoiId);
  const selected: POI = pois.find((p) => p.id === selectedId) ?? pois[0];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <div className="overflow-hidden rounded-[16px] border border-[#D3D1C7] bg-[#FBFAF6]">
        <svg
          viewBox="0 0 680 400"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          className="block w-full"
          role="img"
          aria-label={ariaLabel}
        >
          <rect x="0" y="0" width="680" height="400" fill="#FBFAF6" />
          {decoration}

          {pois.map((poi) => {
            const isSelected = poi.id === selectedId;
            return (
              <motion.g
                key={poi.id}
                style={{
                  cursor: "pointer",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                }}
                initial="rest"
                whileHover="hover"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.15 },
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                onClick={() => setSelectedId(poi.id)}
                role="button"
                aria-label={`Select ${poi.name}`}
              >
                <circle
                  cx={poi.mapX}
                  cy={poi.mapY}
                  r={16}
                  fill="transparent"
                />
                {isSelected ? (
                  <circle
                    cx={poi.mapX}
                    cy={poi.mapY}
                    r={14}
                    fill="none"
                    stroke="#F5C4B3"
                    strokeWidth="2"
                  />
                ) : null}
                <circle cx={poi.mapX} cy={poi.mapY} r={7} fill="#D85A30" />
                <motion.text
                  x={
                    poi.labelLeft
                      ? poi.mapX - 11
                      : poi.labelRight
                        ? poi.mapX + 11
                        : poi.mapX
                  }
                  y={poi.labelAbove ? poi.mapY - 16 : poi.mapY + 24}
                  textAnchor={
                    poi.labelLeft ? "end" : poi.labelRight ? "start" : "middle"
                  }
                  fontSize="12"
                  fontWeight="500"
                  stroke="#FBFAF6"
                  strokeWidth="3"
                  paintOrder="stroke"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  variants={{
                    rest: { fill: "#4A1B0C" },
                    hover: { fill: "#2C2C2A" },
                  }}
                >
                  {poi.name}
                </motion.text>
                {poi.labelExtra ? (
                  <text
                    x={poi.mapX}
                    y={poi.mapY + 38}
                    textAnchor="middle"
                    fontSize="10"
                    fontStyle="italic"
                    fill="#888780"
                    stroke="#FBFAF6"
                    strokeWidth="3"
                    paintOrder="stroke"
                    style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    {poi.labelExtra}
                  </text>
                ) : null}
              </motion.g>
            );
          })}
        </svg>
      </div>

      <POIPanel cityId={cityId} poi={selected} />
    </div>
  );
}
