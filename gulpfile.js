'use strict';
const path = require('path');

const filenames = require('gulp-filenames');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sassLint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');
const svgmin = require('gulp-svgmin');
const svgStore = require('gulp-svgstore');
const xo = require('gulp-xo');

const del = require('del');
const webpack = require('webpack');
const fractal = require('./fractal.js'); // import the Fractal instance configured in the fractal.js file

const logger = fractal.cli.console;      // make use of Fractal's console object for logging

const watchOpt = {awaitWriteFinish: true};

const STYLES_WATCHLIST = [
	'scss/**/*.scss',
	'components/**/*.scss'
];

const JS_LINT_WATCHLIST = [
	'components/**/*.js',
	'js/**/*.js',
	'*.js'
];

const JS_BUILD_WATCHLIST = [
	'components/**/*.js',
	'!components/**/*.config.js',
	'js/**/*.js'
];

const SVG_WATCHLIST = [
	'components/atoms/**/*.svg'
];

let isProduction = false;

/*
* An example of a Gulp task that starts a Fractal development server.
*/

gulp.task('fractal:start', function () {
	const server = fractal.web.server({
		sync: true
	});
	server.on('error', err => logger.error(err.message));
	return server.start().then(() => {
		logger.success(`Fractal server is now running at ${server.urls.sync.local}`);
	});
});

/*
* An example of a Gulp task that to run a static export of the web UI.
*/

gulp.task('fractal:build', function () {
	const builder = fractal.web.builder();
	builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
	builder.on('error', err => logger.error(err.message));
	return builder.build().then(() => {
		logger.success('Fractal build completed!');
	});
});

/* CSS */
gulp.task('css:lint', () =>
	gulp.src(STYLES_WATCHLIST)
	.pipe(plumber())
	.pipe(sassLint())
	.pipe(sassLint.format()));

gulp.task('css:process', function () {
	const postcssPipeline = [require('autoprefixer')];

	if (isProduction) {
		postcssPipeline.push(require('cssnano'));
	}

	return gulp.src([
		'scss/base.scss',
		'scss/styleguide.scss'
	])
	.pipe(plumber())
	.pipe(gulpif(!isProduction, sourcemaps.init()))
	.pipe(sassGlob())
	.pipe(sass.sync({
		precision: 10,
		includePaths: ['./node_modules']
	})).on('error', sass.logError)
	.pipe(postcss(postcssPipeline))
	.pipe(gulpif(!isProduction, sourcemaps.write()))
	.pipe(gulp.dest('public/css'));
});

gulp.task('css:clean', function () {
	return del(['public/css']);
});

gulp.task('css:watch', function () {
	gulp.watch(STYLES_WATCHLIST, watchOpt, gulp.series('css'));
});

gulp.task('css', gulp.series(gulp.parallel('css:clean', 'css:lint'), 'css:process'));

/* Javascript */
gulp.task('js:lint', () => {
	return gulp.src(JS_LINT_WATCHLIST, {base: './'})
	.pipe(plumber())
	.pipe(xo());
});

let webpackConfigFile = require('./webpack.config');

gulp.task('js:process', function (cb) {
	let webpackConfig = webpackConfigFile.dev;

	if (isProduction) {
		webpackConfig = webpackConfigFile.prod;
	}

	const iconNames = filenames.get('icons').map(function (fpath) {
		return path.basename(fpath, '.svg');
	});

	webpackConfig.plugins.push(new webpack.DefinePlugin({
		SVG_ICONS: JSON.stringify(iconNames)
	}));

	webpack(webpackConfig, function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack', err);
		}

		gutil.log('[webpack]', stats.toString());
		cb();
	});
});

gulp.task('js:clean', function () {
	return del(['public/js']);
});

gulp.task('js:watch', function () {
	gulp.watch(JS_LINT_WATCHLIST, watchOpt, gulp.series('js:lint'));
	gulp.watch(JS_BUILD_WATCHLIST, watchOpt, gulp.series('js'));
});

gulp.task('js', gulp.series('js:clean', 'js:process'));

/* Svg Icons */
gulp.task('svg:process', function () {
	return gulp
		.src(SVG_WATCHLIST)
		.pipe(filenames('icons'))
		.pipe(svgmin(function (file) {
			const prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [{
					cleanupIDs: {
						prefix: prefix + '-',
						minify: true
					}
				}]
			};
		}))
		.pipe(svgStore({
			inlineSvg: true
		}))
		.pipe(rename(function (path) {
			path.basename = '_icons';
			path.extname = '.hbs';
			return path;
		}))
		.pipe(gulp.dest('components/'))
		.pipe(rename(function (path) {
			path.basename = 'inline';
			path.extname = '.svg';
			return path;
		}))
		.pipe(gulp.dest('public/icons'));
});

gulp.task('svg:clean', function () {
	return del(['public/svg']);
});

gulp.task('svg', gulp.series('svg:clean', 'svg:process'));

gulp.task('svg:watch', function () {
	gulp.watch(SVG_WATCHLIST, watchOpt, gulp.series('svg:process'));
});
/* Fonts */

gulp.task('fonts:copy', function () {
	return gulp.src('assets/fonts/**/*')
	.pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('fonts:clean', function (done) {
	return del(['public/assets/fonts'], done);
});

gulp.task('fonts', gulp.series('fonts:clean', 'fonts:copy'));

gulp.task('fonts:watch', function () {
	gulp.watch('assets/fonts/**/*', watchOpt, gulp.parallel('fonts'));
});

/* Images */

gulp.task('images:copy', function () {
	return gulp.src('assets/img/**/*')
	.pipe(gulp.dest('public/assets/img'));
});

gulp.task('images:clean', function (done) {
	return del(['public/assets/img'], done);
});

gulp.task('images', gulp.series('images:clean', 'images:copy'));

gulp.task('images:watch', function () {
	gulp.watch('assets/img/**/*', watchOpt, gulp.parallel('images'));
});

gulp.task('build:clean', function () {
	return del(['dist']);
});

gulp.task('assets', gulp.series('svg', gulp.parallel('css', 'js:lint', 'js', 'fonts', 'images')));
gulp.task('watch', gulp.parallel('svg:watch', 'css:watch', 'js:watch', 'fonts:watch', 'images:watch'));

gulp.task('dev', gulp.series('assets', 'fractal:start', 'watch'));

gulp.task('build', gulp.series(function (cb) {
	isProduction = true;

	cb();
}, 'assets', 'build:clean', 'fractal:build'));

gulp.task('default', gulp.series('build'));
