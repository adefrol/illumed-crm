import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { DealService } from './deal.service'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { Deal } from './entities/deal.entity'
import { CreateDealDto } from './dto/create-deal.dto'

@Controller('deal')
export class DealController {
    constructor(private dealService: DealService) { }

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(): Promise<Deal[]> {
        return this.dealService.findAll()
    }

    
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post()
    create(@Body() createDealDto: CreateDealDto) {
        if (typeof createDealDto.deal_cost == "number" &&
            typeof createDealDto.funnel == "number"
        ) {
            return this.dealService.create(createDealDto)
        }
        else {
            throw new BadRequestException("deal_cost or funnel_id is not number")
        }
    }                   



    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Patch(':id')
    update(@Param('id') id: number, @Body() createDealDto: CreateDealDto) {
        return this.dealService.update(createDealDto, id)
    }
}
