import { Box, AspectRatio, Text, LinkBox, LinkOverlay, } from'@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export const SubjectCard = ({subject, slug, subtitle, code="bio", exam=null, ...props}) => (<LinkBox {...props} role="group">
        <AspectRatio ratio={16 / 12}>
        <Box fontSize={["xl", null, "4xl"]} fontWeight="bold"
        border="1px none" transition="0.3s ease-in-out"
				borderRadius="1em"
				boxShadow={{
						lg:"0px 5px 5px 0px #b1b1b1"
				}}
				_groupHover = {{
					transform: { 
						lg: "translate(0px, -10px)",
					},	
					boxShadow: {
						lg:"0px 10px 10px 0px #b1b1b1"
					}
				}}>
					<Image
						src={`studymono/categories/${code}.png`}
						alt={`Cover for ${subject} questions on Studymono`}
						layout="fill"
						objectFit="cover"
						className="round-corners"
					/>
				</Box>
    </AspectRatio>
    <Box>
        <Box fontWeight="bold" fontSize={["md", "lg", "2xl"]} mt={[2, null, 4]} ml={[2, null, 4]}
					color="tint.600">
            <Link href={slug} passHref>
                <LinkOverlay
									 className={`umami--click--study-${exam ? exam.toLowerCase() + "-" : ""}${code.toLowerCase()}-questions`}
								>
                    { subject }
                </LinkOverlay>
            </Link>
        </Box>
        <Text fontWeight="light" fontSize={["sm", null, "lg"]} ml={[2, null, 4]}
					color="tint.500">{`${exam ? exam.toUpperCase() : "Study" } ${subject} Questions`}</Text>
    </Box>
</LinkBox>) 

SubjectCard.defaultProps = {
    subject: "Physics",
    slug: "/pastquestions/subject/phy/1",
    subtitle: "Subtitle",
}