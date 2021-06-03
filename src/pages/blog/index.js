import {
  Link as ChakraLink,
	Box, Heading, Text,
	SimpleGrid, Container,
} from '@chakra-ui/react'
import Head from 'next/head'
import { getAllPosts } from '../../lib/api'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { CallToAction, } from '../../components/CallToAction'
import { BlogListItem } from '../../components/blog/BlogListItem'

export default function Index( {allPosts} ) {
	return (<Box>
		<Head>
			<title>The Studymono Blog - Studymono Announcements, Tips and Educational News</title>
			<meta name="description" content="The Studymono Blog is a channel we created to reach out to students and everyone in education with education tips and news, and talk about new features on Studymono." />
			<meta property="og:title" content="The Studymono Blog - Studymono Announcements, Tips and Educational News" />
			<meta property="og:description" content="The Studymono Blog is a channel we created to reach out to students and everyone in education with education tips and news, and talk about new features on Studymono." />			
			<meta property="og:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/blog-cover-image_wfyirk.png" />
			<link rel="canonical" href="https://www.studymono.com/blog" />
			
			<meta name="twitter:title" content="The Studymono Blog - Studymono Announcements, Tips and Educational News" />
			<meta name="twitter:description" content="The Studymono Blog is a channel we created to reach out to students and everyone in education with education tips and news, and talk about new features on Studymono." />
			<meta name="twitter:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/blog-cover-image_wfyirk.png" />
		</Head>
		<NavBar />
		<Box bg="tint.400" h={[6, null, 8]} d={["block", null, "none"]} />
		<Box px={[4, null, 24]} pt={[4, null, 12]} pb={[8, null, 24]} mb={[8, null, 24]} bg="tint.200">
			<Heading fontSize={["2xl", "4xl", "6xl"]}>
				Studymono <Box as="span" color="brand">Blog</Box>
			</Heading>
			<Text mt={[4, null, 12]} fontSize={["sm", "md", "2xl"]} maxW="800px">
				You don't want to miss out on any of our articles. We talk about new features we bring to
				Studymono and give <Box as="span" fontWeight="bold">tips on how to study effectively</Box>. We also write about the latest news in the
				Nigerian educational ecosystem.						
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
