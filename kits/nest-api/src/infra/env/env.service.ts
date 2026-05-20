import { Injectable } from '@nestjs/common';
import type { Env } from './env.js';
import { ConfigService } from '@nestjs/config';
import type { IEnvService } from './interfaces/IEnvService.js';

@Injectable()
export class EnvService implements IEnvService {
  constructor(private readonly configService: ConfigService<Env, true>) {}

  get nodeEnv(): string {
    return this.get('NODE_ENV');
  }

  get appName(): string {
    return this.get('APP_NAME');
  }

  get appVersion(): string {
    return this.get('APP_VERSION');
  }

  get HOST(): string {
    return this.get('HOST');
  }

  get port(): number {
    return this.get('PORT');
  }

  get globalPrefix(): string {
    return this.get('GLOBAL_PREFIX');
  }

  get corsOrigin(): string {
    return this.get('CORS_ORIGINS');
  }

  get openApiAppName(): string {
    return this.get('OPENAPI_APP_NAME');
  }

  get openApiAppDescription(): string {
    return this.get('OPENAPI_APP_DESCRIPTION');
  }

  get<T extends keyof Env>(key: T): Env[T] {
    return this.configService.get(key, { infer: true });
  }

  getCorsOrigins(): string[] {
    return this.get('CORS_ORIGINS')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean);
  }

  isProduction(): boolean {
    return this.get('NODE_ENV') === 'production';
  }

  isDevelopment(): boolean {
    return this.get('NODE_ENV') === 'development';
  }
}
