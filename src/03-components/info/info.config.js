const variants = [
	'primary',
	'danger',
	'success',
	'warning',
	'emphasis',
	'light',
	'fuse'
];

module.exports = {
	title: 'info',
	status: 'ready',
	context: {
		label: 'Label',
		content: 'Any Information'
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
