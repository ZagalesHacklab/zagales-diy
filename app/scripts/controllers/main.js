'use strict';

angular.module('zagalesDiyApp')
	.controller('MainCtrl', function ($scope, ChallengesService) {
		$scope.challenges = [];
		$scope.isLoaded = false;

		$scope.loadData = function () {
			$scope.isLoaded = false;
			ChallengesService.fetchRecent().then(function (data) {
				console.log(data.response);
				$scope.challenges = data.response;
				$scope.isLoaded = true;
			});
		};

		$scope.loadData();

	});
