import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { RecommendedReads, } from '../../components/RecommendedReads'
import { ExamPageInfo, } from '../../components/pastquestions/ExamPageInfo'

const Index = ({ subjects }) => (
  <Box>
	  	<NavBar />
		<Box m={[4, null, 20]}>
			<Heading fontSize={["4xl", null, "6xl"]} mb={[4, null, 8]}>
				JAMB
			</Heading>
			<ExamPageInfo />
		</Box>
		
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
		<RecommendedReads />
		<Footer hideTop={true} />
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
