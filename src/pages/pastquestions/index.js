import {
	Link as ChakraLink,
	Box, Heading, Text,
	SimpleGrid, Container,
	
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
		<Box bg="tint.200" pt={[12, null, 20]} pb={[20, null, 40]}>
			<Container maxW="5xl" >
				<BigAd />

				<Heading as="h3" mb={4} fontSize={["md", null, "3xl"]} color="tint.600">Exams</Heading>
				<SimpleGrid columns={[2, null, 3]} gap={[4, null, 12]}>
					{
						Object.keys(dataschema.exams).map((key) => (
							<ExamCard exam={key} slug={key.toLowerCase()} />)
						)
					}
				</SimpleGrid>
			</Container>
		</Box>
		<Container maxW="5xl" mb={[20, null, 40]} >
		<Heading as="h3" mb={4} fontSize={["md", null, "3xl"]} mt={[12, null, 24]} color="tint.600">Subjects</Heading>
		<SimpleGrid columns={[2, null, 3]} gap={[4, null, 12]}>
			<SubjectCard subject="Physics" slug="/pastquestions/subject/phy/1" />
			<SubjectCard subject="Chemistry" slug="/pastquestions/subject/chem/1" />			
			<SubjectCard subject="Biology" slug="/pastquestions/subject/bio/1"
				gridColumn={["span 2", null, "span 1"]} />			
		</SimpleGrid>
		<SimpleGrid columns={[2, null, 4]} gap={[4, null, 12]} mt={[4, null, 12]}
			mb={[8, null, 28]}>
			{
				Object.keys(dataschema.subjects).map((key) => (<>
					{
						(key != "PHY" && key != "CHEM" && key != "BIO") ? <SubjectCard subject={dataschema.subjects[key]} 
							slug={`/pastquestions/subject/${key.toLowerCase()}/1`} subtitle="Sample Subtitle" /> : ''
					}
					</>)
				)
			}
		</SimpleGrid>
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
