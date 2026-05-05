import type { INestApplication } from '@nestjs/common';

type ApiVersioningSetup = Pick<INestApplication, 'enableVersioning'>;

export class ApiVersioning {
  constructor(private readonly app: ApiVersioningSetup) {}

  setup() {
    this.app.enableVersioning();
  }
}
