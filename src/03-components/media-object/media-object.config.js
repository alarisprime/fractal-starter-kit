module.exports = {
	title: 'media-object',
	status: 'ready',
	context: {
		figure: '<img data-src="holder.js/100x100">',
		headline: 'Some Headline text',
		text: 'Some Headline text'
	},
	variants: [
		{
			name: 'align-top',
			context: {
				modifiers: ['align-top']
			}
		},
		{
			name: 'spacious',
			context: {
				modifiers: ['spacious']
			}
		}
	]
};
