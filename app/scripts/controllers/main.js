'use strict';

angular.module('cjsrAngularScheduleApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('data/colors.json').success(function(data) {
    	$scope.colours = data;
    });

    $http.get('data/days.json').success(function(data) {
    	$scope.days = data;
    });

    $http.get('data/shows.json').success(function(data) {
    	$scope.shows = data;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
