import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  minutes,
  seconds,
  ThrottlerGuard,
  ThrottlerModule,
} from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'short',
          ttl: seconds(1),
          limit: 10,
        },
        {
          name: 'default',
          ttl: minutes(1),
          limit: 100,
        },
      ],
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppThrottlerModule {}
