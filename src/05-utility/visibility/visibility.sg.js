import getUiTokens from '../../../js/lib/ui-tokens';

const initUtilVisiblityClasses = function () {
	const config = getUiTokens();

	const dest = document.querySelectorAll('.js-util-visibility-classes')[0];

	if (config.breakpoints && dest) {
		const breakpoints = config.breakpoints;

		const sortedBreakpoints = Object.keys(breakpoints)
		.sort(function (a, b) {
			return breakpoints[a] - breakpoints[b];
		});

		sortedBreakpoints.forEach(function (k) {
			dest.insertAdjacentHTML('beforeend', `<tr><td><code>.visibility-${k}-show</code></td><td><span class="visibility-${k}-show">👁 Visible</span></td></tr>`);
		});

		sortedBreakpoints.forEach(function (k) {
			dest.insertAdjacentHTML('beforeend', `<tr><td><code>.visibility-${k}-hide</code></td><td><span class="visibility-${k}-hide">👁 Visible</span></td></tr>`);
		});
	}
};

export default initUtilVisiblityClasses;
