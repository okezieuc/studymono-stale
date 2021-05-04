import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export const Special = () => (<Box bg="tint.200" mt={[32, null, 48]} py={[20, null, 32]}>
<Box maxW={["xl", null, "5xl"]} m="0 auto" textAlign="left" px={[4, null, 0]}>
	<Stack direction={["column", null, "row"]}>
		<Box w={[60, null, "300px"]}>
			<Heading fontSize={["2xl", null, "3xl"]}>Why we built Studymono</Heading>
		</Box>
		<Box flex="1" ml={[null, null, 8]}>
			<Text fontSize={["md", null, "2xl"]}>
				We did not create Studymono to be a replacement for textbooks. Why would we do such? Studymono is <Box as="span" fontWeight="bold">a supplementary material</Box> for solving questions of your choice in preparation for WAEC, JAMB and higher education.
			</Text>
		</Box>
	</Stack>
</Box>
</Box>)