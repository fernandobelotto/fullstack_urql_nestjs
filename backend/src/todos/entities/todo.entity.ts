import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => String, { description: 'Here is the title of the todo' })
  title: string;
  @Field(() => ID, { description: 'The id of the todo' })
  id: number;
}
