'use strict';

angular.module('zagalesDiyApp', ['ngRoute','ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $document) {
    $rootScope.$on('$viewContentLoaded', function () {
        $document.foundation();
      });
  });
