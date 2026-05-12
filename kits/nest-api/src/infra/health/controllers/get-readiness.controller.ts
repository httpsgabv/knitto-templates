import { Controller, Get } from '@nestjs/common';
import type { ReadinessResponse } from '../types/health.types.js';
import { GetReadinessService } from '../service/get-readiness.service.js';

@Controller({
  path: 'health',
  version: '1',
})
export class GetReadinessController {
  constructor(private readonly getReadinessService: GetReadinessService) {}

  @Get('/ready')
  handle(): ReadinessResponse {
    return this.getReadinessService.execute();
  }
}
