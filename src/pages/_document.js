import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
					<link rel="shortcut icon" href="/favicon.png" />
					<link rel="icon" type="image/png" href="/favicon-196x196.png" />
					<link rel="apple-touch-icon" href="/touch-icon-iphone.png" />
					<script 
						async
						defer
						data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
						data-host-url={process.env.NEXT_PUBLIC_UMAMI_DATA_HOST}
						data-domains="www.studymono.com"
						src="/umami.js"
					/>
				</Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

//<link href="https://fonts.googleapis.com/css2?family=Mandali&display=swap" rel="stylesheet" />
//<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap" rel="stylesheet" />
//<link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;600;700&display=swap" rel="stylesheet" />
//<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;500;600;700&display=swap" rel="stylesheet" />