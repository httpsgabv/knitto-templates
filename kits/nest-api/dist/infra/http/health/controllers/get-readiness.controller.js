"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReadinessController = void 0;
const common_1 = require("@nestjs/common");
const get_readiness_service_1 = require("../service/get-readiness.service");
let GetReadinessController = class GetReadinessController {
    getReadinessService;
    constructor(getReadinessService) {
        this.getReadinessService = getReadinessService;
    }
    handle() {
        return this.getReadinessService.execute();
    }
};
exports.GetReadinessController = GetReadinessController;
__decorate([
    (0, common_1.Get)('/ready'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], GetReadinessController.prototype, "handle", null);
exports.GetReadinessController = GetReadinessController = __decorate([
    (0, common_1.Controller)({
        path: 'health',
        version: 'v1',
    }),
    __metadata("design:paramtypes", [get_readiness_service_1.GetReadinessService])
], GetReadinessController);
//# sourceMappingURL=get-readiness.controller.js.map