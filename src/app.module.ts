import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'seu_usuario',
            password: 'sua_senha',
            database: 'nome_do_banco',
            autoLoadEntities: true,
            synchronize: true, // cuidado com isso em produção
        }),
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
