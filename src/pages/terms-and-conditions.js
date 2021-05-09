import {
 	Box, Text,
	Container,
	Heading,
} from '@chakra-ui/react'
import Head from 'next/head'
import { NavBar, } from '../components/NavBar'
import { Footer, } from '../components/Footer'
import { CallToAction, } from '../components/CallToAction'
import { RecommendedReads, } from '../components/RecommendedReads'
import { PageHeading, } from '../components/pages/PageHeading'
import { getRecommendedPosts } from '../lib/api'
import { H2 as SubHeading, Paragraph, } from '../components/BlogStructure'
			

const ListItem = ({children}) => <Text as="li" my={[1,2,4]}>
{ children }
</Text>

const Index = ({ recommendedPosts }) => (
  <Box>
		<Head>
			<title>Terms and Conditions - Studymono</title>
			<meta property="og:title" content="Terms and Conditions - Studymono" />	
			<link rel="canonical" href="https://www.studymono.com/terms-and-conditions" />
		</Head>
	 	<NavBar />
		<Box bg="tint.400" h={[6, null, 8]} />
		<Box bg="tint.200" h={[40, null, 56]} mb={[-28, null, -48]} />
		<PageHeading />
		
		<Container maxW={["2xl", null, "4xl"]} mb={[20, null, 40]} fontSize={["md", null, "2xl"]} px={["1.5em"]}>
			<SubHeading>
				AGREEMENT TO TERMS
			</SubHeading>
				<Paragraph>
					These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Studymono (“we,” “us” or “our”), concerning your access to and use of the www.studymono.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). 
				</Paragraph>
				<Paragraph>
					You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
				</Paragraph>
				<Paragraph>
					Supplemental Terms of Service or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
				</Paragraph>
				<Paragraph>
					We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive specific notice of each such change.
				</Paragraph>
				<Paragraph>
					It is your responsibility to periodically review these Terms of Service to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your continued use of the Site after the date such revised Terms of Service are posted. 
				</Paragraph>
				<Paragraph>
					The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
				</Paragraph>
				<Paragraph>
					Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
				</Paragraph>
			<SubHeading>
				INTELLECTUAL PROPERTY RIGHTS
			</SubHeading>
				<Paragraph>
					The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
				</Paragraph>
				<Paragraph>
					Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
				</Paragraph>
			<SubHeading>
				PROHIBITED ACTIVITIES
			</SubHeading>
				<Paragraph>
					You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. 
				</Paragraph>
				<Paragraph>
					As a user of the Site, you agree not to:
				</Paragraph>
				<ol>
					<ListItem>
						systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
					</ListItem>
					<ListItem>
						circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.
					</ListItem>
					<ListItem>
						engage in unauthorized framing of the Site.
					</ListItem>
					<ListItem>
						make improper use of our support services or submit false reports of abuse or misconduct.
					</ListItem>
					<ListItem>
						engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
					</ListItem>
					<ListItem>
						interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.
					</ListItem>
					<ListItem>
						use any information obtained from the Site in order to harass, abuse, or harm another person.
					</ListItem>
					<ListItem>
						use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.
					</ListItem>
					<ListItem>
						decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.
					</ListItem>
					<ListItem>
						attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.
					</ListItem>
					<ListItem>
						harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.
					</ListItem>
					<ListItem>
						delete the copyright or other proprietary rights notice from any Content.
					</ListItem>
					<ListItem>
						copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
					</ListItem>
					<ListItem>
						upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.
					</ListItem>
					<ListItem>
						except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.
					</ListItem>
					<ListItem>
						disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.
					</ListItem>
					<ListItem>
						use the Site in a manner inconsistent with any applicable laws or regulations.
					</ListItem>
				</ol>
			<SubHeading>
				THIRD-PARTY WEBSITES AND CONTENT
			</SubHeading>
				<Paragraph>
					The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). 
				</Paragraph>
				<Paragraph>
					Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. 
				</Paragraph>
				<Paragraph>
					Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Service no longer govern. 
				</Paragraph>
			<SubHeading>
				TERM AND TERMINATION
			</SubHeading>
				<Paragraph>
					These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
				</Paragraph>
			<SubHeading>
				MODIFICATIONS AND INTERRUPTIONS
			</SubHeading>
				<Paragraph>
					We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. 
				</Paragraph>
				<Paragraph>
					We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Site.
				</Paragraph>
				<Paragraph>
					We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. 
				</Paragraph>
				<Paragraph>
					We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. 
				</Paragraph>
				<Paragraph>
					Nothing in these Terms of Service will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.
				</Paragraph>
			<SubHeading>
				DISCLAIMER
			</SubHeading>
				<Paragraph>
					THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (4) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (5) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
				</Paragraph>
				<Paragraph>
					AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
				</Paragraph>
			<SubHeading>
				CONTACT US
			</SubHeading>
				<Paragraph>
					In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
				</Paragraph>
				<Paragraph>
					Studymono<br />
					contact@studymono.com
				</Paragraph>
		</Container>
		<RecommendedReads posts={recommendedPosts} />
		<CallToAction />
		<Footer hideTop={true} />
	</Box>
)

export async function getStaticProps() {
	const recommendedPosts = getRecommendedPosts()
  
	return {
		props: {
		  recommendedPosts: recommendedPosts,
		},
	  }
  }

export default Index
