import { PropsWithChildren } from "react";
import { createClient, Provider as UrqlProvider } from "urql";
import { ChakraProvider } from "@chakra-ui/react";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

type Props = PropsWithChildren<{}>;

function Providers({ children }: Props) {
  return (
    <UrqlProvider value={client}>
      <ChakraProvider>{children}</ChakraProvider>
    </UrqlProvider>
  );
}

export default Providers;
