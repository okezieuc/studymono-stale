const textify = (block) => {
	switch(block._type) {
		case 'block':
			return block.children.map((item) => textify(item)).join('');
		case 'span':
			return block.text
		case 'latex':
			return block.body
		default:
			return ""
	}
}

const blockToText = (document) => (
	document.map((block) => textify(block)).join(' ')
)

export default blockToText