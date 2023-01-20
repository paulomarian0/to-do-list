import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { QueryParamsTaskDto } from './dto/query-params-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateTaskDto) {

    const payload = await this.prisma.task.create({
      data,
    })

    return payload;
  }

  async findAll(params: QueryParamsTaskDto) {

    if(params.authorId){
      params.authorId = +params.authorId
    }

    if(params.completed){
      params.completed = +params.completed
    }

    console.log(params.completed)
    console.log(typeof(params.completed))

    const payload = await this.prisma.task.findMany({
      where: params
    })

    return payload;
  }

  async update(params: QueryParamsTaskDto, data: UpdateTaskDto) {
    const id = +params.id

    const payload = await this.prisma.task.update({
      data,
      where:{id}
    })
    
    return payload;
  }

  async remove(params: QueryParamsTaskDto) {
    const id = +params.id

    const payload = await this.prisma.task.delete({
      where:{id}
    })
    
    return payload;
  }
}
