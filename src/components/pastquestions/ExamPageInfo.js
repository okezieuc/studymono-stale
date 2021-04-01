import { Flex, Box, Text, } from '@chakra-ui/react'

export const ExamPageInfo = () => (<Flex>
    <Box bg="blue.500" borderRadius="99px" textAlign="center" color="white"
        fontSize={["sm", null,"md"]}  h={["20px", null, "30px"]} w={["20px", null, "30px"]}>i</Box>
    <Text flex="1" ml={[2, null,4]} fontSize={["sm", null, "md"]} fontWeight={["light", null, "semibold"]} color="tint.600">
        On this side of the page will be a well crafted text about anything I plan to write
        about on the left side of the page. Hopefully, I can insert some key sentences here
        that will give some extra SEO juice to the site.
    </Text>
</Flex>)