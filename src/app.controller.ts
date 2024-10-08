import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RegistrationJSON } from '@passwordless-id/webauthn/dist/esm/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  register(@Body() challengeResponse: RegistrationJSON) {
    this.appService.postVerify(challengeResponse);
    return;
  }

  @Get('challenge')
  challenge() {
    return this.appService.getChallenge();
  }
}
