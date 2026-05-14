import Link from "next/link";
import type { Lesson } from "@/lib/lessons";

const levelStyles: Record<Lesson["level"], string> = {
  beginner: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  intermediate: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  advanced: "bg-court-500/15 text-court-300 border-court-500/30",
};

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const thumb = `https://i.ytimg.com/vi/${lesson.youtubeId}/hqdefault.jpg`;
  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {/* Use img (not next/image) to avoid configuring loader for YouTube thumbs */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 transition group-hover:opacity-100">
          <span className="rounded-full bg-court-500 px-4 py-2 text-sm font-semibold text-slate-950">
            ▶ Play lesson
          </span>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${levelStyles[lesson.level]}`}
          >
            {lesson.level}
          </span>
          <span className="pill">{lesson.durationMin} min</span>
          <span className="pill">Age {lesson.ageMin}+</span>
        </div>
        <h3 className="text-lg font-semibold leading-tight">{lesson.title}</h3>
        <p className="text-sm text-white/70">{lesson.summary}</p>
      </div>
    </Link>
  );
}
