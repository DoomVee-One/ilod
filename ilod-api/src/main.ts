import { NestFactory } from '@nestjs/core';
import { Logger, RequestMethod, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as fs from 'fs/promises';
import * as YAML from 'yaml';
import { RedocModule, RedocOptions } from "nestjs-redoc";

const logger: Logger = new Logger('Global');

async function bootstrap() {
  // Application Setup
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(
    'api',
    { exclude: [
      { path: '/auth/login', method: RequestMethod.GET }, 
      { path: '/auth/redirect', method: RequestMethod.GET },
      { path: '/auth/status', method: RequestMethod.GET },
      { path: '/auth/logout', method: RequestMethod.GET }
    ]}
  );
  app.enableVersioning({
    type: VersioningType.URI
  });

  // Documentation Setup
  const oa3File = await fs.readFile('../openapi.yml', 'utf-8');
  const redoc = await fs.readFile('./redoc.json', 'utf-8');
  const document = YAML.parse(oa3File);
  const options: RedocOptions = JSON.parse(redoc);
  await RedocModule.setup('/docs', app, document, options);

  await app.listen(3000);
}
bootstrap().then(() => {
  logger.log("Application Ready!");
});
