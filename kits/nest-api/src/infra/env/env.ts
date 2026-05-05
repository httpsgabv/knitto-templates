import z from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'staging', 'production'])
    .default('development'),

  APP_NAME: z.string().default('Knitto Nest API'),
  APP_VERSION: z.string().default('1.0.0'),

  HOST: z.string().default('0.0.0.0'),
  PORT: z.coerce.number().int().positive().default(3333),

  GLOBAL_PREFIX: z.string().default('api'),

  CORS_ORIGINS: z
    .string()
    .default('http://localhost:3000,http://localhost:5173'),
});

export type Env = z.infer<typeof envSchema>;
