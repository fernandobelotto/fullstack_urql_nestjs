import { Box, Heading, Text, UnorderedList } from "@chakra-ui/react";
import { useQuery } from "urql";
import TodoItem from "./components/TodoItem";
import { TodosQuery } from "./graphql/todos";

const TodoList = () => {
  const [result] = useQuery({
    query: TodosQuery,
  });

  const { data, error, fetching } = result;

  if (fetching) return <Text>Loading...</Text>;

  if (error) return <Text>Oh no... {error.message}</Text>;

  return (
    <Box
      p={3}
      border="1px solid"
      borderColor="gray.300"
      rounded="lg"
      w="full"
    >
      <UnorderedList spacing={2}>
        {data.todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
        {data.todos.length === 0 && <Heading size="md">No todos found</Heading>}
      </UnorderedList>
    </Box>
  );
};

export default TodoList;
