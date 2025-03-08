import { Body, Controller, Get, Post } from '@nestjs/common';
import { MeanPriceService } from './mean-price.service';

@Controller('mean-price')
export class MeanPriceController {
    constructor (private readonly meanPriceService: MeanPriceService) {}

    // @Get()
    // getMeanPrice() {

    // }
    
    @Get('fake-price') 
    getFakePrice() {
        return this.meanPriceService.getFakePrice();
    }

    // @Post('price')
    // getMeanPrice(@Body() data: {pair: string, trimespan: string}) {
    //     // pega preço do banco de dados

    // }
}
