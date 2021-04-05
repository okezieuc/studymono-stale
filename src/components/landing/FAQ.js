import { Box, Heading, Text, Stack, Flex, Container, SimpleGrid, } from '@chakra-ui/react'
import Link from 'next/link'

const Question = () => (<Box>
	<Text fontSize={["2xl"]} fontWeight="bold">Sample frequently asked question comes here</Text>
	<Text fontSize={["md"]}>
		And this is a well crafte response to this question. We will put it in its place.
		Theis means that, I wonder what I wrote in the template. We'll end here for now
	</Text>
</Box>)

export const FAQ = () => (<Box py={[32]} bg="tint.200">
  <Container maxW={["5xl"]}>
	<Heading as="h2" fontSize={["5xl"]} mb={[16]}>FREQUENTLY <br/> ASKED QUESTIONS</Heading>
	<SimpleGrid columns={[1, null, 2]} spacing={8}>
		<Question />
		<Question />
		<Question />
		<Question />
		<Question />
		<Question />
	</SimpleGrid>
	</Container>
</Box>)