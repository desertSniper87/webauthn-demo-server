import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { server } from '@passwordless-id/webauthn';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('register')
  register(): void {
    return this.appService.register();
  }

  @Get('challenge')
  challenge(): string {
    return this.appService.getChallenge();
  }
}
