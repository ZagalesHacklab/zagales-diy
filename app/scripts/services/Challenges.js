'use strict';

angular.module('zagalesDiyApp')
  .factory('Challenges', function ($resource, config) {

    return $resource(config.CHALLENGES_URL);
  });
