import { Box, Heading, Text, } from '@chakra-ui/react'
import Link from 'next/link'

const LinkButton = () => (<Box w="max-content" bg="brand" px={[4, null, 8]} py={[2, null, 4]}  
	m="0 auto" borderRadius={[4]} color="white" fontSize={["sm", null, "xl"]}
	mt={[8]} _hover = {{
		background: "#6830e8",
		transition: "background 0.1s ease-in-out"
	}} >
	<Link href="/pastquestions">Get Started</Link>
</Box>)

export const Hero = () => (<Box bg="tint.200" pt={["60px", null, "80px"]} pb={["200px"]}>
	<Box  maxW={[null, "xl", "800px"]} m="0 auto" textAlign="center" px={[4, null, 0]}>
		<Heading as="h1" fontSize={["4xl", "5xl", "7xl"]}>Large Sample Product Heading Here</Heading>
		<Text as="h2" fontSize={["md", "lg", "2xl"]}>A smaller subtitle text will also follow below the large heading. Lorem ipsum dit olres vrum. It should almost be two lines long</Text>
		<LinkButton />
	
	</Box>
</Box>)