import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';


const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle("Stadium finder")
    .setDescription("Mini project for stadium finder")
    .addTag("NodeJs, Nestjs, Postgres, Sequelize, JWT, OTP, Bot, Swagger")
    .setVersion("1.0.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("instagram/docs", app, document);
    const PORT = process.env.PORT || 3030;
    
    app.use(cookieParser());
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () => {
      console.log(`Servert is running on port: ${PORT}`);
    })
  } catch (error) {
    console.log(error);    
  }
}
start();