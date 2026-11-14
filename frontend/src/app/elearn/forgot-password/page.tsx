'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { apiRequest, type ApiError } from '@/lib/api';
import styles from '@/eLearn/elearn-ui.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setMessage('');
    setSubmitting(true);

    try {
      const response = await apiRequest<{ message: string }>('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      setMessage(response.message);
    } catch (requestError) {
      setError((requestError as ApiError).message);
    } finally {
      setSubmitting(false);
    }
  }

  return <><PageHero title="Reset your password" /><section className="section">
    <div className={styles.panel}>
      <p className={styles.label}>Account recovery</p>
      <h2>Forgot your password?</h2>
      <p>Enter the email address connected to your learner account and we will send you a secure reset link.</p>
      <form className={styles.form} onSubmit={submit}>
        <label htmlFor="forgot-email">Email address</label>
        <input id="forgot-email" onChange={(event) => setEmail(event.target.value)} required type="email" value={email} />
        <button className="button" disabled={submitting} type="submit">{submitting ? 'Sending...' : 'Send reset link'}</button>
        {message ? <p className={styles.formHint} role="status">{message}</p> : null}
        {error ? <p className={styles.formError} role="alert">{error}</p> : null}
      </form>
      <Link className={styles.back} href="/elearn/account">Back to sign in</Link>
    </div>
  </section></>;
}
