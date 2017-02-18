module.exports = {
	title: 'input',
	status: 'ready',
	context: {
		id: '01',
		label: 'Input Label',
		placeholderText: 'Placeholder Text'
	},
	variants: [
		{name: 'required'},
		{name: 'error'},
		{name: 'disabled'},
		{
			name: 'read-only',
			context: {
				value: 'Read Only Information'
			}
		},
		{
			name: 'password',
			context: {
				label: 'New Password',
				placeholderText: 'something secret…',
				type: 'password'
			}
		}
	]
};
