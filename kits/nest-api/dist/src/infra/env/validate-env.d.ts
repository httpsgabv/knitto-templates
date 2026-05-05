export declare function validateEnv(config: Record<string, unknown>): {
    NODE_ENV: "development" | "test" | "staging" | "production";
    APP_NAME: string;
    APP_VERSION: string;
    HOST: string;
    PORT: number;
    GLOBAL_PREFIX: string;
    CORS_ORIGINS: string;
};
