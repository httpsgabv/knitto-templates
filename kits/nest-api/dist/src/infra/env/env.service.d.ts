import type { Env } from './env';
import { ConfigService } from '@nestjs/config';
import type { IEnvService } from './interfaces/IEnvService';
export declare class EnvService implements IEnvService {
    private readonly configService;
    constructor(configService: ConfigService<Env, true>);
    get<T extends keyof Env>(key: T): Env[T];
    getCorsOrigins(): string[];
    isProduction(): boolean;
    isDevelopment(): boolean;
}
