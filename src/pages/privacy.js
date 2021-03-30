import {
 	Box, Text,
	Container,
	
} from '@chakra-ui/react'
import { NavBar, } from '../components/NavBar'
import { Footer, } from '../components/Footer'
import { CallToAction, } from '../components/CallToAction'
import { RecommendedReads, } from '../components/RecommendedReads'
import { PageHeading, } from '../components/pages/PageHeading'
import { getRecommendedPosts } from '../lib/api'

const Index = ({ recommendedPosts }) => (
  <Box>
	 	<NavBar />
		<Box bg="gray.500" h={[6, null, 8]} />
		<Box bg="gray.400" h={[40, null, 56]} mb={[-28, null -48]} />
		<PageHeading />
		
		<Container maxW="5xl" mb={[20, null, 40]}>
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sodales ex, vel consequat sem. Donec quis faucibus mauris. Vivamus condimentum bibendum felis id egestas. Mauris convallis ipsum ac ligula ultricies tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non turpis ultrices, tincidunt magna id, semper lectus. Sed vel ligula a dolor finibus lobortis. Etiam viverra tempus auctor. Phasellus congue quis neque ut commodo. Sed ultrices augue et lorem vestibulum maximus. Fusce ac velit eget nisi rhoncus feugiat et vel magna. Quisque luctus augue nec sem facilisis gravida. Integer lacus nisi, varius et scelerisque a, luctus at purus. Etiam feugiat tellus eu elit ultricies posuere. Vestibulum pulvinar metus vel sollicitudin mattis.
		</Text>
		<br />
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sodales ex, vel consequat sem. Donec quis faucibus mauris. Vivamus condimentum bibendum felis id egestas. Mauris convallis ipsum ac ligula ultricies tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non turpis ultrices, tincidunt magna id, semper lectus. Sed vel ligula a dolor finibus lobortis. Etiam viverra tempus auctor. Phasellus congue quis neque ut commodo. Sed ultrices augue et lorem vestibulum maximus. Fusce ac velit eget nisi rhoncus feugiat et vel magna. Quisque luctus augue nec sem facilisis gravida. Integer lacus nisi, varius et scelerisque a, luctus at purus. Etiam feugiat tellus eu elit ultricies posuere. Vestibulum pulvinar metus vel sollicitudin mattis.
		</Text>
		<br />
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sodales ex, vel consequat sem. Donec quis faucibus mauris. Vivamus condimentum bibendum felis id egestas. Mauris convallis ipsum ac ligula ultricies tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non turpis ultrices, tincidunt magna id, semper lectus. Sed vel ligula a dolor finibus lobortis. Etiam viverra tempus auctor. Phasellus congue quis neque ut commodo. Sed ultrices augue et lorem vestibulum maximus. Fusce ac velit eget nisi rhoncus feugiat et vel magna. Quisque luctus augue nec sem facilisis gravida. Integer lacus nisi, varius et scelerisque a, luctus at purus. Etiam feugiat tellus eu elit ultricies posuere. Vestibulum pulvinar metus vel sollicitudin mattis.
		</Text>
		</Container>
		<RecommendedReads posts={recommendedPosts} />
		<CallToAction />
		<Footer hideTop={true} />
	</Box>
)

export async function getStaticProps() {
	const recommendedPosts = getRecommendedPosts()
  
	return {
		props: {
		  recommendedPosts: recommendedPosts,
		},
	  }
  }

export default Index
