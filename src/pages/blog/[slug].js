import {
  Link as ChakraLink,
	Box, Heading, Text,
	Avatar, Flex, Container,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts, getNextPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { CallToAction, } from '../../components/CallToAction'
import { BlogNavigation, } from '../../components/blog/BlogNavigation'
import { BlogPostHeader, } from '../../components/blog/BlogPostHeader'

const Index = ({ post, nextPosts }) => {
	const router = useRouter()
	const { slug } = router.query
	const content = markdownToHtml(post.content || '')
	
	return( <Box>
		<NavBar />
		<Box bg="tint.400" h={[6, null, 8]} d={["block", null, "none"]} />
		<Box bg="tint.200" pt={[12, null, 20]} pb={[32, null, 40]}
				mb={[-32, null, -48]}>
				<Container maxW="5xl" >			
				
				<Heading fontSize={["2xl", null, "4xl"]}>
					Studymono <Box as="span" color="brand">Blog</Box>
				</Heading>
			</Container>
		</Box>
		
		<BlogPostHeader title={post.title} />
		
		
		<Container fontSize={["md", null, "2xl"]} maxW="5xl" mb={[20, null, 20]}>
				{content}
		</Container>
		
		<BlogNavigation nextPosts={nextPosts} />
		<CallToAction />
		<Footer hideTop={true} />
	</Box>
	)
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
  ])
  //const content = await markdownToHtml(post.content || '')
	const nextPosts = getNextPosts(params.slug)
  return {
    props: {
      post: {
        ...post,
      },
			nextPosts
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug, 
        },
      }
    }),
    fallback: false,
  }
}

export default Index
