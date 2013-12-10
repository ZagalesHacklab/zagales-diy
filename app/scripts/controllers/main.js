'use strict';

angular.module('zagalesDiyApp')
  .controller('MainCtrl', function ($scope, Challenges) {
    $scope.challenges = [];
    $scope.isLoaded = false;

    $scope.loadData = function () {
      $scope.isLoaded = false;
      Challenges.query(function (response) {
        $scope.challenges = response;
        $scope.isLoaded = true;
      });
    };

    $scope.loadData();
  });
