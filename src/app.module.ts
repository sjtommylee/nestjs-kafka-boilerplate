import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { KafkaModule } from './modules/kafka/kafka.module';
import { TestConsumer } from './test.consumer';

@Module({
  imports: [ConfigModule.forRoot(), KafkaModule],
  controllers: [AppController],
  providers: [AppService, TestConsumer],
})
export class AppModule {}
