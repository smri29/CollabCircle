'use client';

import { useEffect, useState } from 'react';
import { authRequest, type ApiError } from '@/lib/api';
import { useAuth } from '@/auth/auth-context';

export type Enrollment = {
  id: string;
  displayName: string;
  enrolledAt: string;
  completedAt?: string | null;
  progress: { lessonId: string; completedAt: string }[];
  certificate?: { code: string; issuedAt: string } | null;
};

export function useCourseEnrollment(slug: string) {
  const { user, token, ready: authReady } = useAuth();
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authReady) return;
    if (!user || !token) {
      setEnrollment(null);
      setReady(true);
      return;
    }
    setReady(false);
    authRequest<Enrollment | null>(token, `/elearn/courses/${slug}/enrollment`)
      .then(setEnrollment)
      .catch((requestError: ApiError) => {
        if (requestError.status === 404) setEnrollment(null);
        else setError(requestError.message);
      })
      .finally(() => setReady(true));
  }, [authReady, slug, token, user]);

  async function enroll(name: string) {
    if (!token) return;
    setError('');
    try {
      setEnrollment(await authRequest<Enrollment>(token, `/elearn/courses/${slug}/enrollment`, {
        method: 'POST',
        body: JSON.stringify({ displayName: name.trim() }),
      }));
    } catch (requestError) {
      setError((requestError as Error).message);
    }
  }

  async function completeLesson(lessonId: string) {
    if (!token || !enrollment) return;
    setError('');
    try {
      setEnrollment(await authRequest<Enrollment>(token, `/elearn/courses/${slug}/lessons/${lessonId}/complete`, { method: 'POST' }));
    } catch (requestError) {
      setError((requestError as Error).message);
    }
  }

  return { enrollment, ready: authReady && ready, error, enroll, completeLesson };
}
