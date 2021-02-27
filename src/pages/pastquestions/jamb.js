import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Index = ({ subjects }) => (
  <Box>
		<Heading fontSize="6xl">
			JAMB
		</Heading>
		<Text fontSize="3xl">
			JAMB past questions
		</Text>
		
		<Text fontSize="2xl" fontWeight="bold">
			Subjects
		</Text>
		{
			Object.keys(subjects).map((key) => (<>
				<Link href={`/pastquestions/jamb/${key.toLowerCase()}/1`} key={key}>
					<a>{subjects[key]}</a>
				</Link><br /></>)
			)
		}
		{/*
		<Link href="/pastquestions/waec/math/1">
			<a>Mathematics</a>
		</Link>
		<br />
		<Link href="/pastquestions/waec/phy/1">
			<a>Physics</a>
		</Link>
		<br />
		*/}
		
		
	
		<br />
		<Link href="/">
			<a>Home</a>
		</Link>
	</Box>
)

export async function getStaticProps() {
	//const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}
	const dataschema = JSON.parse(process.env.DATASCHEMA) 
	const subjects = dataschema.subjects
	return {
		props: {
			subjects
		},
	}
}

export default Index
