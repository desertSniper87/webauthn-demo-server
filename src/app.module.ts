import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { QrCodeModule } from "./qr-code/qr-code.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entities/user.entity";
import { QrCode } from "./qr-code/entities/qr-code.entity";
import { DataSource } from "typeorm";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [UserModule, QrCodeModule,
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "auth.db",
            entities: [User, QrCode],
            synchronize: true,
            autoLoadEntities: true
        }),
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
    constructor(private dataSource: DataSource) {
    }
}
