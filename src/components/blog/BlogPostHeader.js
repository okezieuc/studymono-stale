import { Box, SimpleGrid, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { dateInWords } from '../../lib/dateInWords'

export const BlogPostHeader = ({ title, cover, date }) => <SimpleGrid columns={[1, 2]} 
	
	mx={[4, null, 20]}
	my={[4, null, 20]}
    borderRadius={8}>
    <Box w="100%" minH={["200px", null, "350px"]} bg="gray.400"
				position="relative"
				borderTopLeftRadius="1em"
				borderTopRightRadius={["1em", "0em"]}
				borderBottomLeftRadius={["0em", "1em" ]}
				> 
		
			<Image
				src={`studymono/blog/${cover}`}
				alt={`Cover image for the post "${title}" on The Studymono Blog`}
				layout="fill"
				objectFit="cover"
				priority={true}
				className="blog-header-image"
			/>
		
		</Box>
    <Box p={[4, null, 8]} border="1px solid lavender" borderLeft={["block", null, "none"]} bg="white"
        borderTopStyle={["none", null, "solid"]} 
        position="relative"
				borderTopRightRadius={["0em", "1em"]}
				borderBottomRightRadius={["1em"]}
				borderBottomLeftRadius={["1em", "0em"]}
				>
        <Heading fontSize={["2xl", "3xl", "5xl"]} as="h1" fontWeight="bold"
					mb={[20, null, "auto"]}>
            {title} 
        </Heading>
        <Text mt={[4, null, 8]} fontSize={["sm", null, "md"]} color="tint.600" fontWeight="bold"
					position="absolute" left={[4, null,8]} bottom={[4, null, 8]}>{ dateInWords(date) }</Text>
    </Box>
</SimpleGrid>

BlogPostHeader.defaultProps={ title: "Type some example blog post title here.", cover: "/pattern.jpg" }