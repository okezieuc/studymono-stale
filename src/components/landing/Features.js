import { Box, Heading, Text, Stack,
	Flex, Container, } from '@chakra-ui/react'
import Link from 'next/link'

const Feature = () => (<Box mt={[20]} mb={[32]}> 
	<Flex align="center">
		<Box w="300px" h="300px" bg="tint.200" />
		<Box flex="1" ml={[12]}>
			<Text fontSize="4xl" fontWeight="bold">We do this</Text>
			<Text fontSize="2xl">
				Here is a long explanation for this stuff that we say that we do.
				We go on to say even more about it here. Lorem isum dot olres, bla, bla.
			</Text>
		</Box>
	</Flex>
</Box>)

export const Features = () => (<Box pt={["120px"]}>
	<Box  maxW={["800px"]} m="0 auto" textAlign="center">
		<Heading as="h2" fontSize={["5xl"]} >Why Studymono?</Heading>
		<Text as="h2" fontSize={["2xl"]} mt={[4]}>A smaller subtitle text will also follow below the large heading. Lorem ipsum dit olres vrum. It should almost be two lines long</Text>
	</Box>
	<Container maxW={["5xl"]}>
		<Feature />
		<Feature />
		<Feature />
	</Container>
</Box>)