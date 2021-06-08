import { Box, Flex, SimpleGrid, Text, Container, Heading,
    LinkBox, LinkOverlay, } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { dateInWords } from '../lib/dateInWords'

const BlogPost = ({ post, }) => <LinkBox><Box w="100%">
    <Box bg="gray.300" h={["200px", null, "250px"]} position="relative"
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
        fontSize={["md", null, "2xl"]} fontWeight={["600", null, "bold"]}>
        <Link href={`/blog/${post.slug}`} passHref>
            <LinkOverlay
							className="umami--click--recommended-post"
						>
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

export const RecommendedReads = ({posts}) => <Box bg="tint.200"
    py={["12", null,  "24"]}>
		<Container maxW={["2xl", null, "5xl"]}>
      <Flex direction={["column", null, "row"]}  maxW={["2xl", null, "unset"]} m={["0 auto", null, "unset"]} >
            <Heading fontSize={["2xl", null,  "3xl"]} mr={8} fontWeight="semibold"
                mb="8" color="tint.700">Recommended reads</Heading>
            <SimpleGrid columns={[1, 2]} spacing={[16, 8, 16]}>
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[1]} />
            </SimpleGrid>
      </Flex>
		</Container>
</Box>

RecommendedReads.defaultProps = {
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
        }
    ]
}