import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available throughout the app
    }),

    // Configure TypeORM with environment variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('BD_HOST'),
        port: configService.get<number>('BD_PORT'),
        username: configService.get<string>('BD_USERNAME'),
        password: configService.get<string>('BD_PASSWORD'),
        database: configService.get<string>('BD_NAME'),
        autoLoadEntities: true,
        synchronize: true, // Disable in production
      }),
    }),

    CustomerModule,
    ProductModule,
  ],
})
export class AppModule {}
