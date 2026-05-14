import Link from "next/link";
import { LESSONS, LEVEL_LABEL, LEVEL_DESCRIPTION, type SkillLevel } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

const features = [
  {
    title: "Starts from Lesson 0",
    body: "Brand-new player? We assume nothing. The first lesson is literally how to hold the ball. Every later skill builds on the last.",
    icon: "🏀",
  },
  {
    title: "Flexible for experienced kids",
    body: "Already played for 1–2 years? Skip the basics. Take a quick placement check and jump into intermediate moves that fix the weak hand and add real game skills.",
    icon: "⚡",
  },
  {
    title: "Every lesson has video + drills",
    body: "Watch the demo, then follow the drill list. Short videos (10–25 minutes) that fit between school and dinner.",
    icon: "📺",
  },
  {
    title: "Parents stay in the loop",
    body: "A simple dashboard shows which lessons your child watched, time spent, and which drills they marked complete. Live webcam view is coming next.",
    icon: "👪",
  },
];

const SKILL_ORDER: SkillLevel[] = ["beginner", "intermediate", "advanced"];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(249,115,22,0.18),rgba(2,6,23,0))]"
        />
        <div className="container-narrow relative grid gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div className="space-y-6">
            <span className="pill">Ages 7 and up · Step-by-step training</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Upgrade your basketball skills <span className="text-court-400">one lesson at a time</span>.
            </h1>
            <p className="max-w-xl text-lg text-white/75">
              From holding the ball for the first time to a step-back three. Built for kids age 7 and up,
              flexible enough for players already 1–2 years in. Parents follow along on a simple dashboard.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="btn-primary">
                Start free for 1 month
              </Link>
              <Link href="/lessons" className="btn-ghost">
                Browse lessons
              </Link>
            </div>
            <p className="text-sm text-white/50">
              Beginners get the first month free. 3, 6, and 12-month programs available.
            </p>
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
                  <p className="text-xs uppercase tracking-wider text-white/50">First lesson, free</p>
                  <p className="font-semibold">{LESSONS[0].title}</p>
                </div>
                <Link href={`/lessons/${LESSONS[0].slug}`} className="btn-primary">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container-narrow space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Built for every starting point</h2>
            <p className="mt-3 text-white/70">
              Pick the track that matches your current level. You can re-take the placement at any time.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SKILL_ORDER.map((level) => (
              <Link
                key={level}
                href={`/lessons?level=${level}`}
                className="card flex flex-col gap-3 transition hover:bg-white/10"
              >
                <span className="pill w-fit">{LEVEL_LABEL[level]}</span>
                <p className="text-white/75">{LEVEL_DESCRIPTION[level]}</p>
                <span className="mt-auto text-sm font-semibold text-court-300">
                  See {level} lessons →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container-narrow space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Why parents and kids choose us</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((f) => (
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
              <h2 className="text-3xl font-bold sm:text-4xl">Sample lessons</h2>
              <p className="mt-3 text-white/70">A peek at how each lesson is structured.</p>
            </div>
            <Link href="/lessons" className="btn-ghost hidden sm:inline-flex">
              All lessons
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
              <h2 className="text-2xl font-bold">Ready to start?</h2>
              <p className="mt-1 text-white/70">
                Beginners get the first month free. No credit card needed.
              </p>
            </div>
            <Link href="/pricing" className="btn-primary">
              See plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
