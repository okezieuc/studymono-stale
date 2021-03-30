import {
  Link as ChakraLink,
	Box, Heading, Text,
	SimpleGrid, Container,
} from '@chakra-ui/react'

import { getAllPosts } from '../../lib/api'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { CallToAction, } from '../../components/CallToAction'
import { BlogListItem } from '../../components/blog/BlogListItem'

export default function Index( {allPosts} ) {
	return (<Box>
		<NavBar />
		<Box px={[4, null, 24]} pt={[4, null, 12]} pb={[8, null, 24]} mb={[8, null, 24]} bg="gray.300">
			<Heading fontSize="6xl" as="h1">
				Studymono Blog
			</Heading>
			<Text mt={[4, null, 12]}>
				On this blog, we publish articles that will help enlighten you on some
				very important, but often overlooked details that can help you in your
				exams and can also have some product updates in here too
			</Text>
		</Box>
		
		<Box px={[4, null, 24]} mb={[20, null, 40]}>
		<SimpleGrid  columns={[1, null, 3]} spacingX={[12]} spacingY={[8, null, 20]}>
			{	
				allPosts.map((post) => <BlogListItem post={post} key={post.slug} />)
			}
		</SimpleGrid>
		</Box>
				
		
	
		
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
