"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cors = void 0;
class Cors {
    app;
    env;
    constructor(app, env) {
        this.app = app;
        this.env = env;
    }
    setup() {
        const options = this.env.getCorsOrigins();
        this.app.enableCors({
            origin: options,
            credentials: true,
        });
    }
}
exports.Cors = Cors;
//# sourceMappingURL=cors.js.map