import { Box, AspectRatio, Text, } from'@chakra-ui/react'

export const SubjectCard = () => (<Box>
        <AspectRatio ratio={16 / 12}>
        <Box fontSize={["xl", null, "4xl"]} fontWeight="bold"
        borderRadius={[4, null, 8]} border="1px solid"></Box>
    </AspectRatio>
    <Box>
        <Text fontWeight="bold" fontSize={["md", null, "2xl"]} mt={[2, null, 4]} ml={[2, null, 4]}>Subject</Text>
        <Text fontWeight="light" fontSize={["sm", null, "xl"]} ml={[2, null, 4]}>Subtitle</Text>
    </Box>
</Box>) 