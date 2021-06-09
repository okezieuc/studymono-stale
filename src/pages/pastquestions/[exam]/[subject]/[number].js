import {
	Box, Heading, Text, Container,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NavBar, } from '../../../../components/NavBar'
import { Footer, } from '../../../../components/Footer'
import { RecommendedReads, } from '../../../../components/RecommendedReads'
import { QuestionCard, } from '../../../../components/pastquestions/QuestionCard'
import { getRecommendedPosts } from '../../../../lib/api'
import { PaginationLink } from '../../../../components/pastquestions/PaginationLink'
import blockToText from "../../../../lib/blockToText";
import sanity from "../../../../lib/sanity";

const examSubjectQuestionQuery = (subject, exam, page) => `*[_type == "pastquestion" && subject == "${subject.toUpperCase()}" && exam == "${exam.toUpperCase()}"]{
  _id,
  exam,
  subject,
  year,
  'prompt': prompt->prompt,
  question,
  optiona, optionb, optionc, optiond, optione,
} | order(_createdAt asc) [${4*(page-1)}...${4*(page)}]`

const pageCountQuery = (subject, exam) => `count(*[_type == "pastquestion" && subject == "${subject.toUpperCase()}" && exam == "${exam.toUpperCase()}"])`

const Index = ({ dataschema, examsubjectdata, recommendedPosts, count, }) => {
	const router = useRouter()
	const { exam, subject, number } = router.query
	
	if (router.isFallback) {
    return <div>Loading...</div>
  }
	
	return(

  <Box>
		<Head>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css" integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc" crossorigin="anonymous"/>
			
			<title>{`${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} Past Questions from StudyMono` +  ( parseInt(number) != 1 ? ` - Page ${number}` : "" )}</title>
			<meta name="description" content={(parseInt(number) == 1 ? 
					`As ${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} ${exam.toLowerCase()=="waec" ? "papers are" : "CBT is" } fast approaching, solving past questions is a big plus. Take advantage of our over 4 years of ${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} questions to prepare.` :
				`${dataschema.subjects[subject.toUpperCase()]} Page ${number}: ${blockToText(examsubjectdata[0].question)} a. ${blockToText(examsubjectdata[0].optiona)} b. ${blockToText(examsubjectdata[0].optionb)} c. ${blockToText(examsubjectdata[0].optionc)} d. ${blockToText(examsubjectdata[0].optiond)}`.slice(0,160))} />
			<meta property="og:title" content={`${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} Past Questions from StudyMono` +  ( parseInt(number) != 1 ? ` - Page ${number}` : "" )} />
			<meta property="og:description" content={(parseInt(number) == 1 ? 
					`As ${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} ${exam.toLowerCase()=="waec" ? "papers are" : "CBT is" } fast approaching, solving past questions is a big plus. Take advantage of our over 4 years of ${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} questions to prepare.` :
				`${dataschema.subjects[subject.toUpperCase()]} Page ${number}: ${blockToText(examsubjectdata[0].question)} a. ${blockToText(examsubjectdata[0].optiona)} b. ${blockToText(examsubjectdata[0].optionb)} c. ${blockToText(examsubjectdata[0].optionc)} d. ${blockToText(examsubjectdata[0].optiond)}`.slice(0,160))} />			
			<meta name="og:image" content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/categories/${subject.toLowerCase()}.png`} />
			{
				(parseInt(number) > 2) ? <meta name="robots" content="noindex" /> : ""
			}
			<link rel="canonical" href={`https://www.studymono.com/pastquestions/${exam.toLowerCase()}/${subject.toLowerCase()}/${number}`} />
			
			<meta 
				name="twitter:title" 
				content={`${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} Past Questions from StudyMono` +  ( parseInt(number) != 1 ? ` - Page ${number}` : "" )} 
			/>
			<meta 
				name="twitter:description"
				content={(parseInt(number) == 1 ? 
					`As ${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} ${exam.toLowerCase()=="waec" ? "papers are" : "CBT is" } fast approaching, solving past questions is a big plus. Take advantage of our over 4 years of ${dataschema.exams[exam.toUpperCase()]} ${dataschema.subjects[subject.toUpperCase()]} questions to prepare.` :
				`${dataschema.subjects[subject.toUpperCase()]} Page ${number}: ${blockToText(examsubjectdata[0].question)} a. ${blockToText(examsubjectdata[0].optiona)} b. ${blockToText(examsubjectdata[0].optionb)} c. ${blockToText(examsubjectdata[0].optionc)} d. ${blockToText(examsubjectdata[0].optiond)}`.slice(0,160))}
			/>
			<meta name="twitter:image" content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/categories/${subject.toLowerCase()}.png`} />
		</Head>
		<NavBar />
		
		<Box bg="tint.200" pt={[12, null, 20]} pb={[32, null, 64]}
			mb={[-24, null, -48]}>
			<Container maxW={["2xl",null, "5xl"]} >									
				<Heading fontSize={["4xl", "5xl", "6xl"]}>
					{dataschema.exams[exam.toUpperCase()]} {dataschema.subjects[subject.toUpperCase()]}
				</Heading>
				<Text fontSize={["sm", null, "md"]}>
					Page {number}
				</Text>
			</Container>
		</Box>
		
		<Container maxW={["2xl",null, "5xl"]} mb={[4, null, 40]}>
			{		
				examsubjectdata.map((question) => (
						<QuestionCard questionid={question._id} data={question} />
					)
				)				
			}
		
			<PaginationLink prefix={`/pastquestions/${exam.toLowerCase()}/${subject.toLowerCase()}/`}
				mt={12} mb={24} current={parseInt(number)} total={Math.floor((count-1)/4)+1} />
		</Container>

		<RecommendedReads posts={recommendedPosts} />
		<Footer hideTop={true} />
	</Box>
)}

export async function getStaticPaths() {
	let paths = []
	
	const dataschema = JSON.parse(process.env.DATASCHEMA)
	for(let num=0; num<Object.keys(dataschema.exams).length; num++) {
		const exam = Object.keys(dataschema.exams)[num]
		for (let subnum=0; subnum<Object.keys(dataschema.subjects).length; subnum++) {
			const subject = Object.keys(dataschema.subjects)[subnum]
			const count = await sanity.fetch(pageCountQuery(subject, exam))
			const pageCount = Math.floor((count-1)/4) + 1
			for(let i=0; i<pageCount; i++) {
				paths.push({ params: { exam: exam.toLowerCase(), subject: subject.toLowerCase(), number: String(i+1) } })
			}
		}
		
	}
	
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const dataschema = JSON.parse(process.env.DATASCHEMA)
	const exam = params.exam
	const subject = params.subject
	const page = params.number
	const examsubjectdata = await sanity.fetch(examSubjectQuestionQuery(subject, exam, page))
	const count = await sanity.fetch(pageCountQuery(subject, exam))
	const recommendedPosts = getRecommendedPosts()

	return {
		props: {
			dataschema,
			examsubjectdata,
			exam,
			subject,
			recommendedPosts,
			count,
		}
	}
}

export default Index
