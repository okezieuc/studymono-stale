import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import CustomLink from '../components/customLink'
import { H1, H2, H3, H4, H5, H6, 
					BlockQuote } from '../components/BlogStructure'

export default function markdownToHtml(markdown) {
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        // Use CustomLink instead of <a>
        a: CustomLink,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        blockquote: BlockQuote,
      },
    })
    .processSync(markdown).result;
  return content
}
 