import { Injectable } from '@nestjs/common';
import { server } from '@passwordless-id/webauthn';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  register() {
    return;
  }

  getChallenge() {
    return server.randomChallenge();
  }
}
