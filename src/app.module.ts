import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configValidationSchema from './common/config/validation.schema.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import databaseConfig from './modules/database/database.module';

@Module({
  imports: [
    databaseConfig,
    ConfigModule.forRoot(
      {
        envFilePath: '.env',
        isGlobal: true,
        validationSchema: configValidationSchema
      }),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
