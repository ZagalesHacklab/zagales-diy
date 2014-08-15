'use strict';

angular.module('zagalesDiyApp')
  .controller('NewChallengeCtrl', function ($scope) {
    $scope.challenge = {
      title: null,
      description: null,
      tags: null,
      rating: null,
      images: []
    };

    $scope.saveChallenge = function() {
      // TODO
      console.log('saving...');
      console.log($scope.challenge);
    };

  });
