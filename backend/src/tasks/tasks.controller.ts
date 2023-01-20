import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { QueryParamsTaskDto } from './dto/query-params-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(@Query() params: QueryParamsTaskDto) {
    return this.tasksService.findAll(params);
  }

  @Patch()
  update(@Query() params: QueryParamsTaskDto, @Body() data: UpdateTaskDto) {
    return this.tasksService.update(params, data);
  }

  @Delete()
  remove(@Query() params: QueryParamsTaskDto) {
    return this.tasksService.remove(params);
  }
}
