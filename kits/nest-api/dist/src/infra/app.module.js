"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const env_module_1 = require("./env/env.module");
const env_service_1 = require("./env/env.service");
const validation_module_1 = require("../common/validation/validation.module");
const filters_module_1 = require("../common/filters/filters.module");
const request_id_middleware_1 = require("../common/middleware/request-id.middleware");
const health_module_1 = require("./http/health/health.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(request_id_middleware_1.RequestIdMiddleware).forRoutes('*path');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [validation_module_1.ValidationModule, env_module_1.EnvModule, filters_module_1.FiltersModule, health_module_1.HealthModule],
        providers: [env_service_1.EnvService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map