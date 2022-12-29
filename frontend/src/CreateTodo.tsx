import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "urql";
import { CreateTodoMutation } from "./graphql/todos";

const CreateTodo = () => {
  const [_result, trigger] = useMutation(CreateTodoMutation);

  const [title, setTitle] = useState("");

  const onSubmit = () => {
    trigger({ createTodoInput: { title } });
  };

  return (
    <VStack
      spacing={2}
      p={3}
      border="1px solid"
      borderColor="gray.300"
      rounded="lg"
      align="flex-start"
      w="full"
    >
      <Text>Create Todo Form</Text>
      <Input
        name="title"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        size="sm"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default CreateTodo;
