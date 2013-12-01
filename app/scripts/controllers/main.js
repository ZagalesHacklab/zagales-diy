'use strict';

angular.module('zagalesDiyApp')
	.controller('MainCtrl', function ($scope) {
		$scope.challenges = [];
		$scope.isLoaded = false;

		$scope.loadData = function () {

			$scope.challenges = [
				{ id: 1, title: 'one', image: 'http://ima.gs/ddd/999/999/300x200.png' },
				{ id: 2, title: 'two', image: 'http://ima.gs/ddd/999/999/300x200.png'},
				{ id: 3, title: 'three', image: 'http://ima.gs/ddd/999/999/300x200.png'},
				{ id: 4, title: 'four', image: 'http://ima.gs/ddd/999/999/300x200.png'},
				{ id: 5, title: 'five', image: 'http://ima.gs/ddd/999/999/300x200.png' },
				{ id: 6, title: 'six', image: 'http://ima.gs/ddd/999/999/300x200.png'},
				{ id: 7, title: 'seven', image: 'http://ima.gs/ddd/999/999/300x200.png'},
				{ id: 8, title: 'eight', image: 'http://ima.gs/ddd/999/999/300x200.png'},
				{ id: 9, title: 'nine', image: 'http://ima.gs/ddd/999/999/300x200.png'}
			];

			$scope.isLoaded = true;
		};

	});
