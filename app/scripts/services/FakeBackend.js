'use strict';

angular.module('zagalesDiyApp')
	.factory('FakeBackend', function ($httpBackend, $resource) {

		function mockResponse(realUrl, mockUrl) {
			var response = $resource(mockUrl).get();

			$httpBackend.whenGET(realUrl).respond(response);
		}


		return {
			init: function () {

				console.warn('WARNING: USING FAKE BACKEND');

				$httpBackend.whenGET(/.*.(html|png|jpg|gif)/).passThrough();
				$httpBackend.whenGET(/test\/.*/).passThrough();

				mockResponse('../api/challenges/recent', '../test/mocks/recent_challenges.json');
			}

		};
	});
