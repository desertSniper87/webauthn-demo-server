import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { UpdateQrCodeDto } from './dto/update-qr-code.dto';

@Controller('qr-code')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Get('challenge')
  challenge(username: string) {
    const challenge =  this.qrCodeService.getChallenge();


    return challenge;
  }

  @Post('register')
  register(@Body() createQrCodeDto: CreateQrCodeDto) {
      this.qrCodeService.create({
        challenge: createQrCodeDto.challenge,
        username: createQrCodeDto.username
      });
  }

}
