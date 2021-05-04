import { Box, SimpleGrid, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { dateInWords } from '../../lib/dateInWords'

export const BlogPostHeader = ({ title, cover, date }) => <SimpleGrid columns={[1, 2]}  m={[4, null, 20]}
    borderRadius={8}>
    <Box w="100%" minH={["200px", null, "350px"]} bg="gray.100"
        borderTopLeftRadius={[8, null, 8]} borderTopRightRadius={[8, null, 0]}
        borderBottomLeftRadius={[null, null, 8]} borderBottomRightRadius={[null, null, 0]}
				position="relative">
		
			<Image
			src={`studymono/blog/${cover}`}
			alt={`Cover image for the post "${title}" on The Studymono Blog`}
			layout="fill"
			objectFit="cover"
			/>
		
		</Box>
    <Box p={[4, null, 8]} border="1px solid lavender" borderLeft={["block", null, "none"]} bg="white"
        borderTopStyle={["none", null, "solid"]} 
        borderTopLeftRadius={[null, null, 0]} borderTopRightRadius={[null, null, 8]}
        borderBottomLeftRadius={[8, null, 0]} borderBottomRightRadius={[8, null, 8]}
				position="relative">
        <Heading fontSize={["2xl", "4xl", "5xl"]} as="h1" fontWeight="bold"
					mb={[20, null, "auto"]}>
            {title} 
        </Heading>
        <Text mt={[4, null, 8]} fontSize={["sm", null, "md"]} color="tint.600" fontWeight="bold"
					position="absolute" left={[4, null,8]} bottom={[4, null, 8]}>{ dateInWords(date) }</Text>
    </Box>
</SimpleGrid>

BlogPostHeader.defaultProps={ title: "Type some example blog post title here.", cover: "/pattern.jpg" }