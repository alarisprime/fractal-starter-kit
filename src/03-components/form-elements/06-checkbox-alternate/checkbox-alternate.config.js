module.exports = {
	title: 'checkbox-alternate',
	status: 'ready',
	context: {
		legend: 'Scheduled Days',
		formName: 'days',
		checkboxes: [
			{
				id: '01',
				label: 'Monday',
				checked: true
			},
			{
				id: '02',
				label: 'Tuesday'
			},
			{
				id: '03',
				label: 'Wednesday'
			},
			{
				id: '04',
				label: 'Thursday'
			},
			{
				id: '05',
				label: 'Friday'
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
