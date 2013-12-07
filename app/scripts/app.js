'use strict';

angular.module('zagalesDiyApp', ['ngRoute', 'ngAnimate', 'ngResource'])
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(false);

		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/Challenge/:challengeId', {
				templateUrl: 'views/challenge.html',
				controller: 'ChallengeCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.run(function ($rootScope, $document) {
		$rootScope.$on('$viewContentLoaded', function () {
			$document.foundation();
		});
	});
