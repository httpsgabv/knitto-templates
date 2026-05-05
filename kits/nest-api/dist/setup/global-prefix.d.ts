import type { EnvService } from '@infra/env/env.service';
import type { INestApplication } from '@nestjs/common';
type GlobalPrefixSetup = Pick<INestApplication, 'setGlobalPrefix'>;
export declare class GlobalPrefix {
    private readonly app;
    private readonly env;
    constructor(app: GlobalPrefixSetup, env: EnvService);
    setup(): void;
}
export {};
