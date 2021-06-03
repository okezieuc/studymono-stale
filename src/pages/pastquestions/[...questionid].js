import {
  Link as ChakraLink,
	Box, Heading, Text,
	Flex, Container, Spacer,
	LinkBox, LinkOverlay,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NavBar, } from '../../components/NavBar'
import { Footer, } from '../../components/Footer'
import { RecommendedReads, } from '../../components/RecommendedReads'
import { AnswerCard, } from '../../components/pastquestions/AnswerCard'
import { getRecommendedPosts } from '../../lib/api'
import blockToText from "../../lib/blockToText";

import sanity from "../../lib/sanity";
import BlockContent from "../../components/pastquestions/BlockContent";
import KaTeX from 'katex';


const questionQuery = (id) => `*[_type == "pastquestion" && _id == "${id}"]{
  _id,
  exam,
  subject,
  year,
  'prompt': prompt->prompt,
  question,
  optiona, optionb, optionc, optiond, optione,
}`

const questionIdQuery = () => `*[_type == "pastquestion" ]._id`

const similarQuestionIdQuery = (exam, subject, year) => `*[_type == "pastquestion" && exam == "${exam}" && subject == "${subject}" && year == ${year}]._id | order(_createdAt asc)`

const Index = ({ questiondata, otherdata, questionid, dataschema, recommendedPosts }) => {
	const router = useRouter()
	//const { questionid } = router.query
	
	if (router.isFallback) {
    return <div>Loading...</div>
  }
	
	return(
  <Box>
		<Head>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css" integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc" crossorigin="anonymous"/>
			
			
			<title>{`${dataschema.exams[questiondata.exam.toUpperCase()]} ${dataschema.subjects[questiondata.subject.toUpperCase()]} - ${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""}`.slice(0, 120) } </title>
			<meta property="og:title" content={`${dataschema.exams[questiondata.exam.toUpperCase()]} ${dataschema.subjects[questiondata.subject.toUpperCase()]} - ${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""}`.slice(0, 120) } />
			<meta name="description" content={`${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""} a. ${blockToText(questiondata.optiona)} b. ${blockToText(questiondata.optionb)} c. ${blockToText(questiondata.optionc)} d. ${blockToText(questiondata.optiond)}`.slice(0,160)} />
			<meta property="og:description" content={`${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""} a. ${blockToText(questiondata.optiona)} b. ${blockToText(questiondata.optionb)} c. ${blockToText(questiondata.optionc)} d. ${blockToText(questiondata.optiond)}`.slice(0,160)} />			
			<meta name="og:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/past-questions-cover-image_z13zcz.png" />
			<link rel="canonical" href={`https://www.studymono.com/pastquestions/${questionid}`} />
			{/*
			<meta name="description" content={`${questiondata.question.iv}${!!questiondata.prompt ? ((questiondata.prompt.iv != null) ? (" - " + questiondata.prompt.iv) : "") : ""} a. ${questiondata.optiona.iv} b. ${questiondata.optionb.iv} c. ${questiondata.optionc.iv} d. ${questiondata.optiond.iv}`.slice(0,160)} />
			<meta property="og:title" content={`${dataschema.exams[questiondata.exam.iv.toUpperCase()]} ${dataschema.subjects[questiondata.subject.iv.toUpperCase()]} - ${questiondata.question.iv}${!!questiondata.prompt ? ((questiondata.prompt.iv != null) ? (" - " + questiondata.prompt.iv) : "") : ""}`.slice(0, 120) } />
			<meta property="og:description" content={`${questiondata.question.iv}${!!questiondata.prompt ? ((questiondata.prompt.iv != null) ? (" - " + questiondata.prompt.iv) : "") : ""} a. ${questiondata.optiona.iv} b. ${questiondata.optionb.iv} c. ${questiondata.optionc.iv} d. ${questiondata.optiond.iv}`.slice(0,160)} />			
			<link rel="canonical" href={`https://www.studymono.com/pastquestions/${questionid}`} />
			*/}
			
			<meta name="twitter:title" content={`${dataschema.exams[questiondata.exam.toUpperCase()]} ${dataschema.subjects[questiondata.subject.toUpperCase()]} - ${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""}`.slice(0, 120) } />
			<meta name="twitter:description" content={`${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""} a. ${blockToText(questiondata.optiona)} b. ${blockToText(questiondata.optionb)} c. ${blockToText(questiondata.optionc)} d. ${blockToText(questiondata.optiond)}`.slice(0,160)} />
			<meta name="twitter:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/past-questions-cover-image_z13zcz.png" />
		</Head>
		<NavBar />
		
		<Box bg="tint.200" pt={[12, null, 20]}>
			<Container maxW={["2xl",null,"5xl"]} >
				<Heading fontSize={["xs", "md", "xl"]} fontWeight="bold" as="p" mb={[4]}>
					{ dataschema.exams[questiondata.exam.toUpperCase()] } { questiondata.year } { dataschema.subjects[questiondata.subject.toUpperCase()] }
				</Heading>
				<Question questionid={questionid} data={questiondata} />
				<Navigation otherdata={otherdata} />
				<Box w="100%" h="1px" bg="tint.300" mt={24} ></Box>
			</Container>
		</Box>
		
		{/*
		
		mb={[12, null, 32]}
		
		<Box pt={[12, null, 20]} mb={[12, null, 20]}>
			<Container maxW={["2xl", null, "5xl"]}>
				<Heading as="h3" fontSize={["2xl", null, "3xl"]}>More from { dataschema.exams[questiondata.exam.toUpperCase()] } { questiondata.year } { dataschema.subjects[questiondata.subject.toUpperCase()] }</Heading>
			
					
						otherdata.map((otherquestion) => (<>
							{
							otherquestion ? <OtherQuestion data={otherquestion} questionid={otherquestion._id} /> : ""
							}
						</>))
					
			</Container>
		</Box>
		*/}
		<RecommendedReads posts={recommendedPosts} />
		<Footer hideTop={true} />
	</Box>
)}

const Question = ({questionid, data}) => {
	return (<Box>
		{
			data.prompt ? 
				<Text fontSize={["lg", "xl", "2xl"]} fontWeight="normal" mb={[1, null, 4]}
					lineHeight="1.2em" as="h1"
				>
					{data.prompt}
				</Text> 
			: null 
		}
		{/*
			<Text fontSize={["2xl", "3xl", "5xl"]} fontWeight="bold" mb={[2, null, 8]}
				lineHeight="1.2em" as="h1">
				{data.question.iv.replace(/_{3,}/gm, "_______")}
			</Text>
		*/}
		<Text fontSize={["2xl", "3xl", "4xl"]} mb={[2, null, 8]}
			lineHeight="1.2em" as="h1"
		>
			<BlockContent
				body={data.question}
			/>
		</Text>
		
		<QuestionOption option="a" body={data.optiona} />
		<QuestionOption option="b" body={data.optionb} />
		<QuestionOption option="c" body={data.optionc} />
		<QuestionOption option="d" body={data.optiond} />

		<AnswerCard />
		
		
		
	</Box>)
}

const Navigation = ({otherdata}) => <Flex mt={[4, null, 8]} fontSize={["md", null, "xl"]}>
 <Link href={`/pastquestions/${otherdata[0]}`}>← Previous</Link>
 <Spacer />
 <Link href={`/pastquestions/${otherdata[1]}`}>Next Question →</Link>
</Flex>

const QuestionOption = ( {option, body} ) => (<Flex my={[2, null, 4]}>
    <Text fontWeight="bold" fontSize={["md",null, "xl"]}>{option}.</Text>
    <Text fontSize={["md","lg", "2xl"]} ml={[2, null, 4]}>
			<BlockContent
				body={body}
			/>
    </Text>
</Flex>)

const OtherQuestion = ({questionid, data}) => {
	return (<LinkBox>
	<Box mb="2" p="2" pl="0" fontSize={["lg", null, "3xl"]}>
		
		
		<LinkOverlay href={`/pastquestions/${questionid}`}>
			<BlockContent
				body={data.question}
			/>
		</LinkOverlay>
	</Box>
	</LinkBox>)
}




export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  //const paths = posts.map((post) => `/posts/${post.id}`)
	let paths = []
	/*
	let paths = []
	let pages=1
	let current = 1
	
	while (current<=pages) {
		const res = await fetch(`${process.env.SQUIDEX_DATA_URL}/api/questions/ids?page=${current}`, 
			{
				headers: {
					"Authorization": `Basic ${process.env.DATA_AUTH_TOKEN}`
				}
			})
		let data = await res.json()
		
		if(current == 1)  {
			pages = Math.floor((data.count-1)/200) + 1
		}
		for(let id=0; id<data.data.length; id++) {
			paths.push({ params: { questionid: [ data.data[id] ] } })
		}
		current++
	}
	*/
	
	const questionIdList = await sanity.fetch(questionIdQuery())
	
	for(let id=0; id<questionIdList.length; id++) {
		paths.push({ params: { questionid: [ questionIdList[id] ] } })
	}
	
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	//const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}
	//const fullquestiondata = {"id":"eb331476-338e-4f59-b383-78576b57e2c4","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":44},"question":{"iv":"the compound that makes palm wine taste sour after exposure to the air for few days is"},"optiona":{"iv":"Ethanol"},"optionb":{"iv":"Ethanoic acid "},"optionc":{"iv":"Methanol"},"optiond":{"iv":"Methaoic acid"}},"other":[{"id":"2c5e1e9f-1ac8-44c9-a331-fffa535be03e","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":42},"question":{"iv":"When compound X is heated with concentrated tetraoxosulphate(VI) acid, it produces an alkene. X is an "},"optiona":{"iv":"Alkaline "},"optionb":{"iv":"Alcohol"},"optionc":{"iv":"Alkanoate"},"optiond":{"iv":"Alkyne"}}},{"id":"701cc25a-f23f-4b5c-aaf3-fcc66d105399","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":29},"question":{"iv":"Chemical equilibrium is attained when"},"optiona":{"iv":"All the reactants have been completely used up"},"optionb":{"iv":"The reaction goes to completion"},"optionc":{"iv":"The concentration of reactions and products remain constant"},"optiond":{"iv":"The concentration of reactants and products are equal"}}},null]}
	//${process.env.SQUIDEX_DATA_URL}/api/questions?id=23dc7447-8133-47f6-b6d1-a8d8b269d9dd
	
	const questionid = params.questionid[0]
	
	/*
	const res = await fetch(`${process.env.SQUIDEX_DATA_URL}/api/questions?id=${questionid}`, 
		{
			headers: {
				"Authorization": `Basic ${process.env.DATA_AUTH_TOKEN}`
			}
		})
  const fullquestiondata = await res.json()
  */
	
	//const router = useRouter()
	//const { subject, number } = router.query
	const dataschema = JSON.parse(process.env.DATASCHEMA) 
	//const pageid = params.number

	//const questiondata = fullquestiondata.data
	let questiondata = await sanity.fetch(questionQuery(questionid))
	questiondata = questiondata[0]
	
	//const otherdata = fullquestiondata.other
	const allSimilarQuestionId = await sanity.fetch(similarQuestionIdQuery(questiondata.exam, questiondata.subject, questiondata.year ))
	const [questionLocationIndex, total] = [allSimilarQuestionId.findIndex((id)=>id == questionid), allSimilarQuestionId.length]

	const [previous, next] = [(questionLocationIndex - 1 + total)%total, (questionLocationIndex + 1)%total ]
	
	/*
	const previousData = await sanity.fetch(questionQuery(allSimilarQuestionId[previous]))
	const nextData = await sanity.fetch(questionQuery(allSimilarQuestionId[next]))
	*/
	
	const otherdata = [allSimilarQuestionId[previous], allSimilarQuestionId[next]]
	const recommendedPosts = getRecommendedPosts()
	return {
		props: {
			dataschema,
			questiondata,
			otherdata,
			questionid,
			recommendedPosts,
		}
	}
}

export default Index
