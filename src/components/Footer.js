import { Box, Flex, Spacer, HStack,
	SimpleGrid, Text, } from '@chakra-ui/react'
import Link from 'next/link'


export const Footer = () => <Box>
	
	<SimpleGrid columns={[2, null, 4]} spacing={[4, null,10]} px={[4, null, 12]} py={[8, null, 20]} borderTop="1px solid" borderBottom="1px solid">
		<Box gridColumn={["span 2", null, "span 1"]}>
			<Text fontSize={["xl", null, "3xl"]} fontWeight="bold" mb="4">studymono.</Text>
			<Text fontSize="md">Our simple but exquisite tag  line will be displayed below our  name</Text>
		</Box>
		<Box fontSize="lg">
			<Text fontSize="lg" fontWeight="bold" mb="4"color="gray.600">Navigate</Text>
			<Link href="/pastquestions">Past Questions</Link><br />
			<Link href="/blog">Blog</Link>
		</Box>
		<Box>
			<Text fontSize="lg" fontWeight="bold" mb="4"color="gray.600">Legal</Text>
			<Link href="/privacy">Privacy Policy</Link>
		</Box>
		<Box>
			<Text fontSize="lg" fontWeight="bold" mb="4"color="gray.600">How we help</Text>
			<Link href="/blog/hello-world">Why we built this</Link>
		</Box>
	</SimpleGrid>
	<Box>
		<Text m="0 auto" pt="12" textAlign="center" fontSize={["xl", null, "4xl"]}
			fontWeight="bold" maxW={["250px", "500px"]}>Subscribe to our newsletter  for updates</Text>
		<Box w={["50%", null, "30%"]} h={["30px", null, "50px"]} bg="gray.100" m="0 auto" mt="8" mb="12"></Box>
	</Box>
	<Flex fontSize={["sm", "sm", "md"]} bg="black" w="100%" p="2" pl={["2", null, "6"]} color="white">
		<Text>Make it count</Text>
		<Spacer />
		<Text>2021</Text>
	</Flex>
</Box>
