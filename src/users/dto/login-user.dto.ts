import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @ApiProperty({example: "email1@gmail.com", description: "User: Email"})
    @IsEmail()
        email: string;

    @ApiProperty({example: "email1@gmail.com", description: "User: Email"})
    @IsNotEmpty()
    @IsString()
    password: string;
}