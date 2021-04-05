import { Box, Heading, Text, Stack, } from '@chakra-ui/react'
import Link from 'next/link'

const ExamCard = () => (<Box w={["250px"]} border="1px solid" borderColor="tint.300" textAlign="left"
	borderRadius={[4]}>
	<Box w="100%" h="200px" bg="tint.300" />
	<Box p={[4]}>
		<Text>WAEC</Text>
		<Text>Some sample subtitle</Text>
	</Box>
</Box>)

export const Catalog = () => (<Box pt={["120px"]} pb={["120px"]}>
	<Box  maxW={["800px"]} m="0 auto" textAlign="center">
		<Heading as="h2" fontSize={["5xl"]} >Another Sample <br /> Section Heading</Heading>
		<Text as="h2" fontSize={["2xl"]} mt={[4]}>A smaller subtitle text will also follow below the large heading. Lorem ipsum dit olres vrum. It should almost be two lines long</Text>
		<Stack spacing={[8]} direction={["row"]} m="0 auto" mt={[12]} w="fit-content">
			<ExamCard />
			<ExamCard />
		</Stack>
	</Box>
</Box>)