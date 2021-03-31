import {
  Link as ChakraLink,
	Box, Heading, Text,
	Avatar, Flex,
} from '@chakra-ui/react'

export const H1 = ({ children }) => (
    <Heading fontSize="6xl" mt={2} as="h1">
			{children}
    </Heading>
  );

export const H2 = ({ children }) => (
    <Heading fontSize="4xl" mt={2} as="h2">
			{children}
    </Heading>
  );

export const H3 = ({ children }) => (
    <Heading fontSize="3xl" mt={2} as="h3">
			{children}
    </Heading>
  );

export const H4 = ({ children }) => (
    <Heading fontSize="2xl" mt={2} as="h4">
			{children}
    </Heading>
  );
	
export const H5 = ({ children }) => (
    <Heading fontSize="xl" as="h5">
			{children}
    </Heading>
  );
	
export const H6 = ({ children }) => (
    <Heading fontSize="lg" as="h6">
			{children}
    </Heading>
  );
	
export const BlockQuote = ({ children }) => (
    <Text ml="4" fontSize="5xl" as="blockquote">
			{children}
		</Text>
  );
