import type { HealthResponse } from '../types/health.types';
import { GetHealthService } from '../service/get-health.service';
export declare class GetHealthController {
    private readonly getHealthService;
    constructor(getHealthService: GetHealthService);
    handle(): HealthResponse;
}
