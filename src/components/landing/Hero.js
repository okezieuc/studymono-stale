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
			Start Learning
		</a>
	</Link>
</Box>)

export const Hero = () => (<Box bg="tint.200" pt={["60px", null, "80px"]} pb={["200px"]}>
	<Box  maxW={[null, "xl", "800px"]} m="0 auto" textAlign="center" px={[4, null, 0]}>
		<Heading as="h1" fontSize={["4xl", "5xl", "7xl"]}>Educational Resources for Nigerian Students</Heading>
		<Text as="h2" fontSize={["md", "lg", "2xl"]}>
			Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face
		</Text>
		<LinkButton />
	
	</Box>
</Box>)