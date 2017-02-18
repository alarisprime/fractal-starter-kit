// https://github.com/oneuijs/You-Dont-Need-jQuery#1.6

function closest(el, selector) {
	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		} else { // eslint-disable-line no-else-return
			el = el.parentElement;
		}
	}
	return null;
}

export default closest;
