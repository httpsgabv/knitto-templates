"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalPrefix = void 0;
class GlobalPrefix {
    app;
    env;
    constructor(app, env) {
        this.app = app;
        this.env = env;
    }
    setup() {
        this.app.setGlobalPrefix(this.env.get('GLOBAL_PREFIX'));
    }
}
exports.GlobalPrefix = GlobalPrefix;
//# sourceMappingURL=global-prefix.js.map