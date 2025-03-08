import { Injectable } from '@nestjs/common';

@Injectable()
export class MeanPriceService {

    // getFakePrice(pair: string): number {
    //     let price: number;
        
    //     if (pair === "BTCUSDT") {
    //         price = 10000;
    //     } else price = 0;
        
    //     return price;
    // }

    getFakePrice() {
        return 10000;
    }
}
