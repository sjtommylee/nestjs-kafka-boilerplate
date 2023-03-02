import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'service-name-clientid',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'groupid-in-consumer',
        },
      },
    },
  );
  Logger.log('service listening from main.ts');
  await app.listen();
}
bootstrap();
