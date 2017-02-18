'use strict';

const path = require('path');
const mandelbrot = require('@frctl/mandelbrot');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Starter Kit');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'src'));

fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', 'wip');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell the Fractal where to generate static HTMLs.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));

/*
 * Customizing Mandelbrot theme
 */
const customisedTheme = mandelbrot({
	skin: 'white'
});

fractal.web.theme(customisedTheme);

/*
 * Adding helpers to Handlebars
 */
const engine = fractal.components.engine();
engine.handlebars.registerHelper('times', function (context, options) {
	var out = '';
	var data;

	if (options.data) {
		data = engine.handlebars.createFrame(options.data);
	}

	for (var i = 0; i < context; ++i) {
		if (data) {
			data.index = i;
			data.mod2Index = (i % 2) + 1;
			data.mod3Index = (i % 3) + 1;
		}

		out += options.fn(context[i], {data});
	}

	return out;
});

engine.handlebars.registerHelper('increment', function (number, options) {
	if (typeof number === 'undefined' || number === null) {
		return null;
	}

	// Increment by inc parameter if it exists or just by one
	return number + (options.hash.n || 1);
});

engine.handlebars.registerHelper('decrement', function (number, options) {
	if (typeof number === 'undefined' || number === null) {
		return null;
	}

	// Decrement by inc parameter if it exists or just by one
	return number - (options.hash.n || 1);
});

// based on http://stackoverflow.com/a/31632215
engine.handlebars.registerHelper({
	eq: function (v1, v2) {
		return v1 === v2;
	},
	ne: function (v1, v2) {
		return v1 !== v2;
	},
	lt: function (v1, v2) {
		return v1 < v2;
	},
	gt: function (v1, v2) {
		return v1 > v2;
	},
	lte: function (v1, v2) {
		return v1 <= v2;
	},
	gte: function (v1, v2) {
		return v1 >= v2;
	},
	and: function (v1, v2) {
		return v1 && v2;
	},
	or: function (v1, v2) {
		return v1 || v2;
	}
});

fractal.components.set('default.context', {
	site: {
		title: 'Site Title',
		company: 'Company Name'
	}
});
