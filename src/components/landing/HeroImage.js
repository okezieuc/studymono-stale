import { Box, Heading, Text, } from '@chakra-ui/react'
import Image from 'next/image'

export const HeroImage = () => (<Box h="400px" maxW="5xl" bg="tint.400" m="0 auto" mt={["-150px"]} borderTopRadius={[8]}
	position="relative" overflow="hidden" boxShadow="0px 0px 16px 0px">
	<Image
		src={`/screen.png`}
		alt="Picture of the app"
		width={1324}
		height={551}
		layout="responsive"
	/>
</Box>)