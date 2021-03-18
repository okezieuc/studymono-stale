import { Box, Flex, Spacer, HStack,
	SimpleGrid, Text, } from '@chakra-ui/react'
import Link from 'next/link'


export const CallToAction = () => <Flex bg="#4715be" px={[3, null, 12]} 
	py={[8, null, 12]} alignItems="center"
	boxShadow="0px 0px 12px 0px">
	<Text color="white" fontSize={["lg", "xl", "5xl"]}
		fontWeight={["500", null, "bold"]} maxW={["72%", null, "1000px"]}>
		Sample Call to Action will be displayed here. Get ready!
	</Text>
	<Spacer />
	<Box>
		<Text bg="white" color="#4715be" fontSize={["sm", "md", "2xl"]}
			minWidth="fit-content" py={["1", null, "2"]} px={["1", "2", "5"]} height="fit-content"
			borderRadius={["4px", "8px"]} fontWeight={["bold", null, "bold"]}>
			Get Started
		</Text>
		<Text textAlign="center" fontSize={["xs", null, "lg"]} mt={[null, null, "1"]} color="white">It's free</Text>
	</Box>
	
</Flex>