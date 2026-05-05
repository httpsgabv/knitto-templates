import { Module } from '@nestjs/common';
import { GetHealthController } from './controllers/get-health.controller';
import { GetLivenessController } from './controllers/get-liveness.controller';
import { GetReadinessController } from './controllers/get-readiness.controller';
import { GetHealthService } from './service/get-health.service';
import { GetLivenessService } from './service/get-liveness.service';
import { GetReadinessService } from './service/get-readiness.service';
import { EnvModule } from '@infra/env/env.module';
import { EnvService } from '@infra/env/env.service';

@Module({
  imports: [EnvModule],
  controllers: [
    GetHealthController,
    GetLivenessController,
    GetReadinessController,
  ],
  providers: [
    GetHealthService,
    GetLivenessService,
    GetReadinessService,
    EnvService,
  ],
})
export class HealthModule {}
