import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { QueryParamsUserDto } from './dto/query-params-user.dto';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {

    const data: CreateUserDto = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const payload = await this.prisma.user.create({ data });

    return {
      ...payload,
      password: undefined,
    };

  }

  findByEmail(email: string) {
    const payload = this.prisma.user.findUnique({
      where: { email }
    });

    return payload;
  }

  async findAll(params: QueryParamsUserDto) {
    const payload = await this.prisma.user.findMany({
      where: params
    })

    return payload;
  }

  async update(params: QueryParamsUserDto, updateUserDto: UpdateUserDto) {
    const id = +params.id

    const data: UpdateUserDto = {
      ...updateUserDto,
      password: await bcrypt.hash(updateUserDto.password, 10),
    };

    const payload = await this.prisma.user.update({
      data,
      where: { id }
    })

    return payload;
  }

  async delete(params: QueryParamsUserDto) {
    const id = +params.id

    const payload = await this.prisma.user.delete({
      where: { id }
    })

    return payload;
  }
}
