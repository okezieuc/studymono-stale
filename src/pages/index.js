import {
  Link as ChakraLink,
	Box, Heading, Text,
	Center,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
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


const Index = ({ posts, }) => (
	<Box>
		<NavBar />
		<Hero />
		<Vision />
		<Catalog />
		<Features />
		<Stats />
		<Special />
		<BlogPosts posts={posts} />
		<FAQ />
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
