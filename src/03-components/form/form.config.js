module.exports = {
	title: 'form',
	status: 'ready',
	context: {},
	default: 'stacked',
	variants: [
		{
			name: 'stacked',
			context: {
				modifiers: ['stacked']
			}
		},
		{
			name: 'horizontal',
			context: {
				modifiers: ['horizontal']
			}
		},
		{
			name: 'inline',
			context: {
				input2: {
					id: '02'
				}
			}
		}
	]
};
