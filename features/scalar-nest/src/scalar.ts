import { EnvService } from '#infra/env/env.service.js';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from '@nestjs/common';
import { apiReference } from '@scalar/nestjs-api-reference';

export class Scalar {
  constructor(
    private readonly app: INestApplication,
    private readonly env: EnvService,
  ) {}

  setup() {
    const openApiConfig = new DocumentBuilder()
      .setTitle(this.env.get('OPENAPI_APP_NAME'))
      .setDescription(this.env.get('OPENAPI_APP_DESCRIPTION'))
      .setVersion(this.env.get('APP_VERSION'))
      .addBearerAuth()
      .build();
    
    const openApiDocument = SwaggerModule.createDocument(this.app, openApiConfig);

    SwaggerModule.setup('openapi', this.app, openApiDocument, {
      ui: false,
      jsonDocumentUrl: 'openapi.json',
    });

    this.app.use(
      '/reference',
      apiReference({
        content: openApiDocument,
        theme: 'purple'
      })
    )
  }
}
