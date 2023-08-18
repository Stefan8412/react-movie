import { GridItem, Image, Card } from "@chakra-ui/react";

function MovieCard(props) {
  return (
    <GridItem>
      <Card p={3} height={"100%"}>
        <Image
          display={{ base: "none", md: "inline-block" }}
          src="https://m.media-amazon.com/images/M/MV5BMGY5MzU3MzItNDBjMC00YjQzLWEzMTUtMGMxMTEzYjhkMGNkXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
        />
      </Card>
      <Card p={3} height={"100%"}>
        <Image
          display={{ base: "none", md: "inline-block" }}
          src="https://m.media-amazon.com/images/M/MV5BMGY5MzU3MzItNDBjMC00YjQzLWEzMTUtMGMxMTEzYjhkMGNkXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
        />
      </Card>
    </GridItem>
  );
}

export default MovieCard;
