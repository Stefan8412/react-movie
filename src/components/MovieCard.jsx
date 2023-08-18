import { StarIcon } from "@chakra-ui/icons";
import {
  GridItem,
  Image,
  Card,
  Text,
  IconButton,
  Heading,
} from "@chakra-ui/react";

function MovieCard(props) {
  return (
    <GridItem>
      <Card p={3} height={"100%"}>
        <Image
          display={{ base: "none", md: "inline-block" }}
          src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
        />
        <Heading fontWeight={"500"}>{2023}</Heading>
        <Text fontWeight={"500"}>{"Oppenheimer: The Real Story"}</Text>
        <IconButton size={"xs"} icon={<StarIcon />} />
      </Card>
      <Card p={3} height={"100%"}>
        <Image
          display={{ base: "none", md: "inline-block" }}
          src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
        />
        <Heading fontWeight={"500"}>{2023}</Heading>
        <Text fontWeight={"500"}>{"Oppenheimer: The Real Story"}</Text>
        <IconButton size={"xs"} icon={<StarIcon />} />
      </Card>
    </GridItem>
  );
}

export default MovieCard;
