import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Cors } from '#setup/cors.js';
import { EnvService } from '#infra/env/env.service.js';
import { GlobalPrefix } from '#setup/global-prefix.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const env = app.get(EnvService);

  const cors = new Cors(app, env);
  cors.setup();

  const globalPrefix = new GlobalPrefix(app, env);
  globalPrefix.setup();

  await app.listen(env.get('PORT'));
}

bootstrap()
  .then(() => {
    console.log(`App running on port ${process.env.PORT}`);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
