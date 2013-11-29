'use strict';

angular.module('zagalesDiyApp')
    .controller('MainCtrl', function ($scope) {
        $scope.challenges = [];
        $scope.isLoaded = false;

        $scope.loadData = function () {

            $scope.challenges = [
                { title: 'one', image: 'http://ima.gs/ddd/999/999/300x200.png' },
                { title: 'two', image: 'http://ima.gs/ddd/999/999/300x200.png'},
                { title: 'three', image: 'http://ima.gs/ddd/999/999/300x200.png'},
                { title: 'four', image: 'http://ima.gs/ddd/999/999/300x200.png'},
                { title: 'five', image: 'http://ima.gs/ddd/999/999/300x200.png' },
                { title: 'six', image: 'http://ima.gs/ddd/999/999/300x200.png'},
                { title: 'seven', image: 'http://ima.gs/ddd/999/999/300x200.png'},
                { title: 'eight', image: 'http://ima.gs/ddd/999/999/300x200.png'},
                { title: 'nine', image: 'http://ima.gs/ddd/999/999/300x200.png'}
            ];

            $scope.isLoaded = true;
        };

    });
