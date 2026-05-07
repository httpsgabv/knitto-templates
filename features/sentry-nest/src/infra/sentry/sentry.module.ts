import { Module } from '@nestjs/common';
import { SentryModule as SentryModuleRoot } from '@sentry/nestjs/setup'

@Module({
  imports: [
    SentryModuleRoot.forRoot()
  ]
})
export class SentryModule {}