'use strict';

var cjsrControllers = angular.module('cjsrControllers', []);
  
cjsrControllers.controller('MainCtrl', ['$scope', '$http', 
  function($scope, $http) {
    $http.get('data/colors.json').success(function(data) {
    	$scope.colours = data;
    });

    $http.get('data/days.json').success(function(data) {
    	$scope.days = data;
    });

    $http.get('data/shows.json').success(function(data) {
    	$scope.shows = data;
    });

    console.log('test');
}]);
