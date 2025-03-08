import { PrimaryEntity } from 'src/infra/database/primary.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends PrimaryEntity {
  @Column({ length: 255 })
  login: string;

  @Column({ length: 255 })
  password: string;
}
