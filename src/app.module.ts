import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configValidationSchema from './config/configValidationSchema ';

@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: configValidationSchema
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
