import Link from "next/link";
import type { Course } from "./course-data";
import styles from "./elearn-ui.module.css";

export function CourseCard({ course }: { course: Course }) {
  return <article className={styles.card}>
    <div className={`${styles.cover} ${styles[course.accent]}`}><span>{course.category}</span></div>
    <div className={styles.meta}><span>{course.level}</span><span>{course.duration}</span><span>Free</span></div>
    <h2>{course.title}</h2>
    <p>{course.summary}</p>
    <div className={styles.actions}><Link className="button" href={`/elearn/${course.slug}`}>View course</Link></div>
  </article>;
}
