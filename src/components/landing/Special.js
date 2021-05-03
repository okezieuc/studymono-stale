import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export const Special = () => (<Box bg="tint.200" mt={[32]} py={[20]}>
<Box maxW={["xl", null, "5xl"]} m="0 auto" textAlign="left" px={[4, null, 0]}>
	<Stack direction={["column", null, "row"]}>
		<Box w={[60, null, "300px"]}>
			<Heading fontSize={["2xl", null, "3xl"]}>Sample short text will be written here</Heading>
		</Box>
		<Box flex="1" ml={[null, null, 8]}>
			<Text fontSize={["md", null, "2xl"]}>
				Here is a long explanation for this stuff that we say that we do.
				We go on to say even more about it here. Lorem isum dot olres, bla, bla.
				We will also add a little more detail for this to span more lines
			</Text>
		</Box>
	</Stack>
</Box>
</Box>)