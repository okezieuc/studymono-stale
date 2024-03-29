import { Box, AspectRatio, LinkBox, LinkOverlay, } from'@chakra-ui/react'
import Link from 'next/link'

export const ExamCard = ({ exam, slug }) => (<LinkBox><AspectRatio ratio={16 / 12}>
    <Box fontSize={["md", null, "4xl"]} fontWeight="bold"
			border="1px solid" borderColor="tint.400"
			borderRadius="1em">
        <Link href={`/pastquestions/${slug}`} passHref>
            <LinkOverlay className={`umami--click--study-${exam.toLowerCase()}-questions`}>
                {exam}
            </LinkOverlay>
        </Link>
    </Box>
</AspectRatio></LinkBox>)

ExamCard.defaultProps = {
    exam: "WAEC",
    slug: "waec"
}