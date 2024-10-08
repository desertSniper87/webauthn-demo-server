import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QrCodeModule } from './qr-code/qr-code.module';

@Module({
  imports: [UserModule, QrCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
