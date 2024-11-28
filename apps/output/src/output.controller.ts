import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OutputService } from './output.service';

@Controller()
export class OutputController {
  
    constructor(private readonly outputService: OutputService){}

    @MessagePattern('calculate')
    async handleMessage(data: number) {
        return this.outputService.calculateNumber(data);
    }
}
