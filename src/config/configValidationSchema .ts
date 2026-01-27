
import * as Joi from 'joi';

const configValidationSchema = Joi.object({
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),
    NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
    APP_PORT: Joi.number().required()
})

export default configValidationSchema;