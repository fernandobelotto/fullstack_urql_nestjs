import { Container, Heading, VStack } from "@chakra-ui/react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <Container>
      <VStack
        spacing={2}
        align="flex-start"
        w="full"
        mt="10"
      >
        <Heading>Urql + Nestjs</Heading>
        <Heading size="md">Todo App with GraphQL</Heading>
        <CreateTodo />
        <TodoList />
      </VStack>
    </Container>
  );
};

export default App;
