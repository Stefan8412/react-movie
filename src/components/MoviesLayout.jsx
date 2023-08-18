import { SimpleGrid } from "@chakra-ui/react";

function MoviesLayout(props) {
  return (
    <SimpleGrid
      p={5}
      as={"main"}
      spacing={5}
      columns={4}
      spacingX="40px"
      spacingY="20px"
    >
      {props.children}
    </SimpleGrid>
  );
}

export default MoviesLayout;
