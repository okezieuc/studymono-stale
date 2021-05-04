import {
  Link as ChakraLink,
	Box, Heading, Text,
	Avatar, Flex,
} from '@chakra-ui/react'

export const H1 = ({ children }) => (
    <Heading fontSize={["4xl",null, "6xl"]} mt={2} as="h1">
			{children}
    </Heading>
  );

export const H2 = ({ children }) => (
    <Heading fontSize={["3xl", null, "5xl"]} mt="1.5em" as="h2">
			{children}
    </Heading>
  );

export const H3 = ({ children }) => (
    <Heading fontSize={["2xl",null, "4xl"]} mt={2} as="h3">
			{children}
    </Heading>
  );

export const H4 = ({ children }) => (
    <Heading fontSize={["xl", null, "3xl"]} mt={2} as="h4">
			{children}
    </Heading>
  );
	
export const H5 = ({ children }) => (
    <Heading fontSize={["lg", null, "2xl"]} as="h5">
			{children}
    </Heading>
  );
	
export const H6 = ({ children }) => (
    <Heading fontSize={["md", null, "xl"]} as="h6">
			{children}
    </Heading>
  );
	
export const BlockQuote = ({ children }) => (
    <Text ml="4" fontSize={["2xl", null, "5xl"]} as="blockquote">
			{children}
		</Text>
  );
	
export const Paragraph = ({children}) => (
	<Text as="p" my="1em">
	{children}
	</Text>
)
