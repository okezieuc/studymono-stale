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
