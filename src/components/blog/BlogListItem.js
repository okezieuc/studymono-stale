import { Box, Text, LinkBox, LinkOverlay, AspectRatio, Flex, } from '@chakra-ui/react'
import Link from 'next/link'

export const BlogListItem = ({ post }) => <LinkBox>
    <Flex direction="column">
        <Box w="100%">
            <AspectRatio borderRadius={[4, null,8]} bg="gray.200" ratio={4/3} w={["100%", null, "100%"]}>
                <Box w="100%" h="auto"/>
            </AspectRatio>
        </Box>
        <Box flex="1">
            <Box mt={2} ml={2} fontWeight="bold" fontSize={["lg", null, "2xl"]} maxW="90%">                
                <Link href={`/blog/${post.slug}`} passHref>
                    <LinkOverlay>
                        { post.title }
                    </LinkOverlay>
                </Link>
            </Box>
            <Text mt={[2, null,4]} fontSize={["sm", null, "md"]} ml={2}>12th March 2021</Text>
        </Box>
    </Flex>
</LinkBox>

BlogListItem.defaultProps={ post: {title: "There is a sample blog post title here", slug:"dynamic-routing"}}