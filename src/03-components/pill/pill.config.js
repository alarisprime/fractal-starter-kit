module.exports = {
	title: 'pill',
	status: 'ready',
	context: {
		label: 'some file.jpg'
	},
	variants: [
		{
			name: 'with-icon',
			context: {
				typeIcon: {
					name: 'file-media',
					modifiers: ['small']
				}
			}
		},
		{
			name: 'with-remove',
			context: {
				removeIcon: {
					name: 'x',
					modifiers: ['small']
				}
			}
		}
	]
};
