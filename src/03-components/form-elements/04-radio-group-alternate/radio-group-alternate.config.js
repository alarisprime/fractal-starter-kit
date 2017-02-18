module.exports = {
	title: 'radio-group-alternate',
	status: 'ready',
	context: {
		legend: 'What kind of discussion?',
		formName: 'kind',
		radios: [
			{
				id: '01',
				label: 'Idea',
				checked: true
			},
			{
				id: '02',
				label: 'Question'
			},
			{
				id: '03',
				label: 'Problem'
			},
			{
				id: '04',
				label: 'Others'
			}
		]
	},
	variants: [
		{
			name: 'compact',
			context: {
				modifiers: ['compact']
			}
		}
	]
};
