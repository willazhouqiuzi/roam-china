import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeInteractive from "@/components/HomeInteractive";
import FeaturedRoutes from "@/components/FeaturedRoutes";
import FeaturedFAQs from "@/components/FeaturedFAQs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <HomeInteractive />
      <FeaturedRoutes />
      <FeaturedFAQs />
    </main>
  );
}
