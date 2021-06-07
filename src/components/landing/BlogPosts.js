import { Box, SimpleGrid, Text, 
    LinkBox, LinkOverlay, Container, Heading, } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { dateInWords } from '../../lib/dateInWords'


const BlogPost = ({ post, }) => <LinkBox><Box w="100%" role="group">
    <Box 
			bg="gray.300" 
			h={["200px", null, "250px"]}
			pos="relative"
			transition="0.3s ease-in-out"
			_groupHover = {{
				transform: { 
					lg: "translate(0px, -10px)",
				},	
				boxShadow: {
					lg:"0px 10px 10px 0px #b1b1b1"
				}
			}}
			borderRadius="1em"> 
			<Image
				src={`studymono/blog/${post.cover}`}
				alt={`Pattern cover image for the post "${post.title}" on The Studymono Blog`}
				layout="fill"
				objectFit="cover"			
				className="round-corners"
			/>
		</Box>
    <Box ml={4} mt={4} 
        fontSize={["md", "xl", "2xl"]}>
        <Link href={`/blog/${post.slug}`} passHref>
            <LinkOverlay className="umami--click--landing-blog-link">
                { post.title }
            </LinkOverlay>
        </Link>
    </Box>
    <Text ml={4} mt={3} fontWeight={["500", null, "bold"]} color="tint.500"
        fontSize={["xs", null, "md"]}>
        { dateInWords(post.date) }
    </Text>
</Box>
</LinkBox>

BlogPost.defaultProps = {
    post: {
        title: "Sample blog post title comes  here that is a bit short.",
        date: "12th January 2021",
        slug: "preview"
    }
}

export const BlogPosts = ({posts}) => <Box py={[12, null, 32]}>
  <Container maxW={["xl", null, "5xl"]}>
	<Heading as="h2" fontSize={["4xl", null, "5xl"]} mb={[8, null, 16]}>From <Box as="span" color="brand">the Blog</Box></Heading>
	<SimpleGrid columns={[1, null, 3]} spacing={8}>
			<BlogPost post={posts[0]} />
			<BlogPost post={posts[1]} />
			<BlogPost post={posts[2]} />
	</SimpleGrid>
	</Container>
</Box>

BlogPosts.defaultProps = {
    posts: [
        {
            title: "Sample blog post title comes  here that is a bit short.",
            date: "12th January 2021",
            slug: "preview",
						cover: "/cover.jpg"
        },
        {
            title: "Anonther blog post title follows here that is a bit short.",
            date: "12th January 2021",
            slug: "dynamic-routing",
						cover: "/cover.jpg"
        },
        {
            title: "Anonther blog post title follows here that is a bit short.",
            date: "12th January 2021",
            slug: "dynamic-routing",
						cover: "/cover.jpg"
        }
    ]
}