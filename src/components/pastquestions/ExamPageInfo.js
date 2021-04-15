import { Flex, Box, Text, } from '@chakra-ui/react'

export const ExamPageInfo = ({ text }) => (<Flex>
    <Box bg="blue.500" borderRadius="99px" textAlign="center" color="white"
        fontSize={["sm", null,"md"]}  h={["20px", null, "30px"]} w={["20px", null, "30px"]}>i</Box>
    <Text flex="1" ml={[2, null,4]} fontSize={["sm", null, "md"]} fontWeight={["light", null, "semibold"]} color="tint.600">
			{text}
    </Text>
</Flex>)