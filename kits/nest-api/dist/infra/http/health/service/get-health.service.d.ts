import { EnvService } from '@infra/env/env.service';
import type { HealthResponse } from '../types/health.types';
export declare class GetHealthService {
    private readonly envService;
    constructor(envService: EnvService);
    execute(): HealthResponse;
}
