import {
  Link as ChakraLink,
	Box, Heading, Text,
	Center,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { NavBar, } from '../components/NavBar'
import { Footer, } from '../components/Footer'

const Index = () => (
	<Box>
		<NavBar />
		<Heading textAlign="center" fontSize="xl">
			Studymono
		</Heading>
		<Text textAlign="center" fontSize="xl">
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
		<Footer />
	</Box>
)

export default Index
