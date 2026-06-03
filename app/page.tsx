"use client";

import Link from "next/link";
import { LESSONS, type SkillLevel } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";
import { useTranslation } from "@/components/LanguageContext";

const SKILL_ORDER: SkillLevel[] = ["beginner", "intermediate", "advanced"];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(249,115,22,0.18),rgba(2,6,23,0))]"
        />
        <div className="container-narrow relative grid gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div className="space-y-6">
            <span className="pill">{t.home.badge}</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}{" "}
              <span className="text-court-400">{t.home.heroTitleHighlight}</span>.
            </h1>
            <p className="max-w-xl text-lg text-white/75">{t.home.heroDesc}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="btn-primary">
                {t.home.startFree}
              </Link>
              <Link href="/lessons" className="btn-ghost">
                {t.home.browseLessons}
              </Link>
            </div>
            <p className="text-sm text-white/50">{t.home.freePlanNote}</p>
          </div>
          <div className="relative">
            <div className="card space-y-3">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${LESSONS[0].youtubeId}/hqdefault.jpg`}
                  alt="Preview thumbnail of the first lesson"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">{t.home.firstLesson}</p>
                  <p className="font-semibold">{LESSONS[0].title}</p>
                </div>
                <Link href={`/lessons/${LESSONS[0].slug}`} className="btn-primary">
                  {t.home.watch}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container-narrow space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.home.tracksTitle}</h2>
            <p className="mt-3 text-white/70">{t.home.tracksDesc}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SKILL_ORDER.map((level) => (
              <Link
                key={level}
                href={`/lessons?level=${level}`}
                className="card flex flex-col gap-3 transition hover:bg-white/10"
              >
                <span className="pill w-fit">{t.levelLabel[level]}</span>
                <p className="text-white/75">{t.levelDescription[level]}</p>
                <span className="mt-auto text-sm font-semibold text-court-300">
                  {t.home.seeLessons.replace("{level}", t.levelLabel[level])}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container-narrow space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.home.whyTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.features.map((f) => (
              <div key={f.title} className="card">
                <div className="mb-2 text-3xl" aria-hidden>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-white/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container-narrow space-y-10">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">{t.home.sampleTitle}</h2>
              <p className="mt-3 text-white/70">{t.home.sampleDesc}</p>
            </div>
            <Link href="/lessons" className="btn-ghost hidden sm:inline-flex">
              {t.home.allLessons}
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LESSONS.slice(0, 3).map((l) => (
              <LessonCard key={l.slug} lesson={l} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow">
          <div className="card flex flex-col items-start gap-4 bg-gradient-to-br from-court-500/15 to-transparent sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">{t.home.ctaTitle}</h2>
              <p className="mt-1 text-white/70">{t.home.ctaDesc}</p>
            </div>
            <Link href="/pricing" className="btn-primary">
              {t.home.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
