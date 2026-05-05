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
exports.GetLivenessController = void 0;
const common_1 = require("@nestjs/common");
const get_liveness_service_1 = require("../service/get-liveness.service");
let GetLivenessController = class GetLivenessController {
    getLivenessService;
    constructor(getLivenessService) {
        this.getLivenessService = getLivenessService;
    }
    handle() {
        return this.getLivenessService.execute();
    }
};
exports.GetLivenessController = GetLivenessController;
__decorate([
    (0, common_1.Get)('/live'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], GetLivenessController.prototype, "handle", null);
exports.GetLivenessController = GetLivenessController = __decorate([
    (0, common_1.Controller)({
        path: 'health',
        version: 'v1',
    }),
    __metadata("design:paramtypes", [get_liveness_service_1.GetLivenessService])
], GetLivenessController);
//# sourceMappingURL=get-liveness.controller.js.map