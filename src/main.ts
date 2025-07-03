import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
        //* remove campos que não existem no DTO
        whitelist: true,
        //* erro se mandar campo desconhecido
        forbidNonWhitelisted: true,
        // //* transforma tipos (???)
        // transform: true
    }))

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
