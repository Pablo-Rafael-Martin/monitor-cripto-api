import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// declarando que a classe abaixo é uma entidade
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    hashedPassword: string;
}