import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsDateString,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Sobir', description: 'User: firstname' })
  first_name: string;

  @ApiProperty({ example: 'Karimov', description: 'User: lastname' })
  last_name: string;

  @ApiProperty({ example: 'sob1rc1k', description: 'User: username' })
  username: string;

  @ApiProperty({ example: 'qwerty', description: 'User: password' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @IsStrongPassword()
  password: string;

  @ApiProperty({ example: 'qwerty', description: 'User: confirm password' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  confirm_password: string;

  @ApiProperty({
    example: 'https://t.me/user1',
    description: 'User: telegram_link',
  })
  telegram_link: string;

  @ApiProperty({ example: 'email1@gmail.com', description: 'User: email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '999999999', description: 'User: phone' })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ example: 'user photo link', description: 'User: user_photo' })
  user_photo: string;

  @ApiProperty({ example: '2023-01-02', description: 'User: birthday' })
  @IsNotEmpty()
  @IsDateString()
  birthday: Date;
}
