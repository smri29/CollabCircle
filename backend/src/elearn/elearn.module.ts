import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ElearnController } from './elearn.controller';
import { ElearnService } from './elearn.service';

@Module({
  imports: [AuthModule],
  controllers: [ElearnController],
  providers: [ElearnService],
})
export class ElearnModule {}
