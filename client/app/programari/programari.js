'use strict';

angular.module('appCalendarSms2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/programari', {
        templateUrl: 'app/programari/programari.html',
        controller: 'ProgramariCtrl'
      });
  });
