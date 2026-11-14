'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { useAuth } from '@/auth/auth-context';
import styles from '@/eLearn/elearn-ui.module.css';

export default function AccountPage() {
  const { user, ready, login, register, logout } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [next] = useState(() => {
    if (typeof window === 'undefined') return '/elearn';
    const destination = new URLSearchParams(window.location.search).get('next');
    return destination?.startsWith('/') ? destination : '/elearn';
  });

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError('');
    try {
      if (mode === 'register') await register(name, email, password);
      else await login(email, password);
      window.location.assign(next);
    } catch (requestError) {
      setError((requestError as Error).message);
    }
  }

  return <><PageHero title="Your learning account" /><section className="section">
    <div className={styles.panel}>
      {!ready ? <p>Loading account...</p> : user ? <>
        <p className={styles.label}>Signed in</p>
        <h2>Welcome, {user.name}</h2>
        <p>Your course progress and certificates are securely connected to this account.</p>
        <button className="button" onClick={logout} type="button">Sign out</button>
      </> : <>
        <p className={styles.label}>{mode === 'login' ? 'Welcome back' : 'Start learning'}</p>
        <h2>{mode === 'login' ? 'Sign in to continue learning' : 'Create your learner account'}</h2>
        <form className={styles.form} onSubmit={submit}>
          {mode === 'register' ? <><label htmlFor="account-name">Full name</label><input id="account-name" maxLength={30} minLength={2} onChange={(event) => setName(event.target.value)} required value={name} /></> : null}
          <label htmlFor="account-email">Email address</label>
          <input id="account-email" onChange={(event) => setEmail(event.target.value)} required type="email" value={email} />
          <label htmlFor="account-password">Password</label>
          <input id="account-password" minLength={8} onChange={(event) => setPassword(event.target.value)} required type="password" value={password} />
          {mode === 'login' ? <Link className={styles.back} href="/elearn/forgot-password">Forgot password?</Link> : null}
          <button className="button" type="submit">{mode === 'login' ? 'Sign in' : 'Create account'}</button>
          {error ? <p className={styles.formError} role="alert">{error}</p> : null}
        </form>
        <button className="buttonGhost" onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }} type="button">
          {mode === 'login' ? 'Need an account? Register' : 'Already have an account? Sign in'}
        </button>
      </>}
    </div>
  </section></>;
}
