import { Box, Heading, Text, Flex, } from '@chakra-ui/react'
import { Logo, } from './Logo'
import Image from 'next/image'

export const Vision = () => (<Box mx={[4]} >
<Box maxW="5xl" bg="brand" m="0 auto" mt={["-120px"]} borderRadius={[8]}
	position="relative" overflow="hidden" py={[8, null, 16]} px={[8]} >
	<Flex color="white" direction={["column", null, "row"]} align="center">
		<Box w={["100px", null, "200px"]} fontSize={["3xl"]} fontWeight="bold"  mr={[null, null, 8]} mb={[8,  null, 0]}>
			<Logo size="xs" />
		</Box>
		<Box flex="1">
			<Text fontSize={["md", null, "2xl"]}>
				Here is a long explanation for this stuff that we say that we do.
				We go on to say even more about it here. Lorem isum dot olres, bla, bla.
				We will also add a little more detail for this to span more lines
			</Text>
		</Box>
	</Flex>
</Box>
</Box>)