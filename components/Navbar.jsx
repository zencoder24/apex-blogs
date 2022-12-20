import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex p={2} alignItems="center">
        <Box p="2">
          <Heading size="md">apex-blogs</Heading>
        </Box>
        <Spacer />
        <ButtonGroup>
          <Button colorScheme="teal" size="sm">
            Sign Up
          </Button>
          <Button colorScheme="teal" variant="ghost" size="sm">
            Login
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Navbar;
