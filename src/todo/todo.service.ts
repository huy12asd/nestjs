import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos = [
    { id: 1, todo: 'Wake up', done: false },
    { id: 2, todo: 'Eat breakfast', done: false },
    { id: 3, todo: 'Go to work', done: false },
  ];

  findAll() {
    return this.todos;
  }

  create(todo: string) {
    const newTodo = { id: Date.now(), todo, done: false };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, todo: string) {
    const todoIndex = this.todos.findIndex(t => t.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].todo = todo;
      return this.todos[todoIndex];
    }
    return null;
  }

  remove(id: number) {
    const todoIndex = this.todos.findIndex(t => t.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
      return true;
    }
    return false;
  }
}