import { Box, Flex, Spacer, HStack,
	SimpleGrid, Text, } from '@chakra-ui/react'
import Link from 'next/link'


export const Footer = ({hideTop = false}) => <Box>
	
	<SimpleGrid columns={[2, 4, 4]} spacingX={[4, null,10]} spacingY={[6, null,10]}
		px={[4, 8, 12]} py={[8, null, 20]} borderBottom="1px solid"
		borderTop={hideTop ? "none" : "1px solid"} color="tint.600" fontWeight="semibold"
		fontSize={["sm", "sm", "lg"]} borderColor="tint.400" pb={[20, null, 20]}>
		<Box gridColumn={["span 2", "span 4", "span 4"]}>
			<Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={["1", null, "4"]} color="black">studymono.</Text>
			<Text fontSize={["sm", null, "md"]} fontWeight="semibold"
				color="tint.500">Bringing super helpful educational resources to your fingertips.</Text>
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
			<Text fontSize={["sm", null, "lg"]} fontWeight="bold" mb={["1", null, "4"]} color="tint.500">Studymono Blog</Text>
			<Link href="/blog/navigating-studymono">Navigating Studymono</Link><br />
			<Link href="/blog/giving-us-feeedback">Giving us feedback</Link> <br /> 
			<Link href="/blog/waec-and-jamb-in-2021">Preparing for WAEC and JAMB in 2021</Link> <br />
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
	<Flex fontSize={["sm", "sm", "md"]} bg="tint.800" w="100%" p="2" pl={["2", null, "6"]} color="white">
		<Text>Built with ❤ by Okezie and the team</Text>
		<Spacer />
		<Text>
			<img 
				src="/squidex-badge.png"
				style={{height: "1.5em"}}
			/>
		</Text>
	</Flex>
</Box>
