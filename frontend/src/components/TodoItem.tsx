import { DeleteIcon } from "@chakra-ui/icons";
import { ListIcon, ListItem } from "@chakra-ui/react";
import { useMutation } from "urql";
import { DeleteTodoMutation } from "../graphql/todos";

type Props = {
  todo: any;
};

const TodoItem = (props: Props) => {
  const { todo } = props;

  const [result, trigger] = useMutation(DeleteTodoMutation);

  const triggerDeleteTodo = () => {
    trigger({ id: +todo.id });
  };

  return (
    <ListItem>
      <ListIcon
        as={DeleteIcon}
        onClick={triggerDeleteTodo}
      />
      {todo.title}
    </ListItem>
  );
};

export default TodoItem;
