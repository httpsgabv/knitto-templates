import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '../types/health.types.js';
import { GetLivenessService } from '../service/get-liveness.service.js';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller({
  path: 'health',
  version: '1',
})
export class GetLivenessController {
  constructor(private readonly getLivenessService: GetLivenessService) {}

  @Get('/live')
  @ApiOperation({
    summary: 'Liveness probe',
    description:
      'Indicates whether the process is running. If this fails, the container should be restarted.',
  })
  @ApiOkResponse({
    description: 'Process is alive.',
    schema: {
      type: 'object',
      required: [
        'status',
        'service',
        'version',
        'environment',
        'uptime',
        'timestamp',
      ],
      properties: {
        status: { type: 'string', enum: ['ok'] },
        service: { type: 'string' },
        version: { type: 'string' },
        environment: { type: 'string' },
        uptime: {
          type: 'integer',
          minimum: 0,
          description: 'Process uptime in seconds.',
        },
        timestamp: { type: 'string', format: 'date-time' },
      },
    },
  })
  handle(): HealthResponse {
    return this.getLivenessService.execute();
  }
}
