import {
  Module,
  type MiddlewareConsumer,
  type NestModule,
} from '@nestjs/common';
import { EnvModule } from './env/env.module';
import { EnvService } from './env/env.service';
import { ValidationModule } from 'src/common/validation/validation.module';
import { FiltersModule } from 'src/common/filters/filters.module';
import { RequestIdMiddleware } from 'src/common/middleware/request-id.middleware';
import { HealthModule } from './http/health/health.module';

@Module({
  imports: [ValidationModule, EnvModule, FiltersModule, HealthModule],
  providers: [EnvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*path');
  }
}
