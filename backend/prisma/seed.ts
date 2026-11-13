import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { courses } from '../../frontend/src/eLearn/course-data';

const connectionString = process.env.DATABASE_URL;
if (!connectionString)
  throw new Error('DATABASE_URL is required to seed the database.');

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  for (const course of courses) {
    const savedCourse = await prisma.course.upsert({
      where: { slug: course.slug },
      update: {
        title: course.title,
        category: course.category,
        level: course.level,
        duration: course.duration,
        summary: course.summary,
        description: course.description,
        outcomes: course.outcomes,
        accent: course.accent,
      },
      create: {
        slug: course.slug,
        title: course.title,
        category: course.category,
        level: course.level,
        duration: course.duration,
        summary: course.summary,
        description: course.description,
        outcomes: course.outcomes,
        accent: course.accent,
      },
    });

    for (const [index, lesson] of course.lessons.entries()) {
      await prisma.lesson.upsert({
        where: {
          courseId_externalId: {
            courseId: savedCourse.id,
            externalId: lesson.id,
          },
        },
        update: {
          title: lesson.title,
          duration: lesson.duration,
          description: lesson.description,
          position: index + 1,
        },
        create: {
          courseId: savedCourse.id,
          externalId: lesson.id,
          title: lesson.title,
          duration: lesson.duration,
          description: lesson.description,
          position: index + 1,
        },
      });
    }
  }
  console.log(`Seeded ${courses.length} courses.`);
}

main().finally(() => prisma.$disconnect());
