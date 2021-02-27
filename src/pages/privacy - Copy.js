import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Index = () => (
  <Box>
		<Heading textAlign="center" fontSize="6xl">
			Studymono
		</Heading>
		<Text textAlign="center" fontSize="4xl">
			Make it count
		</Text>
		<Link href="/blog">
			<a>this page!</a>
		</Link>
	</Box>
)

export default Index
