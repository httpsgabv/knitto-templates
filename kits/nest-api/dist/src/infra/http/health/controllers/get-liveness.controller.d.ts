import type { HealthResponse } from '../types/health.types';
import { GetLivenessService } from '../service/get-liveness.service';
export declare class GetLivenessController {
    private readonly getLivenessService;
    constructor(getLivenessService: GetLivenessService);
    handle(): HealthResponse;
}
