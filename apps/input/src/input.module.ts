import { Module } from '@nestjs/common';
import { InputController } from './input.controller';
import { InputService } from './input.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ClientsModule.register([
      {
        name: 'OUTPUT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://rabbitmq:5672'],
          queue: process.env.RABBITMQ_QUEUE_OUTPUT ?? 'output_queue',
          queueOptions: {
            durable: true
          },
        },
      },
    ]),
  ],
  controllers: [InputController],
  providers: [InputService],
})
export class InputModule {}
