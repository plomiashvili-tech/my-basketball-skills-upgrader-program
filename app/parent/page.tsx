"use client";

import Link from "next/link";
import { LESSONS } from "@/lib/lessons";
import { useTranslation } from "@/components/LanguageContext";

const childName = "Alex";

const mockProgress = [
  { slug: LESSONS[0].slug, completedDrills: 3, totalDrills: LESSONS[0].drills.length, lastSeen: "Yesterday, 5:42 pm" },
  { slug: LESSONS[1].slug, completedDrills: 2, totalDrills: LESSONS[1].drills.length, lastSeen: "Yesterday, 6:01 pm" },
  { slug: LESSONS[2].slug, completedDrills: 0, totalDrills: LESSONS[2].drills.length, lastSeen: "Not started" },
];

const totalMinutes = 27;
const lessonsTouched = mockProgress.filter((p) => p.completedDrills > 0).length;

export default function ParentDashboard() {
  const { t } = useTranslation();

  return (
    <div className="container-narrow space-y-10 py-12 sm:py-16">
      <header className="space-y-3">
        <span className="pill">{t.parent.badge}</span>
        <h1 className="text-3xl font-bold sm:text-4xl">{childName}{t.parent.trainingOf}</h1>
        <p className="text-white/70">{t.parent.desc}</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <Stat label={t.parent.lessonsStarted} value={lessonsTouched.toString()} />
        <Stat label={t.parent.totalTime} value={`${totalMinutes} ${t.lessonDetail.min}`} />
        <Stat label={t.parent.currentTrack} value={t.levelLabel.beginner} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{t.parent.recentActivity}</h2>
          <Link href="/lessons" className="text-sm text-court-300 hover:text-court-200">
            {t.parent.seeAll}
          </Link>
        </div>
        <div className="space-y-3">
          {mockProgress.map((p) => {
            const lesson = LESSONS.find((l) => l.slug === p.slug);
            if (!lesson) return null;
            const pct = Math.round((p.completedDrills / p.totalDrills) * 100);
            return (
              <Link
                key={p.slug}
                href={`/lessons/${p.slug}`}
                className="card flex flex-col gap-3 transition hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <p className="font-semibold">{lesson.title}</p>
                  <p className="text-sm text-white/60">{t.parent.lastSeen} {p.lastSeen}</p>
                </div>
                <div className="sm:w-64">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>
                      {p.completedDrills} / {p.totalDrills} {t.parent.drills}
                    </span>
                    <span>{pct}%</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-court-500 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="card flex flex-col gap-3 bg-gradient-to-br from-court-500/15 to-transparent sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">{t.parent.webcamTitle}</h2>
          <p className="mt-1 text-sm text-white/70">{t.parent.webcamDesc}</p>
        </div>
        <span className="pill">{t.parent.comingSoon}</span>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card">
      <p className="text-xs uppercase tracking-wider text-white/50">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}
