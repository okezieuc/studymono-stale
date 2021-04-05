import { Box, Heading, Text, } from '@chakra-ui/react'
import Link from 'next/link'

const LinkButton = () => (<Box w="max-content" bg="brand" px={[8]} py={[4]}  
	m="0 auto" borderRadius={[4]} color="white" fontSize={["xl"]}
	mt={[8]} >
	<Link href="/pastquestions">Get Started</Link>
</Box>)

export const Hero = () => (<Box bg="tint.200" pt={["120px"]} pb={["200px"]}>
	<Box  maxW={["800px"]} m="0 auto" textAlign="center">
		<Heading as="h1" fontSize={["7xl"]}>Large Sample Product Heading Here</Heading>
		<Text as="h2" fontSize={["2xl"]}>A smaller subtitle text will also follow below the large heading. Lorem ipsum dit olres vrum. It should almost be two lines long</Text>
		<LinkButton />
	
	</Box>
</Box>)