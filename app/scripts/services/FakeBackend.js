'use strict';

(function (ng) {
  var FakeBackend = function FakeBackend($httpBackend, $resource) {
    return {
      init: function () {
        if (!$httpBackend) {
          throw new Error('No $httpBackend defined');
        }

        if (!$resource) {
          throw new Error('No $resource defined');
        }

        console.warn('WARNING: USING FAKE BACKEND');

        function mockServiceQuery(realUrl, mockUrl) {
          //
          //
          // TODO: unit tests
          //
          // This works with ngMockE2E.$httpBackend
          // but it fails with ngMock.$httpBackend
          //
          //
          var response = $resource(mockUrl).query();
          //

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
        passThrought(/.*\/test\/.*/);

        // Add mock redirections here

        mockServiceQuery('api/challenges', '../test/mocks/challenges.json');
      }
    };
  };

  ng.module('zagalesDiyApp').provider('FakeBackend', function () {
    this.$get = function ($httpBackend, $resource) {
      return new FakeBackend($httpBackend, $resource);
    };
  });

})(angular);
