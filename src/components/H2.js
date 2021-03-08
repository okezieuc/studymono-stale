import {
  Link as ChakraLink,
	Box, Heading, Text,
	Avatar, Flex,
} from '@chakra-ui/react'

export default function H2({ children }) {
  // If the link is local it will start with a "/"
  // Otherwise it'll be something like "https://"
  return (
    <Heading>
			{children}
    </Heading>
  );
}