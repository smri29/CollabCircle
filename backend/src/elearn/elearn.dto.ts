import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class EnrollDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  displayName?: string;
}
