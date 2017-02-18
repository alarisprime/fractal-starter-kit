// https://github.com/oneuijs/You-Dont-Need-jQuery#1.7

function parentsUntil(el, selector, filter) {
	const result = [];
	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

	// match start from parent
	el = el.parentElement;
	while (el && !matchesSelector.call(el, selector)) {
		if (!filter) { // eslint-disable-line no-negated-condition
			result.push(el);
		} else {
			if (matchesSelector.call(el, filter)) { // eslint-disable-line no-lonely-if
				result.push(el);
			}
		}
		el = el.parentElement;
	}
	return result;
}

export default parentsUntil;
