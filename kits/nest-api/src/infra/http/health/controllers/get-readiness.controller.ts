import { Controller, Get } from '@nestjs/common';
import type { ReadinessResponse } from '../types/health.types';
import { GetReadinessService } from '../service/get-readiness.service';

@Controller({
  path: 'health',
  version: 'v1',
})
export class GetReadinessController {
  constructor(private readonly getReadinessService: GetReadinessService) {}

  @Get('/ready')
  handle(): ReadinessResponse {
    return this.getReadinessService.execute();
  }
}
