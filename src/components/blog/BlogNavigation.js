import { Box, SimpleGrid, Text, } from '@chakra-ui/react'

const BlogNavigationItem = ({rightBorder = true}) => <Box px={[2, null, 12]} py={[2, null, 12]} 
    borderRight={ rightBorder ? "1px solid" :"none" }>
    <Text fontWeight="bold" fontSize={["md", null, "4xl"]} minH={["60px", null, "120px"]}>Sample blog post topic comes here</Text>
    <Text mt={[4, null, 16]} fontSize={["xs", null, "md"]}>12 Jan 2021</Text>
</Box>

export const BlogNavigation = () => <Box p={[0, null, 12]}>
    <Box borderY="1px solid" borderX={["none", null, "1px solid"]} m={[0, null, 20]}>
        <Box borderBottom={["1px solid"]} p={[1, null, 2]} textAlign="center">Up next</Box>
    
        <SimpleGrid columns={[2]}>
            <BlogNavigationItem />
            <BlogNavigationItem rightBorder={false} />
        </SimpleGrid>
    </Box>
</Box>