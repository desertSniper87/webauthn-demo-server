import { Injectable } from '@nestjs/common';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { UpdateQrCodeDto } from './dto/update-qr-code.dto';
import * as crypto from 'crypto';

@Injectable()
export class QrCodeService {
    getChallenge() {
      return {
          challenge: crypto.randomBytes(64).toString('base64')
      };
    }
}
