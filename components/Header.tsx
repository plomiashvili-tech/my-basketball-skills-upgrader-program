import Link from "next/link";

const NAV = [
  { href: "/lessons", label: "Lessons" },
  { href: "/pricing", label: "Pricing" },
  { href: "/parent", label: "Parent dashboard" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-base font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-court-500 text-slate-950">
            <span aria-hidden>🏀</span>
          </span>
          <span>Basketball Skills Upgrader</span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/pricing" className="btn-primary ml-2">
            Start free
          </Link>
        </nav>
        <Link href="/pricing" className="btn-primary md:hidden">
          Start
        </Link>
      </div>
    </header>
  );
}
