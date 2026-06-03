import { notFound } from "next/navigation";
import { LESSONS, getLessonBySlug } from "@/lib/lessons";
import { LessonContent } from "@/components/LessonContent";

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

  return <LessonContent lesson={lesson} prev={prev} next={next} />;
}
