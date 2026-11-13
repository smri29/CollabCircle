import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { EnrollDto } from './elearn.dto';

@Injectable()
export class ElearnService {
  constructor(private readonly prisma: PrismaService) {}

  listCourses() {
    return this.prisma.course.findMany({
      orderBy: { createdAt: 'asc' },
      include: { lessons: { orderBy: { position: 'asc' } } },
    });
  }

  async getCourse(slug: string) {
    const course = await this.prisma.course.findUnique({
      where: { slug },
      include: { lessons: { orderBy: { position: 'asc' } } },
    });
    if (!course) throw new NotFoundException('Course not found.');
    return course;
  }

  async getEnrollment(slug: string, userId: string) {
    const course = await this.getCourse(slug);
    return this.prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId: course.id } },
      include: {
        progress: { orderBy: { completedAt: 'asc' } },
        certificate: true,
      },
    });
  }

  async enroll(slug: string, userId: string, dto: EnrollDto) {
    const course = await this.getCourse(slug);
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    const displayName = dto.displayName?.trim() || user.name;
    const existing = await this.prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId: course.id } },
    });
    if (existing)
      throw new ConflictException('You are already enrolled in this course.');

    if (displayName !== user.name) {
      await this.prisma.user.update({
        where: { id: userId },
        data: { name: displayName },
      });
    }
    return this.prisma.enrollment.create({
      data: { userId, courseId: course.id, displayName },
      include: { progress: true, certificate: true },
    });
  }

  async completeLesson(slug: string, lessonExternalId: string, userId: string) {
    const course = await this.getCourse(slug);
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId: course.id } },
      include: { progress: true, certificate: true },
    });
    if (!enrollment)
      throw new NotFoundException('Enroll in this course first.');

    const lesson = course.lessons.find(
      (item) => item.externalId === lessonExternalId,
    );
    if (!lesson) throw new NotFoundException('Lesson not found.');
    const alreadyComplete = enrollment.progress.some(
      (item) => item.lessonId === lesson.id,
    );
    if (alreadyComplete) return this.getEnrollment(slug, userId);

    await this.prisma.$transaction(async (transaction) => {
      await transaction.lessonProgress.create({
        data: { enrollmentId: enrollment.id, lessonId: lesson.id },
      });
      const completedCount = enrollment.progress.length + 1;
      if (completedCount < course.lessons.length) return;

      const completedAt = new Date();
      await transaction.enrollment.update({
        where: { id: enrollment.id },
        data: { completedAt },
      });
      const sequence = await transaction.certificateSequence.upsert({
        where: { id: 'certificate' },
        create: { id: 'certificate', nextValue: 1 },
        update: { nextValue: { increment: 1 } },
      });
      await transaction.certificate.create({
        data: {
          enrollmentId: enrollment.id,
          code: `cc14062500a${sequence.nextValue}`,
        },
      });
    });
    return this.getEnrollment(slug, userId);
  }

  async getCertificate(slug: string, userId: string) {
    const enrollment = await this.getEnrollment(slug, userId);
    if (!enrollment?.certificate || !enrollment.completedAt) {
      throw new NotFoundException(
        'Complete every lesson to unlock your certificate.',
      );
    }
    return {
      code: enrollment.certificate.code,
      issuedAt: enrollment.certificate.issuedAt,
      completedAt: enrollment.completedAt,
      name: enrollment.displayName,
      courseName: (await this.getCourse(slug)).title,
    };
  }
}
