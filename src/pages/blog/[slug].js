import {
  Link as ChakraLink,
	Box, Heading, Text,
	Avatar, Flex,
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
		<Heading fontSize={["3xl", null, "6xl"]} ml={4}>
			Studymono Blog
		</Heading>

		<BlogPostHeader title={post.title} />

		
		<Text mb="8">
			Published 20 Feb 2021 at {slug}
		</Text>
		<Text mb="8" >
		
		<div>
			{content}
		</div>
		</Text>
		
		{	
			nextPosts.map((post) => (
			<>
				<Link href={`/blog/${post.slug}`}>
					<a> {post.title} </a>
				</Link>
				<br />
				</>
			) )
		}
		
		<Link href="/blog"><a>Return to blog</a></Link><br />
		<Link href="/"><a>Return to home</a></Link>
		<br /><Link href="/pastquestions"><a>Start studying</a></Link>
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
