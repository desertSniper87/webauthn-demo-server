import { Injectable } from "@nestjs/common";
import { CreateQrCodeDto } from "./dto/create-qr-code.dto";
import { UpdateQrCodeDto } from "./dto/update-qr-code.dto";
import * as crypto from "crypto";
import { InjectRepository } from "@nestjs/typeorm";
import { QrCode } from "./entities/qr-code.entity";
import { Repository } from "typeorm";

@Injectable()
export class QrCodeService {
    constructor(
        @InjectRepository(QrCode)
        private qrCodeRepository: Repository<QrCode>
    ) {
    }

    getChallenge() {
        return {
            challenge: crypto.randomBytes(64).toString("base64")
        };
    }

    findAll(): Promise<QrCode[]> {
        return this.qrCodeRepository.find();
    }

    findOne(id: number): Promise<QrCode | null> {
        return this.qrCodeRepository.findOneBy({ id });
    }


    async remove(id: number): Promise<void> {
        await this.qrCodeRepository.delete(id);
    }

    async create(createQrCodeDto: CreateQrCodeDto): Promise<void> {
        const qrCode = this.qrCodeRepository.create(createQrCodeDto);
        await this.qrCodeRepository.save(qrCode);
    }

}
