"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();

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
          <Link
            href="/lessons"
            className="rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
          >
            {t.nav.lessons}
          </Link>
          <Link
            href="/pricing"
            className="rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
          >
            {t.nav.pricing}
          </Link>
          <Link
            href="/parent"
            className="rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
          >
            {t.nav.parentDashboard}
          </Link>
          <LanguageSwitcher />
          <Link href="/pricing" className="btn-primary ml-2">
            {t.nav.startFree}
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Link href="/pricing" className="btn-primary">
            {t.nav.start}
          </Link>
        </div>
      </div>
    </header>
  );
}
