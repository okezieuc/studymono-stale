import {
  Link as ChakraLink,
	Box, Heading, Text,
	SimpleGrid,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { getAllPosts } from '../../lib/api'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { CallToAction, } from '../../components/CallToAction'
import { BlogListItem } from '../../components/blog/BlogListItem'

export default function Index( {allPosts} ) {
	return (<Box>
		<NavBar />
		<Heading fontSize="6xl">
			Studymono Blog
		</Heading>
		<Text fontSize="4xl" fontWeight="bold">
			Posts
		</Text>
		
		<SimpleGrid px={[4, null, 24]} columns={[1, null, 2]} spacingX={[12]} spacingY={[8, null, 20]}>
			<BlogListItem />
			<BlogListItem />
			<BlogListItem />
			<BlogListItem />
		</SimpleGrid>
				
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
		<CallToAction />
		<Footer hideTop={true} />
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
