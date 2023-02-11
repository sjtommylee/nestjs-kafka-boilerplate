import { Injectable } from '@nestjs/common';
import { ProducerService } from './modules/kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}
  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: 'hello world',
        },
      ],
    });
    return 'hello world';
  }
}
