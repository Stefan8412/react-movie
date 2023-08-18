import { useState } from "react";
import {
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
            <p>favorites</p>
          </TabPanel>
          <TabPanel>
            <Flex mx={"auto"} mt={3} gap={4} w={"min(720px,90%)"}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  height={"full"}
                  children={<SearchIcon />}
                />
                <Input size={"lg"} />
              </InputGroup>
            </Flex>
            <p>search</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
