import Link from "next/link";
import { LESSONS, LEVEL_LABEL, LEVEL_DESCRIPTION, type SkillLevel } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

const LEVELS: (SkillLevel | "all")[] = ["all", "beginner", "intermediate", "advanced"];

export default function LessonsPage({
  searchParams,
}: {
  searchParams: { level?: string };
}) {
  const rawLevel = (searchParams.level as SkillLevel | "all") ?? "all";
  const activeLevel: SkillLevel | "all" = LEVELS.includes(rawLevel) ? rawLevel : "all";

  const lessons =
    activeLevel === "all"
      ? [...LESSONS].sort((a, b) => a.order - b.order)
      : LESSONS.filter((l) => l.level === activeLevel).sort((a, b) => a.order - b.order);

  return (
    <div className="container-narrow space-y-10 py-12 sm:py-16">
      <div className="max-w-3xl space-y-3">
        <span className="pill">Lessons library</span>
        <h1 className="text-3xl font-bold sm:text-4xl">Pick a track that fits the player</h1>
        <p className="text-white/70">
          Beginners should start at the top of the beginner track (Lesson 0). Already played 1–2 years?
          The intermediate track has shortcuts that skip the basics and focus on cleaning up the weak
          hand, change-of-direction moves, and shooting under control.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {LEVELS.map((level) => {
          const active = activeLevel === level;
          const label = level === "all" ? "All lessons" : LEVEL_LABEL[level];
          return (
            <Link
              key={level}
              href={level === "all" ? "/lessons" : `/lessons?level=${level}`}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                active
                  ? "border-court-400 bg-court-500 text-slate-950 font-semibold"
                  : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {activeLevel !== "all" && (
        <div className="card">
          <p className="text-sm uppercase tracking-wide text-white/50">
            {LEVEL_LABEL[activeLevel]}
          </p>
          <p className="mt-2 text-white/80">{LEVEL_DESCRIPTION[activeLevel]}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((l) => (
          <LessonCard key={l.slug} lesson={l} />
        ))}
      </div>

      {lessons.length === 0 && (
        <div className="card text-center text-white/70">No lessons yet at this level.</div>
      )}
    </div>
  );
}
