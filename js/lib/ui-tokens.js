const getUiTokens = () => {
	const content = window.getComputedStyle(document.body, ':before')
		.getPropertyValue('content')
		.slice(1, -1)
		.replace(/\\/g, '');

	return JSON.parse(content);
};

export default getUiTokens;
