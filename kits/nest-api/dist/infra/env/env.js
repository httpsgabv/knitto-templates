"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.envSchema = zod_1.default.object({
    NODE_ENV: zod_1.default
        .enum(['development', 'test', 'staging', 'production'])
        .default('development'),
    APP_NAME: zod_1.default.string().default('Knitto Nest API'),
    APP_VERSION: zod_1.default.string().default('1.0.0'),
    HOST: zod_1.default.string().default('0.0.0.0'),
    PORT: zod_1.default.coerce.number().int().positive().default(3333),
    GLOBAL_PREFIX: zod_1.default.string().default('api'),
    CORS_ORIGINS: zod_1.default
        .string()
        .default('http://localhost:3000,http://localhost:5173'),
});
//# sourceMappingURL=env.js.map