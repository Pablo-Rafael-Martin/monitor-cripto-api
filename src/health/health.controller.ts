import { Controller, Get } from "@nestjs/common";

@Controller('get-hello')
export class HealthController {

    @Get()
    getHello(): string{
        return "Healthy Batata!";
    }
}