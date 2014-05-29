'use strict';

angular.module('zagalesDiyApp', ['ngRoute', 'ngAnimate', 'ngResource', 'textAngular'])
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(false);

            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/Challenge/:challengeId', {
                        templateUrl: 'views/challenge.html',
                        controller: 'ChallengeCtrl'
                    })
                    .when('/NewChallenge', {
                        templateUrl: 'views/challenge_form.html',
                        controller: 'NewChallengeCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        })
        .run(function($rootScope, $document) {
            $rootScope.$on('$viewContentLoaded', function() {
                $document.foundation();
            });
        })
        .constant('config', {
            // CHALLENGES_URL: 'mocks/challenges.json'
            CHALLENGES_URL: 'http://localhost:9393/api/challenges' // real api url
        });
