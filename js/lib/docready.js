const docready = fn => {
	if (document.readyState === 'complete' || document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
};

export default docready;
