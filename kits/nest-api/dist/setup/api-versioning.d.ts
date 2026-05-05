import type { INestApplication } from '@nestjs/common';
type ApiVersioningSetup = Pick<INestApplication, 'enableVersioning'>;
export declare class ApiVersioning {
    private readonly app;
    constructor(app: ApiVersioningSetup);
    setup(): void;
}
export {};
