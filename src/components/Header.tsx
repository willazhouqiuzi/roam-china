import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-[#D3D1C7] bg-[#FBFAF6]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-7">
        <div className="flex items-baseline gap-10">
          <Link
            href="/"
            className="font-serif italic leading-none text-[#2C2C2A]"
            style={{ fontSize: 30 }}
          >
            Roam China
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/cities"
              className="text-[14px] font-medium text-[#2C2C2A] underline-offset-4 transition-colors hover:underline"
            >
              Cities
            </Link>
            <Link
              href="/routes"
              className="text-[14px] font-medium text-[#2C2C2A] underline-offset-4 transition-colors hover:underline"
            >
              Routes
            </Link>
            <Link
              href="/help"
              className="text-[14px] font-medium text-[#2C2C2A] underline-offset-4 transition-colors hover:underline"
            >
              Help
            </Link>
          </nav>
        </div>
        <span className="rounded-full border border-[#D3D1C7] px-3 py-1 text-[11px] text-[#888780]">
          v0.1
        </span>
      </div>
    </header>
  );
}
