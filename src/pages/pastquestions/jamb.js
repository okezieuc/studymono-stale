import {
	Box, Heading, Container,
	SimpleGrid,
} from '@chakra-ui/react'
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
			<title>Practice with actual JAMB Past Questions for Free on StudyMono</title>
			<meta name="description" content="Because solving JAMB past questions is a great way to prepare for the CBT in June, we made a library of real JAMB past questions in Physics, Chemistry, Biology, and other subjects." />
			<meta property="og:title" content="Practice with actual JAMB Past Questions for Free on StudyMono" />
			<meta property="og:description" content="Because solving JAMB past questions is a great way to prepare for the CBT in June, we made a library of real JAMB past questions in Physics, Chemistry, Biology, and other subjects." />			
			<meta name="og:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/jamb-past-questions-cover-image_mmj6w7.png" />
			<link rel="canonical" href="https://www.studymono.com/pastquestions/jamb" />
			
			<meta name="twitter:title" content="Practice with actual JAMB Past Questions for Free on StudyMono" />
			<meta name="twitter:description" content="Because solving JAMB past questions is a great way to prepare for the CBT in June, we made a library of real JAMB past questions in Physics, Chemistry, Biology, and other subjects." />
			<meta name="twitter:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/jamb-past-questions-cover-image_mmj6w7.png" />
		</Head>
	  <NavBar />

		<Box bg="tint.200" pt={[12, null, 20]} pb={[20, null, 40]}>
			<Container maxW={["2xl", null, "5xl"]} >
				<Heading fontSize={["3xl", "4xl", "6xl"]} mb={[4, null, 8]} color="tint.700">
					JAMB
				</Heading>
				<ExamPageInfo 
					text="Because solving JAMB past questions is a great way to prepare for the CBT in June, we made a library of real JAMB past questions in Physics, Chemistry, Biology, and other subjects."
				/>
			</Container>
		</Box>

		<Container maxW={["2xl", null, "5xl"]} mb={[20, null, 40]} >
		<Heading as="h3" mb={4} color="tint.600" fontSize={["lg", "xl", "3xl"]} mt={[12, null, 24]}>Subjects</Heading>
		<SimpleGrid columns={[2, null, 3]} gap={[4, null, 12]}>
			<SubjectCard exam="jamb" subject="Physics" slug="/pastquestions/jamb/phy/1" code="phy" />
			<SubjectCard exam="jamb" subject="Chemistry" slug="/pastquestions/jamb/chem/1" code="chem" />			
			<SubjectCard exam="jamb" subject="Biology" slug="/pastquestions/jamb/bio/1" code="bio"
				gridColumn={["span 2", null, "span 1"]} />			
		</SimpleGrid>
		<SimpleGrid columns={[2, null, 4]} gap={[4, null, 12]} mt={[4, null, 12]}
			mb={[8, null, 28]}>
			{
				Object.keys(subjects).map((key) => (<>
					{
						(key != "PHY" && key != "CHEM" && key != "BIO") ? <SubjectCard exam="jamb" subject={subjects[key]} code={key.toLowerCase()}
							slug={`/pastquestions/jamb/${key.toLowerCase()}/1`} subtitle="Sample Subtitle" /> : ''
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
