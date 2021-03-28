import { Box, Heading, Text, } from '@chakra-ui/react'

export const PageHeading = () => (
    <Box m={[8, null, 20]} py={[12, null, 20]} textAlign="center" bg="white" boxShadow="0px 0px 2px 0px">
        <Heading as="h1" fontSize={["2xl", null, "4xl"]}>
            Data we Collect
        </Heading>
        <Text fontWeight={[null, null, "bold"]} mt={6}
            fontSize={["sm", null, "md"]}>12th January</Text>
    </Box>
)