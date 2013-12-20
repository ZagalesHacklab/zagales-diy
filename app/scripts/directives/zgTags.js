'use strict';

angular.module('zagalesDiyApp')
  .directive('zgTags', function () {
    return {
        scope: {
            tags: '=',
            urlBase: '@'
        },
        templateUrl: 'views/partials/tags.html',
        restrict: 'E',
        replace: false,
        transclude: true
    };
  });
