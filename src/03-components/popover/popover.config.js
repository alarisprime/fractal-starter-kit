module.exports = {
	status: 'ready',
	context: {
		content: 'Content inside popover',
		target: {
			label: 'Open Popover',
			to: '#'
		}
	},
	variants: [
		{
			name: 'align-right',
			context: {
				modifier: 'align-right'
			}
		}
	]
};
