'use strict';

angular.module('zgFakeBackend', ['ngMockE2E', 'ngResource'])
	.run(function (FakeBackend) {
		FakeBackend.init();
	});
