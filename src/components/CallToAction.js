import { Box, Flex, Spacer, Text, Container, } from '@chakra-ui/react'
import Link from 'next/link'


export const CallToAction = () => <Box bg="brand" py={[3, 8, 12]}>
		<Container 
			maxW={["2xl", null, "5xl"]}>
		<Text
			color="white"
			fontSize={["lg", "3xl", "4xl"]}>
			We're building the revolutionary educational platform for Nigerian students
		</Text>
		<Box 
			bg="white" borderRadius="1em"
			px="1em" py="0.5em" w="max-content" mt={2}
			maxW="100%">
				<a>
					Newsletter starts September ending
				</a>
		</Box>
	</Container>
</Box>

/*
export const CallToAction = () => <Flex bg="#4715be" px={[3, 8, 12]} 
	py={[8, null, 12]} alignItems={["left", null, "center"]}
	boxShadow="0px 0px 4px 0px" direction={["column", null, "row"]}>
	<Container maxW={["2xl", null, "5xl"]}>
	<Text color="white" fontSize={["lg", "3xl", "3xl"]}
		 maxW={["100%", null, "00px"]}>
		Preparing for WAEC and JAMB? Study with our Catalog of Past Questions.
	</Text>
	<Spacer />
	<Box mt={[4, null, 0]}>
		<Box bg="white" color="#4715be" fontSize={["md", "md", "2xl"]}
			width="fit-content" py={["1", "2", "2"]} px={["2", "4", "5"]} height="fit-content"
			fontWeight={["bold", null, "bold"]}
		>
			<Link href="/pastquestions">
				<a className="umami--click--footer-cta">
					Get Started
				</a>
			</Link>
		</Box>
		<Text textAlign={["left", null, "center"]} fontSize={["xs", "md", "lg"]}
			mt={[null, 1, "1"]} color="white">It's free</Text>
	</Box>
	</Container>
</Flex>
*/