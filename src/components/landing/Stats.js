import { Box, Heading, Text, Stack, } from '@chakra-ui/react'
import { Logo, } from './Logo'

export const Stats = () => (<Box maxW={["xl",null, "5xl"]} m="0 auto" textAlign={["center", null, "left"]} px={[4, null, 0]}>
	<Stack direction={["column", null, "row"]} align="center" mt={[24,null]}>
		<Box flex="1" mr={[null, null, 12]}>
			<Heading fontSize={["4xl", null, "5xl"]} fontWeight="bold" as="h2">
        <Box as="span" color="brand">We mean it</Box> when we say we have resources                      
      </Heading>
			<Box w={["250px", null, "300px"]} h={["280px", null, "300px"]} d={["block", null, "none"]} m="0 auto"
				my={4}
			>
				<Logo src="/stats.svg" size="xs" m="0 auto" alt="Infographics showing the quality of resources available on Studymono" />
			</Box>
			<Text fontSize={["md", null, "2xl"]} mt={[null, 4, 0]}>
			With our catalog over 500 WAEC and JAMB questions in Mathematics, Physics, Chemistry and other subjects, Studymono is ready to provide you with your practice needs.
			</Text>
		</Box>
		<Box w="300px" h="335px" d={["none", null, "block"]} >
			<Logo src="/stats.svg" size="xs" alt="Infographics showing the quality of resources available on Studymono" />
		</Box>
		
	</Stack> 
</Box>) 