import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './todo/todo.service';



@Module({
  imports: [TodoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
