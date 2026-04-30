"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CountryMap from "@/components/CountryMap";
import CityPreview from "@/components/CityPreview";
import TripPlanner from "@/components/TripPlanner";
import { cities } from "@/data/cities";
import type { City } from "@/data/cities";

// All client-side state lives here so the page shell (page.tsx) can stay
// a server component and render Hero / FeaturedRoutes without hitting the
// "fs in client bundle" error.
export default function HomeInteractive() {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [tripCityIds, setTripCityIds] = useState<string[]>([]);

  const selectedCity = cities.find((c) => c.id === selectedCityId) ?? null;
  const tripCities = tripCityIds
    .map((id) => cities.find((c) => c.id === id))
    .filter((c): c is City => Boolean(c));

  const handleAddToTrip = (city: City) => {
    setTripCityIds((prev) =>
      prev.includes(city.id) ? prev : [...prev, city.id],
    );
  };
  const handleRemoveFromTrip = (city: City) => {
    setTripCityIds((prev) => prev.filter((id) => id !== city.id));
  };

  return (
    <>
      <section id="map" className="mx-auto w-full max-w-[1100px] px-6 pt-14">
        <p className="text-[13px] text-[#5F5E5A]">
          Click a city on the map to learn about it.
        </p>

        <div
          className="mt-3 flex flex-col gap-4 md:flex-row md:items-stretch"
          style={{ height: "min(72vh, 720px)", minHeight: 560 }}
        >
          <div className="min-w-0 flex-1">
            <CountryMap
              cities={cities}
              selectedCityId={selectedCityId}
              tripCityIds={tripCityIds}
              onSelectCity={(c) => setSelectedCityId(c.id)}
            />
          </div>
          <AnimatePresence>
            {selectedCity ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full shrink-0 md:w-[420px]"
              >
                <CityPreview
                  city={selectedCity}
                  inTrip={tripCityIds.includes(selectedCity.id)}
                  onAddToTrip={handleAddToTrip}
                  onRemoveFromTrip={handleRemoveFromTrip}
                  onClose={() => setSelectedCityId(null)}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>

      <TripPlanner
        tripCities={tripCities}
        onRemove={handleRemoveFromTrip}
        onClear={() => setTripCityIds([])}
      />
    </>
  );
}
