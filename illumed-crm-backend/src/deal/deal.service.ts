import { BadRequestException, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Deal } from './entities/deal.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateDealDto } from './dto/create-deal.dto'

@Injectable()
export class DealService {
    constructor(
        @InjectRepository(Deal)
        private readonly dealRepository: Repository<Deal>) { }


    async create(createDealDto: CreateDealDto) {
        const newDeal = {
            id: createDealDto.id,
            name: createDealDto.name,
            deal_cost: createDealDto.deal_cost,
            funnel: createDealDto.funnel,
        }

        if(!newDeal) throw new BadRequestException(newDeal)
        console.log(newDeal);

        return await this.dealRepository.save(newDeal)
        
    }
    
    async findAll() {
        return await this.dealRepository.find({
            relations: {
                funnel: true,
            }
        });
    }
}
