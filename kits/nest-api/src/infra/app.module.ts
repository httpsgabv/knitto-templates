import {
  Module,
  type MiddlewareConsumer,
  type NestModule,
} from '@nestjs/common';
import { EnvModule } from './env/env.module.js';
import { EnvService } from './env/env.service.js';
import { ValidationModule } from '#common/validation/validation.module.js';
import { FiltersModule } from '#common/filters/filters.module.js';
import { RequestIdMiddleware } from '#common/middleware/request-id.middleware.js';
import { HealthModule } from './health/health.module.js';

@Module({
  imports: [ValidationModule, EnvModule, FiltersModule, HealthModule],
  providers: [EnvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*path');
  }
}
