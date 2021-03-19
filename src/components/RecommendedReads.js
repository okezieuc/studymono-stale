import { Box, Flex, SimpleGrid, Text, } from '@chakra-ui/react'

const BlogPost = () => <Box w="100%">
    <Box borderRadius={8} bg="gray.300" h={["200px", null, "250px"]}></Box>
    <Text ml={4} mt={4} 
        fontSize={["lg", null, "2xl"]} fontWeight={["600", null, "bold"]}>
        Sample blog post title comes  here that is a bit short
    </Text>
    <Text ml={4} mt={3} fontWeight={["500", null, "bold"]} color="gray.600"
        fontSize={"xs", null, "md"}>
        12 min read
    </Text>
</Box>

export const RecommendedReads = () => <Box bg="#f2f2f2"
    px={["6", null, "24"]} py={["12", null,  "24"]}>
      <Flex direction={["column", null, "row"]} >
            <Text fontSize={["2xl", null,  "4xl"]} mr={8} fontWeight="600"
                mb="8">Recommended reads</Text>
            <SimpleGrid columns={[1, null, 2]} spacing={16}>
                <BlogPost />
                <BlogPost />
            </SimpleGrid>
      </Flex>
</Box>