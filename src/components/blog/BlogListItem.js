import { Box, Text, LinkBox, LinkOverlay, AspectRatio, Flex, } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { dateInWords } from '../../lib/dateInWords'

export const BlogListItem = ({ post }) => <LinkBox>
    <Flex direction="column">
        <Box w="100%">
            <AspectRatio bg="gray.100" ratio={4/3} w={["100%", null, "100%"]}>
                <Image
									src={`studymono/blog/${post.cover}`}
									alt={`Cover image for the post "${post.title}" on The Studymono Blog`}
									layout="fill"
									objectFit="cover"
									className="round-corners"
								/>
            </AspectRatio>
        </Box>
        <Box flex="1">
            <Box mt={2} ml={2} fontWeight="bold" fontSize={["lg", null, "xl"]} maxW="90%">                
                <Link href={`/blog/${post.slug}`} passHref>
                    <LinkOverlay
											className="umami--click--open-blog-post"
										>
                        { post.title }
                    </LinkOverlay>
                </Link>
            </Box>
            <Text mt={[2, null,4]} fontSize={["sm", null, "md"]} ml={2}>{ dateInWords(post.date) }</Text>
        </Box>
    </Flex>
</LinkBox>

BlogListItem.defaultProps={ post: {title: "There is a sample blog post title here", slug:"dynamic-routing", date:"2020-03-16T05:35:07.322Z"}}