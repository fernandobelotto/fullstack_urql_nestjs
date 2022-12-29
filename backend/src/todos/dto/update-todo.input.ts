import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field(() => ID)
  id: number;
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;
}
