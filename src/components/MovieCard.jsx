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
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

function MovieCard(props) {
  const { media, add, remove, isFav } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <GridItem>
      <Card p={3} height={"100%"}>
        <Image
          display={{ base: "inline-block", md: "inline-block" }}
          src={media.Poster}
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
            <IconButton
              size={"xs"}
              onClick={isFav ? () => remove(media) : () => add(media)}
              icon={isFav ? <StarIcon color={"yellow.400"} /> : <StarIcon />}
            />
          </Flex>
        </Stack>
      </Card>
      <Modal
        isOpen={isOpen}
        size={"full"}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalContent>
          <ModalBody>
            <p>modal</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  );
}

export default MovieCard;
