import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { LoginUserDto } from './dto/login-user.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { FindUserDto } from './dto/find-user.dto';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // REGISTRATION

  @ApiOperation({ summary: '| Registration User' })
  @ApiResponse({ status: 201, type: User })
  @Post('signup')
  registration(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.registration(createUserDto, res);
  }

  // LOGIN

  @ApiOperation({ summary: '| Login User' })
  @ApiResponse({ status: 200, type: User })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.login(loginUserDto, res);
  }

  // LOGOUT

  @ApiOperation({ summary: '| Logout User' })
  @ApiResponse({ status: 200, type: User })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.logout(refreshToken, res);
  }

  // REDREShTOKEN

  // @UserGuards(UserGuard)
  @ApiOperation({ summary: '| Refresh token' })
  @ApiResponse({ status: 200, type: User })
  @HttpCode(HttpStatus.OK)
  @Post(':id/refresh')
  refreshToken(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.refreshToken(+id, refreshToken, res);
  }

  // FIND

  // @UserGuards(UserGuard)
  @ApiOperation({ summary: '| Find User' })
  @Post('find')
  findAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  }

  // ACTIVATION

  // @UserGuards(UserGuard)
  @ApiOperation({ summary: '| Find User' })
  @Get('activate/:uuid')
  activation(@Param('uuid') uuid: string) {
    return this.usersService.activation(uuid);
  }

  // UPDATE

  @ApiOperation({ summary: '| Update User' })
  @HttpCode(204)
  @Patch(':id')
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return this.usersService.updateUser(updateUserDto, +id);
  }
}
