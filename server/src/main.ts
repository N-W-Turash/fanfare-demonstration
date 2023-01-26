import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { join } from 'path';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-minimal';

async function bootstrap() {
  const port = process.env.PORT || 8000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
  await app.listen(port);
  Logger.log(`App running on PORT - ${port}`);
}
bootstrap();
