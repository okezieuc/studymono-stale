const fs = require('fs')
const prettier = require('prettier')
const sanityClient = require('@sanity/client')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
	token: process.env.SANITY_TOKEN
})

const siteUrl = "https://www.studymono.com"

let locations = [
	"", "/blog", "/terms-and-conditions",
	"/pastquestions", "/pastquestions/waec", "/pastquestions/jamb", 
]

const dataschema = {"exams":{"WAEC":"WAEC","JAMB":"JAMB"},"subjects":{"PHY":"Physics","CHEM":"Chemistry","BIO":"Biology","MATH":"Mathematics","ENG":"English"}}

;(async () => {
	const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
	
	//create blog post pages
	const postsDirectory = path.join(process.cwd(), '_posts')
	const postFiles =  fs.readdirSync(postsDirectory)
	postFiles.map((post) => {
		const postUrl = post.replace(/\.md$/, '')
		locations.push(`/blog/${postUrl}`)
	})
	
	//create /pastquestions/subject/[subject]/[number] pages 
	for (let num=0; num<Object.keys(dataschema.subjects).length; num++) {
		const subject = Object.keys(dataschema.subjects)[num]
		for(let i=0; i<2; i++) {
			locations.push(`/pastquestions/subject/${subject.toLowerCase()}/${i+1}`)
		}
	}
	
	//create /pastquestions/[exam]/[subject]/[number] pages 
	for(let num=0; num<Object.keys(dataschema.exams).length; num++) {
		const exam = Object.keys(dataschema.exams)[num]
		for (let subnum=0; subnum<Object.keys(dataschema.subjects).length; subnum++) {
			const subject = Object.keys(dataschema.subjects)[subnum]
			for(let i=0; i<2; i++) {
				locations.push(`/pastquestions/${exam.toLowerCase()}/${subject.toLowerCase()}/${i+1}`)
			}
		}
	}
	
	//create /pastquestions/[...questionid] pages 
	const questionIdQuery = () => `*[_type == "pastquestion" ]._id`
	const questionIdList = await sanity.fetch(questionIdQuery())
	questionIdList.map((id) => locations.push(`/pastquestions/${id}`) )

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
					${
						locations.map((loc)=>(`
						<url>
							<loc>${`${siteUrl}${loc}`}</loc>
							</url>`))
						.join('')
					}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
