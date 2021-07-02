import {
	Box,
} from '@chakra-ui/react'
import Head from 'next/head'
import { NavBar, } from '../components/NavBar'
import { Footer, } from '../components/Footer'
import { CallToAction, } from '../components/CallToAction'
import { Hero, } from '../components/landing/Hero'
import { Catalog, } from '../components/landing/Catalog'
import { Stats, } from '../components/landing/Stats'
import { Special, } from '../components/landing/Special'
import { BlogPosts, } from '../components/landing/BlogPosts'
import { getLatestPosts, } from '../lib/api'
import { FAQ, } from '../components/landing/FAQ'
import { Vision, } from '../components/landing/Vision'

const FAQData = [
	{
		question: "Do you have answers to the questions?",
		answer: "Yes, we do. We published answers and explanations to majority of the past questions on this website."
	},
	{
		question: "Which subjects do you have past questions from?",
		answer: "Our past questions are from Mathematics, English, Physics, Chemistry and Biology."
	},
	{
		question: "Are there plans to add questions from more subjects?",
		answer: "We don't currently have plans to add questions from more subjects. We are presently focussing on five subjects."
	},
	{
		question: "I have a question that is not answered here",
		answer: "You can always reach out to us by sending us an email at info@studymono.com or contacting us at our twitter handle @studymono"
	},
]

const Index = ({ posts, }) => (
	<Box>
		<Head>
			<title>Studymono - Educational Resources for Nigerian Students</title>
			<meta name="description" content="Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face" />
			<meta property="og:title" content="Studymono - Educational Resources for Nigerian Students" />
			<meta property="og:description" content="Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face" />			
			<meta property="og:image" content="https://www.studymono.com/cover.png" />
			<link rel="canonical" href="https://www.studymono.com" />			
			
			<meta name="twitter:title" content="Studymono - Educational Resources for Nigerian Students" />
			<meta name="twitter:description" content="Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face" />
			<meta name="twitter:image" content="https://www.studymono.com/cover.png" />
		</Head>
		<NavBar />
		<Hero />
		<Vision />
		<Stats />
		<Special />
		<BlogPosts posts={posts} />
		<FAQ questions={FAQData} />
		<CallToAction />
		
		<Footer hideTop={true} />
	</Box>
)

export async function getStaticProps() {
	const posts = getLatestPosts()
	return {
		props: {
			posts
		}
	}
}

export default Index
