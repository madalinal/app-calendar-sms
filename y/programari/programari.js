'use strict';

angular.module('appCalendarSms2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('y', {
        templateUrl: '../y/programari/programari.html',
        controller: 'ProgramariCtrl'
      });
  });
