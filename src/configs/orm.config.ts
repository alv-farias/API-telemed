import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
 
const {
    type,
    host,
    port,
    database,
    password,
    username,
    synchronize,
    migrationsRun,
    logging,
    sslmode,
} = config.get('db');

export default {
    type,
    host,
    port,
    database,
    password,
    username,
    synchronize,
    migrationsRun,
    logging,
    sslmode,
    entities: ['dist/modules/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/**/*{.ts,.js}'], 

} as TypeOrmModuleOptions;
