const iconNames = SVG_ICONS || []; // eslint-disable-line no-undef

const specialIcons = [
	'facebook',
	'google-plus',
	'twitter'
];

const initIconSamples = function () {
	const dest = document.querySelectorAll('.js-icon-list')[0];

	if (dest && iconNames.length > 0) {
		iconNames.forEach(function (k) {
			const modifierClassNames = [];

			if (specialIcons.includes(k)) {
				modifierClassNames.push(`icon--${k}`);
			}

			dest.insertAdjacentHTML('beforeend', `
				<tr class="sg-icon">
					<td class="sg-icon__symbol">
						<svg class="icon ${modifierClassNames.join(' ')} icon--xlarge"><use xlink:href="#${k}"></use></svg>
						<svg class="icon ${modifierClassNames.join(' ')} icon--large"><use xlink:href="#${k}"></use></svg>
						<svg class="icon ${modifierClassNames.join(' ')}"><use xlink:href="#${k}"></use></svg>
						<svg class="icon ${modifierClassNames.join(' ')} icon--small"><use xlink:href="#${k}"></use></svg>
					</td>
					<td class="sg-icon__label">${k}</td>
				</tr>`);
		});
	}
};

export default initIconSamples;
