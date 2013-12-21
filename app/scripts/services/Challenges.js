'use strict';

angular.module('zagalesDiyApp')
  .factory('Challenges', function ($resource) {

    return $resource('../api/challenges');
  });
