import { NestFactory } from '@nestjs/core';
import { OutputModule } from './output.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
const log = new Logger;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OutputModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://rabbitmq:5672'],
        queue: process.env.RABBITMQ_QUEUE_OUTPUT ?? 'output_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
  log.debug('output is running')
}
bootstrap();
