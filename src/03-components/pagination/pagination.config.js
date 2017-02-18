module.exports = {
	title: 'pagination',
	status: 'ready',
	context: {
		pages: 5,
		activePage: 2
	},
	variants: [
		{
			name: 'separated',
			context: {
				modifiers: ['separated']
			}
		}
	]
};
