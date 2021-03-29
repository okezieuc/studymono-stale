import {
  Link as ChakraLink,
	Box, Heading, Text,
	SimpleGrid,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { RecommendedReads, } from '../../components/RecommendedReads'
import { ExamPageInfo, } from '../../components/pastquestions/ExamPageInfo'
import { SubjectCard, } from '../../components/pastquestions/SubjectCard'
import { getRecommendedPosts } from '../../lib/api'

const Index = ({ subjects, recommendedPosts }) => (
  <Box>
	  	<NavBar />
		<Box m={[4, null, 20]}>
			<Heading fontSize={["4xl", null, "6xl"]} mb={[4, null, 8]}>
				JAMB
			</Heading>
			<ExamPageInfo />
		</Box>

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
		<RecommendedReads posts={recommendedPosts} />
		<Footer hideTop={true} />
	</Box>
)

export async function getStaticProps() {
	//const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}
	const dataschema = JSON.parse(process.env.DATASCHEMA) 
	const subjects = dataschema.subjects
	const recommendedPosts = getRecommendedPosts()
	return {
		props: {
			subjects,
			recommendedPosts,
		},
	}
}

export default Index
