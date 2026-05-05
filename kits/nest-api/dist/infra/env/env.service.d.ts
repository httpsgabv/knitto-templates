import type { Env } from './env';
import { ConfigService } from '@nestjs/config';
export declare class EnvService {
    private readonly configService;
    constructor(configService: ConfigService<Env, true>);
    get<T extends keyof Env>(key: T): Env[T];
    getCorsOrigins(): string[];
    isProduction(): boolean;
    isDevelopment(): boolean;
}
