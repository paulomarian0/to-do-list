import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { QueryParamsUserDto } from './dto/query-params-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @IsPublic()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() params: QueryParamsUserDto) {
    return this.usersService.findAll(params);
  }

  @Patch()
  update(@Query() params: QueryParamsUserDto, @Body() data: UpdateUserDto) {
    return this.usersService.update(params, data);
  }

  @Delete()
  delete(@Query() params: QueryParamsUserDto) {
    return this.usersService.delete(params);
  }
}
