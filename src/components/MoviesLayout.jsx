import { SimpleGrid } from "@chakra-ui/react";

function MoviesLayout(props) {
  return (
    <SimpleGrid p={5} as={"main"} spacing={5}>
      {props.children}
    </SimpleGrid>
  );
}

export default MoviesLayout;
