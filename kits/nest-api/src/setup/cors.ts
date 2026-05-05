import type { INestApplication } from '@nestjs/common';

type CorsSetup = Pick<INestApplication, 'enableCors'>;

export class Cors {
  constructor(private readonly app: CorsSetup) {}

  setup() {
    this.app.enableCors();
  }

  private parseEnv() {}
}
