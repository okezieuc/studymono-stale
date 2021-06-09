import { Box, Text, Flex, LinkBox, LinkOverlay, } from '@chakra-ui/react'
import Link from 'next/link'
import BlockContent from "./BlockContent";

const QuestionCardOption = ( {option, blocks} ) => (<Flex my={[2, null, 4]}>
    <Text fontWeight="bold" fontSize={["md",null, "xl"]}>{option}.</Text>
    <Text fontSize={["md",null, "2xl"]} ml={[2, null, 4]}>
       <BlockContent
				body={blocks}
			/>
    </Text>
</Flex>)

export const QuestionCard = ({ data, questionid }) => (<LinkBox><Box bg="white" p={[4, null, 8]} border="1px none"
    mb={[8, null, 20]} boxShadow="0px 0px 4px 0px"
		borderRadius="1em">
    <Box mb={4}>
			{
				data.prompt ?
					<Box fontSize={["sm", null, "xl"]} fontWeight="semibold" mb={[1, null, 2]}>
            { data.prompt }          
					</Box>
				: null
			}
        
				<Box fontSize={["lg", null, "3xl"]}>
            <Link href={`/pastquestions/${questionid}`} passHref>
                <LinkOverlay className="umami--click--open-pastquestion">
                   <BlockContent
										body={data.question}
									/>
                </LinkOverlay>
            </Link>          
        </Box>
    </Box>
    <QuestionCardOption option='a' blocks={data.optiona} />
    <QuestionCardOption option='b' blocks={data.optionb} />
    <QuestionCardOption option='c' blocks={data.optionc} />
    <QuestionCardOption option='d' blocks={data.optiond} />
</Box>
</LinkBox>)

QuestionCard.defaultProps = {
    questionid: "abcd1234",
    data: {
        question: {
            iv: "This is a question from an exam, subject and year. This is extra text that is designed to make the text wrap over multiple lines. Lorem ipsum dot olres quad tras protisc dolup",
        },
        optiona: {
            iv: "This is a smaple option for this question. At some point, we will have to integrate KaTeX into this project to be able to render mathematical formulae.",
        },        
        optionb: {
            iv: "This is a smaple option for this question. At some point, we will have to integrate KaTeX into this project to be able to render mathematical formulae.",
        },        
        optionc: {
            iv: "This is a smaple option for this question. At some point, we will have to integrate KaTeX into this project to be able to render mathematical formulae.",
        },        
        optiond: {
            iv: "This is a smaple option for this question. At some point, we will have to integrate KaTeX into this project to be able to render mathematical formulae.",
        },
        
    }
}