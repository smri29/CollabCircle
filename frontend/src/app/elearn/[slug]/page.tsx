import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { CourseEnrollment } from "@/eLearn/course-enrollment";
import { courses, getCourse } from "@/eLearn/course-data";
import styles from "@/eLearn/elearn-ui.module.css";

export function generateStaticParams() { return courses.map((course) => ({ slug: course.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const course = getCourse((await params).slug); return { title: course?.title ?? "Course" }; }

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const course = getCourse((await params).slug); if (!course) notFound();
  return <><PageHero title={course.title} /><section className="section">
    <div className={styles.heroGrid}><article className={styles.panel}><p className={styles.label}>{course.category} · Free course</p><h2>{course.summary}</h2><p>{course.description}</p><div className={styles.meta}><span>{course.level}</span><span>{course.duration}</span></div><CourseEnrollment course={course} /></article><article className={styles.panel}><p className={styles.label}>You will learn</p><ul className={styles.outcomes}>{course.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></article></div>
    <article className={styles.panel}><p className={styles.label}>Course outline</p>{course.lessons.map((lesson, index) => <div className={styles.lesson} key={lesson.id}><span className={styles.lessonNumber}>{String(index + 1).padStart(2, "0")}</span><div><h3>{lesson.title}</h3><p>{lesson.description}</p></div><span className={styles.meta}>{lesson.duration}</span></div>)}</article>
  </section></>;
}
