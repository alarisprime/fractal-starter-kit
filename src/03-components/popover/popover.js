const triggerHandlerGenerator = popover => {
	let closePopover;
	let globalClickHandler;

	closePopover = () => {
		const parent = popover;

		document.removeEventListener('click', globalClickHandler);
		// document.removeEventListener('touchstart', globalClickHandler);
		parent.classList.remove('popover--open');
	};

	globalClickHandler = e => {
		const triggerEl = (e.target) ? e.target : e.srcElement;

		if (!popover.contains(triggerEl)) {
			e.preventDefault();
			e.stopPropagation();
			closePopover();
		}
	};

	const bindGlobalClickHandler = () => {
		document.addEventListener('click', globalClickHandler);
		// document.addEventListener('touchstart', globalClickHandler);
	};

	return e => {
		const parent = popover;

		// prevent default behaviors like follow a clicked link etc.
		e.preventDefault();

		if (parent.classList.contains('popover--open')) {
			closePopover();
		} else {
			parent.classList.add('popover--open');
			bindGlobalClickHandler();
		}
	};
};

const initPopovers = () => {
	const popovers = Array.from(document.querySelectorAll('[data-popover]'));

	popovers.forEach(popover => {
		Array.from(popover.querySelectorAll('.popover__target'))
			.forEach(target => {
				target.addEventListener('click', triggerHandlerGenerator(popover));
				// target.addEventListener('touchstart', triggerHandlerGenerator(popover));
			});
	});
};

export default initPopovers;
