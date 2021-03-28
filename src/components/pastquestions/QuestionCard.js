import { Box, Text, Flex, } from '@chakra-ui/react'

const QuestionCardOption = ( {option, text} ) => (<Flex my={[4]}>
    <Text fontWeight="bold" fontSize={["md",null, "xl"]}>{option}.</Text>
    <Text fontSize={["md",null, "2xl"]} ml={[2, null, 4]}>
       { text }
    </Text>
</Flex>)

export const QuestionCard = ({ data, questionid }) => (<Box borderRadius={8} p={[2, null, 8]} border="1px solid"
    m={4}>
    <Box mb={4}>
        <Text fontSize={["xl", null, "3xl"]} fontWeight="semibold">
            { data.question.iv }
        </Text>
    </Box>
    <QuestionCardOption option='a' text={data.optiona.iv} />
    <QuestionCardOption option='b' text={data.optionb.iv} />
    <QuestionCardOption option='c' text={data.optionc.iv} />
    <QuestionCardOption option='d' text={data.optiond.iv} />
</Box>)

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