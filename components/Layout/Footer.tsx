import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      mt={8}
      py={4}
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.200"
      bg="gray.50"
    >
      <Text fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} SignWiki. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
