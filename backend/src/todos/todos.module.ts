import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoSQLModel } from './entities/todo.model';

@Module({
  providers: [TodosResolver, TodosService],
  imports: [TypeOrmModule.forFeature([TodoSQLModel])],
})
export class TodosModule {}
