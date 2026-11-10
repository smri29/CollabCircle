"use client";

import { useEffect, useState } from "react";

type Enrollment = { name: string; completed: string[]; enrolledAt: string };

const keyFor = (slug: string) => `collabcircle-elearn-${slug}`;

export function useCourseEnrollment(slug: string) {
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(keyFor(slug));
    // Browser storage must be read after hydration; this synchronizes the UI with localStorage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnrollment(stored ? JSON.parse(stored) : null);
    setReady(true);
  }, [slug]);

  function enroll(name: string) {
    const next = { name: name.trim(), completed: [], enrolledAt: new Date().toISOString() };
    window.localStorage.setItem(keyFor(slug), JSON.stringify(next));
    setEnrollment(next);
  }

  function completeLesson(lessonId: string) {
    if (!enrollment || enrollment.completed.includes(lessonId)) return;
    const next = { ...enrollment, completed: [...enrollment.completed, lessonId] };
    window.localStorage.setItem(keyFor(slug), JSON.stringify(next));
    setEnrollment(next);
  }

  return { enrollment, ready, enroll, completeLesson };
}
