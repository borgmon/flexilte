export default {
	TextBox: {
		text: 'text',
		type: 'h1'
	},
	CodeBlock: {
		language: 'ts',
		code: '// code'
	},
	ImageBox: {
		url: 'https://placedog.net/200/200'
	},
	CardBox: {
		title: 'title',
		icon: 'ic:coffee',
		body: 'body',
		footer: 'footer'
	},
	Avatar: {
		src: 'https://placedog.net/512/512',
		width: 'w-32',
		rounded: 'rounded-full'
	}
} as Record<string, Record<string, any>>;
