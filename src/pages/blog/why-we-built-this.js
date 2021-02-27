import {
  Link as ChakraLink,
	Box, Heading, Text,
	Avatar, Flex,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = () => {
	const router = useRouter()
	const { slug } = router.query

	return( <Box>
		<Heading fontSize="6xl">
			Studymono Blog
		</Heading>
		<Heading fontSize="3xl">
			Why we built this
		</Heading>
		<Flex><Avatar size="sm" /> Okezie Chiedozie</Flex>
		<Text mb="8">
			Published 20 Feb 2021 at {slug}
		</Text>
		<Text mb="12">
			Sed sed ullamcorper lacus, eu interdum mi. Nulla facilisi. In at blandit dolor. Maecenas elementum, lorem nec blandit interdum, risus felis maximus neque, a aliquam velit magna eu nisl. Vivamus volutpat enim at libero vestibulum elementum. Aenean odio libero, lacinia in facilisis eu, tincidunt vehicula ipsum. Donec vitae arcu at odio scelerisque commodo a et orci. Nam ac lacinia lorem. Nunc feugiat ligula sed eros malesuada efficitur.
			<br />
			<br />
			Integer tellus ligula, maximus vitae lorem et, luctus placerat neque. Suspendisse molestie lobortis erat ac placerat. Sed placerat lacus in ante pulvinar, at ultrices odio congue. Fusce id elit nec ex porta maximus. Vivamus mollis lobortis ex vel hendrerit. Ut non iaculis turpis. Morbi eu pharetra dolor, finibus facilisis massa. Duis quis justo hendrerit purus tristique imperdiet eu nec tortor. Nam faucibus iaculis turpis non placerat. Maecenas aliquam nisi nec scelerisque dignissim.
		</Text>
		
		<Link href="/blog">
			<a>Return to blog</a>
		</Link>
		<br />
		<Link href="/">
			<a>Return to home</a>
		</Link>
		<br />
		<Link href="/pastquestions">
			<a>Start studying</a>
		</Link>
	</Box>
)
}

export default Index
