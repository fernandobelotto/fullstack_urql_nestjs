import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { TodoSQLModel } from './entities/todo.model';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoSQLModel) private repo: Repository<TodoSQLModel>,
  ) {}

  create(createTodoInput: CreateTodoInput) {
    const todoEntity = this.repo.create(createTodoInput);
    return this.repo.save(todoEntity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, attrs: UpdateTodoInput) {
    const todo = await this.findOne(id);

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    const newTodo = this.repo.create({ ...todo, ...attrs });

    return this.repo.save(newTodo);
  }

  remove(id: number) {
    return this.repo.delete(id).then((value) => console.log(value.raw));
  }
}
