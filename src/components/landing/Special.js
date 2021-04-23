import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export const Special = () => (<Box bg="tint.200" mt={[32]} py={[20]}>
<Box maxW={["xl", null, "5xl"]} m="0 auto" textAlign="left" px={[4, null, 0]}>
	<Stack direction={["column", null, "row"]}>
		<Box w={[60, null, "300px"]} fontSize={["2xl", null, "3xl"]} fontWeight="bold">
			Why we built Studymono
		</Box>
		<Box flex="1" ml={[null, null, 8]}>
			<Text fontSize={["md", null, "2xl"]}>
			Studymono was not created to be a replacement for textbooks and schools. Studymono was created to be a supplementary material for solving problems based on what you are taught in school and for preparing for WAEC and JAMB.
			</Text>
		</Box>
	</Stack>
</Box>
</Box>)