"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/lessons";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { useTranslation } from "./LanguageContext";

type Props = {
  lesson: Lesson;
  prev?: Lesson;
  next?: Lesson;
};

export function LessonContent({ lesson, prev, next }: Props) {
  const { t } = useTranslation();

  return (
    <div className="container-narrow space-y-8 py-12 sm:py-16">
      <nav className="text-sm text-white/60">
        <Link href="/lessons" className="hover:text-white">
          {t.lessonDetail.backLink}
        </Link>
      </nav>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill">{t.levelLabel[lesson.level]}</span>
          <span className="pill">{lesson.durationMin} {t.lessonDetail.min}</span>
          <span className="pill">{t.lessonDetail.ages} {lesson.ageMin}+</span>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">{lesson.title}</h1>
        <p className="max-w-3xl text-white/75">{lesson.description}</p>
      </header>

      <YouTubeEmbed id={lesson.youtubeId} title={lesson.title} />

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="card lg:col-span-2">
          <h2 className="text-xl font-semibold">{t.lessonDetail.drillsTitle}</h2>
          <p className="mt-1 text-sm text-white/60">{t.lessonDetail.drillsDesc}</p>
          <ol className="mt-4 space-y-3">
            {lesson.drills.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-3"
              >
                <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-court-500 text-xs font-bold text-slate-950">
                  {i + 1}
                </span>
                <span className="text-white/90">{d}</span>
              </li>
            ))}
          </ol>
        </section>

        <aside className="card">
          <h2 className="text-lg font-semibold">{t.lessonDetail.forParents}</h2>
          <p className="mt-3 text-sm text-white/75">{lesson.parentNotes}</p>
          <Link href="/parent" className="btn-ghost mt-5 w-full">
            {t.lessonDetail.openDashboard}
          </Link>
        </aside>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        {prev ? (
          <Link href={`/lessons/${prev.slug}`} className="card flex-1 transition hover:bg-white/10">
            <p className="text-xs uppercase tracking-wider text-white/50">{t.lessonDetail.previous}</p>
            <p className="font-semibold">{prev.title}</p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/lessons/${next.slug}`}
            className="card flex-1 text-right transition hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-white/50">{t.lessonDetail.next}</p>
            <p className="font-semibold">{next.title}</p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
