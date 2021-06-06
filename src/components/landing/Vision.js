import { Box, Text, Flex, } from '@chakra-ui/react'
import { Logo, } from './Logo'

export const Vision = () => (<Box mx={[4]} >
<Box maxW={["xl", null, "5xl"]} bg="brand" m="0 auto" mt={["-120px"]}
	position="relative" overflow="hidden" py={[8, null, 16]} px={[8]} >
	<Flex color="white" direction={["column", "row"]} align="center">
		<Box w={["100px", null, "200px"]} fontSize={["3xl"]} fontWeight="bold"  mr={[null, 8]} mb={[8,  null, 0]}>
			<Logo 
				size="xs"
				alt="Studymono's logo"
				src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgMjExLjY2NyAyMTEuNjY3IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iOCIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cmVjdCB3aWR0aD0iMTU1LjgwMyIgaGVpZ2h0PSIxNTUuODAzIiB4PSI0IiB5PSI0IiByeD0iMTYiIHBhaW50LW9yZGVyPSJub3JtYWwiLz48cmVjdCB5PSI1MS44NjQiIHg9IjUxLjg2NCIgaGVpZ2h0PSIxNTUuODAzIiB3aWR0aD0iMTU1LjgwMyIgcng9IjE2IiBwYWludC1vcmRlcj0ibm9ybWFsIi8+PC9zdmc+"
			/>
		</Box>
		<Box flex="1">
			<Text fontSize={["md", null, "2xl"]}>
				Our goal at Studymono is to <Box as="span" fontWeight="bold">make learning accesible</Box>. We want to bring <Box as="span" fontWeight="bold">helpful educational resources</Box> to everyone's fingertips.
			</Text>
		</Box>
	</Flex>
</Box>
</Box>)