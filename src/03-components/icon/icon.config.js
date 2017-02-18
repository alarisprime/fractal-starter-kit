module.exports = {
	title: 'Icons',
	status: 'ready',
	context: {
		name: 'comment',
		classNames: []
	},
	default: 'medium',
	variants: [
		{
			name: 'list',
			label: 'List of Icons'
		},
		{
			name: 'small',
			context: {
				modifiers: ['small']
			}
		},
		{
			name: 'medium'
		},
		{
			name: 'large',
			context: {
				modifiers: ['large']
			}
		},
		{
			label: 'Extra Large',
			name: 'xlarge',
			context: {
				modifiers: ['xlarge']
			}
		},
		{
			name: 'mega',
			context: {
				modifiers: ['mega']
			}
		}
	]
};
