'use strict';

angular.module('zagalesDiyApp')
	.controller('ChallengeCtrl', function ($scope, $routeParams) {
		$scope.challenge = {
			'title': 'This is a challenge',
			'id': $routeParams.challengeId
		};
	});
