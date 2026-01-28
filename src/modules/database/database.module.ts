import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/modules/users/entities/user.entity';

const databaseConfig = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: configService.getOrThrow<string>('DB_TYPE') as any,
    port: configService.getOrThrow<number>('DB_PORT'),
    host: configService.getOrThrow<string>('DB_HOST'),
    username: configService.getOrThrow<string>('DB_USERNAME'),
    password: configService.getOrThrow<string>('DB_PASSWORD'),
    database: configService.getOrThrow<string>('DB_DATABASE'),
    entities: [User],
    synchronize: true,
    autoLoadEntities: true,

    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  }),
});

export default databaseConfig;
