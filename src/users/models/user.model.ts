import { ApiProperty } from "@nestjs/swagger";
import { Table, Model, Column, DataType } from "sequelize-typescript";

interface UserAttrs {
    first_name: string;
    last_name: string;
    username: string;
    hashed_password: string;
    telegram_link: string;
    email: string;
    phone: string;
    user_photo: string;
    birthday: Date;
    is_owner: boolean;
    is_active: boolean
    hashed_refresh_token: string; 
}

@Table({ tableName: "users" })
export class User extends Model<User, UserAttrs>{
    @ApiProperty({example: 1, description: "Unique Id"})
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({example: "Sobir", description: "User: firstname"})
    @Column({
        type: DataType.STRING
    })
    first_name: string;    

    @ApiProperty({example: "Karimov", description: "User: lastname"})
    @Column({
        type: DataType.STRING
    })
    last_name: string;

    @ApiProperty({example: "sob1rc1k", description: "User: username"})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    username: string;
    
    @ApiProperty({example: "qwerty", description: "User: password"})
    @Column({
        type: DataType.STRING
    })
    hashed_password: string;

    @ApiProperty({example: "https://t.me/user1", description: "User: telegram_link"})
    @Column({
        type: DataType.STRING
    })
    telegram_link: string;

    @ApiProperty({example: "email1@gmail.com", description: "User: email"})
    @Column({
        type: DataType.STRING
    })
    email: string;

    @ApiProperty({example: "999999999", description: "User: phone"})
    @Column({
        type: DataType.STRING
    })
    phone: string;

    @ApiProperty({example: "user photo link", description: "User: user_photo"})
    @Column({
        type: DataType.STRING
    })
    user_photo: string;

    @ApiProperty({example: "01.02.2023", description: "User: birthday"})
    @Column({
        type: DataType.DATE
    })
    birthday: Date;

    @ApiProperty({example: "false", description: "User: is_owner"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_owner: boolean;

    @ApiProperty({example: "false", description: "User: is_active"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;

    @ApiProperty({example: "token", description: "User: is_active"})
    @Column({
        type: DataType.STRING
    })
    hashed_refresh_token: string;

    @ApiProperty({example: "activation link", description: "User: activation_link"})
    @Column({
        type: DataType.STRING
    })
    activation_link: string;
}