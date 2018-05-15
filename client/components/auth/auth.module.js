'use strict';

angular.module('appCalendarSms2App.auth', [
  'appCalendarSms2App.constants',
  'appCalendarSms2App.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
