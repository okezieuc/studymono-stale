import { Box, Text, Flex, Spacer, } from '@chakra-ui/react'

export const BigAd = () => (
    <Box mb={[4, null, 20]} bg="white"
        border="1px solid" borderRadius={"2px", null, "8px"}
				borderColor="tint.400">
        <Flex>
            <Text fontSize={["3xl", "4xl", "6xl"]}
                ml={[4, null, 20]} fontWeight="bold"
                py={[8, null, 20]} flex="1" mr={[12, null, 20]}> 
                Big Studymono Ad Here
            </Text>
           <Box w={["200px", null, "300px"]} d={["none", "block"]} bg="gray.300" h="auto" borderRightRadius={["2px", null,"8px"]}>
                
            </Box>

        </Flex>  
    </Box>
)