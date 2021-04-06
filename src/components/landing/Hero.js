import { Box, Heading, Text, } from '@chakra-ui/react'
import Link from 'next/link'

const LinkButton = () => (<Box w="max-content" bg="brand" px={[4, null, 8]} py={[2, null, 4]}  
	m="0 auto" borderRadius={[4]} color="white" fontSize={["sm", null, "xl"]}
	mt={[8]} >
	<Link href="/pastquestions">Get Started</Link>
</Box>)

export const Hero = () => (<Box bg="tint.200" pt={["60px", null, "120px"]} pb={["200px"]}>
	<Box  maxW={["800px"]} m="0 auto" textAlign="center" px={[4, null, 0]}>
		<Heading as="h1" fontSize={["4xl", null, "7xl"]}>Large Sample Product Heading Here</Heading>
		<Text as="h2" fontSize={["md", null, "2xl"]}>A smaller subtitle text will also follow below the large heading. Lorem ipsum dit olres vrum. It should almost be two lines long</Text>
		<LinkButton />
	
	</Box>
</Box>)