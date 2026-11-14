import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'node:crypto';
import nodemailer from 'nodemailer';
import { PrismaService } from '../prisma/prisma.service';
import type {
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
} from './auth.dto';
import type { AuthUser } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
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

  async forgotPassword(dto: ForgotPasswordDto) {
    const email = dto.email.trim().toLowerCase();
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user) {
      const rawToken = crypto.randomBytes(32).toString('hex');
      const tokenHash = this.hashResetToken(rawToken);
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

      await this.prisma.passwordResetToken.deleteMany({
        where: { userId: user.id },
      });
      await this.prisma.passwordResetToken.create({
        data: { tokenHash, userId: user.id, expiresAt },
      });
      await this.sendResetEmail(user.email, user.name, rawToken);
    }

    return {
      message:
        'If an account exists for that email, a password reset link has been sent.',
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const tokenHash = this.hashResetToken(dto.token);
    const resetToken = await this.prisma.passwordResetToken.findUnique({
      where: { tokenHash },
    });

    if (
      !resetToken ||
      resetToken.usedAt ||
      resetToken.expiresAt <= new Date()
    ) {
      throw new UnauthorizedException(
        'This password reset link is invalid or has expired.',
      );
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: resetToken.userId },
        data: { passwordHash },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: resetToken.id },
        data: { usedAt: new Date() },
      }),
      this.prisma.passwordResetToken.deleteMany({
        where: { userId: resetToken.userId, id: { not: resetToken.id } },
      }),
    ]);

    return { message: 'Your password has been reset. You can now sign in.' };
  }

  private hashResetToken(token: string) {
    return crypto.createHash('sha256').update(token).digest('hex');
  }

  private async sendResetEmail(email: string, name: string, token: string) {
    const host = this.config.get<string>('SMTP_HOST');
    const port = Number(this.config.get<string>('SMTP_PORT', '587'));
    const user = this.config.get<string>('SMTP_USER');
    const pass = this.config.get<string>('SMTP_PASSWORD');
    const from = this.config.get<string>('SMTP_FROM') ?? user;
    const frontendUrl = this.config.getOrThrow<string>('FRONTEND_URL');

    if (!host || !user || !pass || !from) {
      throw new InternalServerErrorException(
        'Password recovery email is not configured.',
      );
    }

    const resetUrl = `${frontendUrl.replace(/\/$/, '')}/elearn/reset-password?token=${encodeURIComponent(token)}`;
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: 'Reset your CollabCircle password',
      text: `Hi ${name},\n\nReset your CollabCircle password using this link (valid for 1 hour):\n${resetUrl}\n\nIf you did not request this, you can ignore this email.`,
      html: `<p>Hi ${name},</p><p>Reset your CollabCircle password using the link below. It is valid for 1 hour.</p><p><a href="${resetUrl}">Reset my password</a></p><p>If you did not request this, you can ignore this email.</p>`,
    });
  }

  async me(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException('Account no longer exists.');
    return { id: user.id, email: user.email, name: user.name, role: user.role };
  }
}
