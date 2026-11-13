"use client";

import { FormEvent, useState } from "react";
import type { Course } from "./course-data";
import { useCourseEnrollment } from "./elearn-client";
import styles from "./elearn-ui.module.css";

const maxNameLength = 30;

export function CourseEnrollment({ course }: { course: Course }) {
  const { enrollment, ready, enroll, completeLesson } = useCourseEnrollment(course.slug);
  const [name, setName] = useState("");
  if (!ready) return null;
  const completed = enrollment?.completed.length ?? 0;
  const finished = completed === course.lessons.length;
  const trimmedName = name.trim();
  const nameTooLong = trimmedName.length > maxNameLength;

  if (!enrollment) return <form className={styles.form} onSubmit={(event: FormEvent) => { event.preventDefault(); if (trimmedName && !nameTooLong) enroll(name); }}>
    <label htmlFor="learner-name"><strong>Enter your name for the certificate</strong></label>
    <input aria-describedby="learner-name-hint" aria-invalid={nameTooLong} id="learner-name" onChange={(event) => setName(event.target.value)} placeholder="Your full name" required value={name} />
    <p className={nameTooLong ? styles.formError : styles.formHint} id="learner-name-hint" role={nameTooLong ? "alert" : undefined}>
      {nameTooLong ? `Your name cannot exceed ${maxNameLength} characters.` : `${trimmedName.length}/${maxNameLength} characters`}
    </p>
    <button className="button" disabled={!trimmedName || nameTooLong} type="submit">Enroll Now — Free</button>
  </form>;

  return <div className={styles.panel}>
    <p className={styles.label}>Enrolled learner</p>
    <h2>Welcome, {enrollment.name}</h2>
    <p>{completed} of {course.lessons.length} lessons completed.</p>
    {finished ? <a className="button" href={`/elearn/${course.slug}/certificate`}>View certificate</a> : <a className="button" href={`/elearn/${course.slug}/learn`}>Continue course</a>}
    <div className={styles.lessons}>
      {course.lessons.map((lesson) => <div className={styles.lesson} key={lesson.id}>
        <span className={styles.lessonNumber}>✓</span><div><h3>{lesson.title}</h3><p>{lesson.duration}</p></div>
        <button className="button" disabled={enrollment.completed.includes(lesson.id)} onClick={() => completeLesson(lesson.id, course.lessons.length)} type="button">{enrollment.completed.includes(lesson.id) ? "Completed" : "Mark complete"}</button>
      </div>)}
    </div>
  </div>;
}
