import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import { Logo, } from './Logo'
import Link from 'next/link'

export const Stats = () => (<Box maxW={["5xl"]} m="0 auto" textAlign="left" px={[4, null, 0]}>
	<Stack direction={["column", null, "row"]} align="center" mt={[24,null]}>
		<Box flex="1" mr={[null, null, 12]}>
			<Text fontSize={["4xl", null, "5xl"]} fontWeight="bold">Studymono is for you!</Text>
			<Box w="300px" h="300px" d={["block", null, "none"]} >
				<Logo src="/logo.svg" size="xs" m="0 auto" />
			</Box>
			<Text fontSize={["md", null, "2xl"]}>
				Here is a long explanation for this stuff that we say that we do.
				We go on to say even more about it here. Lorem isum dot olres, bla, bla.
				We will also add a little more detail for this to span more lines
			</Text>
		</Box>
		<Box w="300px" h="300px" d={["none", null, "block"]} >
			<Logo src="/logo.svg" size="xs" />
		</Box>
		
	</Stack>
</Box>) 