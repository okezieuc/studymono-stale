import { Box, Flex, Spacer, HStack } from '@chakra-ui/react'
import Link from 'next/link'


export const NavBar = () => <Box>
<Box fontSize={["sm", "sm", "md"]} bg="black" w="100%" p="2" pl={["2", null, "6"]} color="white">
	Special announcement that is displayed at top
</Box>
<Flex fontSize={["sm", "sm", "md"]} pl={["1", null, "4"]} bg="white" borderBottom="1px solid">
	<Box p={["1", null, "2"]}>
		<HStack spacing={["4", null, "12"]}>
			<Box bg="yellow.2000" fontSize="" fontWeight="black" mr={["1", null, "4"]}>
				<Link href="/">
					studymono.
				</Link>
			</Box>
			<Link href="/pastquestions">Past Questions</Link>
			<Link href="/blog">Blog</Link>
		</HStack>
	</Box>
	<Spacer />
	<Box d={["none", null, "block"]} bg="#4715be" py={["1", null, "2"]} px={["1", null, "6"]} fontWeight="bold" color="white">
		<Link href="/pastquestions">Get Started</Link>
	</Box>
</Flex>
</Box>
