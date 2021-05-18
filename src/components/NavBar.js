import { Box, Flex, Spacer, HStack, VStack,
	Button, useDisclosure, } from '@chakra-ui/react'
import Link from 'next/link'


export const NavBar = () => {
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
	
	return(<Box>
<Box fontSize={["sm", "sm", "sm"]} bg="black" w="100%" p="2" pl={["2", null, "6"]} color="white">
	<Link href="/blog/waec-and-jamb-in-2021">
		Few thoughts on WAEC and JAMB in 2021
	</Link>
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
				<Link href="/pastquestions">
					<a className="umami--click--nav-pastquestions-link">
						Past Questions
					</a>
				</Link>
			</Box>
			<Box d={["none", "block"]}>
				<Link href="/blog">
					<a className="umami--click--nav-blog-link">
						Blog
					</a>
				</Link>
			</Box>
			<Spacer />
			<Box d={["block"]} bg="white" py={["1", null, "2"]} px={["2", null, "6"]} fontWeight="normal"
				border="1px solid"
				borderColor="brand"
				color="white"
				background="brand"
				_hover = {{
					background: "white",
					transition: "background 0.1s ease-in-out",
					color: "brand"
				}}
			>
				<Link href="/pastquestions">
					<a className="umami--click--nav-get-started">
						Get Started
					</a>
			</Link>
				
			</Box>
			<Button size="sm" onClick={onToggle} d={["block", "none"]}>
					☰
				</Button>
		</HStack>
		<Box d={isOpen ? "block" : "none"}>
			<VStack position="absolute" top="80px" left="0"
				 bg="white" w="100%"
				alignItems="flex-start"
				fontSize="lg" fontWeight="bold" p={8} textAlign="left"
				boxShadow="0px 2px 2px #aaa" zIndex="1"
			>
				<Link href="/">Home</Link>
				<Link href="/pastquestions">
					<a className="umami--click--nav-pastquestions-link">
						Past Questions
					</a>
				</Link>
				<Link href="/blog">
					<a className="umami--click--nav-blog-link">
						Blog
					</a>
				</Link>
				<Button colorScheme="red" mt={20} size="sm" onClick={onClose}>X</Button>
			</VStack>
		</Box>
	</Box>
	
</Box>
</Box>)}