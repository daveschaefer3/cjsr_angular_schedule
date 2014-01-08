'use strict';

var cjsrControllers = angular.module('cjsrControllers', []);

cjsrControllers.controller('DayCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('data/days.json').success(function(data) {
            $scope.days = data;
        });

        console.log('DayCtrl');
    }]);

cjsrControllers.controller('ShowCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('data/shows.json').success(function(data) {
            $scope.shows = data;
        });


        console.log('ShowCtrl');
    }]);

cjsrControllers.controller('ColorCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('data/colors.json').success(function(data) {
            $scope.colours = data;
    });

    console.log('ColorCtrl');
}]);

cjsrControllers.controller('MainCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/days.json').success(function(data) {
        $scope.days = data;
    });

    $http.get('data/shows.json').success(function(data) {
        $scope.shows = data;
    });

    $http.get('data/colors.json').success(function(data) {
        $scope.colours = data;
    });
    console.log('MainCtrl');
}]);