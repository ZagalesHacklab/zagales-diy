'use strict';

angular.module('zagalesDiyApp')
	.directive('zgChallengeMini', function () {
		return {
			scope: {
				challenge: '=ngModel'
			},
			templateUrl: 'views/partials/challenge_mini.html',
			restrict: 'E',
			replace: true
		};
	});
