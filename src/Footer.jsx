import React from "react";
import { Box, Divider, IconButton } from "@chakra-ui/core";
import { GiLighthouse } from "react-icons/gi";

export const Footer = () => (
  <>
    <Divider borderColor="gray.300" borderWidth="3px" />
    <Box py={5}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/celinebegne/"
        target="_blank"
        variant="outline"
        variantColor="teal"
        aria-label="Find me"
        fontSize="20px"
        icon={GiLighthouse}
      />
    </Box>
  </>
);
