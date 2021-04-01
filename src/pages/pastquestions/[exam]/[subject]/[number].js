import {
  Link as ChakraLink,
	Box, Heading, Text, Container,
	
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavBar, } from '../../../../components/NavBar'
import { Footer, } from '../../../../components/Footer'
import { RecommendedReads, } from '../../../../components/RecommendedReads'
import { QuestionCard, } from '../../../../components/pastquestions/QuestionCard'
import { getRecommendedPosts } from '../../../../lib/api'
import { PaginationLink } from '../../../../components/pastquestions/PaginationLink'

const Question = ({questionid, data, page, exam, subject}) => {
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

const Index = ({ dataschema, examsubjectdata, page, recommendedPosts }) => {
	const router = useRouter()
	const { exam, subject, number } = router.query
	
	if (router.isFallback) {
    return <div>Loading...</div>
  }
	
	return(

  <Box>
	  	<NavBar />
			
			<Box bg="tint.200" pt={[12, null, 20]} pb={[32, null, 64]}
				mb={[-24, null, -48]}>
				<Container maxW="5xl" >									
					<Heading fontSize={["4xl", null, "6xl"]}>
						{dataschema.exams[exam.toUpperCase()]} {dataschema.subjects[subject.toUpperCase()]}
					</Heading>
					<Text fontSize={["sm", null, "md"]}>
						Page {number}
					</Text>
				</Container>
			</Box>
		
		<Container maxW="6xl" mb={[4, null, 40]}>
			{		
				examsubjectdata.data.map((question) => (
						<QuestionCard questionid={question.id} data={question.data} />
					)
				)				
			}
		
			<PaginationLink prefix={`/pastquestions/${exam.toLowerCase()}/${subject.toLowerCase()}/`}
				mt={12} mb={24} current={parseInt(number)} total={Math.floor((examsubjectdata.count-1)/10)+1} />
		</Container>

		<RecommendedReads posts={recommendedPosts} />
		<Footer hideTop={true} />
	</Box>
)}

export async function getStaticPaths() {
  
  // Get the paths we want to pre-render based on posts
  //const paths = posts.map((post) => `/posts/${post.id}`)
	let paths = []
	
	const dataschema = JSON.parse(process.env.DATASCHEMA)
	//loop through exams
	for(let num=0; num<Object.keys(dataschema.exams).length; num++) {
		const exam = Object.keys(dataschema.exams)[num]
		for (let subnum=0; subnum<Object.keys(dataschema.subjects).length; subnum++) {
			const subject = Object.keys(dataschema.subjects)[subnum]
			
			const res = await fetch(`https://squidex-api-layer.cokezieu.workers.dev/api/questions/examsubject/ids?subject=${subject}&exam=${exam}`)
			let count = await res.json()
			count = count.count
			const pageCount = Math.floor((count-1)/10) + 1
			for(let i=0; i<pageCount; i++) {
				paths.push({ params: { exam: exam.toLowerCase(), subject: subject.toLowerCase(), number: String(i+1) } })
			}
		}
		
	}
	
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
	//const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}
	//const examsubjectdata = {"count":28,"data":[{"id":"59bb4231-c0e6-472d-8577-57a6cf5888d9","data":{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":43},"question":{"iv":"Ripening of fruits is hastened by using "},"optiona":{"iv":"Ethanol "},"optionb":{"iv":"Ethane"},"optionc":{"iv":"Ethene "},"optiond":{"iv":"Ethyne"}}},{"id":"eb331476-338e-4f59-b383-78576b57e2c4","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":44},"question":{"iv":"the compound that makes palm wine taste sour after exposure to the air for few days is"},"optiona":{"iv":"Ethanol"},"optionb":{"iv":"Ethanoic acid "},"optionc":{"iv":"Methanol"},"optiond":{"iv":"Methaoic acid"}}},{"id":"2c5e1e9f-1ac8-44c9-a331-fffa535be03e","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":42},"question":{"iv":"When compound X is heated with concentrated tetraoxosulphate(VI) acid, it produces an alkene. X is an "},"optiona":{"iv":"Alkaline "},"optionb":{"iv":"Alcohol"},"optionc":{"iv":"Alkanoate"},"optiond":{"iv":"Alkyne"}}},{"id":"76550ad8-4d25-45e3-8978-0bad2d4958c0","data":{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":41},"question":{"iv":"Amino acids are obtained from proteins by"},"optiona":{"iv":"Hydrolysis"},"optionb":{"iv":"Oxidizing "},"optionc":{"iv":"Polymeriazation"},"optiond":{"iv":"Reduction "}}},{"id":"701cc25a-f23f-4b5c-aaf3-fcc66d105399","data":{"exam":{"iv":"WAEC"},"subject":{"iv":"CHEM"},"year":{"iv":2016},"number":{"iv":29},"question":{"iv":"Chemical equilibrium is attained when"},"optiona":{"iv":"All the reactants have been completely used up"},"optionb":{"iv":"The reaction goes to completion"},"optionc":{"iv":"The concentration of reactions and products remain constant"},"optiond":{"iv":"The concentration of reactants and products are equal"}}},{"id":"898adac6-bb8c-468f-a13d-46dad9cf7351","data":{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2018},"number":{"iv":11},"question":{"iv":"Methanoic acid mixes with water in all proportions and has about the same boiling point as water. Which of the following methods would you adopt to obtain pure water from a mixture of sand, water and methanoic acid?"},"optiona":{"iv":"Fractional distillation"},"optionb":{"iv":"Filtration followed by distillation"},"optionc":{"iv":"Neutralization with sodium hydroxide followed by distillation"},"optiond":{"iv":"Neutralization with sodium hydroxide followed by filtration"}}},{"id":"be6d3f02-ca24-4006-b024-87a5f77a521d","data":{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2017},"number":{"iv":29},"question":{"iv":"The chemical used for coagulation in water puriﬁcation is"},"optiona":{"iv":"Aluminium tetraoxosulphate (VI) "},"optionb":{"iv":"Copper tetraoxosulphate (VI)"},"optionc":{"iv":"Sodium tetraoxosulphate (VI)"},"optiond":{"iv":"Calcium tetraoxosulphate (VI)"}}},{"id":"f789a7e8-160b-41ee-91f2-83adfca3244c","data":{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2017},"number":{"iv":30},"question":{"iv":"A liquid that will dissolve fat is"},"optiona":{"iv":"Hydrochloric acid"},"optionb":{"iv":"Calcium hydroxide"},"optionc":{"iv":"Kerosine"},"optiond":{"iv":"Water"}}},{"id":"ccbee56a-b489-4b04-9ec9-fae691f0c114","data":{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2017},"number":{"iv":13},"question":{"iv":"Smoke consists of:"},"optiona":{"iv":"Solid particles dispersed in liquid"},"optionb":{"iv":"Solid or liquid particles dispersed in gas"},"optionc":{"iv":"Gas or liquid particles dispersed in liquid"},"optiond":{"iv":"Liquid particles dispersed in liquid"}}},{"id":"0ef80c91-32d4-4a92-b541-115cda38aaa6","data":{"exam":{"iv":"JAMB"},"subject":{"iv":"CHEM"},"year":{"iv":2017},"number":{"iv":11},"question":{"iv":"When large hydrocarbon tnolecules are heated at high temperature in the presence of a catalysts to give smaller molecules, the process is known"},"optiona":{"iv":"Disintegration"},"optionb":{"iv":"Polymerization"},"optionc":{"iv":"Cracking"},"optiond":{"iv":"Degradation"}}}]}
	
	//const router = useRouter()
	//const { subject, number } = router.query
	 
	const dataschema = JSON.parse(process.env.DATASCHEMA) 
	
	//const page = params.number
	const exam = params.exam
	const subject = params.subject
	const page = params.number
	
	const res = await fetch(`https://squidex-api-layer.cokezieu.workers.dev/api/questions/examsubject?exam=${exam}&subject=${subject}&page=${page}`)
  	const examsubjectdata = await res.json()
 	const recommendedPosts = getRecommendedPosts()

	return {
		props: {
			dataschema,
			examsubjectdata,
			page,
			exam,
			subject,
			recommendedPosts,
		}
	}
}

export default Index
