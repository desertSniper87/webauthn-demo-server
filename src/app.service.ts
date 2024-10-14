import { Injectable } from "@nestjs/common";
import { server } from "@passwordless-id/webauthn";
import { RegistrationJSON } from "@passwordless-id/webauthn/dist/esm/types";
import { randomBytes } from "crypto";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }

    postVerify(challengeResponse: RegistrationJSON) {
        server.verifyRegistration(challengeResponse, {
            challenge: "",
            origin: ""
        });
        return;
    }

    getChallenge() {
        return {
            challenge: server.randomChallenge()
        };
    }

}
