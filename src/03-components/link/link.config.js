module.exports = {
	title: 'link',
	status: 'ready',
	context: {
		label: 'A link',
		to: '#'
	},
	variants: [
		{
			name: 'reverse',
			context: {
				modifiers: ['reverse'],
				bodyClassNames: ['sg-bg-dark']
			}
		},
		{
			name: 'danger',
			context: {
				modifiers: ['danger']
			}
		}
	]
};
