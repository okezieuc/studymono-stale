import { Box, Heading, Text, Stack, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const ExamCard = ({data}) => (<LinkBox><Box w={["250px"]} border="1px solid" borderColor="tint.300" textAlign="left"
	borderRadius={[4]} transition="0.3s ease-in-out"
	_hover = {{
		transform: { 
			lg: "scale(1.05,1.05)",
		},	
	}}>
	<Box w="100%" h="200px" position="relative">
		<Image
			src={data.image}
			alt="Sample feature cover"
			layout="fill"
			objectFit="cover"
		/>
	</Box>
	<Box p={[4]}>
		<Text fontWeight="bold">
			<Link href={`/pastquestions/${data.exam.toLowerCase()}`} passHref>
				<LinkOverlay>
					{ data.exam }
				</LinkOverlay>
			</Link>
		</Text>
		<Text>{ data.text }</Text>
	</Box>
</Box>
</LinkBox>)

ExamCard.defaultProps = {
	data: {
		image: "/waec.png",
		exam: "WAEC",
		text: "Some sample subtitle"
	}
}

export const Catalog = ({ exams }) => (<Box pt={[20, null, "120px"]} pb={[12,null,"120px"]}>
	<Box  maxW={["xl", null, "800px"]} m="0 auto" textAlign="center" px={[4, null, 0]}>
		<Heading as="h2" fontSize={["4xl", null, "5xl"]}>One Studymono<br /> Many Goals</Heading>
		<Text as="h2" fontSize={["md", null, "2xl"]} mt={[4]}>
			Practicing with Studymono will give you a broader understanding of the curriculum. This in turn will help you in WAEC, JAMB and school exams.
		</Text>
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