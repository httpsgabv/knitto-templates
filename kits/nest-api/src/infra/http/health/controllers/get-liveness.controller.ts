import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '../types/health.types';
import { GetLivenessService } from '../service/get-liveness.service';

@Controller({
  path: 'health',
  version: 'v1',
})
export class GetLivenessController {
  constructor(private readonly getLivenessService: GetLivenessService) {}

  @Get('/live')
  handle(): HealthResponse {
    return this.getLivenessService.execute();
  }
}
