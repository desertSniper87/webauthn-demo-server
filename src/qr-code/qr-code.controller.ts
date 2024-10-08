import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { UpdateQrCodeDto } from './dto/update-qr-code.dto';

@Controller('qr-code')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Get('challenge')
  challenge() {
    return this.qrCodeService.getChallenge();
  }

}
