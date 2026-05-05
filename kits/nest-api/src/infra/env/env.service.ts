import { Injectable } from '@nestjs/common';
import type { Env } from './env';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService<Env, true>) {}

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
