import { Box, } from '@chakra-ui/react'
import BlockContent from "./BlockContent";

//const sampleexplanation="Ohm's law is a law about the conservation of electricity. Ohms law states that the sum of the angles in a right angled triangle is the same as the sum of the angles in a normal equilateral triangle which is 180 degrees. Based on this, we can conclude that the correct answer for this question can neither be B, C nor D. Therefore, the correct answer is option A."

export const AnswerCard = ({answer, explanation}) => (<Box borderRadius="1em">
	<Box 
		bg="brand"
		p={[6,null, 12]}
		fontSize={["sm", "lg", "xl"]}
		color="white"
		mt={[8, null, 20]}
		borderTopRadius="1rem"
		borderBottomRadius={explanation ? null : "1rem"}
	>
	{
		answer ? `Correct answer: ${answer}` : "No Answer Submitted"
	}
	</Box>
	{
		explanation 
		? <>
			<Box 
				p={[6,null, 12]}
				background="white"
				fontSize={["sm", "lg", "xl"]}
				border="1px solid"
				borderColor="brand"
				className="paragraph-space"
				borderBottomRadius="1rem"
			>
				<BlockContent
					body={explanation}
				/>
			</Box>
		</>
		: ""
	}
	
</Box>)