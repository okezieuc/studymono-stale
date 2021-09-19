const fs = require('fs')
const prettier = require('prettier')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()

const siteUrl = "https://www.studymono.com"

let locations = [
	"", "/blog", "/terms-and-conditions", 
]

;(async () => {
	const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
	
	//create blog post pages
	const postsDirectory = path.join(process.cwd(), '_posts')
	const postFiles =  fs.readdirSync(postsDirectory)
	postFiles.map((post) => {
		const postUrl = post.replace(/\.md$/, '')
		locations.push(`/blog/${postUrl}`)
	})
	
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
