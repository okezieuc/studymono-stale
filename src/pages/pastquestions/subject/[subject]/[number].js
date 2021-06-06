import {
	Box, Heading, Text, Container,
} from '@chakra-ui/react'
import Link from 'next/link'
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


const subjectQuestionQuery = (subject, page) => `*[_type == "pastquestion" && subject == "${subject.toUpperCase()}"]{
  _id,
  exam,
  subject,
  year,
  'prompt': prompt->prompt,
  question,
  optiona, optionb, optionc, optiond, optione,
} | order(_createdAt asc) [${4*(page-1)}...${4*(page)}]`

const pageCountQuery = (subject) => `count(*[_type == "pastquestion" && subject == "${subject.toUpperCase()}"])`



const Index = ({ dataschema, subjectdata, recommendedPosts, count }) => {
	const router = useRouter()
	const { subject, number } = router.query
	
	if (router.isFallback) {
    return <div>Loading...</div>
  }
	
	return(
  <Box>
		<NavBar />
		
		<Head>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css" integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc" crossorigin="anonymous"/>
			<title>{`Practice over 4 Years of ${dataschema.subjects[subject.toUpperCase()]} Questions from WAEC and JAMB` + ( parseInt(number) != 1 ? ` - Page ${number}` : "" )}</title>
			<meta property="og:title" content={`Practice over 4 Years of ${dataschema.subjects[subject.toUpperCase()]} Questions from WAEC and JAMB` + ( parseInt(number) != 1 ? ` - Page ${number}` : "" )} />
			<meta name="description" content={(parseInt(number) == 1 ? `Many see ${dataschema.subjects[subject.toUpperCase()]} as a tricky subject, but we're here to change it. After practicing these ${dataschema.subjects[subject.toUpperCase()]} questions from WAEC and JAMB, you should be ready to withstand any tensions these exams bring.` :
				`${dataschema.subjects[subject.toUpperCase()]} Page ${number}: ${blockToText(subjectdata[0].question)} a. ${blockToText(subjectdata[0].optiona)} b. ${blockToText(subjectdata[0].optionb)} c. ${blockToText(subjectdata[0].optionc)} d. ${blockToText(subjectdata[0].optiond)}`.slice(0,160))} />
			<meta property="og:description" content={(parseInt(number) == 1 ? `Many see ${dataschema.subjects[subject.toUpperCase()]} as a tricky subject, but we're here to change it. After practicing these ${dataschema.subjects[subject.toUpperCase()]} questions from WAEC and JAMB, you should be ready to withstand any tensions these exams bring.` :
				`${dataschema.subjects[subject.toUpperCase()]} Page ${number}: ${blockToText(subjectdata[0].question)} a. ${blockToText(subjectdata[0].optiona)} b. ${blockToText(subjectdata[0].optionb)} c. ${blockToText(subjectdata[0].optionc)} d. ${blockToText(subjectdata[0].optiond)}`.slice(0,160))} />
			<meta name="og:image" content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/categories/${subject.toLowerCase()}.png`} />
			{
				(parseInt(number) > 2) ? <meta name="robots" content="noindex" /> : ""
			}
			<link rel="canonical" href={`https://www.studymono.com/pastquestions/subject/${subject.toLowerCase()}/${number}`} />
			
			<meta
				name="twitter:title"
				content={`Practice over 4 Years of ${dataschema.subjects[subject.toUpperCase()]} Questions from WAEC and JAMB` + ( parseInt(number) != 1 ? ` - Page ${number}` : "" )}				
			/>
			<meta name="twitter:description" 
				content={(parseInt(number) == 1 ? `Many see ${dataschema.subjects[subject.toUpperCase()]} as a tricky subject, but we're here to change it. After practicing these ${dataschema.subjects[subject.toUpperCase()]} questions from WAEC and JAMB, you should be ready to withstand any tensions these exams bring.` :
				`${dataschema.subjects[subject.toUpperCase()]} Page ${number}: ${blockToText(subjectdata[0].question)} a. ${blockToText(subjectdata[0].optiona)} b. ${blockToText(subjectdata[0].optionb)} c. ${blockToText(subjectdata[0].optionc)} d. ${blockToText(subjectdata[0].optiond)}`.slice(0,160))} 
			/>
			<meta name="twitter:image" content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/categories/${subject.toLowerCase()}.png`} />
		</Head>
		
		<Box bg="tint.200" pt={[12, null, 20]} pb={[32, null, 64]}
			mb={[-24, null, -48]}>
			<Container maxW={["2xl",null, "5xl"]} >				
				<Heading fontSize={["4xl", "5xl", "6xl"]}>
					{dataschema.subjects[subject.toUpperCase()]}
				</Heading>
				<Text fontSize={["sm", null, "md"]}>
					{(parseInt(number) == 1) ? `Many see ${dataschema.subjects[subject.toUpperCase()]} as a tricky subject, but we're here to change it. After practicing these ${dataschema.subjects[subject.toUpperCase()]} questions from WAEC and JAMB, you should be ready to withstand any tensions these exams bring.` : ""}
				</Text>		
				<Text fontSize={["sm", null, "md"]}>
					Page {number}
				</Text>				
			</Container>
		</Box>
		
		<Container maxW={["2xl",null, "5xl"]} mb={[4, null, 40]}>
			{					
				subjectdata.map((question) => (
						<QuestionCard questionid={question._id} data={question} />
					)
				)
			}
			
			<PaginationLink prefix={`/pastquestions/subject/${subject.toLowerCase()}/`} 
				mt={12} mb={24} current={parseInt(number)} total={Math.floor((count-1)/4)+1} />
		</Container>
	
		<RecommendedReads posts={recommendedPosts} />
		<Footer hideTop={true} />
	</Box>
)}

const Question = ({questionid, data}) => {
	return (<Box mb="2" p="2">
		<Text>
			{data.question.iv}
		</Text>
		
			<Text>a. {data.optiona.iv}</Text>
		
		<Text>b. {data.optionb.iv}</Text>
		<Text>c. {data.optionc.iv}</Text>
		<Text>d. {data.optiond.iv}</Text>
		<Link href={`/pastquestions/${questionid}`}>
		 Expand question
		</Link>
	</Box>)
}

export async function getStaticPaths() {
	let paths = []
	const dataschema = JSON.parse(process.env.DATASCHEMA)
	
	for (let num=0; num<Object.keys(dataschema.subjects).length; num++) {
		const subject = Object.keys(dataschema.subjects)[num]
		const count = await sanity.fetch(pageCountQuery(subject))
		const pageCount = Math.floor((count-1)/4) + 1
		for(let i=0; i<pageCount; i++) {
			paths.push({ params: { subject: subject.toLowerCase(), number: String(i+1) } })
		}
	}
	
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const subject = params.subject
	const page = params.number
	const subjectdata = await sanity.fetch(subjectQuestionQuery(subject, page))
	const count = await sanity.fetch(pageCountQuery(subject))
	
	
	const dataschema = JSON.parse(process.env.DATASCHEMA)
	const recommendedPosts = getRecommendedPosts()

	return {
		props: {
			dataschema,
			subjectdata,
			count,
			recommendedPosts,
		}
	}
}

export default Index
