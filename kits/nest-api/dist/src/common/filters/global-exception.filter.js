"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const request_id_constants_1 = require("../constants/request-id.constants");
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
function normalizeExceptionResponse(response) {
    if (typeof response === 'string') {
        return {
            message: response,
        };
    }
    if (isObject(response)) {
        return response;
    }
    return {
        message: 'Unexpected error',
    };
}
class GlobalExceptionFilter {
    logger = new common_1.Logger(GlobalExceptionFilter.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const isHttpException = exception instanceof common_1.HttpException;
        const statusCode = isHttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = isHttpException
            ? normalizeExceptionResponse(exception.getResponse())
            : {
                message: 'Internal server error',
            };
        const requestId = request.requestId ??
            request.headers[request_id_constants_1.REQUEST_ID_HEADER]?.toString() ??
            response.getHeader(request_id_constants_1.REQUEST_ID_HEADER)?.toString();
        const errorResponse = {
            statusCode,
            code: exceptionResponse.code ?? this.getDefaultErrorCode(statusCode),
            message: exceptionResponse.message ?? this.getDefaultErrorMessage(statusCode),
            error: exceptionResponse.error,
            issues: exceptionResponse.issues,
            requestId,
            timestamp: new Date().toISOString(),
            path: request.originalUrl,
            method: request.method,
        };
        if (statusCode >= 500) {
            this.logger.error(`${request.method} ${request.originalUrl} failed with ${statusCode}`, exception instanceof Error ? exception.stack : String(exception));
        }
        response.status(statusCode).json(errorResponse);
    }
    getDefaultErrorCode(statusCode) {
        switch (statusCode) {
            case common_1.HttpStatus.BAD_REQUEST:
                return 'BAD_REQUEST';
            case common_1.HttpStatus.UNAUTHORIZED:
                return 'UNAUTHORIZED';
            case common_1.HttpStatus.FORBIDDEN:
                return 'FORBIDDEN';
            case common_1.HttpStatus.NOT_FOUND:
                return 'NOT_FOUND';
            case common_1.HttpStatus.CONFLICT:
                return 'CONFLICT';
            case common_1.HttpStatus.UNPROCESSABLE_ENTITY:
                return 'UNPROCESSABLE_ENTITY';
            case common_1.HttpStatus.TOO_MANY_REQUESTS:
                return 'TOO_MANY_REQUESTS';
            default:
                return 'INTERNAL_SERVER_ERROR';
        }
    }
    getDefaultErrorMessage(statusCode) {
        switch (statusCode) {
            case common_1.HttpStatus.BAD_REQUEST:
                return 'Bad request';
            case common_1.HttpStatus.UNAUTHORIZED:
                return 'Unauthorized';
            case common_1.HttpStatus.FORBIDDEN:
                return 'Forbidden';
            case common_1.HttpStatus.NOT_FOUND:
                return 'Resource not found';
            case common_1.HttpStatus.CONFLICT:
                return 'Conflict';
            case common_1.HttpStatus.UNPROCESSABLE_ENTITY:
                return 'Unprocessable entity';
            case common_1.HttpStatus.TOO_MANY_REQUESTS:
                return 'Too many requests';
            default:
                return 'Internal server error';
        }
    }
}
exports.GlobalExceptionFilter = GlobalExceptionFilter;
//# sourceMappingURL=global-exception.filter.js.map