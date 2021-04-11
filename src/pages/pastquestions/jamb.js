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
import { getRecommendedPosts } from '../../lib/api'

const Index = ({ subjects, recommendedPosts }) => (
  <Box>
		<Head>
			<title>Sample Product Heading - we offer this and offer that too!</title>
			<meta name="description" content="This is a sample description for this page" />
			<meta property="og:title" content="Sample Product Heading - we offer this and offer that too!" />
			<meta property="og:description" content="This is a sample description for this page" />			
		</Head>
	  <NavBar />

		<Box bg="tint.200" pt={[12, null, 20]} pb={[20, null, 40]}>
			<Container maxW={["2xl", null, "5xl"]} >
				<Heading fontSize={["3xl", "4xl", "6xl"]} mb={[4, null, 8]} color="tint.700">
					JAMB
				</Heading>
				<ExamPageInfo />
			</Container>
		</Box>

		<Container maxW={["2xl", null, "5xl"]} mb={[20, null, 40]} >
		<Heading as="h3" mb={4} color="tint.600" fontSize={["lg", "xl", "3xl"]} mt={[12, null, 24]}>Subjects</Heading>
		<SimpleGrid columns={[2, null, 3]} gap={[4, null, 12]}>
			<SubjectCard subject="Physics" slug="/pastquestions/jamb/phy/1" code="phy" />
			<SubjectCard subject="Chemistry" slug="/pastquestions/jamb/chem/1" code="chem" />			
			<SubjectCard subject="Biology" slug="/pastquestions/jamb/bio/1" code="bio"
				gridColumn={["span 2", null, "span 1"]} />			
		</SimpleGrid>
		<SimpleGrid columns={[2, null, 4]} gap={[4, null, 12]} mt={[4, null, 12]}
			mb={[8, null, 28]}>
			{
				Object.keys(subjects).map((key) => (<>
					{
						(key != "PHY" && key != "CHEM" && key != "BIO") ? <SubjectCard subject={subjects[key]} code={key.toLowerCase()}
							slug={`/pastquestions/jamb/${key.toLowerCase()}/1`} subtitle="Sample Subtitle" /> : ''
					}
					</>)
				)
			}
		</SimpleGrid>
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
