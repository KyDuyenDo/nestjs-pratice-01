import { BadRequestException } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

export function IsValidEmail(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsValidEmail',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, _args: ValidationArguments) {
                    if (typeof value !== 'string') return false
                    const regex = /^[a-z0-9._%+-]+@gmail\.com$/i;
                    return regex.test(value);
                },
                defaultMessage(_args: ValidationArguments) {
                    return 'the email must have format @gmail.com'
                }
            },
        })
    }
}