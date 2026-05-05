"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthModule = void 0;
const common_1 = require("@nestjs/common");
const get_health_controller_1 = require("./controllers/get-health.controller");
const get_liveness_controller_1 = require("./controllers/get-liveness.controller");
const get_readiness_controller_1 = require("./controllers/get-readiness.controller");
const get_health_service_1 = require("./service/get-health.service");
const get_liveness_service_1 = require("./service/get-liveness.service");
const get_readiness_service_1 = require("./service/get-readiness.service");
const env_module_1 = require("../../env/env.module");
const env_service_1 = require("../../env/env.service");
let HealthModule = class HealthModule {
};
exports.HealthModule = HealthModule;
exports.HealthModule = HealthModule = __decorate([
    (0, common_1.Module)({
        imports: [env_module_1.EnvModule],
        controllers: [
            get_health_controller_1.GetHealthController,
            get_liveness_controller_1.GetLivenessController,
            get_readiness_controller_1.GetReadinessController,
        ],
        providers: [
            get_health_service_1.GetHealthService,
            get_liveness_service_1.GetLivenessService,
            get_readiness_service_1.GetReadinessService,
            env_service_1.EnvService,
        ],
    })
], HealthModule);
//# sourceMappingURL=health.module.js.map