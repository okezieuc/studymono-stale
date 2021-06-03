import {
  Link as ChakraLink,
	Box, Heading, Text,
	Avatar, Flex, Container,
} from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'
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
		<Head>
			<title>{ post.title } - Studymono Blog</title> 
			<meta name="description" content={ post.excerpt } />
			<meta property="og:title" content={`${post.title} - Studymono Blog`} />
			<meta property="og:description" content={ post.excerpt } />
			<meta property="og:image" content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/blog/${post.cover}`} />
			
			<meta name="twitter:title" content={`${post.title} - Studymono Blog`} />
			<meta name="twitter:description" content={ post.excerpt } />
			<meta name="twitter:image" content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/blog/${post.cover}`} />
			
			<script type="application/ld+json" 
				dangerouslySetInnerHTML={{__html:
					(`{
						"@context": "https://schema.org",
						"@type": "NewsArticle",
						"headline": "${post.title}",
						"image": [
							"https://res.cloudinary.com/okezieuc/image/upload/studymono/blog${post.cover}"
						 ],
						"datePublished": "${post.date}",
						"dateModified": "${post.date}",
						"author": {
							"@type": "Person",
							"name": "${post.author}"
						},
						"publisher": {
							"@type": "Organization",
							"name": "Company Name",
							"logo": {
								"@type": "ImageObject",
								"url": "https://google.com/logo.jpg"
							}
						}
				}`)
			}}>
			
			</script>
			<link rel="canonical" href={`https://www.studymono.com/blog/${slug}`} />
		</Head>
		<NavBar />
		<Box bg="tint.400" h={[6, null, 8]} d={["block", null, "none"]} />
		<Box bg="tint.200" pt={[12, null, 20]} pb={[32, null, 40]}
				mb={[-32, null, -48]}>
				<Container maxW={["2xl", null, "5xl"]} >			
				
				<Heading fontSize={["2xl", "3xl", "4xl"]}>
					Studymono <Box as="span" color="brand">Blog</Box>
				</Heading>
			</Container>
		</Box>
		
		<BlogPostHeader title={post.title} cover={post.cover} date={post.date} />
		
		
		<Container fontSize={["md", null, "2xl"]} maxW={["2xl", null, "4xl"]} mb={[20, null, 20]}
			px={["1.5em"]}>
				{content}
				
				{ 
					post.credits 
					? <Box color="tint.400" fontSize={["xs", null, "md"]}
						dangerouslySetInnerHTML={
							{
								__html: `Cover Credits: ${post.credits}`
							}
						}
					/>
					: ""
				}
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
		'cover',
    'author',
    'content',
		'excerpt',
		'credits'

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
