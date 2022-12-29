import { gql } from "urql";

export const CreateTodoMutation = gql`
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(createTodoInput: $createTodoInput) {
      id
      title
    }
  }
`;

export const TodosQuery = gql`
  query {
    todos {
      id
      title
    }
  }
`;

export const DeleteTodoMutation = gql`
  mutation DeleteTodoMutation($id: Int!) {
    removeTodo(id: $id) {
      id
    }
  }
`;
