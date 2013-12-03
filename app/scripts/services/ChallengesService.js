'use strict';

angular.module('zagalesDiyApp')
	.factory('ChallengesService', function ($http, $q) {

		$http.defaults.cache = false;
		var currentQuery = null;

		function fetchRecent() {
			if (currentQuery) {
				currentQuery.resolve();
			}

			currentQuery = $q.defer();

			return $http({
				url: '../api/challenges/recent',
				method: 'GET',
				headers: {
					'Accept': 'application/json'
				},
				timeout: currentQuery.promise
			}).then(function (response) {
					currentQuery = null;
					return response.data;
				});
		}


		return {
			fetchRecent: fetchRecent
		};
	});
