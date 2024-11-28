import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class InputService {

  constructor(@Inject('OUTPUT_SERVICE') private readonly client: ClientProxy){}

  sendNumber( number: number ) {
    return this.client.send<number, number>('calculate', number);
  }
}


