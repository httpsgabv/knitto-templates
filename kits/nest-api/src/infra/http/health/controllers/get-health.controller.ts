import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '../types/health.types';
import { GetHealthService } from '../service/get-health.service';

@Controller({
  path: 'health',
  version: 'v1',
})
export class GetHealthController {
  constructor(private readonly getHealthService: GetHealthService) {}

  @Get('/')
  handle(): HealthResponse {
    return this.getHealthService.execute();
  }
}
