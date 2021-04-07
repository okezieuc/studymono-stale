import { Box, Flex, Spacer, HStack,
	SimpleGrid, Text, } from '@chakra-ui/react'
import Link from 'next/link'


export const Footer = ({hideTop = false}) => <Box>
	
	<SimpleGrid columns={[2, 4, 6]} spacingX={[4, null,10]} spacingY={[6, null,10]}
		px={[8, null, 12]} py={[8, null, 20]} borderBottom="1px solid"
		borderTop={hideTop ? "none" : "1px solid"} color="tint.600" fontWeight="semibold"
		fontSize={["sm", "sm", "lg"]} borderColor="tint.400" pb={[20, null, 20]}>
		<Box gridColumn={["span 2", "span 4", "span 2"]}>
			<Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={["1", null, "4"]} color="black">studymono.</Text>
			<Text fontSize={["sm", null, "md"]} fontWeight="semibold"
				color="tint.500">Our simple but exquisite tag  line will be displayed below our  name</Text>
		</Box>
		<Box>
			<Text fontSize={["sm", null, "lg"]} fontWeight="bold" mb={["1", null, "4"]} color="tint.500">Navigate</Text>
			<Link href="/pastquestions">Past Questions</Link><br />
			<Link href="/blog">Blog</Link>
		</Box>
		<Box>
			<Text fontSize={["sm", null, "lg"]} fontWeight="bold" mb={["1", null, "4"]} color="tint.500">Legal</Text>
			<Link href="/privacy">Privacy Policy</Link>
		</Box>
		<Box>
			<Text fontSize={["sm", null, "lg"]} fontWeight="bold" mb={["1", null, "4"]} color="tint.500">How we help</Text>
			<Link href="/blog/hello-world">Why we built another app</Link><br />
			<Link href="/blog/preview">Previewing our app</Link> <br /> 
			<Link href="/blog/dynamic-routing">Dynamic routing</Link> <br />
		</Box>
		<Box>
			<Text fontSize={["sm", null, "lg"]} fontWeight="bold" mb={["1", null, "4"]} color="tint.500">Categories</Text>
			<Link href="/pastquestions/waec">WAEC</Link><br />
			<Link href="/pastquestions/jamb">JAMB</Link><br />
			<Link href="/pastquestions/subject/math/1">Mathematics</Link><br />
			<Link href="/pastquestions/subject/phy/1">Physics</Link><br />
			<Link href="/pastquestions/subject/chem/1">Chemistry</Link><br />
			<Link href="/pastquestions/subject/bio/1">Biology</Link><br />
			<Link href="/pastquestions/subject/eng/1">English</Link><br />
		</Box>
	</SimpleGrid>
	<Box d="none">
		<Text m="0 auto" pt="12" textAlign="center" fontSize={["md", null, "3xl"]}
			fontWeight="bold" maxW={["250px", "500px"]}>Subscribe to our newsletter  for updates</Text>
		<Box w={["50%", null, "30%"]} h={["30px", null, "50px"]} bg="gray.100" m="0 auto" mt="8" mb="12"></Box>
	</Box>
	<Flex fontSize={["sm", "sm", "md"]} bg="black" w="100%" p="2" pl={["2", null, "6"]} color="white">
		<Text>Make it count</Text>
		<Spacer />
		<Text>2021</Text>
	</Flex>
</Box>
