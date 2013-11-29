'use strict';

angular.module('zagalesDiyApp')
    .directive('zgChallengeMini', function () {
        return {
            scope: {
                challenge: '=ngModel'
            },
            template: '<div><h3>{{challenge.title}}</h3><img ng-src="{{challenge.image}}"></div>',
            restrict: 'E',
            replace: true
        };
    });
