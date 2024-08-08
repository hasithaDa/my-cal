import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  add(@Body() body: { n1: number; n2: number }) {
    return this.appService.add(body.n1, body.n2);
  }

  @Post('subtract')
  subtract(@Body() body: { n1: number; n2: number }) {
    return this.appService.subtract(body.n1, body.n2);
  }

  @Post('multiply')
  multiply(@Body() body: { n1: number; n2: number }) {
    return this.appService.multiply(body.n1, body.n2);
  }

  @Post('divide')
  divide(@Body() body: { n1: number; n2: number }) {
    return this.appService.divide(body.n1, body.n2);
  }
}
