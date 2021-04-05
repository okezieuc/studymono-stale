import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export const Stats = () => (<Box  maxW={["5xl"]} m="0 auto" textAlign="left">
	<Flex align="center">
		<Box flex="1" mr={[12]}>
			<Text fontSize="5xl" fontWeight="bold">Studymono is for you!</Text>
			<Text fontSize="2xl">
				Here is a long explanation for this stuff that we say that we do.
				We go on to say even more about it here. Lorem isum dot olres, bla, bla.
				We will also add a little more detail for this to span more lines
			</Text>
		</Box>
		<Box w="300px" h="300px" bg="tint.200" />
		
	</Flex>
</Box>)