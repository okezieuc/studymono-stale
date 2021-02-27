import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Index = () => (
  <Box>
		<Heading fontSize="6xl">
			Studymono Blog
		</Heading>
		<Text fontSize="4xl" fontWeight="bold">
			Posts
		</Text>
		<Link href="/blog/why-we-built-this">
			<a>Why we built this</a>
		</Link>
		<br />
		<Link href="/blog/why-many-apps-dont-work">
			<a>Why many apps dont work</a>
		</Link>
		<br />
		<Link href="/">
			<a>Home</a>
		</Link>
	</Box>
)

export default Index
