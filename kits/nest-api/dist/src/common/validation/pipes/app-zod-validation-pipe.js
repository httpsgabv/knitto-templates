"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppZodValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.AppZodValidationPipe = (0, nestjs_zod_1.createZodValidationPipe)({
    createValidationException: (error) => {
        if (error instanceof zod_1.ZodError) {
            return new common_1.BadRequestException({
                code: 'VALIDATION_ERROR',
                message: 'Validation failed',
                issues: error.issues.map((issue) => ({
                    path: issue.path.join('.'),
                    message: issue.message,
                    code: issue.code,
                })),
            });
        }
        return new common_1.BadRequestException({
            code: 'VALIDATION_ERROR',
            message: 'Validation failed',
        });
    },
    strictSchemaDeclaration: true,
});
//# sourceMappingURL=app-zod-validation-pipe.js.map