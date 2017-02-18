import getUiTokens from '../../../js/lib/ui-tokens';

const initializeFontSizes = function () {
	const config = getUiTokens();

	const dest = document.querySelectorAll('.js-fonts')[0];
	const sampleText = 'hamburgerfonstiv';

	if (config.fontSizes && dest) {
		const fontSizes = config.fontSizes;

		Object.keys(fontSizes)
		.sort(function (a, b) {
			return a - b;
		})
		.reverse()
		.forEach(function (k) {
			let title = 'base-font-size';

			if (k > 0) {
				title = 'base-font-size + ' + k;
			} else if (k < 0) {
				title = 'base-font-size - ' + (k * -1);
			}

			dest.insertAdjacentHTML('beforeend', '<div class="sg-font-size"><div class="sg-font-size__text" style="font-size:' + fontSizes[k] + '">' + sampleText + '</div><div class="sg-font-size__title">' + title + '</div></div>');
		});
	}
};

export default initializeFontSizes;
