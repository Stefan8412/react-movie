import {
  ModalOverlay,
  Spinner,
  Image,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function MovieDetail(props) {
  const { isFav, add, remove, media } = props;
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    fetch(`https://omdbapi.com/?apikey=ba81935e&i=${media.imdbID}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetail(data);
      });
  }, []);

  return (
    <>
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalCloseButton />
        {movieDetail === null ? (
          <Spinner
            color="blue.500"
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            size={"lg"}
          />
        ) : (
          <ModalBody>
            <Flex
              position={"relative"}
              gap={6}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Image
                display={{ base: "inline-block", lg: "inline-block" }}
                src={movieDetail.Poster}
              />
              <Flex flexDirection={"column"} gap={4} p={4}>
                <Heading as={"h1"} size={"xl"}>
                  {movieDetail.Title}
                  <IconButton
                    size={"xs"}
                    onClick={isFav ? () => remove(media) : () => add(media)}
                    icon={
                      isFav ? <StarIcon color={"yellow.400"} /> : <StarIcon />
                    }
                  />
                </Heading>
                <Text as={"p"}>
                  <b>Overview: </b>
                  {movieDetail.Plot}
                </Text>
                <Text as={"p"}>
                  <b>Released: </b>
                  {movieDetail.Released}
                </Text>
                <Text as={"p"}>
                  <b>imdbRating: </b>
                  {movieDetail.imdbRating}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        )}
      </ModalContent>
    </>
  );
}
export default MovieDetail;
