import { Box, AspectRatio, LinkBox, LinkOverlay, } from'@chakra-ui/react'
import Link from 'next/link'

export const ExamCard = ({ exam, slug }) => (<LinkBox><AspectRatio ratio={16 / 12}>
    <Box fontSize={["md", null, "4xl"]} fontWeight="bold"
    borderRadius={[4, null, 8]} border="1px solid">
        <Link href={`/pastquestions/${slug}`} passHref>
            <LinkOverlay>
                {exam}
            </LinkOverlay>
        </Link>
    </Box>
</AspectRatio></LinkBox>)

ExamCard.defaultProps = {
    exam: "WAEC",
    slug: "waec"
}