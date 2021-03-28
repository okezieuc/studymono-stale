import {
  Link as ChakraLink,
	Box, Heading, Text,
	
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { NavBar, } from '../components/NavBar'
import { Footer, } from '../components/Footer'
import { CallToAction, } from '../components/CallToAction'
import { RecommendedReads, } from '../components/RecommendedReads'
import { PageHeading, } from '../components/pages/PageHeading'

const Index = () => (
  <Box>
	 	<NavBar />
		<PageHeading />
		<Heading fontSize="6xl">
			Privacy
		</Heading>
		<Text p="4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sodales ex, vel consequat sem. Donec quis faucibus mauris. Vivamus condimentum bibendum felis id egestas. Mauris convallis ipsum ac ligula ultricies tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non turpis ultrices, tincidunt magna id, semper lectus. Sed vel ligula a dolor finibus lobortis. Etiam viverra tempus auctor. Phasellus congue quis neque ut commodo. Sed ultrices augue et lorem vestibulum maximus. Fusce ac velit eget nisi rhoncus feugiat et vel magna. Quisque luctus augue nec sem facilisis gravida. Integer lacus nisi, varius et scelerisque a, luctus at purus. Etiam feugiat tellus eu elit ultricies posuere. Vestibulum pulvinar metus vel sollicitudin mattis.

		</Text>
		<Link href="/">
			<a>Return to homepage</a>
		</Link>
		<RecommendedReads />
		<CallToAction />
		<Footer hideTop={true} />
	</Box>
)

export default Index
