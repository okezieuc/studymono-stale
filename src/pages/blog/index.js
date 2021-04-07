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
		<Box bg="tint.400" h={[6, null, 8]} d={["block", null, "none"]} />
		<Box px={[4, null, 24]} pt={[4, null, 12]} pb={[8, null, 24]} mb={[8, null, 24]} bg="tint.200">
			<Heading fontSize={["2xl", "4xl", "6xl"]}>
				Studymono <Box as="span" color="brand">Blog</Box>
			</Heading>
			<Text mt={[4, null, 12]} fontSize={["sm", "md", "2xl"]} maxW="800px">
				On this blog, we publish articles that will help enlighten you on some
				very important, but often overlooked details that can help you in your
				exams and can also have some product updates in here too!
			</Text>
		</Box>
		
		<Box px={[4, null, 24]} mb={[20, null, 40]}>
		<SimpleGrid  columns={[1, 2, 3]} spacingX={[8, null, 12]} spacingY={[8, null, 20]}>
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
    'cover',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
