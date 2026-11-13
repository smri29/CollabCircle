'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest, authRequest } from '@/lib/api';

export type AuthUser = { sub: string; email: string; name: string; role: 'ADMIN' | 'MEMBER' };
type AuthResponse = { accessToken: string; user: AuthUser };
type AuthContextValue = {
  user: AuthUser | null;
  token: string | null;
  ready: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const tokenKey = 'collabcircle-access-token';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(tokenKey);
  });
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.localStorage.getItem(tokenKey);
  });

  useEffect(() => {
    if (!token) return;
    authRequest<AuthUser>(token, '/auth/me')
      .then(setUser)
      .catch(() => {
        window.localStorage.removeItem(tokenKey);
        setToken(null);
      })
      .finally(() => setReady(true));
  }, [token]);

  async function signIn(responsePromise: Promise<AuthResponse>) {
    const response = await responsePromise;
    window.localStorage.setItem(tokenKey, response.accessToken);
    setToken(response.accessToken);
    setUser(response.user);
  }

  const value = useMemo<AuthContextValue>(() => ({
    user,
    token,
    ready,
    login: (email, password) => signIn(apiRequest<AuthResponse>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })),
    register: (name, email, password) => signIn(apiRequest<AuthResponse>('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) })),
    logout: () => {
      window.localStorage.removeItem(tokenKey);
      setToken(null);
      setUser(null);
    },
  }), [ready, token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider.');
  return context;
}
