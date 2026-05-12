import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '../types/health.types.js';
import { GetLivenessService } from '../service/get-liveness.service.js';

@Controller({
  path: 'health',
  version: '1',
})
export class GetLivenessController {
  constructor(private readonly getLivenessService: GetLivenessService) {}

  @Get('/live')
  handle(): HealthResponse {
    return this.getLivenessService.execute();
  }
}
