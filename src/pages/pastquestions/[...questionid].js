import {
  Link as ChakraLink,
	Box, Heading, Text,
	Flex, Container,
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

const Index = ({ questiondata, otherdata, questionid, dataschema, recommendedPosts }) => {
	const router = useRouter()
	//const { questionid } = router.query
	
	if (router.isFallback) {
    return <div>Loading...</div>
  }
	
	return(
  <Box>
		<Head>
			<title>{`${dataschema.exams[questiondata.exam.iv.toUpperCase()]} ${dataschema.subjects[questiondata.subject.iv.toUpperCase()]} - ${questiondata.question.iv}`.slice(0, 120) } </title>
			<meta name="description" content={`${questiondata.question.iv} a. ${questiondata.optiona.iv} b. ${questiondata.optionb.iv} c. ${questiondata.optionc.iv} d. ${questiondata.optiond.iv}`.slice(0,160)} />
			<meta property="og:title" content={`${dataschema.exams[questiondata.exam.iv.toUpperCase()]} ${dataschema.subjects[questiondata.subject.iv.toUpperCase()]} - ${questiondata.question.iv}`.slice(0, 120) } />
			<meta property="og:description" content={`${questiondata.question.iv} a. ${questiondata.optiona.iv} b. ${questiondata.optionb.iv} c. ${questiondata.optionc.iv} d. ${questiondata.optiond.iv}`.slice(0,160)} />			
			<link rel="canonical" href={`https://www.studymono.com/pastquestions/${questionid}`} />
		</Head>
		<NavBar />
		
		<Box bg="tint.200" pt={[12, null, 20]} pb={[12, null, 32]}>
			<Container maxW={["2xl",null,"5xl"]} >
				<Heading fontSize={["xs", "md", "xl"]} fontWeight="bold" as="p">
					{ dataschema.exams[questiondata.exam.iv.toUpperCase()] } { questiondata.year.iv } { dataschema.subjects[questiondata.subject.iv.toUpperCase()] }
				</Heading>
				<Question questionid={questionid} data={questiondata} />
			</Container>
		</Box>
		
		<Box pt={[12, null, 20]} mb={[12, null, 20]}>
			<Container maxW={["2xl", null, "5xl"]}>
				<Heading as="h3" fontSize={["2xl", null, "3xl"]}>More from { dataschema.exams[questiondata.exam.iv.toUpperCase()] } { questiondata.year.iv } { dataschema.subjects[questiondata.subject.iv.toUpperCase()] }</Heading>
				{
					otherdata.map((otherquestion) => (<>{otherquestion ? <OtherQuestion data={otherquestion.data} questionid={otherquestion.id} />: ""}</>)
					)
				}
			</Container>
		</Box>
		
		<RecommendedReads posts={recommendedPosts} />
		<Footer hideTop={true} />
	</Box>
)}

const Question = ({questionid, data}) => {
	return (<Box>
		<Text fontSize={["2xl", "3xl", "5xl"]} fontWeight="bold" mb={[2, null, 8]}
			lineHeight="1.2em" as="h1">
			{data.question.iv}
		</Text>

		<QuestionOption option="a" text={data.optiona.iv} />
		<QuestionOption option="b" text={data.optionb.iv} />
		<QuestionOption option="c" text={data.optionc.iv} />
		<QuestionOption option="d" text={data.optiond.iv} />

		<AnswerCard />
		
		
	</Box>)
}

const QuestionOption = ( {option, text} ) => (<Flex my={[2, null, 4]}>
    <Text fontWeight="bold" fontSize={["md",null, "xl"]}>{option}.</Text>
    <Text fontSize={["md","lg", "2xl"]} ml={[2, null, 4]}>
       { text }
    </Text>
</Flex>)

const OtherQuestion = ({questionid, data}) => {
	return (<Box mb="2" p="2" pl="0" fontSize={["lg", null, "3xl"]}>
		
		
		<Link href={`/pastquestions/${questionid}`}>
			{data.question.iv}		
		</Link>
	</Box>)
}




export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  //const paths = posts.map((post) => `/posts/${post.id}`)
	let paths = []
	let pages=1
	let current = 1
	
	while (current<=pages) {
		const res = await fetch(`${process.env.SQUIDEX_DATA_URL}/api/questions/ids?page=${current}`)
		let data = await res.json()
		
		if(current == 1)  {
			pages = Math.floor((data.count-1)/200) + 1
		}
		for(let id=0; id<data.data.length; id++) {
			paths.push({ params: { questionid: [ data.data[id] ] } })
		}
		current++
	}
	
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	//const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}
	//const fullquestiondata = {"id":"eb331476-338e-4f59-b383-78576b57e2c4","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":44},"question":{"iv":"the compound that makes palm wine taste sour after exposure to the air for few days is"},"optiona":{"iv":"Ethanol"},"optionb":{"iv":"Ethanoic acid "},"optionc":{"iv":"Methanol"},"optiond":{"iv":"Methaoic acid"}},"other":[{"id":"2c5e1e9f-1ac8-44c9-a331-fffa535be03e","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":42},"question":{"iv":"When compound X is heated with concentrated tetraoxosulphate(VI) acid, it produces an alkene. X is an "},"optiona":{"iv":"Alkaline "},"optionb":{"iv":"Alcohol"},"optionc":{"iv":"Alkanoate"},"optiond":{"iv":"Alkyne"}}},{"id":"701cc25a-f23f-4b5c-aaf3-fcc66d105399","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":29},"question":{"iv":"Chemical equilibrium is attained when"},"optiona":{"iv":"All the reactants have been completely used up"},"optionb":{"iv":"The reaction goes to completion"},"optionc":{"iv":"The concentration of reactions and products remain constant"},"optiond":{"iv":"The concentration of reactants and products are equal"}}},null]}
	//${process.env.SQUIDEX_DATA_URL}/api/questions?id=23dc7447-8133-47f6-b6d1-a8d8b269d9dd
	
	const questionid = params.questionid
	const res = await fetch(`${process.env.SQUIDEX_DATA_URL}/api/questions?id=${questionid}`)
  const fullquestiondata = await res.json()
	
	//const router = useRouter()
	//const { subject, number } = router.query
	const dataschema = JSON.parse(process.env.DATASCHEMA) 
	//const pageid = params.number

	const questiondata = fullquestiondata.data
	const otherdata = fullquestiondata.other
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
