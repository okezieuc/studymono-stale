import { Box, Heading, Text, Flex, } from '@chakra-ui/react'
import Image from 'next/image'

export const Vision = () => (<Box maxW="5xl" bg="brand" m="0 auto" mt={["-120px"]} borderRadius={[8]}
	position="relative" overflow="hidden" py={[16]} px={[8]}>
	<Flex color="white">
		<Box w={["200px"]} fontSize={["3xl"]} fontWeight="bold">
			Sample short text will be written here
		</Box>
		<Box flex="1" ml={[8]}>
			<Text fontSize="2xl">
				Here is a long explanation for this stuff that we say that we do.
				We go on to say even more about it here. Lorem isum dot olres, bla, bla.
				We will also add a little more detail for this to span more lines
			</Text>
		</Box>
	</Flex>
</Box>)