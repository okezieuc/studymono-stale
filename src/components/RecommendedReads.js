import { Box, Flex, SimpleGrid, Text, 
    LinkBox, LinkOverlay, } from '@chakra-ui/react'
import Link from 'next/link'

const BlogPost = ({ post, }) => <LinkBox><Box w="100%">
    <Box borderRadius={8} bg="gray.300" h={["200px", null, "250px"]}></Box>
    <Box ml={4} mt={4} 
        fontSize={["lg", null, "2xl"]} fontWeight={["600", null, "bold"]}>
        <Link href={`/blog/${post.slug}`} passHref>
            <LinkOverlay>
                { post.title }
            </LinkOverlay>
        </Link>
    </Box>
    <Text ml={4} mt={3} fontWeight={["500", null, "bold"]} color="tint.500"
        fontSize={"xs", null, "md"}>
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

export const RecommendedReads = ({posts}) => <Box bg="tint.200"
    px={["6", null, "24"]} py={["12", null,  "24"]}>
      <Flex direction={["column", null, "row"]} >
            <Text fontSize={["2xl", null,  "4xl"]} mr={8} fontWeight="semibold"
                mb="8" color="tint.700">Recommended reads</Text>
            <SimpleGrid columns={[1, null, 2]} spacing={16}>
                <BlogPost post={posts[0]} />
                <BlogPost post={posts[1]} />
            </SimpleGrid>
      </Flex>
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