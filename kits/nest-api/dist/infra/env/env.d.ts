import z from 'zod';
export declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        test: "test";
        staging: "staging";
        production: "production";
    }>>;
    APP_NAME: z.ZodDefault<z.ZodString>;
    APP_VERSION: z.ZodDefault<z.ZodString>;
    HOST: z.ZodDefault<z.ZodString>;
    PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    GLOBAL_PREFIX: z.ZodDefault<z.ZodString>;
    CORS_ORIGINS: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type Env = z.infer<typeof envSchema>;
