"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestIdMiddleware = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const request_id_constants_1 = require("../constants/request-id.constants");
function normalizeRequestId(value) {
    if (typeof value !== 'string') {
        return null;
    }
    const trimmed = value.trim();
    if (!trimmed) {
        return null;
    }
    if (trimmed.length > 128) {
        return null;
    }
    return trimmed;
}
let RequestIdMiddleware = class RequestIdMiddleware {
    use(request, response, next) {
        const incomingRequestId = normalizeRequestId(request.headers[request_id_constants_1.REQUEST_ID_HEADER]);
        const requestId = incomingRequestId ?? (0, crypto_1.randomUUID)();
        request.headers[request_id_constants_1.REQUEST_ID_HEADER] = requestId;
        response.setHeader(request_id_constants_1.REQUEST_ID_HEADER, requestId);
        request.requestId = requestId;
        next();
    }
};
exports.RequestIdMiddleware = RequestIdMiddleware;
exports.RequestIdMiddleware = RequestIdMiddleware = __decorate([
    (0, common_1.Injectable)()
], RequestIdMiddleware);
//# sourceMappingURL=request-id.middleware.js.map