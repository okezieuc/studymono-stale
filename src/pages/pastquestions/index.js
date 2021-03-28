import {
	Link as ChakraLink,
	Box, Heading, Text,
	SimpleGrid
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { CallToAction, } from '../../components/CallToAction'
import { BigAd, } from '../../components/pastquestions/BigAd'
import { ExamCard, } from '../../components/pastquestions/ExamCard'
import { SubjectCard, } from '../../components/pastquestions/SubjectCard'
import { QuestionCard, } from '../../components/pastquestions/QuestionCard'

const Index = ({ dataschema }) => (
  <Box>
	  	<NavBar />
		
		<QuestionCard />

		<BigAd />
		<Heading as="h3" mx={[4, null,20]} mb={4} fontSize={["lg", null, "3xl"]}>Exams</Heading>
		<SimpleGrid columns={[2, null, 3]} gap={[4, null, 12]} mx={[4, null,20]}>
			<ExamCard />
			<ExamCard />
		</SimpleGrid>
		
		<Heading as="h3" mx={[4, null,20]} mb={4} fontSize={["lg", null, "3xl"]} mt={[12, null, 24]}>Subjects</Heading>
		<SimpleGrid columns={[2, null, 2]} gap={[4, null, 12]} mx={[4, null,20]}>
			<SubjectCard />
			<SubjectCard />
		</SimpleGrid>
		<SimpleGrid columns={[3, null, 3]} gap={[4, null, 12]} mt={[4, null, 12]} mx={[4, null,20]}>
			<SubjectCard />
			<SubjectCard />
			<SubjectCard />
		</SimpleGrid>

		<Heading fontSize="6xl">
			Past Questions
		</Heading>
		<Text fontSize="3xl">
			Free pastquestions from studymono
		</Text>
		
		
		<Text fontSize="2xl" fontWeight="bold">
			Exams
		</Text>
		{
			Object.keys(dataschema.exams).map((key) => (<>
				<Link href={`/pastquestions/${key.toLowerCase()}`} key={key}>
					<a>{key}</a>
				</Link><br /></>)
			)
		}
		
		{/*
		<Link href="/pastquestions/waec">
			<a>WAEC</a>
		</Link>
		<br />
		<Link href="/pastquestions/waec">
			<a>JAMB</a>
		</Link>
		<br />
		*/}
		
		<Text fontSize="2xl" fontWeight="bold">
			Subjects
		</Text>
		
		{
			Object.keys(dataschema.subjects).map((key) => (<>
				<Link href={`/pastquestions/subject/${key.toLowerCase()}/1`} key={key}>
					<a>{dataschema.subjects[key]}</a>
				</Link><br /></>)
			)
		}
		{/*
		<Link href="/pastquestions/subject/math/1">
			<a>Mathematics</a>
		</Link>
		<br />
		<Link href="/pastquestions/subject/math/1">
			<a>Physics</a>
		</Link>
		<br />
		*/}
		<br />
		
		<Link href="/blog/dynamic-routing">
			<a>Why we built this</a>
		</Link>
		
		<br />
		<Link href="/">
			<a>Home</a>
		</Link>
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
