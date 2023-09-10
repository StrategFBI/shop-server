import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';
import { env } from 'process';
export const sqlConfig = registerAs('database', () => ({
    dialect: <Dialect>env.SQL_DIALECT || 'mysql',
    logging: env.SQL_LOGGING === 'true' ? true : false,
    host: env.DATABASE_HOST,
    port: +env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
}))

