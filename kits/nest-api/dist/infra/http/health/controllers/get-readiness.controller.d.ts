import type { ReadinessResponse } from '../types/health.types';
import { GetReadinessService } from '../service/get-readiness.service';
export declare class GetReadinessController {
    private readonly getReadinessService;
    constructor(getReadinessService: GetReadinessService);
    handle(): ReadinessResponse;
}
