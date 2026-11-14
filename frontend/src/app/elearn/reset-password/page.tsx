'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { apiRequest, type ApiError } from '@/lib/api';
import styles from '@/eLearn/elearn-ui.module.css';

export default function ResetPasswordPage() {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) setToken(new URLSearchParams(window.location.search).get('token') ?? '');
    });
    return () => { cancelled = true; };
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmation) {
      setError('The passwords do not match.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await apiRequest<{ message: string }>('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ token, password }),
      });
      setMessage(response.message);
      setPassword('');
      setConfirmation('');
    } catch (requestError) {
      setError((requestError as ApiError).message);
    } finally {
      setSubmitting(false);
    }
  }

  return <><PageHero title="Choose a new password" /><section className="section">
    <div className={styles.panel}>
      <p className={styles.label}>Account recovery</p>
      <h2>Set a new password</h2>
      <p>Choose a password with at least 8 characters to secure your learner account.</p>
      <form className={styles.form} onSubmit={submit}>
        <label htmlFor="reset-password">New password</label>
        <input id="reset-password" minLength={8} onChange={(event) => setPassword(event.target.value)} required type="password" value={password} />
        <label htmlFor="reset-confirmation">Confirm new password</label>
        <input id="reset-confirmation" minLength={8} onChange={(event) => setConfirmation(event.target.value)} required type="password" value={confirmation} />
        <button className="button" disabled={submitting || !token} type="submit">{submitting ? 'Saving...' : 'Reset password'}</button>
        {message ? <p className={styles.formHint} role="status">{message} <Link className={styles.back} href="/elearn/account">Sign in</Link></p> : null}
        {error ? <p className={styles.formError} role="alert">{error}</p> : null}
      </form>
      {!token ? <p className={styles.formError} role="alert">This reset link is missing or invalid.</p> : null}
      <Link className={styles.back} href="/elearn/account">Back to sign in</Link>
    </div>
  </section></>;
}
