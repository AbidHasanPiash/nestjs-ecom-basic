import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  console.log('Database Host:', configService.get<string>('BD_HOST')); // Should print 'localhost'

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
