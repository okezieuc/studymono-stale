import { Box, Heading, Text, Container,  } from '@chakra-ui/react'

export const PageHeading = () => (
<Container 
			maxW={["2xl", null, "5xl"]}>
    <Box my={[4, null, 20]} py={[12, null, 20]} textAlign="center" bg="white" boxShadow="0px 0px 2px 0px">
        <Heading as="h1" fontSize={["2xl", null, "4xl"]}>
            Terms and Conditions
        </Heading>
        <Text fontWeight={[null, null, "bold"]} mt={6}
            fontSize={["sm", null, "md"]}>Last updated: 12th May 2021</Text>
    </Box>
		</Container>
)