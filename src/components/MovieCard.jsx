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
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import MovieDetail from "./MovieDetail";

function MovieCard(props) {
  const { media, add, remove, isFav } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <GridItem>
      <Card p={3} height={"100%"}>
        <Image
          display={{ base: "inline-block", md: "inline-block" }}
          src={media.Poster}
          onClick={onOpen}
        />
        <Stack mt="3" spacing="2">
          <Heading
            fontWeight={"500"}
            letterSpacing={"1px"}
            size="sm"
            noOfLines={1}
            onClick={onOpen}
          >
            {media.Title}
          </Heading>
          <Flex
            justifyContent={"space-between"}
            color={"gray.500"}
            fontSize={"xs"}
          >
            <Text fontWeight={"500"}>{media.Type}</Text>
          </Flex>
        </Stack>
      </Card>
      <Modal
        isOpen={isOpen}
        size={"full"}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <MovieDetail
          isFav={isFav}
          media={media}
          add={add}
          remove={remove}
        ></MovieDetail>
      </Modal>
    </GridItem>
  );
}

export default MovieCard;
