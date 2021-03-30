import { Box, AspectRatio, Text, LinkBox, LinkOverlay, } from'@chakra-ui/react'
import Link from 'next/link'

export const SubjectCard = ({subject, slug, subtitle, ...props}) => (<LinkBox {...props}>
        <AspectRatio ratio={16 / 12}>
        <Box fontSize={["xl", null, "4xl"]} fontWeight="bold"
        borderRadius={[4, null, 8]} border="1px solid"></Box>
    </AspectRatio>
    <Box>
        <Box fontWeight="bold" fontSize={["md", null, "2xl"]} mt={[2, null, 4]} ml={[2, null, 4]}>
            <Link href={slug} passHref>
                <LinkOverlay>
                    { subject }
                </LinkOverlay>
            </Link>
        </Box>
        <Text fontWeight="light" fontSize={["sm", null, "xl"]} ml={[2, null, 4]}>{subtitle}</Text>
    </Box>
</LinkBox>) 

SubjectCard.defaultProps = {
    subject: "Physics",
    slug: "/pastquestions/subject/phy/1",
    subtitle: "Subtitle",
}