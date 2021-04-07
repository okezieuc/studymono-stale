import { Box, Flex, Spacer, HStack, VStack,
	Button, useDisclosure, } from '@chakra-ui/react'
import Link from 'next/link'


export const NavBar = () => {
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
	
	return(<Box>
<Box fontSize={["sm", "sm", "sm"]} bg="black" w="100%" p="2" pl={["2", null, "6"]} color="white">
	Special announcement that is displayed at top
</Box> 
<Box fontSize={["sm", "sm", "lg"]} pl={["1", null, "4"]} bg="white" borderBottom="1px solid" borderBottomColor="tint.400">
	<Box p={["2", null, "4"]}>
		<HStack spacing={["4", null, "12"]}>
			<Box color="black" fontSize={["lg", null, "2xl"]} fontWeight="black" mr={["1", null, "4"]}>
				<Link href="/">
					studymono.
				</Link>
			</Box>
			<Box d={["none", "block"]}>
				<Link href="/pastquestions">Past Questions</Link>
			</Box>
			<Box d={["none", "block"]}>
				<Link href="/blog">Blog</Link>
			</Box>
			<Spacer />
			<Box d={["block"]} bg="white" py={["1", null, "2"]} px={["2", null, "6"]} fontWeight="bold" color="black"
				border="black 1px solid" borderRadius={8} >
				<Link href="/pastquestions">Get Started</Link>
				
			</Box>
			<Button size="sm" onClick={onToggle} d={["block", "none"]}>
					☰
				</Button>
		</HStack>
		<Box d={isOpen ? "block" : "none"}>
			<VStack position="absolute" top="80px" left="0"
				 bg="white" w="100%"
				alignItems="flex-start"
				fontSize="lg" fontWeight="bold" p={8} textAlign="left">
				<Link href="/pastquestions">Home</Link>
				<Link href="/pastquestions">Past Questions</Link>
				<Link href="/pastquestions">Blog</Link>
				<Button colorScheme="red" mt={20} size="sm" onClick={onClose}>X</Button>
			</VStack>
		</Box>
	</Box>
	
</Box>
</Box>)}