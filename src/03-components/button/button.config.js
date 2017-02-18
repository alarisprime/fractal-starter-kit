const variants = [
	'neutral',
	'primary',
	'danger',
	'info',
	'success',
	'warning',
	'disabled'
];

// Only visible with one of the above variants
const coVariants = [
	'full-width',
	'medium-full-width',
	'small',
	'flat'
];

let variantsContext = variants.map(c => {
	return {
		name: c,
		context: {
			modifiers: [c]
		}
	};
});

variantsContext = variantsContext.concat(coVariants.map(c => {
	return {
		name: c,
		context: {
			modifiers: ['neutral', c]
		}
	};
}));

module.exports = {
	title: 'Button',
	status: 'ready',
	context: {
		label: 'Tap Me',
		to: '#'
	},
	variants: variantsContext
};
