import getUiTokens from '../../../js/lib/ui-tokens';

const initializeColorPalette = function () {
	const config = getUiTokens();

	const dest = document.querySelectorAll('.js-colors')[0];

	if (config.colors && dest) {
		const colors = config.colors;
		console.log(colors);
		Object.keys(colors).forEach(function (k) {
			dest.insertAdjacentHTML('beforeend', '<div class="sg-swatch"><div class="sg-swatch__color" style="background-color:' + colors[k] + '"></div><h3 class="sg-swatch__title">' + k + '</h3><p class="sg-swatch__code">' + colors[k] + '</p></div>');
		});
	}
};

export default initializeColorPalette;
