import type { Env } from '@infra/env/env';

export interface IEnvService {
  get<T extends keyof Env>(key: T): Env[T];
  getCorsOrigins(): string[];
  isProduction(): boolean;
  isDevelopment(): boolean;
}
