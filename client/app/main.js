'use strict';

require.config({
    baseUrl: 'client/bower_components',
	paths: {
		angular: 'angular/angular',
        jquery: 'jquery/dist/jquery.min',
        kendo: '../vendor/kendo.web.min'
	},
	shim: {
        'kendo': ['jquery'],
		angular: {
			exports: 'angular'
		},
	},
	deps: ['app']
});