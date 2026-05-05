import type { ReadinessResponse } from '../types/health.types';
import { IEnvService } from '@infra/env/interfaces/IEnvService';
export declare class GetReadinessService {
    private readonly envService;
    constructor(envService: IEnvService);
    execute(): ReadinessResponse;
}
