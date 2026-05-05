import type { HealthResponse } from '../types/health.types';
import { IEnvService } from '@infra/env/interfaces/IEnvService';
export declare class GetHealthService {
    private readonly envService;
    constructor(envService: IEnvService);
    execute(): HealthResponse;
}
