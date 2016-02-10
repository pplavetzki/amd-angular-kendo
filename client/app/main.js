'use strict';

require.config({
    baseUrl: 'client/bower_components',
	paths: {
		angular: 'angular/angular',
        jquery: 'jquery/dist/jquery.min',
        kendo: '../vendor/kendo.web.min'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	},
	deps: ['app']
});