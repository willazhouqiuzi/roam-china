"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Route } from "@/data/routes";
import type { City } from "@/data/cities";

type Props = {
  route: Route;
  cities: City[];
};

export default function RouteFooter({ route, cities }: Props) {
  const router = useRouter();
  const cityById = new Map(cities.map((c) => [c.id, c]));
  const first = cityById.get(route.cityIds[0]);
  const last = cityById.get(route.cityIds[route.cityIds.length - 1]);

  return (
    <div className="mx-auto max-w-[1100px] px-6 pb-10">
      <Link
        href={`/routes/${route.id}`}
        className="block rounded-[12px] border border-[#D3D1C7] bg-white p-5 transition-colors hover:border-[#B4B2A9]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[14px] font-medium text-[#2C2C2A]">{route.name}</div>
            <div className="mt-1 text-[12px] text-[#5F5E5A]">
              {route.days} days · {first?.name} → {last?.name} · {route.transport}
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push("/routes");
            }}
            className="h-10 rounded-[8px] border border-[#D3D1C7] bg-white px-4 text-[14px] text-[#2C2C2A] transition-colors hover:border-[#B4B2A9]"
          >
            Other routes
          </button>
        </div>
      </Link>
    </div>
  );
}
