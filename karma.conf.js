'use strict';

module.exports = function (config) {
	config.set({

			plugins: [
				'karma-jasmine',
				//'karma-chrome-launcher',
				//'karma-firefox-launcher',
				'karma-phantomjs-launcher',
				'karma-ng-html2js-preprocessor',
				//'karma-junit-reporter',
				'karma-commonjs'
			],

			// base path, that will be used to resolve files and exclude
			basePath: 'app',

			// list of files / patterns to load in the browser
			frameworks: ['jasmine'],

			files: [
				'components/chai/chai.js',
				'components/angular/angular.js',
				'components/angular-route/angular-route.js',
				'components/angular-animate/angular-animate.js',
				'components/angular-mocks/angular-mocks.js',
				'components/angular-sanitize/angular-sanitize.js',
				'components/angular-resource/angular-resource.js',
				'scripts/*.js',
				'scripts/**/*.js',
				'../test/mock/**/*.js',
				'../test/spec/**/*.js',

				'views/**/*.html',

				{pattern: '../test/mock/*.json', watched: true, served: true, included: false}
			],

			preprocessors: {
				'views/**/*.html': 'ng-html2js'
			},

			ngHtml2JsPreprocessor: {
				// setting this option will create only a single module that contains templates
				// from all the files, so you can load them all with module('templates')
				moduleName: 'templates'
				// stripPrefix: 'app/'
			},


			// list of files to exclude
			exclude: [],

			// test results reporter to use
			// possible values: dots || progress || growl
			reporters: ['progress'],

			// web server port
			port: 8080,

			// cli runner port
			runnerPort: 9100,

			// enable / disable colors in the output (reporters and logs)
			colors: true,

			// level of logging
			// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
			logLevel: config.LOG_INFO,

			// enable / disable watching file and executing tests whenever any file changes
			autoWatch: true,

			// Start these browsers, currently available:
			// - Chrome
			// - ChromeCanary
			// - Firefox
			// - Opera
			// - Safari (only Mac)
			// - PhantomJS
			// - IE (only Windows)
			browsers: ['PhantomJS'],
			// browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

			// If browser does not capture in given timeout [ms], kill it
			captureTimeout: 5000,

			// Continuous Integration mode
			// if true, it capture browsers, run tests and exit
			singleRun: false

//        junitReporter: {
//            // will be resolved to basePath (in the same way as files/exclude patterns)
//            outputFile: 'test-results.xml'
//        },


		}
	)
	;
}
;
