const variants = [
	'padded',
	'2-col',
	'2-col-async',
	'2-col-async-reverse',
	'3-col',
	'3-col-async'
];

module.exports = {
	title: 'layout',
	status: 'ready',
	context: {
		elements: 9
	},
	variants: variants.map(c => {
		const columns = {
			one: false,
			two: false,
			three: false
		};

		const col = Number.parseInt(c, 10);

		if (col === 3) {
			columns.three = true;
		} else if (col === 2) {
			columns.two = true;
		} else {
			columns.one = true;
		}

		return {
			name: c,
			context: {
				modifiers: [c],
				columns
			}
		};
	})
};
