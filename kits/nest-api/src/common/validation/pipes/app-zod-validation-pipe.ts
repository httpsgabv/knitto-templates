import { BadRequestException } from '@nestjs/common';
import { createZodValidationPipe } from 'nestjs-zod';
import { ZodError } from 'zod';

export const AppZodValidationPipe = createZodValidationPipe({
  createValidationException: (error: unknown) => {
    if (error instanceof ZodError) {
      return new BadRequestException({
        code: 'VALIDATION_ERROR',
        message: 'Validation failed',
        issues: error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message,
          code: issue.code,
        })),
      });
    }

    return new BadRequestException({
      code: 'VALIDATION_ERROR',
      message: 'Validation failed',
    });
  },
  strictSchemaDeclaration: true,
});
