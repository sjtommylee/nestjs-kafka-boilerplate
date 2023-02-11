import { Injectable } from '@nestjs/common';
import { Consumer, Kafka } from 'kafkajs';

@Injectable()
export class ConsumerService {
  private readonly kafka: Kafka;
  private readonly consumers: Consumer[] = [];
}
