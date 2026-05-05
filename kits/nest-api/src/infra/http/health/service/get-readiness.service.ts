import { EnvService } from '@infra/env/env.service';
import type { ReadinessResponse } from '../types/health.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetReadinessService {
  constructor(private readonly envService: EnvService) {}

  execute(): ReadinessResponse {
    return {
      status: 'ok',
      service: this.envService.get('APP_NAME'),
      version: this.envService.get('APP_VERSION'),
      environment: this.envService.get('NODE_ENV'),
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      checks: {
        app: 'ok',
      },
    };
  }
}
