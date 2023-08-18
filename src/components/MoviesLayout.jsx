import { SimpleGrid } from "@chakra-ui/react";

function MoviesLayout(props) {
  return (
    <SimpleGrid
      p={5}
      as={"main"}
      spacing={5}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {props.children}
    </SimpleGrid>
  );
}

export default MoviesLayout;
