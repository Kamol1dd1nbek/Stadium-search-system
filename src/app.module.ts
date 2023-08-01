import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config"
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      username: process.env.PG_USER,
      password: String(process.env.PG_PASSWORD),
      port: +process.env.PG_PORT,
      host: String(process.env.PG_HOST),
      database: process.env.PG_DB,
      logging: true,
      autoLoadModels: true,
      models: [User],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}