import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Funnel } from './entities/purchase-funnel.entity'
import { Repository } from 'typeorm'
import { AuthGuard } from '@nestjs/passport'
import { CreateFunnelDto } from './dto/create-funnel.dto'

@Injectable()
export class PurchaseFunnelService {
    constructor(
        @InjectRepository(Funnel)
        private readonly funnelRepository: Repository<Funnel>
    ) { }

    async create(createFunnelDto: CreateFunnelDto):Promise<Funnel> {
        const newFunnel:Funnel = {
            name: createFunnelDto.name,
            color: createFunnelDto.color,
            pos: createFunnelDto.pos,
        }

        if (!newFunnel) throw new BadRequestException('Something went wrong')
        console.log(newFunnel);
        
        return await this.funnelRepository.save(newFunnel)
    }

    async findAll():Promise<Funnel[]> {
        return this.funnelRepository.find({
            relations: {
                deals: true,
            }
        })
    }

    async findOne(id: number):Promise<Funnel> {
        return await this.funnelRepository.findOne({
            where: {
                id,
            },
            relations: {
                deals: true,
            }
        })
    }



}
