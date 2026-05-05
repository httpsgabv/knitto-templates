"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = validateEnv;
const env_1 = require("./env");
function validateEnv(config) {
    const result = env_1.envSchema.safeParse(config);
    if (!result.success) {
        const formattedIssues = result.error.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
            code: issue.code,
        }));
        throw new Error(`Invalid environment variables:\n${JSON.stringify(formattedIssues, null, 2)}`);
    }
    return result.data;
}
//# sourceMappingURL=validate-env.js.map