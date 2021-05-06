import {
  Link as ChakraLink,
	Box, Heading, Text, Container,
	SimpleGrid,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Head from 'next/head'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { RecommendedReads, } from '../../components/RecommendedReads'
import { ExamPageInfo, } from '../../components/pastquestions/ExamPageInfo'
import { SubjectCard, } from '../../components/pastquestions/SubjectCard'
import { Credits, } from '../../components/pastquestions/Credits'
import { getRecommendedPosts } from '../../lib/api'

const Index = ({ subjects, recommendedPosts }) => (
  <Box>
		<Head>
			<title>Practice with actual WAEC Past Questions for Free on StudyMono</title>
			<meta name="description" content="Because solving WAEC past questions is a great way to prepare for the main exam in August, we made a library of real WAEC past questions in Physics, Chemistry, Biology, and other subjects." />
			<meta property="og:title" content="Practice with actual WAEC Past Questions for Free on StudyMono" />
			<meta property="og:description" content="Because solving WAEC past questions is a great way to prepare for the main exam in August, we made a library of real WAEC past questions in Physics, Chemistry, Biology, and other subjects." />			
			<link rel="canonical" href="https://www.studymono.com/pastquestions/waec" />
		</Head>
	 	<NavBar />

		<Box bg="tint.200" pt={[12, null, 20]} pb={[20, null, 40]}>
			<Container maxW={["2xl", null, "5xl"]} >
				<Heading fontSize={["3xl", "4xl", "6xl"]} mb={[4, null, 8]} color="tint.700">
					WAEC
				</Heading>
				<ExamPageInfo
					text="Because solving WAEC past questions is a great way to prepare for the main exam in August, we made a library of real WAEC past questions in Physics, Chemistry, Biology, and other subjects."
				/>
			</Container>
		</Box>

		<Container maxW={["2xl", null, "5xl"]} mb={[20, null, 40]} >
		<Heading as="h3" mb={4} color="tint.600" fontSize={["lg", "xl", "3xl"]} mt={[12, null, 24]}>Subjects</Heading>
		<SimpleGrid columns={[2, null, 3]} gap={[4, null, 12]}>
			<SubjectCard exam="waec" subject="Physics" slug="/pastquestions/waec/phy/1" code="phy" />
			<SubjectCard exam="waec" subject="Chemistry" slug="/pastquestions/waec/chem/1" code="chem" />			
			<SubjectCard exam="waec" subject="Biology" slug="/pastquestions/waec/bio/1" code="bio"
				gridColumn={["span 2", null, "span 1"]} />			
		</SimpleGrid>
		<SimpleGrid columns={[2, null, 4]} gap={[4, null, 12]} mt={[4, null, 12]}
			mb={[8, null, 28]}>
			{
				Object.keys(subjects).map((key) => (<>
					{
						(key != "PHY" && key != "CHEM" && key != "BIO") ? <SubjectCard exam="waec" subject={subjects[key]} code={key.toLowerCase()}
							slug={`/pastquestions/waec/${key.toLowerCase()}/1`} subtitle="Sample Subtitle" /> : ''
					}
					</>)
				)
			}
		</SimpleGrid>
		<Credits />
		</Container>
		
		
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
