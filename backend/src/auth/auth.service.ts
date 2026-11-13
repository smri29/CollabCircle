import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import type { LoginDto, RegisterDto } from './auth.dto';
import type { AuthUser } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  private tokenFor(user: {
    id: string;
    email: string;
    name: string;
    role: 'ADMIN' | 'MEMBER';
  }) {
    const payload: AuthUser = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    return { accessToken: this.jwt.sign(payload), user: payload };
  }

  async register(dto: RegisterDto) {
    const email = dto.email.trim().toLowerCase();
    const name = dto.name.trim();
    const exists = await this.prisma.user.findUnique({ where: { email } });
    if (exists)
      throw new ConflictException('An account with this email already exists.');

    const user = await this.prisma.user.create({
      data: { email, name, passwordHash: await bcrypt.hash(dto.password, 12) },
    });
    return this.tokenFor(user);
  }

  async login(dto: LoginDto) {
    const email = dto.email.trim().toLowerCase();
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid email or password.');
    }
    return this.tokenFor(user);
  }

  async me(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException('Account no longer exists.');
    return { id: user.id, email: user.email, name: user.name, role: user.role };
  }
}
