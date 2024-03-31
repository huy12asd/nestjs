import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() newTodo: { todo: string }) {
    return this.todoService.create(newTodo.todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedTodo: { todo: string }) {
    return this.todoService.update(+id, updatedTodo.todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}