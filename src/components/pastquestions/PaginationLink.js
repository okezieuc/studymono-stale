import { Box, HStack, LinkBox, LinkOverlay, } from '@chakra-ui/react'
import Link from 'next/link'

const WideLink = ({ text, slug }) => <LinkBox><Box border="1px solid" p={[1, null, 2]} 
    minW={["50px", null, "150px"]} textAlign="center"
    borderColor="tint.400">
    <Link href={slug} passHref>
        <LinkOverlay className="umami--click--switch-pastquestions-page">
            { text }
        </LinkOverlay>
    </Link>
</Box>
</LinkBox>

const SlimLink = ({ slug, text, valid }) => <LinkBox><Box border="1px solid" p={[1, null, 2]}
     minW={["75px", null, "150px"]} textAlign="center"
    borderColor="tint.400" d={valid ? "block" : "none"}>
    <Link href={slug} passHref>
        <LinkOverlay className="umami--click--switch-pastquestions-page">
            { text }
        </LinkOverlay>
    </Link>
</Box>
</LinkBox>

const NoLinkSlimLink = ({ number, }) => <Box border="1px solid" p={[1, null, 2]} 
    minW={["25px", null, "75px"]} textAlign="center"
    borderColor="tint.400">
            { number }
</Box>



export const PaginationLink = ({ prefix, current, total, ...props }) => (<HStack spacing={[2, null, 4]} w="min-content"
     m="0 auto" fontSize={["sm", null,"md"]} {...props} >
    <WideLink text ="First" slug={`${prefix}1`} />
    <SlimLink valid={(current-1)>0} slug={`${prefix}${current-1}`} text="Previous" />
    <SlimLink valid={current<total} slug={`${prefix}${current+1}`} text="Next" />
    <WideLink text="Last" slug={`${prefix}${total}`} />
</HStack>)

PaginationLink.defaultProps = {
    prefix: "/pastquestions/subject/phy/",
    current: 2,
    total: 4,
}