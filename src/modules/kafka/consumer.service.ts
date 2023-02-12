import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import {
  Consumer,
  ConsumerRunConfig,
  ConsumerSubscribeTopics,
  Kafka,
} from 'kafkajs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private readonly kafka: Kafka;
  private readonly consumers: Consumer[] = []; // we can have an array of consumers to a producer.

  constructor() {
    this.kafka = new Kafka({
      brokers: ['localhost:9092'],
    });
  }

  async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
    const consumer = this.kafka.consumer({ groupId: 'nestjs-kafka' });
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    this.consumers.push(consumer);
  }

  async onApplicationShutdown(signal?: string) {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }
}
