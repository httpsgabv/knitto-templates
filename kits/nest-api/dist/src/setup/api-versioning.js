"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiVersioning = void 0;
class ApiVersioning {
    app;
    constructor(app) {
        this.app = app;
    }
    setup() {
        this.app.enableVersioning();
    }
}
exports.ApiVersioning = ApiVersioning;
//# sourceMappingURL=api-versioning.js.map