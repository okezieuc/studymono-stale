import { Box, HStack, LinkBox, LinkOverlay, } from '@chakra-ui/react'
import Link from 'next/link'

const WideLink = ({ text, slug }) => <LinkBox><Box border="1px solid" p={[0, null, 2]} 
    minW={["50px", null, "150px"]} textAlign="center"
    borderRadius={[4, null,8]} >
    <Link href={slug} passHref>
        <LinkOverlay>
            { text }
        </LinkOverlay>
    </Link>
</Box>
</LinkBox>

const SlimLink = ({ slug, number }) => <LinkBox><Box border="1px solid" p={[0, null, 2]}
     minW={["25px", null, "75px"]} textAlign="center"
    borderRadius={[4, null,8]}>
    <Link href={slug} passHref>
        <LinkOverlay>
            { number }
        </LinkOverlay>
    </Link>
</Box>
</LinkBox>

const NoLinkSlimLink = ({ number, }) => <Box border="1px solid" p={[0, null, 2]} 
    minW={["25px", null, "75px"]} textAlign="center"
    borderRadius={[4, null,8]}>
            { number }
</Box>



export const PaginationLink = ({ prefix, current, total, ...props }) => (<HStack spacing={[2, null, 4]} w="min-content"
     m="0 auto" fontSize={["sm", null,"md"]} {...props} >
    <WideLink text ="First" slug={`${prefix}1`} />
    <SlimLink slug={`${prefix}${current-1}`} number={current-1} />
    <NoLinkSlimLink number={current} />
    <SlimLink slug={`${prefix}${current+1}`} number={current+1} />
    <WideLink text="Last" slug={`${prefix}${total}`} />
</HStack>)

PaginationLink.defaultProps = {
    prefix: "/pastquestions/subject/phy/",
    current: 2,
    total: 4,
}