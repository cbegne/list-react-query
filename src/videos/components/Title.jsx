import React from "react";
import { Heading, Text } from "@chakra-ui/core";

export const Title = ({ children }) => (
  <Heading size="md" mb={1}>
    {children}
  </Heading>
);

export const LoadingText = ({ children }) => (
  <Text as="span" fontSize="xs">
    {children}
  </Text>
);
