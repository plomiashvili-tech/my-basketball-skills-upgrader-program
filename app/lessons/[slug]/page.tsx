import Link from "next/link";
import { notFound } from "next/navigation";
import { LESSONS, getLessonBySlug, LEVEL_LABEL } from "@/lib/lessons";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return { title: "Lesson not found" };
  return { title: `${lesson.title} · Basketball Skills Upgrader`, description: lesson.summary };
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) notFound();

  const sameLevel = LESSONS.filter((l) => l.level === lesson.level).sort(
    (a, b) => a.order - b.order
  );
  const idx = sameLevel.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? sameLevel[idx - 1] : undefined;
  const next = idx >= 0 && idx < sameLevel.length - 1 ? sameLevel[idx + 1] : undefined;

  return (
    <div className="container-narrow space-y-8 py-12 sm:py-16">
      <nav className="text-sm text-white/60">
        <Link href="/lessons" className="hover:text-white">
          ← All lessons
        </Link>
      </nav>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill">{LEVEL_LABEL[lesson.level]}</span>
          <span className="pill">{lesson.durationMin} min</span>
          <span className="pill">Ages {lesson.ageMin}+</span>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">{lesson.title}</h1>
        <p className="max-w-3xl text-white/75">{lesson.description}</p>
      </header>

      <YouTubeEmbed id={lesson.youtubeId} title={lesson.title} />

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="card lg:col-span-2">
          <h2 className="text-xl font-semibold">Drills to complete</h2>
          <p className="mt-1 text-sm text-white/60">
            Mark each one off as you finish. Your parent dashboard will show your progress.
          </p>
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
          <h2 className="text-lg font-semibold">For parents</h2>
          <p className="mt-3 text-sm text-white/75">{lesson.parentNotes}</p>
          <Link href="/parent" className="btn-ghost mt-5 w-full">
            Open parent dashboard
          </Link>
        </aside>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        {prev ? (
          <Link href={`/lessons/${prev.slug}`} className="card flex-1 transition hover:bg-white/10">
            <p className="text-xs uppercase tracking-wider text-white/50">Previous</p>
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
            <p className="text-xs uppercase tracking-wider text-white/50">Next</p>
            <p className="font-semibold">{next.title}</p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
