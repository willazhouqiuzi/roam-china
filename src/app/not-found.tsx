import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto flex w-full max-w-[1100px] flex-1 items-center justify-center px-6 pb-20">
        <div className="text-center">
          <h1
            className="font-serif italic text-[#2C2C2A]"
            style={{ fontSize: 56, lineHeight: 1.1 }}
          >
            Lost in transit
          </h1>
          <p className="mt-3 text-[14px] text-[#5F5E5A]">
            This page doesn&apos;t exist on the map yet.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="text-[14px] text-[#D85A30] hover:underline"
            >
              ← Back to China
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
