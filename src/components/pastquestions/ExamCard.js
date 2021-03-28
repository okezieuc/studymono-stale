import { Box, AspectRatio, } from'@chakra-ui/react'

export const ExamCard = () => (<AspectRatio ratio={16 / 12}>
    <Box fontSize={["xl", null, "4xl"]} fontWeight="bold"
    borderRadius={[4, null, 8]} border="1px solid">
        WAEC
    </Box>
</AspectRatio>)