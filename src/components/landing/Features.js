import { Box, Heading, Text, Stack,
	Flex, Container, } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const Feature = ({ data }) => (<Box mt={[8,null, 20]} mb={[12, null, 32]}> 
	<Flex align="center">
		<Box w={[32, null, 80]} h={[32, null, 80]} position="relative">
			<Image
				src={data.image}
				alt="Sample feature cover"
				layout="fill"
				objectFit="scale-down"
			/>
		</Box>
		<Box flex="1" ml={[4, null, 12]}>
			<Text fontSize={["xl", null, "4xl"]} fontWeight="bold">{ data.heading }</Text>
			<Text fontSize={["sm", null, "2xl"]}>
				{ data.body }
			</Text>
		</Box>
	</Flex>
</Box>)

export const Features = ({ features, }) => (<Box pt={[20, null, "120px"]}>
	<Box  maxW={["800px"]} m="0 auto" textAlign="center" px={[4, null, 0]}>
		<Heading as="h2" fontSize={["4xl", null, "5xl"]} >Why Studymono?</Heading>
		<Text as="h2" fontSize={["lg", null, "2xl"]} mt={[4]}>A smaller subtitle text will also follow below the large heading. Lorem ipsum dit olres vrum. It should almost be two lines long</Text>
	</Box>
	<Container maxW={["5xl"]}>
		<Feature data={features[0]} />
		<Feature data={features[1]} />
		<Feature data={features[2]} />
	</Container>
</Box>)

Features.defaultProps = {
	features: [
		{
			image: "/cover.jpg",
			heading: "We do this!",
			body: "Here is a long explanation for this stuff that we say that we do. We go on to say even more about it here. Lorem isum dot olres, bla, bla."
		},
		{
			image: "/pattern.jpg",
			heading: "We do that!",
			body: "Here is a long explanation for this stuff that we say that we do. We go on to say even more about it here. Lorem isum dot olres, bla, bla."
		},
		{
			image: "/cover.jpg",
			heading: "We do this!",
			body: "Here is a long explanation for this stuff that we say that we do. We go on to say even more about it here. Lorem isum dot olres, bla, bla."
		},
	]
}