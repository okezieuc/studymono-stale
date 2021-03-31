import { Box, SimpleGrid, Text, Heading } from '@chakra-ui/react'

export const BlogPostHeader = ({ title, }) => <SimpleGrid columns={[1, null, 2]}  m={[4, null, 20]}
    borderRadius={8}>
    <Box w="100%" minH={["200px", null, "350px"]} bg="gray.100"
        borderTopLeftRadius={[8, null, 8]} borderTopRightRadius={[8, null, 0]}
        borderBottomLeftRadius={[null, null, 8]} borderBottomRightRadius={[null, null, 0]}></Box>
    <Box p={[2, null, 8]} border="1px solid lavender" borderLeft={["block", null, "none"]} bg="white"
        borderTopStyle={["none", null, "solid"]} 
        borderTopLeftRadius={[null, null, 0]} borderTopRightRadius={[null, null, 8]}
        borderBottomLeftRadius={[8, null, 0]} borderBottomRightRadius={[8, null, 8]}
				position="relative">
        <Heading fontSize={["2xl", null, "5xl"]} as="h1" fontWeight="bold"
					mb={[20, null, "auto"]}>
            {title}
        </Heading>
        <Text mt={[4, null, 8]} fontSize={["sm", null, "md"]}
					position="absolute" left={[4, null,8]} bottom={[4, null, 8]}>12 min read</Text>
    </Box>
</SimpleGrid>

BlogPostHeader.defaultProps={ title: "Type some example blog post title here."}