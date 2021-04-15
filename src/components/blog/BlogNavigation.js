import { Box, SimpleGrid, Text, } from '@chakra-ui/react'
import Link from 'next/link'
import { dateInWords } from '../../lib/dateInWords'

const BlogNavigationItem = ({rightBorder = true, post}) => <Box px={[2, 8, 12]} py={[2, 8, 12]} 
    borderRight={ rightBorder ? "1px solid" :"none" }>
    <Text fontWeight="bold" fontSize={["md", "2xl", "4xl"]} minH={["60px", null, "120px"]}>
        <Link href={`/blog/${post.slug}`}>
            {post.title}
        </Link>    
    </Text>
    <Text mt={[4, null, 16]} fontSize={["xs", "sm", "md"]}
			color="tint.600" fontWeight="semibold">{ dateInWords(post.date) }</Text>
</Box>

export const BlogNavigation = ({ nextPosts }) => <Box px={[0, 8, 12]} mb={[0, 20 , 32]}>
    <Box borderY="1px solid" borderX={["none", "1px solid"]} borderBottom={["none", "1px solid"]} m={[0, null, 20]}>
        <Box borderBottom={["1px solid"]} p={[1, 2]} textAlign="center">Up next</Box>
    
        <SimpleGrid columns={[2]}>
            <BlogNavigationItem post={nextPosts[0]} />
            <BlogNavigationItem post={nextPosts[1]} rightBorder={false} />
        </SimpleGrid>
    </Box>
</Box>

BlogNavigation.defaultProps = {
    nextPosts: [
        {title: "There is a sample blog post title here", slug:"dynamic-routing", date: "2020-03-16T05:35:07.322Z"},
        {title: "There is a different post title here", slug:"hello-world", date: "2020-03-16T05:35:07.322Z"}
    ]
}