import { Box, Text, Flex, Spacer, } from '@chakra-ui/react'

export const BigAd = () => (
    <Box mb={[4, null, 20]} bg="white"
        border="1px solid" borderRadius={"2px", null, "8px"}>
        <Flex>
            <Text fontSize={["3xl", null, "6xl"]}
                ml={[4, null, 20]} fontWeight="bold"
                py={[8, null, 20]} flex="1" mr={[12, null, 20]}> 
                Big Studymono Ad Here
            </Text>
           <Box w="300px" d={["none", null, "block"]} bg="gray.300" h="auto" borderRightRadius={["2px", null,"8px"]}>
                
            </Box>

        </Flex>  
    </Box>
)