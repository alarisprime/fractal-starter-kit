const variantNames = [
	'left',
	'up',
	'right'
];

let variants = [
	{
		name: 'default',
		label: 'Down',
		context: {
			modifiers: ['down']
		}
	}
];

variants = variants.concat(variantNames.map(c => {
	return {
		name: c,
		context: {
			modifiers: [c]
		}
	};
}));

module.exports = {
	status: 'ready',
	context: {},
	variants: variants
};
