import { Box, } from '@chakra-ui/react'

const CreditsList = [
	`<a href="http://www.freepik.com">Designed by macrovector / Freepik</a>`,
	`<a href="http://www.freepik.com">Designed by Freepik</a>`,
]

export const Credits = ()=> (
	<>
		{ 
			true
			? <>
				<Box color="tint.400" fontSize={["xs", null, "md"]}>
					Image Credits <br />
					<div
						dangerouslySetInnerHTML={
							{
								__html: CreditsList.join(", ")
							}
						}
					>
					
					</div>
					
				</Box>
			</>
			: ""
		}
	</>
)