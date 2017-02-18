module.exports = {
	title: 'radio',
	status: 'ready',
	context: {
		legend: 'Radio Group Label',
		formName: 'options',
		radios: [
			{
				id: '01',
				label: 'Radio Label One',
				checked: true
			},
			{
				id: '02',
				label: 'Radio Label Two'
			},
			{
				id: '03',
				label: 'Radio Label Three'
			}
		]
	},
	variants: [
		{name: 'required'},
		{name: 'error'},
		{name: 'disabled'}
	]
};
