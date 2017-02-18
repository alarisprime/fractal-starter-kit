module.exports = {
	status: 'ready',
	context: {
		nav: {
			icons: {
				profile: {
					name: 'person'
				},
				messages: {
					name: 'comment'
				},
				search: {
					name: 'search'
				}
			},
			counter: {
				classNames: ['floating-counter__counter']
			}
		},
		viewAllBtn: {
			label: 'View All →',
			modifiers: ['full-width']
		},

		newMessageBtn: {
			label: 'New Message',
			modifiers: ['primary', 'full-width', 'flat']
		},
		breadcrumbs: {
			parents: [
				{
					title: 'Home',
					to: '#'
				},
				{
					title: 'UD Refine',
					to: '#'
				},
				{
					title: 'Knowledge Base',
					to: '#'
				},
				{
					title: 'Getting Started',
					to: '#'
				}
			]
		}
	}
};
