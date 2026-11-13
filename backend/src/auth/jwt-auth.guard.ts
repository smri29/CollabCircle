import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { AuthUser, AuthenticatedRequest } from './auth.types';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const header = request.headers.authorization;
    if (!header?.startsWith('Bearer '))
      throw new UnauthorizedException('Authentication required.');

    try {
      request.user = this.jwt.verify<AuthUser>(header.slice(7));
      return true;
    } catch {
      throw new UnauthorizedException('Your session has expired.');
    }
  }
}
