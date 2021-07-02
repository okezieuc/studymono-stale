import { Box, Heading, Text, } from '@chakra-ui/react'
import Link from 'next/link'

const LinkButton = () => (<Box w="max-content" bg="brand" px={[4, null, 8]} py={[2, null, 4]}  
	m="0 auto" color="white" fontSize={["sm", null, "xl"]}
	border="1px solid" borderColor="brand"
	borderRadius="1em"
	mt={[8]} _hover = {{
		background: "tint.200",
		transition: "background 0.1s ease-in-out",
		color: "brand"
	}} >
	<Link href="/pastquestions">
		<a className="umami--click--landing-pastquestions-cta">
			Get Started
		</a>
	</Link>
</Box>)

export const Hero = () => (<Box bg="tint.200" pt={["60px", null, "80px"]} pb={["200px"]}>
	<Box  maxW={[null, "xl", "800px"]} m="0 auto" textAlign="center" px={[4, null, 0]}>
		<Box
			border="1px solid"
			borderRadius="4em"
			w="max-content"
			m="0 auto"
			px="0.5em"
			py="0.2em"
			borderColor="brand"
			color="brand"
			bg="white"
			fontSize={["sm", "md"]}
		>
			<Link href="/blog/past-questions-answers-and-explanations-published">
				<a><span className="blink">●</span> We just launched answers!</a>
			</Link>
		</Box>
		<Heading as="h1" fontSize={["4xl", "5xl", "7xl"]}>Prepare for Exams, One Past Question at a Time</Heading>
		<Text as="h2" fontSize={["md", "lg", "2xl"]}>
			Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face
		</Text>
		<LinkButton />
	
	</Box>
</Box>)