import { envConfig } from 'src/config/envConfig';
import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE_SQL',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: envConfig.database.host,
        port: envConfig.database.port,
        username: envConfig.database.username,
        password: envConfig.database.password,
        database: envConfig.database.database,
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
