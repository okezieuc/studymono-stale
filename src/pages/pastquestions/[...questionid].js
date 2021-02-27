import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Question = ({questionid, data}) => {
	return (<Box mb="2" p="2">
		<Text>
			{data.question.iv}
		</Text>
		
			<Text>a. {data.optiona.iv}</Text>
		
		<Text>b. {data.optionb.iv}</Text>
		<Text>c. {data.optionc.iv}</Text>
		<Text>d. {data.optiond.iv}</Text>

	</Box>)
}

const OtherQuestion = ({questionid, data}) => {
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



const Index = ({ questiondata, otherdata, questionid, dataschema }) => {
	const router = useRouter()
	//const { questionid } = router.query
	
	if (router.isFallback) {
    return <div>Loading...</div>
  }
	
	return(
  <Box>
		<Heading fontSize="4xl">
			{ dataschema.exams[questiondata.exam.iv.toUpperCase()] } { dataschema.subjects[questiondata.subject.iv.toUpperCase()] }
		</Heading>
		
		<Heading fontSize="2xl">
			Past question with id {questionid}
		</Heading>
		
		{
		/*
		<Question questionid="1" data={{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":43},"question":{"iv":"Ripening of fruits is hastened by using "},"optiona":{"iv":"Ethanol "},"optionb":{"iv":"Ethane"},"optionc":{"iv":"Ethene "},"optiond":{"iv":"Ethyne"}}} />
		*/
	}
	
	
	
	<Question questionid={questionid} data={questiondata} />
	
	<Text>Next up</Text>
	{
		otherdata.map((otherquestion) => (<>{otherquestion ? <OtherQuestion data={otherquestion.data} questionid={otherquestion.id} />: ""}</>)
		)
	}
	<br />
	
		<Link href="/why-we-built-this">
			<a>Why we built this</a>
		</Link>
	
	<br />
		
		<Link href="/">
			<a>Return to homepage</a>
		</Link>
	</Box>
)}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  //const paths = posts.map((post) => `/posts/${post.id}`)
	let paths = []
	let pages=1
	let current = 1
	
	while (current<=pages) {
		const res = await fetch(`https://squidex-api-layer.cokezieu.workers.dev/api/questions/ids?page=${current}`)
		let data = await res.json()
		
		if(current == 1)  {
			pages = Math.floor((data.count-1)/200) + 1
		}
		for(let id=0; id<data.data.length; id++) {
			paths.push({ params: { questionid: [ data.data[id] ] } })
		}
		current++
	}
	
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
	//const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}
	//const fullquestiondata = {"id":"eb331476-338e-4f59-b383-78576b57e2c4","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":44},"question":{"iv":"the compound that makes palm wine taste sour after exposure to the air for few days is"},"optiona":{"iv":"Ethanol"},"optionb":{"iv":"Ethanoic acid "},"optionc":{"iv":"Methanol"},"optiond":{"iv":"Methaoic acid"}},"other":[{"id":"2c5e1e9f-1ac8-44c9-a331-fffa535be03e","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":42},"question":{"iv":"When compound X is heated with concentrated tetraoxosulphate(VI) acid, it produces an alkene. X is an "},"optiona":{"iv":"Alkaline "},"optionb":{"iv":"Alcohol"},"optionc":{"iv":"Alkanoate"},"optiond":{"iv":"Alkyne"}}},{"id":"701cc25a-f23f-4b5c-aaf3-fcc66d105399","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":29},"question":{"iv":"Chemical equilibrium is attained when"},"optiona":{"iv":"All the reactants have been completely used up"},"optionb":{"iv":"The reaction goes to completion"},"optionc":{"iv":"The concentration of reactions and products remain constant"},"optiond":{"iv":"The concentration of reactants and products are equal"}}},null]}
	//https://squidex-api-layer.cokezieu.workers.dev/api/questions?id=23dc7447-8133-47f6-b6d1-a8d8b269d9dd
	
	const questionid = params.questionid
	const res = await fetch(`https://squidex-api-layer.cokezieu.workers.dev/api/questions?id=${questionid}`)
  const fullquestiondata = await res.json()
	
	//const router = useRouter()
	//const { subject, number } = router.query
	const dataschema = JSON.parse(process.env.DATASCHEMA) 
	//const pageid = params.number

	const questiondata = fullquestiondata.data
	const otherdata = fullquestiondata.other
	return {
		props: {
			dataschema,
			questiondata,
			otherdata,
			questionid
		}
	}
}

export default Index
