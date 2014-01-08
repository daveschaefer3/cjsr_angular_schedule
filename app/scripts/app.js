'use strict';

/* App Module */
var cjsrScheduleApp = angular.module('cjsrScheduleApp', [
  'ngRoute',
  'cjsrControllers',
  'cjsrFilters'
]);
  
cjsrScheduleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/show.html',
        controller: 'MainCtrl'
      }).
      when('/shows', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      }).
      when('/days', {
        templateUrl: 'views/day.html',
        controller: 'DayCtrl'
      }).
      when('/day/:dayId', {
        templateUrl: 'views/day.html',
        controller: 'DayCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
