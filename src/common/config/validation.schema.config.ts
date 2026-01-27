
import * as Joi from 'joi';

const configValidationSchema =  Joi.object({
    DB_TYPE: Joi.string()
        .valid(
            'mysql',
            'mariadb',
            'postgres',
            'cockroachdb',
            'sqlite',
            'better-sqlite3',
            'mssql',
            'oracle',
            'mongodb',
            'sap',
            'sqljs',
            'react-native',
            'expo',
            'nativescript',
            'cordova',
            'capacitor'
        )
        .required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),
    NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
    APP_PORT: Joi.number().required()
})

export default configValidationSchema;
