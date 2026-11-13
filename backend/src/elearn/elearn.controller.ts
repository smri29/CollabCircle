import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { AuthenticatedRequest } from '../auth/auth.types';
import { EnrollDto } from './elearn.dto';
import { ElearnService } from './elearn.service';

@Controller('elearn')
export class ElearnController {
  constructor(private readonly elearn: ElearnService) {}

  @Get('courses')
  listCourses() {
    return this.elearn.listCourses();
  }

  @Get('courses/:slug')
  getCourse(@Param('slug') slug: string) {
    return this.elearn.getCourse(slug);
  }

  @Get('courses/:slug/enrollment')
  @UseGuards(JwtAuthGuard)
  getEnrollment(
    @Param('slug') slug: string,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.elearn.getEnrollment(slug, request.user.sub);
  }

  @Post('courses/:slug/enrollment')
  @UseGuards(JwtAuthGuard)
  enroll(
    @Param('slug') slug: string,
    @Body() dto: EnrollDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.elearn.enroll(slug, request.user.sub, dto);
  }

  @Post('courses/:slug/lessons/:lessonId/complete')
  @UseGuards(JwtAuthGuard)
  completeLesson(
    @Param('slug') slug: string,
    @Param('lessonId') lessonId: string,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.elearn.completeLesson(slug, lessonId, request.user.sub);
  }

  @Get('courses/:slug/certificate')
  @UseGuards(JwtAuthGuard)
  getCertificate(
    @Param('slug') slug: string,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.elearn.getCertificate(slug, request.user.sub);
  }
}
