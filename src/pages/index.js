import {
  Link as ChakraLink,
	Box, Heading, Text,
	Center,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Head from 'next/head'
import { NavBar, } from '../components/NavBar'
import { Footer, } from '../components/Footer'
import { CallToAction, } from '../components/CallToAction'
import { Hero, } from '../components/landing/Hero'
import { Catalog, } from '../components/landing/Catalog'
import { Features, } from '../components/landing/Features'
import { Stats, } from '../components/landing/Stats'
import { Special, } from '../components/landing/Special'
import { BlogPosts, } from '../components/landing/BlogPosts'
import { getLatestPosts, } from '../lib/api'
import { FAQ, } from '../components/landing/FAQ'
import { HeroImage} from '../components/landing/HeroImage'
import { Vision, } from '../components/landing/Vision'

const FAQData = [
	{
		question: "Do you have answers to all questions?",
		answer: "We do not yet have answers to all the questions. We are seriously working to add answers to the questions."
	},
	{
		question: "Which subjects do you have past questions from?",
		answer: "Our past questions are from Mathematics, English, Phyics, Chemistry, Biology."
	},
	{
		question: "Are there plans to add questions from more subjects?",
		answer: "We don't currently have plans to add questions from more subjects. We are presently focussing on five subjects."
	},
	{
		question: "I have a question that is not answered here",
		answer: "You can make enquiries by sending us an email at info@studymono.com or contacting us at our twitter handle @studymono"
	},
]

const Index = ({ posts, }) => (
	<Box>
		<Head>
			<title>Sample Product Heading - we offer this and offer that too!</title>
			<meta name="description" content="This is a sample description for this page" />
			<meta property="og:title" content="Sample Product Heading - we offer this and offer that too!" />
			<meta property="og:description" content="This is a sample description for this page" />			
		</Head>
		<NavBar />
		<Hero />
		<Vision />
		<Catalog />
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
