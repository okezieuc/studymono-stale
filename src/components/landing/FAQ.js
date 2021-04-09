import { Box, Heading, Text, Stack, Flex, Container, SimpleGrid, } from '@chakra-ui/react'
import Link from 'next/link'

const Question = ({ data }) => (<Box>
	<Text fontSize={["md", null, "2xl"]} fontWeight="bold">{data.question}</Text>
	<Text fontSize={["sm", null, "md"]}>
		{data.answer}
	</Text>
</Box>)

export const FAQ = ({ questions }) => (<Box py={[12, null, 32]} bg="tint.200">
  <Container maxW={["2xl", null, "5xl"]}>
	<Heading as="h2" fontSize={["4xl", null, "5xl"]} mb={[8, null, 16]} transition="0.3s ease-in-out"
		_hover={{
			transform: { 
				lg: "translate(10px, 0px)",
			}
		}}>FREQUENTLY <br/> ASKED QUESTIONS</Heading>
	<SimpleGrid columns={[1, 2]} spacing={8}>
		{
			questions.map((question) => <Question data={question} />)
		}
	</SimpleGrid>
	</Container>
</Box>)

const SampleQuestion = {
	question: "Sample frequently asked question comes here",
	answer: "And this is a well crafte response to this question. We will put it in its place. This means that, I wonder what I wrote in the template. We'll end here for now"
}

FAQ.defaultProps = {
	questions: [
		SampleQuestion,
		SampleQuestion,
		SampleQuestion,
		SampleQuestion,
	]
}