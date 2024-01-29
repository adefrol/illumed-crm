import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PurchaseFunnelModule } from './purchase-funnel/purchase-funnel.module';
import { DealService } from './deal/deal.service';
import { DealModule } from './deal/deal.module';
import { DealController } from './deal/deal.controller'
import { PurchaseFunnelController } from './purchase-funnel/purchase-funnel.controller'

@Module({
  imports: [AuthModule, UsersModule, PurchaseFunnelModule,
    DealModule,
    ConfigModule.forRoot({ isGlobal: true,  }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity.{ts,js}']
      }),
      inject: [ConfigService]
    }),
],
  controllers: [AppController, DealController, PurchaseFunnelController],
  providers: [AppService],
})
export class AppModule {}
