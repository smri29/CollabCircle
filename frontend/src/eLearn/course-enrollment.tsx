'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/auth/auth-context';
import type { Course } from './course-data';
import { useCourseEnrollment } from './elearn-client';
import styles from './elearn-ui.module.css';

const maxNameLength = 30;

export function CourseEnrollment({ course }: { course: Course }) {
  const { user } = useAuth();
  const { enrollment, ready, error, enroll, completeLesson } = useCourseEnrollment(course.slug);
  const [name, setName] = useState(user?.name ?? '');

  if (!ready) return <p className={styles.formHint}>Loading your learning record...</p>;
  const completed = enrollment?.progress.length ?? 0;
  const finished = completed === course.lessons.length;
  const trimmedName = name.trim();
  const nameTooLong = trimmedName.length > maxNameLength;

  if (!user) return <div className={styles.form}>
    <p className={styles.formHint}>Create an account or sign in to save your progress and receive your certificate.</p>
    <Link className="button" href={`/elearn/account?next=/elearn/${course.slug}`}>Sign in to enroll</Link>
  </div>;

  if (!enrollment) return <form className={styles.form} onSubmit={(event: FormEvent) => { event.preventDefault(); if (trimmedName && !nameTooLong) void enroll(name); }}>
    <label htmlFor="learner-name"><strong>Enter your name for the certificate</strong></label>
    <input aria-describedby="learner-name-hint" aria-invalid={nameTooLong} id="learner-name" onChange={(event) => setName(event.target.value)} placeholder="Your full name" required value={name} />
    <p className={nameTooLong ? styles.formError : styles.formHint} id="learner-name-hint" role={nameTooLong ? 'alert' : undefined}>
      {nameTooLong ? `Your name cannot exceed ${maxNameLength} characters.` : `${trimmedName.length}/${maxNameLength} characters`}
    </p>
    <button className="button" disabled={!trimmedName || nameTooLong} type="submit">Enroll Now — Free</button>
    {error ? <p className={styles.formError} role="alert">{error}</p> : null}
  </form>;

  return <div className={styles.panel}>
    <p className={styles.label}>Enrolled learner</p>
    <h2>Welcome, {enrollment.displayName}</h2>
    <p>{completed} of {course.lessons.length} lessons completed.</p>
    {error ? <p className={styles.formError} role="alert">{error}</p> : null}
    {finished ? <a className="button" href={`/elearn/${course.slug}/certificate`}>View certificate</a> : <a className="button" href={`/elearn/${course.slug}/learn`}>Continue course</a>}
    <div className={styles.lessons}>
      {course.lessons.map((lesson) => {
        const isComplete = enrollment.progress.some((item) => item.lessonId === lesson.id);
        return <div className={styles.lesson} key={lesson.id}>
          <span className={styles.lessonNumber}>{isComplete ? '✓' : '○'}</span>
          <div><h3>{lesson.title}</h3><p>{lesson.duration}</p></div>
          <button className="button" disabled={isComplete} onClick={() => void completeLesson(lesson.id)} type="button">{isComplete ? 'Completed' : 'Mark complete'}</button>
        </div>;
      })}
    </div>
  </div>;
}
