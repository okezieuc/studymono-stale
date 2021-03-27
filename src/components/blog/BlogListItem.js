import { Box, Text, } from '@chakra-ui/react'
import Link from 'next/link'
export const BlogListItem = ({ post }) => <Box>
    <Box w="100%" h={["200px", null, "300px"]} bg="gray.200"></Box>
    <Box mt={2} ml={2} fontWeight="bold" fontSize={["2xl", null, "3xl"]} maxW="90%">
        
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </Box>
    <Text mt={[2, null,4]} ml={2}>12th March 2021</Text>
</Box>

BlogListItem.defaultProps={ post: {title: "There is a sample blog post title here", slug:"dynamic-routing"}}