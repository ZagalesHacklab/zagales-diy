'use strict';

<<<<<<< HEAD
(function (ng) {
	var FakeBackend = function FakeBackend($httpBackend, $resource) {
		return {
			init: function () {
				if(!$httpBackend) {
					throw new Error('No $httpBackend defined');
				}

				if(!$resource) {
					throw new Error('No $resource defined');
				}

				console.warn('WARNING: USING FAKE BACKEND');

				function mockResponse(realUrl, mockUrl) {
					var response = $resource(mockUrl).get();

					$httpBackend.whenGET(realUrl).respond(response);
				}

				function passThrought(realUrl) {
					var response = $httpBackend.whenGET(realUrl);

					// Only ngMockE2E $httpBackend implementation has passThrough
					if (response && angular.isFunction(response.passThrough)) {
						response.passThrough(realUrl);
					}
				}

				passThrought(/.*.(html|png|jpg|gif)/);
				passThrought(/test\/.*/);

				mockResponse('../api/challenges/recent', '../test/mocks/recent_challenges.json');

				return $httpBackend;
			}
		};
	};

	ng.module('zagalesDiyApp').provider('FakeBackend', function () {
		this.$get = function ($httpBackend, $resource) {
			return new FakeBackend($httpBackend, $resource);
		};
	});

})(angular);
=======
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
>>>>>>> b1e181c... zagales-diy-1 fakeBackend module approach (tests fail)
