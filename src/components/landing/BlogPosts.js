import { Box, Flex, SimpleGrid, Text, 
    LinkBox, LinkOverlay, Container, Heading, } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const BlogPost = ({ post, }) => <LinkBox><Box w="100%">
    <Box borderRadius={8} bg="gray.300" h={["200px", null, "250px"]} pos="relative">
			<Image
				src="/cover.jpg"
				alt="Sample feature cover"
				layout="fill"
				objectFit="cover"
			/>
		</Box>
    <Box ml={4} mt={4} 
        fontSize={["md", null, "2xl"]}>
        <Link href={`/blog/${post.slug}`} passHref>
            <LinkOverlay>
                { post.title }
            </LinkOverlay>
        </Link>
    </Box>
    <Text ml={4} mt={3} fontWeight={["500", null, "bold"]} color="tint.500"
        fontSize={["xs", null, "md"]}>
        { post.date }
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
  <Container maxW={["5xl"]}>
	<Heading as="h2" fontSize={["4xl", null, "5xl"]} mb={[8, null, 16]}>From the Blog</Heading>
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
            slug: "preview"
        },
        {
            title: "Anonther blog post title follows here that is a bit short.",
            date: "12th January 2021",
            slug: "dynamic-routing"
        },
        {
            title: "Anonther blog post title follows here that is a bit short.",
            date: "12th January 2021",
            slug: "dynamic-routing"
        }
    ]
}