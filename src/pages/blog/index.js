import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { getAllPosts } from '../../lib/api'

export default function Index( {allPosts} ) {
	return (<Box>
		<Heading fontSize="6xl">
			Studymono Blog
		</Heading>
		<Text fontSize="4xl" fontWeight="bold">
			Posts
		</Text>
		
				
				{
					
					allPosts.map((post) => (
					<>
						<Link href={`/blog/${post.slug}`}>
							<a> {post.title} </a>
						</Link>
						<br />
						</>
					) )
				}
		
	
		<br />
		<Link href="/">
			<a>Home</a>
		</Link>
	</Box>
)
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
