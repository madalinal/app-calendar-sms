'use strict';

angular.module('appCalendarSms2App', [
  'appCalendarSms2App.auth',
  'appCalendarSms2App.admin',
  'appCalendarSms2App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
