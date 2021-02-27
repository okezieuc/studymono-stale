import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Index = ({ dataschema }) => (
  <Box>
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
		
		<Link href="/blog/why-we-built-this">
			<a>Why we built this</a>
		</Link>
		
		<br />
		<Link href="/">
			<a>Home</a>
		</Link>
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
