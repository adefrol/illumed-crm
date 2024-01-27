import { Module } from '@nestjs/common';
import { PurchaseFunnelService } from './purchase-funnel.service';
import { PurchaseFunnelController } from './purchase-funnel.controller';

@Module({
  providers: [PurchaseFunnelService],
  controllers: [PurchaseFunnelController]
})


export class PurchaseFunnelModule {}
