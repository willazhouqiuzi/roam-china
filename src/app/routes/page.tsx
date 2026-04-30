import Header from "@/components/Header";
import RoutesListWithFilter from "@/components/RoutesListWithFilter";
import { routes } from "@/data/routes";
import { cities } from "@/data/cities";

export default function RoutesIndexPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-8 pb-16">
        <h1
          className="font-serif italic text-[#2C2C2A]"
          style={{ fontSize: 40, lineHeight: 1.1 }}
        >
          Routes
        </h1>
        <p className="mt-2 text-[13px] text-[#5F5E5A]">
          Paths through China, hand-picked by travelers who have walked them.
        </p>

        <RoutesListWithFilter routes={routes} cities={cities} />
      </section>
    </main>
  );
}
