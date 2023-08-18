import { useState } from "react";
import {
  Button,
  Tabs,
  Input,
  Flex,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import NavigationBar from "./components/NavigationBar";
import MoviesLayout from "./components/MoviesLayout";
import MovieCard from "./components/MovieCard";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favIds, setFavIds] = useState([]);

  function handleChange(event) {
    setSearchVal(event.target.value);
  }

  function search() {
    fetch(`https://omdbapi.com/?apikey=ba81935e&s=${searchVal}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.Search.filter((item) => item.Poster !== "N/A"));
        setSearchVal("");
      });
  }
  function addToFavorites(data) {
    setFavorites([data, ...favorites]);
    setFavIds([data.imdbID, ...favIds]);
  }
  function getMovieCard(item) {
    return (
      <MovieCard
        key={item.imdbID}
        media={item}
        add={addToFavorites}
        isFav={favIds.indexOf(item.imdbID) > -1}
      />
    );
  }
  return (
    <>
      <NavigationBar />
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Search</Tab>
          <Tab>Favorites</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex mx={"auto"} mt={3} gap={4} w={"min(720px,90%)"}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  height={"full"}
                  children={<SearchIcon />}
                />
                <Input
                  size={"lg"}
                  value={searchVal}
                  onChange={handleChange}
                  placeholder="Search for movies"
                />
              </InputGroup>
              <Button onClick={search} size={"lg"}>
                Search
              </Button>
            </Flex>
            <MoviesLayout>
              {results.map((item) => getMovieCard(item))}
            </MoviesLayout>
          </TabPanel>
          <TabPanel>
            <MoviesLayout>
              {favorites.map((item) => getMovieCard(item))}
            </MoviesLayout>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
