module.exports = {
	title: 'select',
	status: 'ready',
	context: {
		formName: 'selection',
		id: '01',
		label: 'Select Label',
		options: [
			{name: 'Option One', value: 1},
			{name: 'Option Two', value: 2},
			{name: 'Option Three', value: 3},
			{
				name: 'Grouped Options',
				children: [
					{name: 'Group Option One', value: 1},
					{name: 'Group Option Two', value: 2},
					{name: 'Group Option Three', value: 3}
				]
			}
		]
	},
	variants: [
		{name: 'required'},
		{name: 'error'},
		{name: 'disabled'},
		{name: 'multiple-selection'}
	]
};
