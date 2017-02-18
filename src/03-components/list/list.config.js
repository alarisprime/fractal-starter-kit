const variants = [
	'small',
	'inline',
	'inline-dot-separated',
	'light'
];

module.exports = {
	title: 'list',
	status: 'ready',
	context: {
		items: [
			'One',
			'Two',
			'Three',
			'Four',
			'Five'
		]
	},
	variants: variants.map(c => {
		return {
			name: c,
			context: {
				modifiers: [c]
			}
		};
	})
};
