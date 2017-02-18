const subtitleText = 'A nice short description or subtitle to go with the title.';

const menuItems = [
	{
		label: 'One',
		to: '#'
	},
	{
		label: 'Two',
		to: '#'
	},
	{
		label: 'Three',
		to: '#'
	},
	{
		label: 'Four',
		to: '#'
	}
];

const menuItemsWithIcons = menuItems.map(a => {
	const b = Object.assign({}, a);

	b.icon = {
		name: 'three-bars'
	};

	return b;
});

const menuItemsWithSubtitles = menuItems.map(a => {
	const b = Object.assign({}, a);

	b.subtitle = subtitleText;

	return b;
});

module.exports = {
	title: 'menu',
	status: 'ready',
	context: {
		title: 'Knowledge Base',
		menuItems: menuItems
	},
	variants: [
		{
			name: 'separated',
			context: {
				menuItems: menuItems
			}
		},
		{
			name: 'icons',
			context: {
				menuItems: menuItemsWithIcons
			}
		},
		{
			name: 'subtitles',
			context: {
				menuItems: menuItemsWithSubtitles
			}
		},
		{
			name: 'horizontal',
			context: {
				menuItems: menuItems
			}
		},
		{
			name: 'horizontal-separated',
			context: {
				menuItems: menuItems
			}
		},
		{
			name: 'horizontal-icons',
			context: {
				menuItems: menuItemsWithIcons
			}
		},
		{
			name: 'hide-labels-small',
			context: {
				modifiers: ['horizontal', 'hide-labels-on-small'],
				menuItems: menuItemsWithIcons
			}
		}
	]
};
