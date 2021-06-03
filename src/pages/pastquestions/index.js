import {
	Link as ChakraLink,
	Box, Heading, Text,
	SimpleGrid, Container,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Head from 'next/head'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { CallToAction, } from '../../components/CallToAction'
import { BigAd, } from '../../components/pastquestions/BigAd'
import { ExamCard, } from '../../components/pastquestions/ExamCard'
import { SubjectCard, } from '../../components/pastquestions/SubjectCard'
import { QuestionCard, } from '../../components/pastquestions/QuestionCard'
import { Credits, } from '../../components/pastquestions/Credits'
import Image from 'next/image'

const Index = ({ dataschema }) => (
  <Box>
		<Head>
			<title>StudyMono WAEC and JAMB Past Question Collection</title>
			<meta name="description" content="We strive to bring WAEC and JAMB past questions to your screens. Here are freely provided past questions on Mathematics, Physics, Chemistry, and other subjects from over four years." />
			<meta property="og:title" content="StudyMono WAEC and JAMB Past Question Collection" />
			<meta property="og:description" content="We strive to bring WAEC and JAMB past questions to your screens. Here are freely provided past questions on Mathematics, Physics, Chemistry, and other subjects from over four years." />			
			<link rel="canonical" href="https://www.studymono.com/pastquestions" />
			
			<meta name="twitter:title" content="StudyMono WAEC and JAMB Past Question Collection" />
			<meta name="twitter:description" content="We strive to bring WAEC and JAMB past questions to your screens. Here are freely provided past questions on Mathematics, Physics, Chemistry, and other subjects from over four years." />
			<meta name="twitter:image" content="https://www.studymono.com/cover.png" />
			{/*Create an Image for this page*/}
		</Head>
  	<NavBar />
		<Box bg="tint.200" pt={[12, null, 20]} pb={[20, null, 40]}>
			<Container maxW={["2xl", null, "5xl"]} >
				<Heading fontSize={["3xl", "4xl", "5xl"]} as="h1"
					>Free WAEC and JAMB Past Questions</Heading>
				<Text mb={[12, 16, 20]} fontSize={["md", "lg", "xl"]}>
					We strive to bring WAEC and JAMB past questions to your screens. Here are freely provided past questions on Mathematics, Physics, Chemistry, and other subjects from over four years.
				</Text>
				
				<Heading as="h3" mb={4} fontSize={["md", "xl", "3xl"]} color="tint.600">Exams</Heading>
				<SimpleGrid columns={[2, 3]} gap={[4, null, 12]}>
					{
						Object.keys(dataschema.exams).map((key) => (
							<ExamCard exam={key} slug={key.toLowerCase()} />)
						)
					}
				</SimpleGrid>
			</Container>
		</Box>
		<Container maxW={["2xl", null, "5xl"]} mb={[20, null, 40]} >
		<Heading as="h3" mb={4} fontSize={["md", "xl", "3xl"]} mt={[12, null, 24]} color="tint.600">Subjects</Heading>
		<SimpleGrid columns={[2, null, 3]} gap={[4, null, 12]}>
			<SubjectCard subject="Physics" slug="/pastquestions/subject/phy/1" code="phy" />
			<SubjectCard subject="Chemistry" slug="/pastquestions/subject/chem/1" code="chem" />			
			<SubjectCard subject="Biology" slug="/pastquestions/subject/bio/1" code="bio"
				gridColumn={["span 2", null, "span 1"]} />			
		</SimpleGrid>
		<SimpleGrid columns={[2, null, 4]} gap={[4, null, 12]} mt={[4, null, 12]}
			mb={[8, null, 28]}>
			{
				Object.keys(dataschema.subjects).map((key) => (<>
					{
						(key != "PHY" && key != "CHEM" && key != "BIO") ? <SubjectCard subject={dataschema.subjects[key]} 
							slug={`/pastquestions/subject/${key.toLowerCase()}/1`} subtitle="Sample Subtitle" code={key.toLowerCase()} /> : ''
					}
					</>)
				)
			}
		</SimpleGrid>
		<Credits />
		</Container>
		<Footer />
	</Box>
)

export async function getStaticProps() {
	//const dataschema = ...
	//const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}
	const dataschema = JSON.parse(process.env.DATASCHEMA) 
	return {
		props: {
			dataschema,
		},
	}
}

export default Index
