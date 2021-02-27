import {
  Link as ChakraLink,
	Box, Heading, Text,
	Center,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Index = () => (
	<Center minH="100vh">
  <Box>
		<Heading textAlign="center" fontSize="8xl">
			Studymono
		</Heading>
		<Text textAlign="center" fontSize="6xl">
			Make it count
		</Text>
		<Link href="/pastquestions">
			Get Started
		</Link>
		<br />
		<Link href="/blog">
			Go to Blog
		</Link>
		<br />
		<Link href="/privacy">
			Privacy Policy
		</Link>
	</Box>
	</Center>
)

export default Index
