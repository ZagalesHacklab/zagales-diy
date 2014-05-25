'use strict';

angular.module('zagalesDiyApp')
  .controller('AddSolutionCtrl', function ($scope) {
    $scope.challenge = {
      title: null,
      description: null,
      tags: null,
      rating: null,
      images: []
    };

    $scope.saveSolution = function() {
      // TODO
      console.log('saving...');
      console.log($scope.challenge);
    };

  });
