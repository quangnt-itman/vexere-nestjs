import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["warn", "error"]
  });

  app.setGlobalPrefix("/api");

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3001
  await app.listen(port, () => {
    console.log("App Information:")
    console.table({
      "Port": port,
      "Database": "fs10-shopping-cart",
      "Environment": "Local"
    })
  });
}
bootstrap();
