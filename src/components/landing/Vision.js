import { Box, Heading, Text, Flex, } from '@chakra-ui/react'
import { Logo, } from './Logo'
import Image from 'next/image'

export const Vision = () => (<Box mx={[4]} >
<Box maxW={["xl", null, "5xl"]} bg="brand" m="0 auto" mt={["-120px"]} borderRadius={[8]}
	position="relative" overflow="hidden" py={[8, null, 16]} px={[8]} >
	<Flex color="white" direction={["column", "row"]} align="center">
		<Box w={["100px", null, "200px"]} fontSize={["3xl"]} fontWeight="bold"  mr={[null, 8]} mb={[8,  null, 0]}>
			<Logo size="xs" />
		</Box>
		<Box flex="1">
			<Text fontSize={["md", null, "2xl"]}>
				Our goal at Studymono is to <Box as="span" fontWeight="bold">make learning accesible</Box>. We want to bring <Box as="span" fontWeight="bold">helpful educational resources</Box> to everyone's fingertips.
			</Text>
		</Box>
	</Flex>
</Box>
</Box>)