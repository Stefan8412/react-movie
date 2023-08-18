import { Flex, Heading } from "@chakra-ui/react";
function NavigationBar() {
  return (
    <Flex as={"nav"} alignItems="center" justifyContent="space-between" p={6}>
      <Heading color={"blue.400"} size={"xl"} fontWeight={"400"}>
        Movies
      </Heading>
    </Flex>
  );
}
export default NavigationBar;
