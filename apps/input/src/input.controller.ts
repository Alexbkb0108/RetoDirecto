import { Body, Controller, Post } from '@nestjs/common';
import { InputService } from './input.service';
import { inputDTO } from './input.dto';

@Controller()
export class InputController {
  constructor(private readonly inputService: InputService) {}

  @Post('sendNumber')
  getNumber(@Body() number: inputDTO) {
    return this.inputService.sendNumber(number.num);
  }
}
