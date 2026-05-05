import type { EnvService } from '@infra/env/env.service';
import type { INestApplication } from '@nestjs/common';

type CorsSetup = Pick<INestApplication, 'enableCors'>;

export class Cors {
  constructor(
    private readonly app: CorsSetup,
    private readonly env: EnvService,
  ) {}

  setup() {
    const options = this.env.getCorsOrigins();
    this.app.enableCors({
      origin: options,
      credentials: true,
    });
  }
}
