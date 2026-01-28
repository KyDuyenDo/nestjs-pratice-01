import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { Login } from "src/common/interfaces/login.interface";

export class LoginValidation implements PipeTransform<Login> {
    async transform(value: Login, metadata: ArgumentMetadata) {
        // check regex to ensure the email must be @gmail.com, others such as fpt,.. are not allow, throw error
        const regex = /^[a-z0-9._%+-]+@gmail\.com$/i;
        if (!regex.test(value.email)) throw new BadRequestException('the email must have format @gmail.com');
        return value;
    }
}
