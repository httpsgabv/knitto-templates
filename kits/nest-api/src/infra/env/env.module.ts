import { Module } from '@nestjs/common';
import { EnvService } from './env.service';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './validate-env';
import { IEnvService } from './interfaces/IEnvService';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: ['.env.local', '.env'],
      validate: validateEnv,
    }),
  ],
  providers: [
    {
      provide: IEnvService,
      useClass: EnvService,
    },
  ],
  exports: [IEnvService],
})
export class EnvModule {}
