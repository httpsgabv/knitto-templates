import { EnvService } from '@infra/env/env.service';
import type { ReadinessResponse } from '../types/health.types';
export declare class GetReadinessService {
    private readonly envService;
    constructor(envService: EnvService);
    execute(): ReadinessResponse;
}
