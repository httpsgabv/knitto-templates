import { Controller, Get } from '@nestjs/common';
import { DebugSentryService } from '../services/debug-sentry.service'

@Controller({
  path: 'debug-sentry',
  version: 'v1',
})
export class DebugSentryController {
  constructor(private readonly debugSentryService: DebugSentryService) {}

  @Get('/')
  handle() {
    return this.debugSentryService.execute();
  }
}
