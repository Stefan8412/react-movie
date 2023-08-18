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

function App() {
  return (
    <>
      <NavigationBar />
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Favorites</Tab>
          <Tab>Search</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MoviesLayout>
              <p>favorites</p>
            </MoviesLayout>
          </TabPanel>
          <TabPanel>
            <Flex mx={"auto"} mt={3} gap={4} w={"min(720px,90%)"}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  height={"full"}
                  children={<SearchIcon />}
                />
                <Input size={"lg"} placeholder="Search for movies" />
              </InputGroup>
              <Button size={"lg"}>Search</Button>
            </Flex>
            <MoviesLayout>
              <p>searchs</p>
              <p>searchs</p>
            </MoviesLayout>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
