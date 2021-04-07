import { Box, Flex, Spacer, HStack,
	SimpleGrid, Text, } from '@chakra-ui/react'
import Link from 'next/link'


export const CallToAction = () => <Flex bg="#4715be" px={[3, 8, 12]} 
	py={[8, null, 12]} alignItems={["left", null, "center"]}
	boxShadow="0px 0px 4px 0px" direction={["column", null, "row"]}>
	<Text color="white" fontSize={["lg", "3xl", "4xl"]}
		fontWeight={["500", "bold"]} maxW={["100%", null, "800px"]}>
		Sample Call to Action will be displayed here. Get ready!
	</Text>
	<Spacer />
	<Box mt={[4, null, 0]}>
		<Box bg="white" color="#4715be" fontSize={["md", "md", "2xl"]}
			width="fit-content" py={["1", "2", "2"]} px={["2", "4", "5"]} height="fit-content"
			borderRadius={["4px", "8px"]} fontWeight={["bold", null, "bold"]}>
			<Link href="/pastquestions">Get Started</Link>
		</Box>
		<Text textAlign={["left", null, "center"]} fontSize={["xs", "md", "lg"]}
			mt={[null, 1, "1"]} color="white">It's free</Text>
	</Box>
	
</Flex>
