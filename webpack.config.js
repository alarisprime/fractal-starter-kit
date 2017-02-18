const webpack = require('webpack');

const baseConfig = {
	entry: {
		ui: './js/ui.js',
		styleguide: './js/styleguide.js'
	},
	output: {
		path: './public/js/',
		filename: '[name].bundle.js'
	},
	module: {
		preLoaders: [],
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader']
			}
		]
	},
	plugins: []
};

const devConfig = Object.assign({}, baseConfig);
devConfig.devtool = '#inline-source-map';

const prodConfig = Object.assign({}, baseConfig);
prodConfig.plugins = prodConfig.plugins.concat([
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			screw_ie8: true, // eslint-disable-line camelcase
			warnings: true
		}
	})
]);

module.exports = {
	dev: devConfig,
	prod: prodConfig
};
