import { StarIcon } from "@chakra-ui/icons";
import {
  Flex,
  Stack,
  GridItem,
  Image,
  Card,
  Text,
  IconButton,
  Heading,
} from "@chakra-ui/react";

function MovieCard(props) {
  const { media, add, remove, isFav } = props;
  return (
    <GridItem>
      <Card p={3} height={"100%"}>
        <Image
          display={{ base: "none", md: "inline-block" }}
          src={media.Poster}
        />
        <Stack mt="3" spacing="2">
          <Heading
            fontWeight={"500"}
            letterSpacing={"1px"}
            size="sm"
            noOfLines={1}
          >
            {media.Title}
          </Heading>
          <Flex
            justifyContent={"space-between"}
            color={"gray.500"}
            fontSize={"xs"}
          >
            <Text fontWeight={"500"}>{media.Type}</Text>
            <IconButton
              size={"xs"}
              onClick={isFav ? () => remove(media) : () => add(media)}
              icon={isFav ? <StarIcon color={"yellow.400"} /> : <StarIcon />}
            />
          </Flex>
        </Stack>
      </Card>
    </GridItem>
  );
}

export default MovieCard;
