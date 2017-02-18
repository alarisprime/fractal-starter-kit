module.exports = {
	title: 'avatar',
	status: 'ready',
	context: {
		name: 'Jane Doe',
		url: 'https://www.gravatar.com/avatar/0bc83cb571cd1c50ba6f3e8a78ef1346?d=monsterid&s=200'
	},
	variants: [
		{
			name: 'tiny',
			context: {
				modifiers: ['tiny']
			}
		},
		{
			name: 'large',
			context: {
				modifiers: ['large']
			}
		},
		{
			name: 'xlarge',
			label: 'Extra Large',
			context: {
				modifiers: ['xlarge']
			}
		}
	]
};
