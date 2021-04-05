import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export const Special = () => (<Box bg="tint.200" mt={[12]} py={[20]}>
<Box maxW={["5xl"]} m="0 auto" textAlign="left">
	<Flex>
		<Box w={["300px"]} fontSize={["3xl"]} fontWeight="bold">
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
</Box>
</Box>)