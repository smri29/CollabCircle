import type { Request } from 'express';

export type AuthUser = {
  sub: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'MEMBER';
};

export type AuthenticatedRequest = Request & { user: AuthUser };
