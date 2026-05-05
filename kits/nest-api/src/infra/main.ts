import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Cors } from 'src/setup/cors';
import { EnvService } from './env/env.service';
import { GlobalPrefix } from 'src/setup/global-prefix';

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
