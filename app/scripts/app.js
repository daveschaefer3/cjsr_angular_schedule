'use strict';

/* App Module */
var cjsrScheduleApp = angular.module('cjsrScheduleApp', [
  'ngRoute',
  'cjsrControllers'
]);
  
cjsrScheduleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/show.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
