import { Box, Heading, Text, Stack, } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const ExamCard = ({data}) => (<Box w={["250px"]} border="1px solid" borderColor="tint.300" textAlign="left"
	borderRadius={[4]}>
	<Box w="100%" h="200px" position="relative">
		<Image
			src={data.image}
			alt="Sample feature cover"
			layout="fill"
			objectFit="cover"
		/>
	</Box>
	<Box p={[4]}>
		<Text fontWeight="bold">{ data.exam }</Text>
		<Text>{ data.text }</Text>
	</Box>
</Box>)

ExamCard.defaultProps = {
	data: {
		image: "/waec.png",
		exam: "WAEC",
		text: "Some sample subtitle"
	}
}

export const Catalog = ({ exams }) => (<Box pt={[20, null, "120px"]} pb={[12,null,"120px"]}>
	<Box  maxW={["xl", null, "800px"]} m="0 auto" textAlign="center" px={[4, null, 0]}>
		<Heading as="h2" fontSize={["4xl", null, "5xl"]} >One Compass <br /> Many Destinations</Heading>
		<Text as="h2" fontSize={["md", null, "2xl"]} mt={[4]}>A smaller subtitle text will also follow below the large heading. Lorem ipsum dit olres vrum. It should almost be two lines long</Text>
		<Stack spacing={[8]} direction={["column", "row"]} m="0 auto" mt={[12]} w="fit-content">
			<ExamCard data={exams[0]} />
			<ExamCard data={exams[1]} />
		</Stack>
	</Box>
</Box>)

Catalog.defaultProps={
	exams: [
		{
			image: "/waec.png",
			exam: "WAEC",
			text: "Some sample subtitle"
		},
		{
			image: "/jamb.png",
			exam: "JAMB",
			text: "Some JAMB subtitle"
		}
	]
}