import React from "react";
import { Heading, Divider } from "@chakra-ui/core";

export const Header = () => (
  <>
    <Heading as="h1" py={5}>
      Hello, this is my must-watch videos list
    </Heading>
    <Divider borderColor="gray.300" borderWidth="3px" />
  </>
);
