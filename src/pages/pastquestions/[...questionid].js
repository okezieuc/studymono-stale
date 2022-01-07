import {
	Box, Heading, Text,
	Flex, Container, Spacer,
} from '@chakra-ui/react'
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


const questionQuery = (id) => `*[_type == "pastquestion" && _id == "${id}"]{
  _id,
  exam,
  subject,
  year,
  'prompt': prompt->prompt,
  question,
  optiona, optionb, optionc, optiond, optione,
	answer, explanation,
}`

const questionIdQuery = () => `*[_type == "pastquestion" && !(_id in path('drafts.**'))]._id`

const similarQuestionIdQuery = (exam, subject, year) => `*[_type == "pastquestion" && exam == "${exam}" && subject == "${subject}" && year == ${year} && !(_id in path('drafts.**'))] {
	_id,
	"hasExplanation": defined(explanation),
	"hasAnswer": defined(answer)	
} | order(hasExplanation desc, hasAnswer desc, _createdAt asc)`

const Index = ({ questiondata, otherdata, questionid, dataschema, recommendedPosts }) => {
	const router = useRouter()

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	return (
		<Box>
			<Head>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css" integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc" crossorigin="anonymous" />


				<title>{`${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""}—Studymono`.slice(0, 120)} </title>
				<meta property="og:title" content={`${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""}—Studymono`.slice(0, 120)} />
				<meta name="description" content={questiondata.explanation
					? `${blockToText(questiondata.explanation).slice(0, 160)}`
					: `${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""} a. ${blockToText(questiondata.optiona)} b. ${blockToText(questiondata.optionb)} c. ${blockToText(questiondata.optionc)} d. ${blockToText(questiondata.optiond)}`.slice(0, 160)} />
				<meta property="og:description" content={questiondata.explanation
					? `${blockToText(questiondata.explanation).slice(0, 160)}`
					: `${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""} a. ${blockToText(questiondata.optiona)} b. ${blockToText(questiondata.optionb)} c. ${blockToText(questiondata.optionc)} d. ${blockToText(questiondata.optiond)}`.slice(0, 160)} />
				<meta name="og:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/past-questions-cover-image_z13zcz.png" />
				<link rel="canonical" href={`https://www.studymono.com/pastquestions/${questionid}`} />

				{/*
			<meta name="description" content={`${questiondata.question.iv}${!!questiondata.prompt ? ((questiondata.prompt.iv != null) ? (" - " + questiondata.prompt.iv) : "") : ""} a. ${questiondata.optiona.iv} b. ${questiondata.optionb.iv} c. ${questiondata.optionc.iv} d. ${questiondata.optiond.iv}`.slice(0,160)} />
			<meta property="og:title" content={`${dataschema.exams[questiondata.exam.iv.toUpperCase()]} ${dataschema.subjects[questiondata.subject.iv.toUpperCase()]} - ${questiondata.question.iv}${!!questiondata.prompt ? ((questiondata.prompt.iv != null) ? (" - " + questiondata.prompt.iv) : "") : ""}`.slice(0, 120) } />
			<meta property="og:description" content={`${questiondata.question.iv}${!!questiondata.prompt ? ((questiondata.prompt.iv != null) ? (" - " + questiondata.prompt.iv) : "") : ""} a. ${questiondata.optiona.iv} b. ${questiondata.optionb.iv} c. ${questiondata.optionc.iv} d. ${questiondata.optiond.iv}`.slice(0,160)} />			
			<link rel="canonical" href={`https://www.studymono.com/pastquestions/${questionid}`} />
			*/}

				<meta name="twitter:title" content={`${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""}—Studymono`.slice(0, 120)} />
				<meta name="twitter:description" content={questiondata.explanation
					? `${blockToText(questiondata.explanation).slice(0, 160)}`
					: `${blockToText(questiondata.question)} ${!!questiondata.prompt ? (questiondata.prompt) : ""} a. ${blockToText(questiondata.optiona)} b. ${blockToText(questiondata.optionb)} c. ${blockToText(questiondata.optionc)} d. ${blockToText(questiondata.optiond)}`.slice(0, 160)} />

				<meta name="twitter:image" content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/past-questions-cover-image_z13zcz.png" />

				<script type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html:
							(`{
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
							"itemListElement": [{
								"@type": "ListItem",
								"position": 1,
								"name": "Past Questions",
								"item": "https://www.studymono.com/pastquestions"
							},{
								"@type": "ListItem",
								"position": 2,
								"name": "${dataschema.subjects[questiondata.subject.toUpperCase()]}",
								"item": "https://www.studymono.com/pastquestions/${questiondata.subject.toLowerCase()}"
							}]
						}`)
					}}>

				</script>
			</Head>
			<NavBar />

			<Box bg="tint.200" pt={[12, null, 20]}>
				<Container maxW={["2xl", null, "5xl"]} >
					<Heading fontSize={["xs", "md", "xl"]} fontWeight="bold" as="p" mb={[4]}>
						{dataschema.exams[questiondata.exam.toUpperCase()]} {dataschema.subjects[questiondata.subject.toUpperCase()]}
					</Heading>
					<Question data={questiondata} />
					<Navigation otherdata={otherdata} />
					<Box w="100%" h="1px" bg="tint.300" mt={24} ></Box>
				</Container>
			</Box>
			<RecommendedReads posts={recommendedPosts} />
			<Footer hideTop={true} />
		</Box>
	)
}

const Question = ({ data }) => {
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

		<AnswerCard answer={data.answer} explanation={data.explanation} />



	</Box>)
}

const Navigation = ({ otherdata }) => <Flex mt={[4, null, 8]} fontSize={["md", null, "xl"]}>
	<Link href={`/pastquestions/${otherdata[0]}`}>← Previous</Link>
	<Spacer />
	<Link href={`/pastquestions/${otherdata[1]}`}>Next Question →</Link>
</Flex>

const QuestionOption = ({ option, body }) => (<Flex my={[2, null, 4]}>
	<Text fontWeight="bold" fontSize={["md", null, "xl"]}>{option}.</Text>
	<Text fontSize={["md", "lg", "2xl"]} ml={[2, null, 4]}>
		<BlockContent
			body={body}
		/>
	</Text>
</Flex>)

export async function getStaticPaths() {
	let paths = []
	const questionIdList = await sanity.fetch(questionIdQuery())

	for (let id = 0; id < questionIdList.length; id++) {
		paths.push({ params: { questionid: [questionIdList[id]] } })
	}

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const questionid = params.questionid[0]
	const dataschema = JSON.parse(process.env.DATASCHEMA)
	let questiondata = await sanity.fetch(questionQuery(questionid))
	questiondata = questiondata[0]
	const allSimilarQuestionId = await sanity.fetch(similarQuestionIdQuery(questiondata.exam, questiondata.subject, questiondata.year))
	const [questionLocationIndex, total] = [allSimilarQuestionId.findIndex((item) => item._id == questionid), allSimilarQuestionId.length]
	const [previous, next] = [(questionLocationIndex - 1 + total) % total, (questionLocationIndex + 1) % total]
	const otherdata = [allSimilarQuestionId[previous]._id, allSimilarQuestionId[next]._id]
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
