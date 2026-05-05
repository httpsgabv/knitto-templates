import type { EnvService } from '@infra/env/env.service';
import type { INestApplication } from '@nestjs/common';
type CorsSetup = Pick<INestApplication, 'enableCors'>;
export declare class Cors {
    private readonly app;
    private readonly env;
    constructor(app: CorsSetup, env: EnvService);
    setup(): void;
}
export {};
